"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Rocket,
  Monitor,
  Send,
  Crown,
  CalendarDays,
  Brain,
  UsersRound,
  Layers,
  Sparkles,
} from "lucide-react";

interface OrbitSkill {
  name: string;
  category: string;
  position: string;
  color: string;
  glowColor: string;
  icon: string;
}

const orbitSkills: OrbitSkill[] = [
  {
    name: "React.js",
    category: "Frontend UI Library",
    position: "top-[4%] left-1/2 -translate-x-1/2",
    color: "text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.4)",
    icon: "⚛",
  },
  {
    name: "Next.js",
    category: "Full-Stack React Framework",
    position: "top-[14%] left-[2%] sm:left-[8%]",
    color: "text-slate-900 dark:text-white",
    glowColor: "rgba(255, 255, 255, 0.4)",
    icon: "N",
  },
  {
    name: "Node.js",
    category: "JavaScript Backend Runtime",
    position: "top-[14%] right-[2%] sm:right-[8%]",
    color: "text-emerald-500 dark:text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.4)",
    icon: "⬡",
  },
  {
    name: "MongoDB",
    category: "NoSQL Document Database",
    position: "top-[40%] left-[0%] sm:left-[2%]",
    color: "text-green-500 dark:text-green-400",
    glowColor: "rgba(74, 222, 128, 0.4)",
    icon: "◆",
  },
  {
    name: "Express.js",
    category: "RESTful Backend Framework",
    position: "top-[40%] right-[0%] sm:right-[2%]",
    color: "text-slate-800 dark:text-slate-200",
    glowColor: "rgba(168, 85, 247, 0.4)",
    icon: "ex",
  },
  {
    name: "TypeScript",
    category: "Type-Safe JavaScript",
    position: "bottom-[18%] left-[4%] sm:left-[12%]",
    color: "text-blue-500 dark:text-blue-400",
    glowColor: "rgba(96, 165, 250, 0.4)",
    icon: "TS",
  },
  {
    name: "JavaScript",
    category: "Modern ES6+ Core",
    position: "bottom-[7%] left-1/2 -translate-x-1/2",
    color: "text-amber-500 dark:text-yellow-400",
    glowColor: "rgba(250, 204, 21, 0.4)",
    icon: "JS",
  },
  {
    name: "Redux",
    category: "Global State Management",
    position: "bottom-[18%] right-[4%] sm:right-[12%]",
    color: "text-purple-500 dark:text-purple-400",
    glowColor: "rgba(192, 132, 252, 0.4)",
    icon: "◈",
  },
  {
    name: "Tailwind CSS",
    category: "Utility-First CSS Styling",
    position: "bottom-[37%] right-[1%] sm:right-[3%]",
    color: "text-cyan-500 dark:text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.4)",
    icon: "≋",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Building beautiful user interfaces",
    icon: <Monitor size={22} />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    description: "Powering application logic",
    icon: <Server size={22} />,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Redis",
      "REST API",
      "JWT",
      "Google OAuth 2.0",
      "Socket.IO",
      "Microservices",
    ],
  },
  {
    title: "AI / LLM",
    description: "Building intelligent applications",
    icon: <Brain size={22} />,
    skills: [
      "LangChain",
      "LangGraph",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Tools that boost productivity",
    icon: <Rocket size={22} />,
    skills: ["GitHub", "Postman", "Vercel", "VS Code", "Docker"],
  },
  {
    title: "Concepts & Practices",
    description: "Writing clean, scalable code",
    icon: <Layers size={22} />,
    skills: ["MVC Architecture", "RBAC", "CRUD Operations", "Agile"],
  },
  {
    title: "Soft Skills",
    description: "Beyond code, people skills",
    icon: <UsersRound size={22} />,
    skills: [
      "Problem Solving",
      "Teamwork",
      "Leadership",
      "Event Management",
    ],
  },
];

