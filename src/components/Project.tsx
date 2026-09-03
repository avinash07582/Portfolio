
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {ExternalLink, ArrowUpRight } from "lucide-react";

// const projects = [
//   {
//     title: "CineVerse",
//     category: "Movie Discovery Platform",
//     image: "/projects/cineverse.png",
//     description:
//       "A modern movie discovery platform where users can explore movies, search titles, view details and manage their favorite content.",
//     tech: ["React", "Redux Toolkit", "Tailwind CSS", "TMDB API"],
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "Blinkit Clone",
//     category: "Full Stack E-Commerce",
//     image: "/projects/blinkit.png",
//     description:
//       "A full-stack grocery shopping platform with authentication, product management, online payments and cloud image storage.",
//     tech: [
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Razorpay",
//       "Cloudinary",
//     ],
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "Quizify",
//     category: "AI Learning Platform",
//     image: "/projects/quizify.png",
//     description:
//       "An interactive quiz platform that generates quizzes from PDF documents and provides real-time multiplayer leaderboard functionality.",
//     tech: ["MERN", "OpenAI", "PDF Parse", "Socket.IO", "JWT"],
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "Job Portal",
//     category: "Recruitment Platform",
//     image: "/projects/jobportal.png",
//     description:
//       "A job recruitment platform where users can explore jobs, manage applications and interact with a complete backend API.",
//     tech: [
//       "React",
//       "Vite",
//       "Tailwind CSS",
//       "Node.js",
//       "Express",
//       "MongoDB",
//     ],
//     github: "#",
//     live: "#",
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden px-6 py-24 text-white md:px-12 lg:px-20"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

//       <div className="relative mx-auto max-w-7xl">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-16"
//         >
//           <p className="mb-4 font-mono text-sm tracking-[0.3em] text-purple-400">
//             03 / PROJECTS
//           </p>

//           <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
//             What I've{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//               built.
//             </span>
//           </h2>

//           <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
//             A collection of projects where I turned ideas into
//             functional and engaging web experiences.
//           </p>
//         </motion.div>

//         {/* Project Grid */}
//         <div className="grid gap-8 md:grid-cols-2">

//           {projects.map((project, index) => (
//             <motion.article
//               key={project.title}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//               }}
//               whileHover={{ y: -8 }}
//               className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-3 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:bg-white/[0.055]"
//             >

//               {/* Project Image */}
//               <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/40">

//                 <Image
//                   src={project.image}
//                   alt={`${project.title} homepage`}
//                   fill
//                   className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                 />

//                 {/* Image Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#060318]/80 via-transparent to-transparent opacity-60" />

//                 {/* Project Number */}
//                 <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-xs text-white/70 backdrop-blur-md">
//                   0{index + 1}
//                 </div>

//               </div>

//               {/* Content */}
//               <div className="px-3 pb-4 pt-6 md:px-5 md:pb-5">

//                 {/* Category */}
//                 <p className="font-mono text-xs uppercase tracking-[0.2em] text-purple-400">
//                   {project.category}
//                 </p>

//                 {/* Title */}
//                 <div className="mt-2 flex items-center justify-between">

//                   <h3 className="text-2xl font-semibold md:text-3xl">
//                     {project.title}
//                   </h3>

//                   <ArrowUpRight
//                     size={24}
//                     className="text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
//                   />

//                 </div>

//                 {/* Description */}
//                 <p className="mt-4 text-sm leading-6 text-gray-400 md:text-base">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-gray-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-7 flex gap-3">

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10"
//                   >
//                     {/* <Github size={17} /> */}
//                     GitHub
//                   </a>

//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-200"
//                   >
//                     <ExternalLink size={17} />
//                     Live Demo
//                   </a>

//                 </div>

//               </div>

//               {/* Bottom Glow */}
//               <div className="pointer-events-none absolute -bottom-24 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//             </motion.article>
//           ))}

//         </div>

