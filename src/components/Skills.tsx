// "use client";

// import { motion } from "framer-motion";
// import {
//   Code2,
//   Server,
//   Rocket,
//   Monitor,
  
//   Send,
//   Crown,
//   CalendarDays,
//   Brain,
//   UsersRound,
// } from "lucide-react";

// const orbitSkills = [
//   {
//     name: "React.js",
//     position: "top-[8%] left-1/2 -translate-x-1/2",
//     color: "text-cyan-400",
//     icon: "⚛",
//   },
//   {
//     name: "Next.js",
//     position: "top-[15%] left-[10%]",
//     color: "text-white",
//     icon: "N",
//   },
//   {
//     name: "Node.js",
//     position: "top-[15%] right-[10%]",
//     color: "text-green-400",
//     icon: "⬡",
//   },
//   {
//     name: "MongoDB",
//     position: "top-[40%] left-[2%]",
//     color: "text-green-400",
//     icon: "◆",
//   },
//   {
//     name: "Express.js",
//     position: "top-[40%] right-[2%]",
//     color: "text-white",
//     icon: "ex",
//   },
//   {
//     name: "TypeScript",
//     position: "bottom-[20%] left-[13%]",
//     color: "text-blue-400",
//     icon: "TS",
//   },
//   {
//     name: "JavaScript",
//     position: "bottom-[10%] left-1/2 -translate-x-1/2",
//     color: "text-yellow-400",
//     icon: "JS",
//   },
//   {
//     name: "Redux",
//     position: "bottom-[20%] right-[13%]",
//     color: "text-purple-400",
//     icon: "◈",
//   },
//   {
//     name: "Tailwind CSS",
//     position: "bottom-[37%] right-[3%]",
//     color: "text-cyan-400",
//     icon: "≋",
//   },
// ];

// const skillGroups = [
//   {
//     title: "Frontend",
//     description: "Building beautiful user interfaces",
//     icon: <Monitor size={22} />,
//     skills: [
//       "HTML5",
//       "CSS3",
//       "JavaScript (ES6+)",
//       "TypeScript",
//       "React.js",
//       "Next.js",
//       "Redux",
//       "Redux Toolkit",
//       "Tailwind CSS",
//       "Framer Motion",
//     ],
//   },

//   {
//     title: "Backend",
//     description: "Powering application logic",
//     icon: <Server size={22} />,
//     skills: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
//   },

//   {
//     title: "Tools & Deployment",
//     description: "Tools that boost productivity",
//     icon: <Rocket size={22} />,
//     skills: ["GitHub", "Postman", "Vercel", "VS Code"],
//   },

//   {
//     title: "Soft Skills",
//     description: "Beyond code, people skills",
//     icon: <UsersRound size={22} />,
//     skills: [
//       "Problem Solving",
//       "Teamwork",
//       "Leadership",
//       "Event Management",
//     ],
//   },
// ];

// const toolIcons: Record<string, React.ReactNode> = {
// //   GitHub: <Github size={16} />,
//   Postman: <Send size={16} />,
//   Vercel: <Rocket size={16} />,
//   "VS Code": <Code2 size={16} />,
//   "Problem Solving": <Brain size={16} />,
//   Teamwork: <UsersRound size={16} />,
//   Leadership: <Crown size={16} />,
//   "Event Management": <CalendarDays size={16} />,
// };

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative min-h-screen overflow-hidden  px-6 py-24 text-white md:px-10 lg:px-16"
//     >
//       {/* ================================================= */}
//       {/* SKILLS-ONLY ATMOSPHERIC GLOWS */}
//       {/* ================================================= */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Main purple glow */}

//         <div className="absolute left-1/2 top-[25%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

//         {/* Cyan glow */}

//         <div className="absolute right-[-10%] top-[50%] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[130px]" />

//         {/* Bottom glow */}

//         <div className="absolute bottom-[-10%] left-[20%] h-[300px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
//       </div>

//       {/* ================================================= */}
//       {/* CONTENT */}
//       {/* ================================================= */}

//       <div className="relative z-10 mx-auto max-w-7xl">

//         {/* ================= HEADING ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-12 text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/5 px-5 py-2 text-sm text-purple-300 backdrop-blur-md">
//             <span className="text-purple-400">✦</span>
//             MY SKILLS
//           </div>

//           <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//             My Tech{" "}
//             <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
//               Universe
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
//             Technologies, tools and skills I use to build modern,
//             scalable and exceptional digital experiences.
//           </p>

//           <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
//         </motion.div>

