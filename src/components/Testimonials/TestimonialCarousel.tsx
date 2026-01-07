"use client";
import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "@/components/Testimonials/testimonialData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const dotVariants: Variants = {
  active: {
    scale: 1.2,
    backgroundColor: "#4A6CF7",
  },
  inactive: {
    scale: 1,
    backgroundColor: "#D1D5DB",
  },
};

const TestimonialCarousel = () => {
  const reduceMotion = useReducedMotion();
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  // items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalPages = Math.ceil(testimonialData.length / itemsPerView);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevPage]) => {
        const nextPage = prevPage + newDirection;
        if (nextPage < 0) return [totalPages - 1, newDirection];
        if (nextPage >= totalPages) return [0, newDirection];
        return [nextPage, newDirection];
      });
    },
    [totalPages],
  );

  // Auto-play functionality
  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused, paginate, reduceMotion]);

  const currentTestimonials = testimonialData.slice(
    page * itemsPerView,
    (page + 1) * itemsPerView,
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={!reduceMotion ? carouselVariants : undefined}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentTestimonials.map((testimonial) => (
              <SingleTestimonial
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Left Navigation Button - Overlay with Blur */}
        <motion.button
          onClick={() => paginate(-1)}
          whileHover={!reduceMotion ? { scale: 1.05 } : undefined}
          whileTap={!reduceMotion ? { scale: 0.95 } : undefined}
          className="text-primary absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-md transition-all hover:bg-white/90 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800/90"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>

        {/* Right Navigation Button - Overlay with Blur */}
        <motion.button
          onClick={() => paginate(1)}
          whileHover={!reduceMotion ? { scale: 1.05 } : undefined}
          whileTap={!reduceMotion ? { scale: 0.95 } : undefined}
          className="text-primary absolute top-1/2 right-0 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-md transition-all hover:bg-white/90 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800/90"
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Pagination Dots - Smaller size */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setPage([index, index > page ? 1 : -1])}
            variants={!reduceMotion ? dotVariants : undefined}
            animate={page === index ? "active" : "inactive"}
            transition={{ duration: 0.3 }}
            className="h-1.5 w-1.5 rounded-full"
            aria-label={`Go to slide ${index + 1}`}
            style={{
              backgroundColor: page === index ? "#4A6CF7" : "#D1D5DB",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
