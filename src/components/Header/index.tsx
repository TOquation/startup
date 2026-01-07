"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const drawerVariants: Variants = {
  hidden: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const menuItemVariants: Variants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Header = () => {
  const reduceMotion = useReducedMotion();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    // Find the scrollable container
    const scrollContainer = document.querySelector(".overflow-y-auto");

    const handleStickyNavbar = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollTop >= 80) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

    // Check on mount
    handleStickyNavbar();

    // Add scroll listener to the container
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleStickyNavbar);

      return () => {
        scrollContainer.removeEventListener("scroll", handleStickyNavbar);
      };
    }
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navbarOpen]);

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header fixed top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky bg-white/80 backdrop-blur-sm transition"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-28 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full py-5 lg:py-2`}
              >
                <h3 className="hidden animate-pulse text-xl font-bold dark:block dark:text-white">
                  TOCHI.
                </h3>
                <h3 className="animate-pulse text-xl font-bold text-black dark:hidden">
                  TOCHI.
                </h3>
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-center">
              {/* Desktop Navigation */}
              <nav className="hidden lg:block">
                <ul className="flex space-x-16">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path && (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            usePathName === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="">
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute top-1/2 right-0 block translate-y-[-50%] rotate-y-180 cursor-pointer rounded-lg px-3 py-1.5 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-1.75 rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-4 bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-2 bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "-top-2 w-6 -rotate-45" : " "
                  }`}
                />
              </button>

              <div className="absolute top-1/2 right-14 block translate-y-[-50%] lg:static lg:translate-y-0">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence mode="wait">
        {navbarOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              variants={!reduceMotion ? overlayVariants : undefined}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={navbarToggleHandler}
            />

            {/* Drawer */}
            <motion.div
              variants={!reduceMotion ? drawerVariants : undefined}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="dark:bg-dark fixed top-0 right-0 z-[9999] h-full w-full overflow-y-auto bg-white shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}
              <div className="border-body-color/10 dark:border-body-color/20 flex items-center justify-between border-b px-6 py-6">
                <h3 className="animate-pulse text-xl font-bold text-black dark:text-white">
                  TOCHI.
                </h3>
                <button
                  onClick={navbarToggleHandler}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-dark dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="px-6 py-8">
                <ul className="space-y-2">
                  {menuData.map((menuItem, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={!reduceMotion ? menuItemVariants : undefined}
                      className="relative"
                    >
                      {menuItem.path && (
                        <Link
                          href={menuItem.path}
                          onClick={navbarToggleHandler}
                          className="group relative block px-5 py-3"
                        >
                          {/* Vertical accent bar with pulse for active */}
                          <motion.span
                            className={`from-primary via-primary to-primary/50 absolute top-1/2 left-0 w-1 -translate-y-1/2 rounded-full bg-linear-to-b ${
                              usePathName === menuItem.path
                                ? "animate-pulse"
                                : ""
                            }`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: usePathName === menuItem.path ? "70%" : 0,
                              opacity: usePathName === menuItem.path ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                          />

                          {/* Text */}
                          <span
                            className={`block text-lg font-medium transition-colors duration-300 ${
                              usePathName === menuItem.path
                                ? "text-primary font-semibold"
                                : "text-dark/70 group-hover:text-dark dark:text-white/70 dark:group-hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </span>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Drawer Footer with Theme Toggle */}
              <motion.div
                variants={!reduceMotion ? menuItemVariants : undefined}
                custom={menuData.length}
                className="border-body-color/10 dark:border-body-color/20 dark:bg-dark/50 absolute right-0 bottom-0 left-0 border-t bg-white/50 px-6 py-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-dark/70 text-sm font-medium dark:text-white/70">
                    Theme
                  </span>
                  <ThemeToggler />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