//         {/* ================================================= */}
//         {/* TECHNOLOGY ORBIT */}
//         {/* ================================================= */}

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="relative mx-auto mb-16 h-[440px] max-w-6xl sm:h-[480px] md:h-[520px]"
//         >
//           {/* Outer orbit */}

//           <div className="absolute left-1/2 top-1/2 h-[260px] w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] rounded-[50%] border border-purple-500/20" />

//           {/* Middle orbit */}

//           <div className="absolute left-1/2 top-1/2 h-[190px] w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[6deg] rounded-[50%] border border-purple-500/20" />

//           {/* Inner orbit */}

//           <div className="absolute left-1/2 top-1/2 h-[120px] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-400/10" />

//           {/* Orbit glow */}

//           <div className="absolute left-1/2 top-1/2 h-[250px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

//           {/* ================= CENTER ================= */}

//           <motion.div
//             animate={{
//               scale: [1, 1.06, 1],
//               boxShadow: [
//                 "0 0 25px rgba(168,85,247,0.25)",
//                 "0 0 65px rgba(168,85,247,0.6)",
//                 "0 0 25px rgba(168,85,247,0.25)",
//               ],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/60 bg-[#060318] sm:h-32 sm:w-32 md:h-40 md:w-40"
//           >
//             <div className="absolute inset-3 rounded-full bg-purple-600/20 blur-xl" />

//             <span className="relative z-10 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
//               &lt;/&gt;
//             </span>
//           </motion.div>

//           {/* ================= ORBIT DOTS ================= */}

//           {Array.from({ length: 8 }).map((_, index) => (
//             <motion.span
//               key={index}
//               animate={{
//                 opacity: [0.25, 1, 0.25],
//                 scale: [0.7, 1.2, 0.7],
//               }}
//               transition={{
//                 duration: 2 + index * 0.2,
//                 repeat: Infinity,
//                 delay: index * 0.25,
//               }}
//               className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.9)]"
//               style={{
//                 transform: `rotate(${index * 45}deg) translateX(190px)`,
//               }}
//             />
//           ))}

//           {/* ================= TECH BADGES ================= */}

//           {orbitSkills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: 0.2 + index * 0.08,
//                 duration: 0.5,
//                 type: "spring",
//               }}
//               className={`absolute ${skill.position}`}
//             >
//               <motion.div
//                 animate={{
//                   y: [0, -7, 0],
//                 }}
//                 transition={{
//                   duration: 3 + index * 0.2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="group relative"
//               >
//                 {/* Badge glow */}

//                 <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur-xl opacity-40 transition duration-300 group-hover:opacity-100" />

//                 {/* Badge */}

//                 <div className="relative flex items-center gap-3 rounded-xl border border-purple-400/30 bg-[#0b0824]/90 px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/70 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] sm:px-5">
//                   <span
//                     className={`text-base font-bold ${skill.color}`}
//                   >
//                     {skill.icon}
//                   </span>

//                   <span className="whitespace-nowrap text-xs font-medium text-slate-200 sm:text-sm">
//                     {skill.name}
//                   </span>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ================================================= */}
//         {/* SKILL CATEGORY CARDS */}
//         {/* ================================================= */}

//         <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
//           {skillGroups.map((group, index) => (
//             <motion.div
//               key={group.title}
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.2,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.1,
//               }}
//               className="group relative"
//             >
//               {/* Card glow */}

//               <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-purple-500/30 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

//               {/* Card */}

//               <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-purple-400/30 group-hover:bg-white/[0.04]">

//                 {/* Header */}

//                 <div className="mb-5 flex items-start justify-between">
//                   <div className="flex items-center gap-4">

//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
//                       {group.icon}
//                     </div>

//                     <div>
//                       <h3 className="font-semibold text-white">
//                         {group.title}
//                       </h3>

//                       <p className="mt-1 text-xs leading-5 text-slate-500">
//                         {group.description}
//                       </p>
//                     </div>
//                   </div>

//                   <span className="text-purple-400">
//                     ✦
//                   </span>
//                 </div>

//                 {/* Divider */}

//                 <div className="mb-5 h-px bg-gradient-to-r from-purple-500/20 via-white/10 to-transparent" />

//                 {/* Skills */}

//                 <div className="space-y-3">
//                   {group.skills.map((skill, skillIndex) => (
//                     <motion.div
//                       key={skill}
//                       initial={{
//                         opacity: 0,
//                         x: -10,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       viewport={{
//                         once: true,
//                       }}
//                       transition={{
//                         delay: 0.15 + skillIndex * 0.04,
//                       }}
//                       className="flex items-center gap-3 text-sm text-slate-300 transition-colors duration-200 hover:text-white"
//                     >
//                       {/* Timeline dot */}

