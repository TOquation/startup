"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ------------------ PROJECT DATA ------------------ */
// Edit this array to add/modify your projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    image: "/images/projects/project-1.jpg", // Add your image path
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
    image: "/images/projects/project-2.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    id: 3,
    title: "Learning Management System",
    description:
      "Educational platform featuring course creation, video streaming, quizzes, and student progress tracking.",
    image: "/images/projects/project-3.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
  },
  {
    id: 4,
    title: "AI Content Generator",
    description:
      "AI-powered tool for generating marketing copy, blog posts, and social media content using GPT-4.",
    image: "/images/projects/project-4.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
    technologies: ["React", "OpenAI API", "Python", "FastAPI"],
  },
  {
    id: 5,
    title: "Portfolio CMS",
    description:
      "Headless CMS for managing portfolio content with drag-and-drop builder and custom themes.",
    image: "/images/projects/project-5.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
    technologies: ["Next.js", "Sanity", "GraphQL", "AWS"],
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Mobile-first fitness app with workout logging, nutrition tracking, and progress visualization.",
    image: "/images/projects/project-6.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
    technologies: ["React Native", "Express", "Chart.js", "Redis"],
  },
];

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/* ------------------ SINGLE PROJECT CARD ------------------ */
const ProjectCard = ({ project }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={!reduceMotion ? itemVariants : undefined}
      className="group dark:bg-dark relative overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Links overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-colors"
            aria-label="View live project"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:bg-dark text-dark flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            aria-label="View GitHub repository"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-dark mb-3 text-xl font-bold dark:text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-dark/70 mb-4 line-clamp-3 text-base dark:text-white/70">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Accent bar */}
      <div className="from-primary via-primary to-primary/50 absolute top-0 left-0 h-1 w-full bg-gradient-to-r" />
    </motion.div>
  );
};

/* ------------------ MAIN PROJECTS SECTION ------------------ */
const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white py-16 md:py-20 lg:py-28"
    >
      {/* Decorative gradient backgrounds */}
      <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full opacity-50 blur-3xl" />
      <div className="bg-primary/5 pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full opacity-50 blur-3xl" />

      <div className="relative z-10 container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-5xl dark:text-white">
            Featured Projects
          </h2>
          <p className="text-dark/70 text-base sm:text-lg dark:text-white/70">
            A showcase of my recent work and side projects. Each project
            represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={!reduceMotion ? containerVariants : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