//         {/* Bottom Text */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="mt-16 text-center"
//         >
//           <p className="font-mono text-sm text-gray-600">
//             More projects coming soon...
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CineVerse",
    category: "Movie Discovery Platform",
    image: "/projects/cineverse.png",
    description:
      "A modern movie discovery platform where users can explore movies, search titles, view details and manage their favorite content.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/avinash07582/Movie-App",
    live: "#",
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
  github: "https://github.com/avinash07582/LMS-Platform ",
  live: "https://lms-platform-apii.onrender.com/",
},
  {
    title: "Quizify",
    category: "AI Learning Platform",
    image: "/quiz.png",
    description:
      "An interactive quiz platform that generates quizzes from PDF documents and provides real-time multiplayer leaderboard functionality.",
    tech: ["MERN", "OpenAI", "PDF Parse", "Socket.IO", "JWT"],
    github: "https://github.com/avinash07582/Quiz-App",
    live: "https://quiz-app-frontend-olsd.onrender.com",
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
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/avinash07582/Job-Portal",
    live: "https://job-portal-5-frontend-bfqc.onrender.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-20 text-white sm:px-6 sm:py-24 md:px-10 lg:px-16 lg:py-28"
    >
      {/* ================================================= */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main purple glow */}
        <div className="absolute left-1/2 top-20 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[130px] lg:h-[500px] lg:w-[500px] lg:blur-[160px]" />

        {/* Side glow */}
        <div className="absolute right-[-15%] top-[45%] h-[250px] w-[250px] rounded-full bg-cyan-500/5 blur-[100px] sm:h-[350px] sm:w-[350px] sm:blur-[130px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-10%] left-[10%] h-[250px] w-[400px] rounded-full bg-purple-600/10 blur-[100px] sm:h-[300px] sm:w-[500px] sm:blur-[140px]" />
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
          <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-purple-400 sm:mb-4 sm:text-xs md:text-sm md:tracking-[0.3em]">
            03 / PROJECTS
          </p>

          <h2 className="text-[clamp(2.25rem,7vw,3.75rem)] font-bold leading-tight tracking-tight md:text-6xl">
            What I've{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              built.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
            A collection of projects where I turned ideas into
            functional and engaging web experiences.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* PROJECT GRID */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2.5 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:bg-white/[0.055] sm:rounded-3xl sm:p-3"
            >
              {/* ================================================= */}
              {/* PROJECT IMAGE */}
              {/* ================================================= */}

              <div className="relative aspect-video overflow-hidden rounded-xl bg-black/40 sm:rounded-2xl">
                <Image
                  src={project.image}
                  alt={`${project.title} homepage`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#060318]/90 via-transparent to-transparent opacity-70" />

                {/* Project Number */}

                <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur-md sm:right-4 sm:top-4 sm:px-3 sm:text-xs">
                  0{index + 1}
                </div>
              </div>

              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}

              <div className="px-2.5 pb-3 pt-5 sm:px-4 sm:pb-4 sm:pt-6 md:px-5 md:pb-5">
                {/* Category */}

                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-purple-400 sm:text-[10px] sm:tracking-[0.2em] md:text-xs">
                  {project.category}
                </p>

                {/* Title */}

                <div className="mt-2 flex items-center justify-between gap-3">
                  <h3 className="min-w-0 text-xl font-semibold sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400 sm:h-6 sm:w-6"
                  />
                </div>

                {/* Description */}

                <p className="mt-3 text-xs leading-5 text-gray-400 sm:mt-4 sm:text-sm sm:leading-6 md:text-base">
                  {project.description}
                </p>

                {/* ================================================= */}
                {/* TECH STACK */}
                {/* ================================================= */}

                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] text-gray-300 transition-colors duration-200 hover:border-purple-400/30 hover:text-white sm:px-3 sm:py-1.5 sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ================================================= */}
                {/* BUTTONS */}
                {/* ================================================= */}

                <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 sm:w-auto sm:text-sm"
                  >
                    GitHub
                  </a>

                  {/* Live Demo */}

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-medium text-black transition-all duration-300 hover:bg-gray-200 sm:w-auto sm:text-sm"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* ================================================= */}
              {/* BOTTOM GLOW */}
              {/* ================================================= */}

              <div className="pointer-events-none absolute -bottom-24 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>

        {/* ================================================= */}
        {/* BOTTOM TEXT */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-10 text-center sm:mt-12 md:mt-16"
        >
          <p className="font-mono text-[10px] text-gray-600 sm:text-xs md:text-sm">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}