//                       <span className="relative flex h-2 w-2 shrink-0">
//                         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-30" />

//                         <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
//                       </span>

//                       {/* Icon */}

//                       {toolIcons[skill] && (
//                         <span className="text-slate-400">
//                           {toolIcons[skill]}
//                         </span>
//                       )}

//                       <span>{skill}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Bottom glow */}

//                 <div className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ================================================= */}
//         {/* BOTTOM MESSAGE */}
//         {/* ================================================= */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/[0.03] px-6 py-3 text-center text-sm text-slate-400 backdrop-blur-md"
//         >
//           <span className="text-purple-400">
//             ✦
//           </span>

//           <span>
//             Always learning. Always improving. Always building.
//           </span>

//           <span className="text-cyan-400">
//             ✦
//           </span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const orbitSkills = [
  {
    name: "React.js",
    position: "top-[5%] left-1/2 -translate-x-1/2",
    color: "text-cyan-400",
    icon: "⚛",
  },
  {
    name: "Next.js",
    position: "top-[15%] left-[2%] sm:left-[8%]",
    color: "text-white",
    icon: "N",
  },
  {
    name: "Node.js",
    position: "top-[15%] right-[2%] sm:right-[8%]",
    color: "text-green-400",
    icon: "⬡",
  },
  {
    name: "MongoDB",
    position: "top-[40%] left-[-1%] sm:left-[2%]",
    color: "text-green-400",
    icon: "◆",
  },
  {
    name: "Express.js",
    position: "top-[40%] right-[-1%] sm:right-[2%]",
    color: "text-white",
    icon: "ex",
  },
  {
    name: "TypeScript",
    position: "bottom-[19%] left-[5%] sm:left-[13%]",
    color: "text-blue-400",
    icon: "TS",
  },
  {
    name: "JavaScript",
    position: "bottom-[8%] left-1/2 -translate-x-1/2",
    color: "text-yellow-400",
    icon: "JS",
  },
  {
    name: "Redux",
    position: "bottom-[19%] right-[5%] sm:right-[13%]",
    color: "text-purple-400",
    icon: "◈",
  },
  {
    name: "Tailwind CSS",
    position: "bottom-[37%] right-[-1%] sm:right-[3%]",
    color: "text-cyan-400",
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
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
  },

  {
    title: "Tools & Deployment",
    description: "Tools that boost productivity",
    icon: <Rocket size={22} />,
    skills: ["GitHub", "Postman", "Vercel", "VS Code"],
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
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden px-4 py-20 text-white sm:px-6 sm:py-24 md:px-10 lg:px-16 lg:py-28"
    >
      {/* ================================================= */}
      {/* ATMOSPHERIC GLOWS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main purple glow */}
        <div className="absolute left-1/2 top-[20%] h-[300px] w-[450px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px] sm:h-[400px] sm:w-[600px] sm:blur-[130px] lg:h-[500px] lg:w-[700px] lg:blur-[150px]" />

        {/* Cyan glow */}
        <div className="absolute right-[-20%] top-[50%] h-[250px] w-[250px] rounded-full bg-cyan-500/5 blur-[100px] sm:h-[300px] sm:w-[300px] sm:blur-[120px] lg:h-[350px] lg:w-[350px] lg:blur-[130px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-10%] left-[10%] h-[250px] w-[450px] rounded-full bg-purple-600/10 blur-[110px] sm:h-[300px] sm:w-[550px] sm:blur-[130px] lg:left-[20%] lg:w-[600px] lg:blur-[150px]" />
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/5 px-4 py-2 text-xs text-purple-300 backdrop-blur-md sm:mb-5 sm:px-5 sm:text-sm">
            <span className="text-purple-400">✦</span>
            MY SKILLS
          </div>

          <h2 className="text-[clamp(2.25rem,7vw,4.5rem)] font-bold leading-tight tracking-tight">
            My Tech{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Universe
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
            Technologies, tools and skills I use to build modern,
            scalable and exceptional digital experiences.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 sm:mt-6 sm:w-20" />
        </motion.div>

        {/* ================================================= */}
        {/* TECHNOLOGY ORBIT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto mb-12 h-[350px] w-full max-w-6xl sm:mb-16 sm:h-[420px] md:h-[500px] lg:h-[520px]"
        >
          {/* Outer orbit */}

          <div className="absolute left-1/2 top-1/2 h-[210px] w-[92%] -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] rounded-[50%] border border-purple-500/20 sm:h-[250px] sm:w-[90%] md:h-[270px]" />

          {/* Middle orbit */}

          <div className="absolute left-1/2 top-1/2 h-[155px] w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[6deg] rounded-[50%] border border-purple-500/20 sm:h-[185px] sm:w-[70%] md:h-[200px]" />

          {/* Inner orbit */}

          <div className="absolute left-1/2 top-1/2 h-[100px] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-400/10 sm:h-[115px] sm:w-[50%] md:h-[125px]" />

          {/* Orbit glow */}

          <div className="absolute left-1/2 top-1/2 h-[180px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[70px] sm:h-[220px] sm:w-[380px] sm:blur-[90px] md:h-[250px] md:w-[450px] md:blur-[100px]" />

          {/* ================= CENTER ================= */}

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 0 25px rgba(168,85,247,0.25)",
                "0 0 65px rgba(168,85,247,0.6)",
                "0 0 25px rgba(168,85,247,0.25)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/60 bg-[#060318] sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-40 lg:w-40"
          >
            <div className="absolute inset-2 rounded-full bg-purple-600/20 blur-xl sm:inset-3" />

            <span className="relative z-10 text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              &lt;/&gt;
            </span>
          </motion.div>

          {/* ================= ORBIT DOTS ================= */}

          {Array.from({ length: 8 }).map((_, index) => (
            <motion.span
              key={index}
              animate={{
                opacity: [0.25, 1, 0.25],
                scale: [0.7, 1.2, 0.7],
              }}
              transition={{
                duration: 2 + index * 0.2,
                repeat: Infinity,
                delay: index * 0.25,
              }}
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)] sm:h-2 sm:w-2 sm:shadow-[0_0_15px_rgba(168,85,247,0.9)]"
              style={{
                transform: `rotate(${index * 45}deg) translateX(var(--orbit-radius))`,
              }}
            />
          ))}

          {/* ================= TECH BADGES ================= */}

          {orbitSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + index * 0.08,
                duration: 0.5,
                type: "spring",
              }}
              className={`absolute ${skill.position}`}
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group relative"
              >
                {/* Badge glow */}

                <div className="absolute inset-0 rounded-lg bg-purple-500/20 blur-lg opacity-40 transition duration-300 group-hover:opacity-100 sm:rounded-xl sm:blur-xl" />

                {/* Badge */}

                <div className="relative flex items-center gap-1.5 rounded-lg border border-purple-400/30 bg-[#0b0824]/90 px-2 py-2 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/70 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2.5 md:gap-3 md:px-4 md:py-3"
                >
                  <span
                    className={`text-xs font-bold sm:text-sm md:text-base ${skill.color}`}
                  >
                    {skill.icon}
                  </span>

                  <span className="whitespace-nowrap text-[9px] font-medium text-slate-200 sm:text-xs md:text-sm">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================================================= */}
        {/* SKILL CATEGORY CARDS */}
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

              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-purple-500/30 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

              {/* Card */}

              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-500 group-hover:border-purple-400/30 group-hover:bg-white/[0.04] sm:p-5 md:p-6"
              >
                {/* Header */}

                <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)] sm:h-12 sm:w-12">
                      {group.icon}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-white sm:text-base">
                        {group.title}
                      </h3>

                      <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-purple-400">
                    ✦
                  </span>
                </div>

                {/* Divider */}

                <div className="mb-4 h-px bg-gradient-to-r from-purple-500/20 via-white/10 to-transparent sm:mb-5" />

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
                      className="flex min-w-0 items-center gap-2 text-xs text-slate-300 transition-colors duration-200 hover:text-white sm:gap-3 sm:text-sm"
                    >
                      {/* Timeline dot */}

                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-30" />

                        <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
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

                <div className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
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
          className="mx-auto mt-8 flex w-full max-w-xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-purple-500/20 bg-purple-500/[0.03] px-4 py-3 text-center text-xs text-slate-400 backdrop-blur-md sm:mt-12 sm:flex-nowrap sm:gap-3 sm:rounded-full sm:px-6 sm:py-3 sm:text-sm"
        >
          <span className="text-purple-400">✦</span>

          <span>
            Always learning. Always improving. Always building.
          </span>

          <span className="text-cyan-400">✦</span>
        </motion.div>
      </div>
    </section>
  );
}