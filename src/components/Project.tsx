"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  X,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectItem {
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  overview: string;
  keyFeatures: string[];
  challenges: string[];
}

const projects: ProjectItem[] = [
  {
    title: "FresherAI",
    category: "Multi-Agent AI Interview Platform",
    image: "/fresher.png",
    description:
      "A microservices-based multi-agent AI platform for job seekers, with mock interviews, resume analysis (ATS score and skill gaps), feedback scoring and a personalized learning roadmap. Includes a coin-based billing system, where each agent consumes coins, and Redis caching for faster responses.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "LangChain",
      "LangGraph",
      "Docker",
      "Firebase Auth",
      "Razorpay",
    ],
    github: "https://github.com/avinash07582/FresherAI",
    live: "https://d1124wqwtq74e6.cloudfront.net",
    overview:
      "Built a microservices-based AI platform using LangGraph and LangChain, featuring autonomous AI agents for mock interviews, feedback scoring, resume analysis (ATS score, strengths, and weaknesses), and personalized learning roadmaps with curated videos, articles, estimated time, and difficulty levels.",
    keyFeatures: [
      "Autonomous Multi-Agent Interviews: Specialized AI agents conducting realistic technical and behavioral interviews with real-time feedback.",
      "Resume & ATS Gap Analysis: Automated parsing calculating ATS match score, pinpointing missing keywords and highlighting strengths.",
      "Personalized Learning Roadmaps: Dynamic career roadmap generation tailored to individual interview gaps with curated learning media.",
      "Coin-Based Billing System: Usage-based agent economy where each AI interaction consumes coins, recharge enabled via Razorpay test mode.",
      "Scalable Infrastructure: Secured with Firebase authentication, low-latency Redis caching layer, and containerized microservices via Docker.",
    ],
    challenges: [
      "Orchestrating stateful, multi-turn AI agent workflows and branching decision trees using LangGraph without degrading user response time.",
      "Managing transactional coin balances during concurrent AI streaming calls, solved by implementing Redis atomic caching.",
      "Isolating service dependencies across diverse agents, solved by containerizing all microservices with Docker for consistent production deployment.",
    ],
  },
  {
    title: "LMS System",
    category: "Full Stack LMS",
    image: "/lms.png",
    description:
      "A MERN-based Learning Management System with JWT authentication, RBAC, course management, student enrollment, and progress tracking.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/avinash07582/LMS-Platform",
    live: "https://lms-platform-apii.onrender.com/",
    overview:
      "A full-stack MERN learning management platform engineered with robust role-based access control (RBAC), end-to-end course authoring, student enrollment pipelines, and real-time curriculum progress tracking.",
    keyFeatures: [
      "Role-Based Access Control (RBAC): Distinct permission tiers for Admins, Instructors, and Students to safeguard administrative operations.",
      "Course & Lecture Lifecycle Management: Comprehensive interface for creating modules, publishing multimedia lessons, and structuring syllabi.",
      "Student Enrollment & Progression: Seamless enrollment workflows with persistent student completion status and module progression.",
      "Secure Token Authentication: Token-based authentication using JSON Web Tokens (JWT) with HTTP-only cookies and bcrypt password hashing.",
      "Responsive Glassmorphic UI: Modern, accessible interface styled with Tailwind CSS, optimized across mobile, tablet, and desktop viewports.",
    ],
    challenges: [
      "Enforcing strict authorization boundaries across nested routes so students cannot access instructor authoring tools or bypass enrollment requirements.",
      "Structuring Mongoose schemas to efficiently track granular student lecture completion without excessive database round-trips.",
    ],
  },
  {
    title: "Quizify",
    category: "AI Learning Platform",
    image: "/quiz.png",
    description:
      "An interactive quiz platform that generates quizzes from PDF documents and provides real-time multiplayer leaderboard functionality.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Google OAuth 2.0",
      "Socket.IO",
      "PDFParse",
      "JWT",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/avinash07582/Quiz-App",
    live: "https://quiz-app-frontend-olsd.onrender.com",
    overview:
      "An AI-powered quiz platform integrating Google Gemini AI to auto-generate configurable quizzes from uploaded PDF documents, featuring real-time multiplayer competitions, live leaderboards, and instant automated grading.",
    keyFeatures: [
      "AI PDF Quiz Generation: Automatically extracts text from uploaded PDFs and generates customized quizzes with difficulty control and automated grading.",
      "Real-Time Multiplayer: Live synchronized quiz sessions and multiplayer competitive leaderboards powered by Socket.IO.",
      "OAuth & JWT Security: Dual authentication support combining Google OAuth 2.0 for single-click sign-in and custom JWT-based authentication.",
      "Shareable Quiz Links: Unique URLs allowing creators to share quizzes publicly with detailed AI-generated answer explanations.",
      "Performance Analytics: Instant score calculation, adaptive retake opportunities, and question-by-question performance breakdowns.",
    ],
    challenges: [
      "Handling varying PDF document layouts and formatting cleanly via PDFParse, chunking large texts within LLM context constraints.",
      "Synchronizing timer state and live scores across multiple concurrent participants in real-time using Socket.IO room events.",
    ],
  },
  {
    title: "Job Portal",
    category: "Recruitment Platform",
    image: "/job.png",
    description:
      "A job recruitment platform where users can explore jobs, manage applications and interact with a complete backend API.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/avinash07582/Job-Portal",
    live: "https://job-portal-5-frontend-bfqc.onrender.com",
    overview:
      "A comprehensive recruitment platform featuring dedicated workflows for Admins, Recruiters, and Applicants, enabling company registration, multi-criteria job postings, resume submissions, and real-time application status tracking.",
    keyFeatures: [
      "Dual-Sided Workflow: Tailored dashboards for employers to manage listings and applicants to manage their job search.",
      "Multi-Criteria Search & Filter: Advanced filtering engine allowing candidates to filter by category, location, salary tier, and experience.",
      "Role-Based Security: JWT-backed role verification ensuring recruiter actions remain isolated from applicant accounts.",
      "Application Lifecycle Tracking: Real-time status indicators (Applied, Reviewed, Shortlisted, Rejected) visible to candidates.",
      "Global State Management: Centralized client-side state powered by Redux for swift filtering and instant UI updates.",
    ],
    challenges: [
      "Designing complex MongoDB relational queries and indices connecting Users, Companies, Jobs, and Application histories with high query performance.",
      "Synchronizing complex application filters and pagination state without triggering redundant API calls using Redux.",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        px-4
        py-20
        text-slate-900
        dark:text-white
        sm:px-6
        sm:py-24
        md:px-10
        lg:px-16
        lg:py-28
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main purple glow */}
        <div
          className="
            absolute
            left-1/2
            top-20
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.06]
            blur-[100px]
            dark:bg-purple-600/10
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[130px]
            lg:h-[500px]
            lg:w-[500px]
            lg:blur-[160px]
          "
        />

        {/* Side glow */}
        <div
          className="
            absolute
            right-[-15%]
            top-[45%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[100px]
            dark:bg-cyan-500/5
            sm:h-[350px]
            sm:w-[350px]
            sm:blur-[130px]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-10%]
            left-[10%]
            h-[250px]
            w-[400px]
            rounded-full
            bg-purple-600/[0.06]
            blur-[100px]
            dark:bg-purple-600/10
            sm:h-[300px]
            sm:w-[500px]
            sm:blur-[140px]
          "
        />
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}
      <div className="relative mx-auto max-w-7xl">
        {/* ================= SECTION HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <p
            className="
              mb-3
              font-mono
              text-[10px]
              tracking-[0.25em]
              text-purple-600
              dark:text-purple-400
              sm:mb-4
              sm:text-xs
              md:text-sm
              md:tracking-[0.3em]
            "
          >
            03 / PROJECTS
          </p>

          <h2
            className="
              text-[clamp(2.25rem,7vw,3.75rem)]
              font-bold
              leading-tight
              tracking-tight
              md:text-6xl
            "
          >
            What I&apos;ve{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-600
                to-pink-500
                bg-clip-text
                text-transparent
                dark:from-purple-400
                dark:to-pink-500
              "
            >
              built.
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-slate-600
              dark:text-gray-400
              sm:mt-5
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            A collection of projects where I turned ideas into
            functional, scalable, and engaging web experiences. Click on any project to explore its case study.
          </p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-slate-200/80
                bg-white/70
                p-3
                shadow-md
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-purple-400/50
                hover:shadow-[0_10px_35px_rgba(139,92,246,0.15)]
                dark:border-white/10
                dark:bg-white/[0.025]
                dark:hover:border-purple-500/40
                dark:hover:bg-white/[0.04]
                dark:hover:shadow-[0_10px_40px_rgba(139,92,246,0.2)]
                sm:rounded-3xl
                sm:p-4
              "
            >
              <div>
                {/* Project Image Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="
                    relative
                    aspect-video
                    w-full
                    cursor-pointer
                    overflow-hidden
                    rounded-xl
                    bg-slate-100
                    dark:bg-slate-900/60
                    sm:rounded-2xl
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950/80
                      via-slate-950/20
                      to-transparent
                      opacity-60
                      transition-opacity
                      duration-300
                      group-hover:opacity-40
                    "
                  />

                  {/* Project Number */}
                  <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur-md sm:right-4 sm:top-4 sm:px-3 sm:text-xs">
                    0{index + 1}
                  </div>

                  {/* Hover Case Study Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/50 bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md shadow-lg">
                      <BookOpen className="h-3.5 w-3.5 text-purple-400" />
                      View Case Study
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2.5 pb-2 pt-4 sm:px-3 sm:pb-3 sm:pt-5">
                  {/* Category */}
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-purple-600 dark:text-purple-400 sm:text-xs">
                    {project.category}
                  </p>

                  {/* Title */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="mt-1.5 flex cursor-pointer items-center justify-between gap-3"
                  >
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-300 sm:text-2xl">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-500 sm:h-5 sm:w-5"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-gray-400 sm:text-sm sm:leading-6">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-slate-200
                          bg-slate-100/80
                          px-2.5
                          py-1
                          font-mono
                          text-[10px]
                          text-slate-700
                          transition-colors
                          duration-200
                          hover:border-purple-400/40
                          hover:text-purple-700
                          dark:border-white/10
                          dark:bg-white/[0.04]
                          dark:text-gray-300
                          dark:hover:border-purple-400/30
                          dark:hover:text-white
                          sm:text-[11px]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 px-2.5 pb-2 sm:px-3 sm:pb-2">
                {/* View Case Study Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="
                    flex
                    min-h-10
                    flex-1
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    border
                    border-purple-500/30
                    bg-purple-500/10
                    px-3.5
                    py-2
                    text-xs
                    font-semibold
                    text-purple-700
                    transition-all
                    duration-300
                    hover:border-purple-400/60
                    hover:bg-purple-500/20
                    dark:text-purple-300
                    sm:text-sm
                  "
                >
                  <BookOpen size={14} className="text-purple-500 dark:text-purple-400" />
                  <span>Case Study</span>
                </button>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    min-h-10
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    border
                    border-slate-200
                    bg-white/80
                    px-3.5
                    py-2
                    text-xs
                    font-medium
                    text-slate-700
                    transition-all
                    duration-300
                    hover:border-purple-400/40
                    hover:bg-purple-500/10
                    hover:text-purple-700
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-white
                    dark:hover:text-white
                    sm:text-sm
                  "
                  title="View Source Code"
                >
                  <FaGithub size={14} />
                  <span>Code</span>
                </a>

                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    min-h-10
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    to-indigo-600
                    px-3.5
                    py-2
                    text-xs
                    font-semibold
                    text-white
                    shadow-[0_0_20px_rgba(124,58,237,0.3)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]
                    sm:text-sm
                  "
                  title="Open Live Application"
                >
                  <ExternalLink size={14} />
                  <span>Live</span>
                </a>
              </div>

              {/* Bottom Card Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  left-1/2
                  h-40
                  w-64
                  -translate-x-1/2
                  rounded-full
                  bg-purple-600/10
                  blur-[80px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  dark:bg-purple-600/20
                "
              />
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM TEXT ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center sm:mt-12 md:mt-16"
        >
          <p className="font-mono text-[10px] text-slate-500 dark:text-gray-600 sm:text-xs md:text-sm">
            More projects coming soon...
          </p>
        </motion.div>
      </div>

      {/* ================================================= */}
      {/* CASE STUDY MODAL */}
      {/* ================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                relative
                flex
                max-h-[92vh]
                w-full
                max-w-3xl
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-slate-200/80
                bg-white
                shadow-2xl
                dark:border-white/15
                dark:bg-[#07041a]
                dark:shadow-[0_0_60px_rgba(139,92,246,0.18)]
                sm:rounded-3xl
              "
            >
              {/* Modal Top Accent Glow */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400" />

              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-4 dark:border-white/10 sm:px-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-xs font-mono font-bold text-purple-600 dark:text-purple-400">
                    CS
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-purple-600 dark:text-purple-400 sm:text-xs">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-xl">
                      {selectedProject.title} Case Study
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    text-slate-600
                    transition-all
                    hover:border-purple-400
                    hover:bg-purple-500/10
                    hover:text-purple-600
                    dark:border-white/10
                    dark:text-gray-300
                    dark:hover:text-white
                  "
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6 space-y-6">
                {/* Hero Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 dark:border-white/10 shadow-inner">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      <Sparkles className="h-3 w-3 text-purple-400" />
                      Production Architecture
                    </span>
                  </div>
                </div>

                {/* Section 1: Overview */}
                <div>
                  <div className="mb-2.5 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-purple-500" />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Project Overview
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-gray-300 sm:text-base">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Section 2: Key Features */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Key Capabilities & Features
                    </h4>
                  </div>
                  <div className="space-y-2.5">
                    {selectedProject.keyFeatures.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="
                          flex
                          items-start
                          gap-3
                          rounded-xl
                          border
                          border-slate-200/80
                          bg-slate-50/70
                          p-3
                          dark:border-white/[0.06]
                          dark:bg-white/[0.02]
                        "
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 text-[10px] font-bold">
                          ✓
                        </span>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Tech Stack */}
                <div>
                  <div className="mb-2.5 flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-cyan-500" />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Technologies & Tools
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="
                          rounded-xl
                          border
                          border-purple-400/20
                          bg-purple-500/[0.06]
                          px-3
                          py-1.5
                          font-mono
                          text-xs
                          font-medium
                          text-purple-700
                          dark:border-purple-400/30
                          dark:bg-purple-500/10
                          dark:text-purple-300
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 4: Engineering Challenges */}
                <div>
                  <div className="mb-2.5 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Engineering Challenges & Solutions
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {selectedProject.challenges.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        className="
                          flex
                          items-start
                          gap-2.5
                          rounded-xl
                          border
                          border-slate-200/60
                          bg-slate-50/50
                          p-3
                          dark:border-white/[0.04]
                          dark:bg-white/[0.015]
                        "
                      >
                        <span className="text-purple-500 font-bold">•</span>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                          {c}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200/80 bg-slate-50/50 px-5 py-4 dark:border-white/10 dark:bg-white/[0.02] sm:px-6">
                <div className="flex w-full sm:w-auto items-center gap-2.5">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      min-h-[42px]
                      flex-1
                      sm:flex-initial
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-slate-800
                      transition-all
                      hover:border-purple-400
                      hover:bg-purple-50
                      dark:border-white/15
                      dark:bg-white/[0.04]
                      dark:text-white
                      dark:hover:bg-white/[0.08]
                      sm:text-sm
                    "
                  >
                    <FaGithub size={15} />
                    <span>GitHub Code</span>
                  </a>

                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      min-h-[42px]
                      flex-1
                      sm:flex-initial
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-purple-600
                      to-indigo-600
                      px-5
                      py-2
                      text-xs
                      font-semibold
                      text-white
                      shadow-[0_0_25px_rgba(124,58,237,0.4)]
                      transition-all
                      hover:-translate-y-0.5
                      hover:shadow-[0_0_35px_rgba(124,58,237,0.6)]
                      sm:text-sm
                    "
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="
                    w-full
                    sm:w-auto
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-slate-500
                    hover:text-slate-800
                    dark:text-gray-400
                    dark:hover:text-white
                    transition-colors
                  "
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
