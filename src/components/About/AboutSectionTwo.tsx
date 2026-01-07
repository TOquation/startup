"use client";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/* ------------------ EDITABLE CONTENT ------------------ */
const aboutTwoData = {
  sectionTitle: "What I Offer",
  sectionSubtitle: "Comprehensive solutions tailored to your needs",

  features: [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Quality-Driven Development",
      description:
        "I write clean, maintainable code with comprehensive testing to ensure your application runs smoothly and reliably in production.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Collaborative Approach",
      description:
        "You'll get dedicated support throughout the project lifecycle and beyond, with clear communication and timely updates at every stage.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Modern Tech Stack",
      description:
        "Leveraging cutting-edge technologies like Next.js, React, and TypeScript to build fast, scalable, and SEO-friendly applications.",
    },
  ],

  imageLight: "/images/about/about-image-2.svg",
  imageDark: "/images/about/about-image-2-dark.svg",
};

/* ------------------ MOTION VARIANTS ------------------ */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const featureVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/* ------------------ COMPONENTS ------------------ */
const FeatureItem = ({
  icon,
  title,
  description,
  reduceMotion,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  reduceMotion: boolean | null;
}) => (
  <motion.div
    variants={!reduceMotion ? featureVariants : undefined}
    className="mb-9 last:mb-1"
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
        {title}
      </h3>
    </div>
    <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const AboutSectionTwo = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-start">
          {/* Left Image */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto mb-12 aspect-square max-w-[500px] text-center lg:m-0"
            >
              {/* Animated SVG Illustration */}
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                {/* Background gradient circle */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="200"
                  className="fill-primary/5"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Central monitor/screen */}
                <motion.g
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <rect
                    x="150"
                    y="150"
                    width="200"
                    height="150"
                    rx="8"
                    className="stroke-primary/20 fill-gray-100 dark:fill-gray-800"
                    strokeWidth="2"
                  />
                  <rect
                    x="160"
                    y="160"
                    width="180"
                    height="120"
                    rx="4"
                    className="fill-primary/10"
                  />

                  {/* Code lines */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.rect
                      key={i}
                      x="170"
                      y={175 + i * 20}
                      width={100 - i * 10}
                      height="4"
                      rx="2"
                      className="fill-primary/60"
                      initial={{ width: 0 }}
                      whileInView={{ width: 100 - i * 10 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    />
                  ))}
                </motion.g>

                {/* Floating icons - Quality */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  animate={{ y: [-5, 5, -5] }}
                  style={{ originX: 0.5, originY: 0.5 }}
                >
                  <motion.circle
                    cx="100"
                    cy="200"
                    r="30"
                    className="fill-primary/10"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M 110 200 L 95 215 L 85 205"
                    className="stroke-primary"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.g>

                {/* Floating icons - Collaboration */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <motion.circle
                    cx="400"
                    cy="220"
                    r="30"
                    className="fill-primary/10"
                    animate={{ y: [5, -5, 5] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.g
                    animate={{ y: [5, -5, 5] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <circle
                      cx="390"
                      cy="215"
                      r="8"
                      className="stroke-primary"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="410"
                      cy="215"
                      r="8"
                      className="stroke-primary"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 385 230 Q 400 235 415 230"
                      className="stroke-primary"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </motion.g>
                </motion.g>

                {/* Floating icons - Modern Tech */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <motion.circle
                    cx="250"
                    cy="380"
                    r="30"
                    className="fill-primary/10"
                    animate={{ y: [-4, 4, -4] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.g
                    animate={{ y: [-4, 4, -4] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <rect
                      x="235"
                      y="370"
                      width="30"
                      height="20"
                      rx="2"
                      className="stroke-primary"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="240"
                      y1="375"
                      x2="260"
                      y2="375"
                      className="stroke-primary"
                      strokeWidth="2"
                    />
                    <line
                      x1="240"
                      y1="380"
                      x2="255"
                      y2="380"
                      className="stroke-primary"
                      strokeWidth="2"
                    />
                  </motion.g>
                </motion.g>

                {/* Connection lines between elements */}
                <motion.g
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                >
                  <path
                    d="M 130 200 Q 140 175 150 175"
                    className="stroke-primary"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                  />
                  <path
                    d="M 350 175 Q 380 190 370 220"
                    className="stroke-primary"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                  />
                  <path
                    d="M 250 300 Q 250 340 250 350"
                    className="stroke-primary"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                  />
                </motion.g>
              </svg>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              variants={!reduceMotion ? titleVariants : undefined}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-9"
            >
              <h2 className="mb-4 text-3xl leading-tight font-bold text-black sm:text-4xl md:text-[45px] dark:text-white">
                {aboutTwoData.sectionTitle}
              </h2>
              <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed md:text-lg">
                {aboutTwoData.sectionSubtitle}
              </p>
            </motion.div>

            <motion.div
              variants={!reduceMotion ? containerVariants : undefined}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-[570px]"
            >
              {aboutTwoData.features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
