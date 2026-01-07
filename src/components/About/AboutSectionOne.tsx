"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { IconClouds } from "./icon-cloud";

/* ------------------ EDITABLE CONTENT ------------------ */
const aboutData = {
  title: "Hi, I'm Tochi - FrontEnd Engineer / Developer & Problem Solver",
  paragraph:
    "I'm a passionate developer who transforms ideas into elegant, scalable digital solutions. With a focus on modern web technologies and user-centric design, I help businesses and startups bring their visions to life through clean code and thoughtful architecture.",

  highlights: [
    "3+ Years Experience",
    "7+ Projects Delivered",
    "Front End Enginneer",
    "Clean Code Advocate",
    "Fast Turnaround",
    "Client-Focused",
  ],

  imageLight: "/images/about/about-image.svg",
  imageDark: "/images/about/about-image-dark.svg",
};

/* ------------------ MOTION VARIANTS ------------------ */
const itemVariants: Variants = {
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/* ------------------ COMPONENTS ------------------ */
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const SectionTitle = ({
  title,
  paragraph,
  mb = "44px",
}: {
  title: string;
  paragraph: string;
  mb?: string;
}) => {
  return (
    <div className="w-full" style={{ marginBottom: mb }}>
      <h2 className="mb-4 text-3xl leading-tight font-bold text-black sm:text-4xl md:text-[45px] dark:text-white">
        {title}
      </h2>
      <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

// Move List component outside to ensure proper rendering
const HighlightItem = ({
  text,
  reduceMotion,
}: {
  text: string;
  reduceMotion: boolean | null;
}) => (
  <motion.p
    variants={!reduceMotion ? itemVariants : undefined}
    className="text-body-color dark:text-body-color-dark mb-5 flex items-center text-lg font-medium"
  >
    <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
      {checkIcon}
    </span>
    {text}
  </motion.p>
);

const AboutSectionOne = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  title={aboutData.title}
                  paragraph={aboutData.paragraph}
                />
              </motion.div>

              <motion.div
                variants={!reduceMotion ? containerVariants : undefined}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-12 max-w-[570px] lg:mb-0"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {aboutData.highlights
                      .slice(0, 3)
                      .map((highlight, index) => (
                        <HighlightItem
                          key={index}
                          text={highlight}
                          reduceMotion={reduceMotion}
                        />
                      ))}
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {aboutData.highlights
                      .slice(3, 6)
                      .map((highlight, index) => (
                        <HighlightItem
                          key={index + 3}
                          text={highlight}
                          reduceMotion={reduceMotion}
                        />
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
              >
                <IconClouds />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
