"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Loader from "../Loader";
import Projects from "../Projects";
import Header from "@/components/Header"; // Import Header

export default function HomePageClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader Overlay with Glassmorphism */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-999999 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />

            {/* Decorative gradient orbs */}
            <div className="bg-primary/20 absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
            <div className="bg-primary/10 absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl delay-1000" />

            {/* Loader Content */}
            <div className="relative z-10">
              <Loader />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header - Only show when not loading */}
      {!loading && <Header />}

      {/* Main Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollUp />
          <Hero />
          <Features />
          {/* <Video /> */}
          {/* <Brands /> */}
          <AboutSectionOne />
          <AboutSectionTwo />
          {/* <Projects /> */}
          <Testimonials />
          {/* <Pricing /> */}
          {/* <Blog /> */}
          <Contact />
        </motion.div>
      )}
    </>
  );
}