const toolIcons: Record<string, React.ReactNode> = {
  Postman: <Send size={16} />,
  Vercel: <Rocket size={16} />,
  "VS Code": <Code2 size={16} />,
  "Problem Solving": <Brain size={16} />,
  Teamwork: <UsersRound size={16} />,
  Leadership: <Crown size={16} />,
  "Event Management": <CalendarDays size={16} />,
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<OrbitSkill | null>(null);

  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
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
      {/* ATMOSPHERIC GLOWS */}
      {/* ================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main purple glow */}
        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[300px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.06]
            blur-[100px]
            dark:bg-purple-600/10
            sm:h-[400px]
            sm:w-[600px]
            sm:blur-[130px]
            lg:h-[500px]
            lg:w-[700px]
            lg:blur-[150px]
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            right-[-20%]
            top-[50%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[100px]
            dark:bg-cyan-500/5
            sm:h-[300px]
            sm:w-[300px]
            sm:blur-[120px]
            lg:h-[350px]
            lg:w-[350px]
            lg:blur-[130px]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-10%]
            left-[10%]
            h-[250px]
            w-[450px]
            rounded-full
            bg-purple-600/[0.06]
            blur-[110px]
            dark:bg-purple-600/10
            sm:h-[300px]
            sm:w-[550px]
            sm:blur-[130px]
            lg:left-[20%]
            lg:w-[600px]
            lg:blur-[150px]
          "
        />
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center sm:mb-12"
        >
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-400/30
              bg-purple-500/[0.06]
              px-4
              py-2
              text-xs
              text-purple-600
              backdrop-blur-md
              dark:border-purple-500/40
              dark:bg-purple-500/5
              dark:text-purple-300
              sm:mb-5
              sm:px-5
              sm:text-sm
            "
          >
            <span className="text-purple-600 dark:text-purple-400">✦</span>
            MY SKILLS
          </div>

          <h2
            className="
              text-[clamp(2.25rem,7vw,4.5rem)]
              font-bold
              leading-tight
              tracking-tight
            "
          >
            My Tech{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-600
                via-fuchsia-500
                to-cyan-500
                bg-clip-text
                text-transparent
                dark:from-purple-400
                dark:via-fuchsia-400
                dark:to-cyan-400
              "
            >
              Universe
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              px-2
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-400
              sm:mt-5
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            Technologies, frameworks, and architecture tools I use to build modern,
            high-performance digital solutions.
          </p>

          <div
            className="
              mx-auto
              mt-5
              h-1
              w-16
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-cyan-400
              sm:mt-6
              sm:w-20
            "
          />
        </motion.div>

        {/* ================================================= */}
        {/* ENHANCED TECHNOLOGY ORBIT */}
        {/* ================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            relative
            mx-auto
            mb-10
            h-[370px]
            w-full
            max-w-6xl
            overflow-visible
            px-2
            sm:mb-14
            sm:h-[430px]
            md:h-[500px]
            lg:h-[530px]
          "
        >
          {/* Outer orbit (rotating slowly) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 65,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-[94%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
              border-dashed
              border-purple-500/25
              sm:h-[260px]
              sm:w-[90%]
              md:h-[285px]
            "
          />

          {/* Middle orbit (counter-rotating) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[160px]
              w-[74%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
              border-purple-400/20
              sm:h-[190px]
              sm:w-[70%]
              md:h-[210px]
            "
          />

          {/* Inner orbit (rotating) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[105px]
              w-[52%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
              border-cyan-400/20
              sm:h-[120px]
              sm:w-[48%]
              md:h-[135px]
            "
          />

          {/* Ambient orbit center glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[200px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-600/[0.08]
              blur-[80px]
              dark:bg-purple-600/15
              sm:h-[240px]
              sm:w-[420px]
              sm:blur-[100px]
            "
          />

          {/* ================= CENTRAL CORE WITH HOLOGRAPHIC INSPECTOR ================= */}
          <motion.div
            animate={{
              scale: hoveredSkill ? 1.08 : [1, 1.05, 1],
              boxShadow: hoveredSkill
                ? `0 0 50px ${hoveredSkill.glowColor}`
                : [
                    "0 0 25px rgba(168,85,247,0.15)",
                    "0 0 60px rgba(168,85,247,0.35)",
                    "0 0 25px rgba(168,85,247,0.15)",
                  ],
            }}
            transition={{
              duration: hoveredSkill ? 0.3 : 3,
              repeat: hoveredSkill ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-20
              w-20
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-purple-400/40
              bg-white/90
              shadow-xl
              backdrop-blur-xl
              dark:border-purple-300/60
              dark:bg-[#060318]
              sm:h-28
              sm:w-28
              md:h-36
              md:w-36
              lg:h-40
              lg:w-40
            "
          >
            <div
              className="
                absolute
                inset-2
                rounded-full
                bg-purple-600/[0.08]
                blur-xl
                dark:bg-purple-600/25
                sm:inset-3
              "
            />

            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex flex-col items-center justify-center p-2 text-center"
                >
                  <span className={`text-xl font-bold sm:text-3xl md:text-4xl ${hoveredSkill.color}`}>
                    {hoveredSkill.icon}
                  </span>
                  <span className="mt-1 line-clamp-1 text-[10px] font-bold tracking-tight text-slate-900 dark:text-white sm:text-xs md:text-sm">
                    {hoveredSkill.name}
                  </span>
                  <span className="hidden font-mono text-[9px] text-purple-600 dark:text-purple-400 sm:inline-block">
                    {hoveredSkill.category}
                  </span>
                </motion.div>
              ) : (
                <motion.span
                  key="default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="
                    relative
                    z-10
                    text-2xl
                    font-bold
                    text-purple-700
                    dark:text-white
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  &lt;/&gt;
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ================= ORBITAL PARTICLES ================= */}
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.span
              key={index}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 2 + index * 0.25,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-1.5
                w-1.5
                rounded-full
                bg-purple-400
                shadow-[0_0_12px_rgba(168,85,247,0.8)]
                sm:h-2
                sm:w-2
              "
              style={{
                transform: `rotate(${index * 45}deg) translate(${90 + (index % 3) * 35}px, ${(index % 2) * 20}px)`,
              }}
            />
          ))}

          {/* ================= INTERACTIVE ORBITAL TECH BADGES ================= */}
          {orbitSkills.map((skill, index) => {
            const isHovered = hoveredSkill?.name === skill.name;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 + index * 0.06,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 180,
                  damping: 15,
                }}
                className={`absolute ${skill.position} z-20`}
              >
                <motion.div
                  animate={{
                    y: isHovered ? -8 : [0, -5, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 3) * 0.4,
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                  className="group relative"
                >
                  {/* Floating Interactive Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: -12, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.9 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="
                          pointer-events-none
                          absolute
                          bottom-full
                          left-1/2
                          z-40
                          mb-1.5
                          -translate-x-1/2
                          whitespace-nowrap
                          rounded-xl
                          border
                          border-purple-400/50
                          bg-slate-950/95
                          px-3
                          py-1.5
                          text-center
                          shadow-[0_0_25px_rgba(139,92,246,0.5)]
                          backdrop-blur-xl
                        "
                      >
                        <p className="text-[11px] font-bold text-white sm:text-xs">
                          {skill.name}
                        </p>
                        <p className="text-[9px] font-mono text-purple-300">
                          {skill.category}
                        </p>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-purple-400/50" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Badge Glow Aura */}
                  <div
                    className={`
                      absolute
                      inset-0
                      rounded-lg
                      blur-lg
                      transition-opacity
                      duration-300
                      sm:rounded-xl
                      sm:blur-xl
                      ${isHovered ? "opacity-100" : "opacity-35 group-hover:opacity-100"}
                    `}
                    style={{
                      backgroundColor: skill.glowColor,
                    }}
                  />

                  {/* Interactive Badge Element */}
                  <motion.button
                    type="button"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(isHovered ? null : skill)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.96 }}
                    className={`
                      relative
                      flex
                      cursor-pointer
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      px-2
                      py-1.5
                      text-left
                      shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      sm:gap-2
                      sm:rounded-xl
                      sm:px-3
                      sm:py-2.5
                      md:gap-2.5
                      md:px-4
                      md:py-3
                      ${
                        isHovered
                          ? "border-purple-400 bg-purple-500/15 shadow-[0_0_30px_rgba(139,92,246,0.4)] dark:border-purple-300 dark:bg-purple-950/80"
                          : "border-slate-200 bg-white/85 text-slate-800 hover:border-purple-400/60 hover:bg-purple-500/10 dark:border-purple-400/30 dark:bg-[#0b0824]/90 dark:text-slate-200 dark:hover:border-purple-400/80"
                      }
                    `}
                  >
                    <span className={`text-xs font-bold sm:text-sm md:text-base ${skill.color}`}>
                      {skill.icon}
                    </span>

                    <span className="whitespace-nowrap text-[10px] font-semibold text-slate-800 dark:text-slate-200 sm:text-xs md:text-sm">
                      {skill.name}
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Orbit Helper Indicator */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/[0.04] px-4 py-1.5 text-[11px] text-slate-500 dark:text-slate-400">
            <Sparkles className="h-3 w-3 text-purple-500 dark:text-purple-400" />
            <span>Hover or tap any orbital technology to inspect details</span>
          </span>
        </div>

        {/* ================================================= */}
        {/* SKILL CATEGORY CARDS (PRESERVED) */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group relative"
            >
              {/* Card glow */}
              <div
                className="
                  absolute
                  -inset-px
                  rounded-2xl
                  bg-gradient-to-b
                  from-purple-500/20
                  to-transparent
                  opacity-0
                  blur-sm
                  transition
                  duration-500
                  group-hover:opacity-100
                  dark:from-purple-500/30
                "
              />

              {/* Card */}
              <div
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/70
                  p-4
                  shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  group-hover:border-purple-400/30
                  group-hover:bg-purple-500/[0.03]
                  dark:border-white/10
                  dark:bg-white/[0.025]
                  dark:shadow-none
                  dark:group-hover:border-purple-400/30
                  dark:group-hover:bg-white/[0.04]
                  sm:p-5
                  md:p-6
                "
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-purple-400/30
                        bg-purple-500/[0.06]
                        text-purple-600
                        shadow-[0_0_20px_rgba(168,85,247,0.08)]
                        dark:bg-purple-500/10
                        dark:text-purple-300
                        dark:shadow-[0_0_20px_rgba(168,85,247,0.15)]
                        sm:h-12
                        sm:w-12
                      "
                    >
                      {group.icon}
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-sm
                          font-semibold
                          text-slate-800
                          dark:text-white
                          sm:text-base
                        "
                      >
                        {group.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          leading-4
                          text-slate-500
                          dark:text-slate-500
                          sm:text-xs
                          sm:leading-5
                        "
                      >
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-purple-600 dark:text-purple-400">
                    ✦
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="
                    mb-4
                    h-px
                    bg-gradient-to-r
                    from-purple-500/20
                    via-slate-200
                    to-transparent
                    dark:from-purple-500/20
                    dark:via-white/10
                    sm:mb-5
                  "
                />

                {/* Skills */}
                <div className="space-y-2.5 sm:space-y-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.15 + skillIndex * 0.04,
                      }}
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-2
                        text-xs
                        text-slate-600
                        transition-colors
                        duration-200
                        hover:text-purple-700
                        dark:text-slate-300
                        dark:hover:text-white
                        sm:gap-3
                        sm:text-sm
                      "
                    >
                      {/* Timeline dot */}
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span
                          className="
                            absolute
                            inline-flex
                            h-full
                            w-full
                            animate-ping
                            rounded-full
                            bg-purple-400
                            opacity-30
                          "
                        />
                        <span
                          className="
                            relative
                            inline-flex
                            h-2
                            w-2
                            rounded-full
                            bg-purple-500
                            dark:bg-purple-400
                          "
                        />
                      </span>

                      {/* Icon */}
                      {toolIcons[skill] && (
                        <span className="shrink-0 text-slate-400">
                          {toolIcons[skill]}
                        </span>
                      )}

                      {/* Skill name */}
                      <span className="min-w-0 break-words">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-16
                    left-1/2
                    h-32
                    w-40
                    -translate-x-1/2
                    rounded-full
                    bg-purple-600/[0.04]
                    blur-3xl
                    dark:bg-purple-600/10
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================================================= */}
        {/* BOTTOM MESSAGE */}
        {/* ================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-8
            flex
            w-full
            max-w-xl
            flex-wrap
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-purple-400/20
            bg-purple-500/[0.03]
            px-4
            py-3
            text-center
            text-xs
            text-slate-600
            backdrop-blur-md
            dark:border-purple-500/20
            dark:text-slate-400
            sm:mt-12
            sm:flex-nowrap
            sm:gap-3
            sm:rounded-full
            sm:px-6
            sm:py-3
            sm:text-sm
          "
        >
          <span className="text-purple-500 dark:text-purple-400">
            ✦
          </span>

          <span>
            Always learning. Always improving. Always building.
          </span>

          <span className="text-cyan-500 dark:text-cyan-400">
            ✦
          </span>
        </motion.div>
      </div>
    </section>
  );
}
