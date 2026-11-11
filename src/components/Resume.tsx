"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  FileBadge,
} from "lucide-react";

export default function Resume() {
  const resumeUrl = "/resume.pdf";
  const downloadFileName = "Avinash_Upadhyay_Resume.pdf";

  const keyStrengths = [
    {
      title: "Full-Stack Web Development",
      desc: "React.js, Next.js, Node.js, Express, TypeScript & Tailwind CSS",
    },
    {
      title: "Backend & System Design",
      desc: "REST APIs, MongoDB, PostgreSQL, Redis, JWT & Microservices",
    },
    {
      title: "AI & LLM Integration",
      desc: "LangChain, LangGraph, Multi-Agent Systems & Prompt Engineering",
    },
    {
      title: "DevOps & Tools",
      desc: "Docker, GitHub Actions, Vercel, Postman & Cloud Deployment",
    },
  ];

  return (
    <section
      id="resume"
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
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main purple glow */}
        <div
          className="
            absolute
            left-1/2
            top-16
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.07]
            blur-[100px]
            dark:bg-purple-600/10
            sm:h-[450px]
            sm:w-[450px]
            sm:blur-[140px]
            lg:h-[550px]
            lg:w-[550px]
            lg:blur-[170px]
          "
        />

        {/* Cyan side glow */}
        <div
          className="
            absolute
            right-[-10%]
            top-[40%]
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

        {/* Bottom purple glow */}
        <div
          className="
            absolute
            bottom-[-10%]
            left-[15%]
            h-[250px]
            w-[400px]
            rounded-full
            bg-purple-600/[0.05]
            blur-[100px]
            dark:bg-purple-600/10
            sm:h-[320px]
            sm:w-[500px]
            sm:blur-[140px]
          "
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative mx-auto max-w-7xl">
        {/* ================= SECTION HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
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
            04 / RESUME
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
            My{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-600
                via-pink-500
                to-indigo-500
                bg-clip-text
                text-transparent
                dark:from-purple-400
                dark:via-pink-400
                dark:to-indigo-400
              "
            >
              Resume.
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
            A comprehensive overview of my technical expertise, full-stack development experience,
            and software engineering projects. Available to preview in-browser or download as a PDF.
          </p>
        </motion.div>

        {/* ================= RESUME SHOWCASE CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            relative
            rounded-2xl
            border
            border-slate-200/80
            bg-white/70
            p-5
            shadow-xl
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-white/[0.02]
            dark:shadow-[0_0_50px_rgba(139,92,246,0.06)]
            sm:rounded-3xl
            sm:p-8
            lg:p-10
          "
        >
          {/* Subtle top gradient accent */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-purple-500/50
              to-transparent
            "
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* ================= LEFT COLUMN: DETAILS & ACTIONS ================= */}
            <div className="flex flex-col justify-between lg:col-span-5 xl:col-span-5">
              <div>
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1.5 text-xs font-medium text-purple-600 dark:text-purple-300">
                  <Sparkles className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
                  <span>Available for Full-Time Roles</span>
                </div>

                {/* File info header */}
                <div className="mt-5 flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-purple-500/30
                      bg-gradient-to-br
                      from-purple-500/20
                      via-purple-600/10
                      to-indigo-500/20
                      text-purple-600
                      shadow-inner
                      dark:text-purple-300
                    "
                  >
                    <FileBadge className="h-7 w-7" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl">
                      Avinash Upadhyay
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-gray-400">
                      Full-Stack Developer · PDF
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                      <span>Verified & Up-to-Date</span>
                    </div>
                  </div>
                </div>

                {/* Key Strengths Grid */}
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-gray-500">
                    Core Competencies
                  </p>
                  <div className="space-y-2.5">
                    {keyStrengths.map((item, idx) => (
                      <div
                        key={idx}
                        className="
                          flex
                          items-start
                          gap-2.5
                          rounded-xl
                          border
                          border-slate-200/60
                          bg-slate-50/60
                          p-3
                          transition-colors
                          hover:border-purple-400/40
                          dark:border-white/[0.05]
                          dark:bg-white/[0.02]
                          dark:hover:border-purple-500/30
                        "
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                        <div>
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {item.title}
                          </p>
                          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-gray-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:flex-col xl:flex-row">
                {/* View Resume Button */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    inline-flex
                    min-h-[48px]
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    via-indigo-600
                    to-blue-600
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-white
                    shadow-[0_0_30px_rgba(124,58,237,0.35)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]
                  "
                >
                  <Eye className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>View Resume</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Download Resume Button */}
                <a
                  href={resumeUrl}
                  download={downloadFileName}
                  className="
                    group
                    relative
                    inline-flex
                    min-h-[48px]
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-300
                    bg-white/80
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-slate-700
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-purple-400/50
                    hover:bg-slate-100
                    dark:border-white/15
                    dark:bg-white/[0.04]
                    dark:text-gray-200
                    dark:hover:border-purple-400/40
                    dark:hover:bg-white/[0.08]
                    dark:hover:text-white
                  "
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: INTERACTIVE DOCUMENT PREVIEW ================= */}
            <div className="flex flex-col lg:col-span-7 xl:col-span-7">
              <div
                className="
                  flex
                  h-[440px]
                  w-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/80
                  bg-slate-100/60
                  shadow-inner
                  dark:border-white/10
                  dark:bg-[#07041d]/70
                  sm:h-[520px]
                  lg:h-[580px]
                "
              >
                {/* Preview Window Header Bar */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-200/80
                    bg-white/80
                    px-4
                    py-3
                    backdrop-blur-md
                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  {/* Window Controls */}
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 hidden text-xs font-mono text-slate-500 dark:text-gray-400 sm:inline-block">
                      {downloadFileName}
                    </span>
                  </div>

                  {/* Header Actions */}
                  <div className="flex items-center gap-2">
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-lg
                        border
                        border-slate-200
                        bg-white/80
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        text-slate-700
                        transition-colors
                        hover:border-purple-400/50
                        hover:text-purple-600
                        dark:border-white/10
                        dark:bg-white/[0.04]
                        dark:text-gray-300
                        dark:hover:text-white
                      "
                      title="Open in new tab"
                    >
                      <Eye className="h-3 w-3" />
                      <span className="hidden sm:inline">Open</span>
                    </a>

                    <a
                      href={resumeUrl}
                      download={downloadFileName}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-lg
                        border
                        border-purple-500/30
                        bg-purple-500/10
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        text-purple-600
                        transition-colors
                        hover:bg-purple-500/20
                        dark:text-purple-300
                      "
                      title="Download PDF"
                    >
                      <Download className="h-3 w-3" />
                      <span className="hidden sm:inline">Save</span>
                    </a>
                  </div>
                </div>

                {/* Embedded Document Viewer with responsive fallback */}
                <div className="relative flex-1 bg-slate-900/5 dark:bg-black/30">
                  <iframe
                    src={`${resumeUrl}#toolbar=0&navpanes=0`}
                    title="Avinash Upadhyay Resume Preview"
                    className="h-full w-full border-0"
                    loading="lazy"
                  />

                  {/* Fallback overlay helper for touch devices or if iframe is blocked */}
                  <noscript>
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                      <FileText className="h-12 w-12 text-purple-400" />
                      <p className="mt-3 text-sm text-slate-300">
                        Please use the buttons to view or download the resume.
                      </p>
                    </div>
                  </noscript>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
