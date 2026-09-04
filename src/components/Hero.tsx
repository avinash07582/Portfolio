
// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   Code2,
//   Database,
//   Server,
// } from "lucide-react";

// import { FaGithub } from "react-icons/fa";

// import {
//   SiReact,
//   SiJavascript,
//   SiTypescript,
//   SiNodedotjs,
//   SiMongodb,
//   SiExpress,
// } from "react-icons/si";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden text-white"
//     >
//       {/* =====================================================
//           SPACE PORTAL LIGHT
//       ====================================================== */}

//       <div className="portal-light pointer-events-none absolute inset-x-0 top-0 z-[1]">

//         <div
//           className="
//             absolute left-1/2 top-[-220px]
//             h-[500px] w-[500px]
//             -translate-x-1/2
//             rounded-full
//             bg-purple-700/25
//             blur-[130px]
//             sm:top-[-260px]
//             sm:h-[600px] sm:w-[600px]
//             sm:blur-[150px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[5px]
//             h-[120px] w-[900px]
//             -translate-x-1/2
//             rounded-[50%]
//             bg-purple-600/25
//             blur-[70px]
//             sm:h-[150px] sm:w-[1200px]
//             lg:h-[170px] lg:w-[1500px]
//             lg:blur-[90px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[35px]
//             h-[70px] w-[850px]
//             -translate-x-1/2
//             rounded-[50%]
//             bg-violet-400/30
//             blur-[45px]
//             sm:h-[80px] sm:w-[1100px]
//             lg:h-[90px] lg:w-[1400px]
//             lg:blur-[55px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[67px]
//             h-[10px] w-[750px]
//             -translate-x-1/2
//             rounded-full
//             bg-white/80
//             blur-[12px]
//             sm:w-[950px]
//             lg:h-[12px] lg:w-[1150px]
//             lg:blur-[15px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[69px]
//             h-[2px] w-full
//             -translate-x-1/2
//             bg-white/70
//             shadow-[0_0_25px_10px_rgba(216,180,254,0.8)]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[-155px]
//             h-[340px] w-[340px]
//             -translate-x-1/2
//             rounded-full
//             border-[24px]
//             border-purple-500/40
//             blur-[18px]
//             shadow-[0_0_80px_30px_rgba(124,58,237,0.45)]
//             sm:top-[-180px]
//             sm:h-[400px] sm:w-[400px]
//             lg:top-[-180px]
//             lg:h-[410px] lg:w-[410px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[-150px]
//             h-[330px] w-[330px]
//             -translate-x-1/2
//             rounded-full
//             border-[10px]
//             border-purple-300/75
//             shadow-[0_0_20px_8px_rgba(255,255,255,0.7),0_0_50px_20px_rgba(192,132,252,0.9),0_0_110px_45px_rgba(124,58,237,0.65)]
//             sm:top-[-176px]
//             sm:h-[400px] sm:w-[400px]
//             sm:border-[14px]
//             lg:top-[-176px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[-146px]
//             h-[322px] w-[322px]
//             -translate-x-1/2
//             rounded-full
//             border-[4px]
//             border-white
//             shadow-[0_0_12px_5px_white,0_0_35px_12px_rgba(255,255,255,0.9),0_0_75px_25px_rgba(216,180,254,0.9)]
//             sm:top-[-171px]
//             sm:h-[390px] sm:w-[390px]
//             lg:top-[-171px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[75px]
//             h-[280px] w-[650px]
//             -translate-x-1/2
//             bg-gradient-to-b
//             from-purple-400/30
//             via-purple-600/12
//             to-transparent
//             blur-[60px]
//             sm:h-[300px] sm:w-[750px]
//             lg:h-[330px] lg:w-[800px]
//             lg:blur-[70px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[25px]
//             h-[120px] w-[1000px]
//             -translate-x-1/2
//             rounded-full
//             bg-purple-500/10
//             blur-[80px]
//             sm:w-[1400px]
//             lg:h-[150px] lg:w-[1800px]
//             lg:blur-[100px]
//           "
//         />
//       </div>


//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div
//         className="
//           relative z-10 mx-auto flex
//           min-h-[calc(100vh-80px)]
//           w-full max-w-[1500px]
//           items-center
//           px-4 pb-8 pt-24
//           sm:px-6 sm:pt-28
//           lg:px-12 lg:pt-20
//         "
//       >

//         <div
//           className="
//             grid w-full items-center
//             gap-12
//             lg:grid-cols-[0.9fr_1.1fr]
//             lg:gap-8
//           "
//         >

//           {/* =================================================
//               LEFT CONTENT
//           ================================================= */}

//           <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">

//             {/* Badge */}

//             <div
//               className="
//                 mb-6 inline-flex max-w-full items-center gap-2
//                 rounded-full border border-purple-400/40
//                 bg-purple-500/10 px-3 py-2
//                 text-xs text-purple-200
//                 shadow-[0_0_25px_rgba(139,92,246,0.15)]
//                 backdrop-blur-xl
//                 sm:mb-7 sm:px-4 sm:text-sm
//               "
//             >
//               <Sparkles
//                 size={14}
//                 className="shrink-0 text-purple-300 sm:h-[15px] sm:w-[15px]"
//               />

//               <span>Full-Stack Developer Portfolio</span>
//             </div>


//             {/* Heading */}

//             <h1
//               className="
//                 text-[clamp(2.8rem,11vw,4rem)]
//                 font-bold
//                 leading-[0.98]
//                 tracking-[-0.04em]
//                 sm:text-6xl
//                 lg:text-[76px]
//               "
//             >
//               Building{" "}

//               <span
//                 className="
//                   bg-gradient-to-r
//                   from-purple-400
//                   via-blue-400
//                   to-cyan-400
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 digital
//               </span>

//               <br />

//               experiences
//             </h1>


//             {/* Description */}

//             <p
//               className="
//                 mx-auto mt-6 max-w-xl
//                 text-sm leading-6 text-gray-400
//                 sm:mt-7 sm:text-base sm:leading-7
//                 md:text-lg
//                 lg:mx-0
//               "
//             >
//               I&apos;m a Full-Stack Developer focused on building modern,
//               responsive and scalable web applications using React, Next.js,
//               Node.js, Express and MongoDB.
//             </p>


//             {/* Buttons */}

//             <div
//               className="
//                 mt-8 flex flex-col gap-3
//                 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4
//                 lg:justify-start
//               "
//             >
//               <Link
//                 href="#projects"
//                 className="
//                   inline-flex min-h-[48px] items-center justify-center
//                   rounded-lg
//                   bg-gradient-to-r
//                   from-purple-600
//                   to-blue-600
//                   px-6 py-3
//                   text-sm font-medium
//                   shadow-[0_0_30px_rgba(124,58,237,0.4)]
//                   transition-all duration-300
//                   hover:-translate-y-1
//                   hover:shadow-[0_0_50px_rgba(124,58,237,0.7)]
//                   sm:px-7 sm:text-base
//                 "
//               >
//                 View Projects
//               </Link>

//               <Link
//                 href="#contact"
//                 className="
//                   inline-flex min-h-[48px] items-center justify-center
//                   rounded-lg
//                   border border-white/15
//                   bg-white/[0.04]
//                   px-6 py-3
//                   text-sm font-medium
//                   text-gray-200
//                   backdrop-blur-xl
//                   transition-all duration-300
//                   hover:-translate-y-1
//                   hover:bg-white/[0.08]
//                   sm:px-7 sm:text-base
//                 "
//               >
//                 Contact Me
//               </Link>
//             </div>


//             {/* Tech pills */}

//             <div
//               className="
//                 mt-8 flex flex-wrap justify-center gap-2
//                 sm:mt-10 sm:gap-3
//                 lg:justify-start
//               "
//             >
//               {[
//                 "React",
//                 "Next.js",
//                 "Node.js",
//                 "Express",
//                 "MongoDB",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="
//                     rounded-full
//                     border border-white/10
//                     bg-white/[0.035]
//                     px-3 py-1.5
//                     text-[11px] text-gray-400
//                     backdrop-blur-xl
//                     transition-all duration-300
//                     hover:border-purple-400/40
//                     hover:bg-purple-500/10
//                     hover:text-purple-300
//                     sm:text-xs
//                   "
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//           </div>


//           {/* =================================================
//               TECH ORBIT
//           ================================================= */}

//           <div
//             className="
//               relative mx-auto
//               h-[390px] w-full max-w-[390px]
//               sm:h-[480px] sm:max-w-[480px]
//               md:h-[540px] md:max-w-[540px]
//               lg:h-[560px] lg:max-w-none
//             "
//           >

//             {/* Outer orbit */}

//             <motion.div
//               className="
//                 absolute left-1/2 top-1/2
//                 h-[300px] w-[300px]
//                 -translate-x-1/2 -translate-y-1/2
//                 rounded-full
//                 border border-purple-300/[0.08]
//                 sm:h-[390px] sm:w-[390px]
//                 md:h-[460px] md:w-[460px]
//                 lg:h-[560px] lg:w-[560px]
//               "
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 55,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />

//             {/* Middle orbit */}

//             <motion.div
//               className="
//                 absolute left-1/2 top-1/2
//                 h-[230px] w-[230px]
//                 -translate-x-1/2 -translate-y-1/2
//                 rounded-full
//                 border border-white/[0.09]
//                 sm:h-[300px] sm:w-[300px]
//                 md:h-[350px] md:w-[350px]
//                 lg:h-[420px] lg:w-[420px]
//               "
//               animate={{ rotate: -360 }}
//               transition={{
//                 duration: 40,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />

//             {/* Inner orbit */}

//             <motion.div
//               className="
//                 absolute left-1/2 top-1/2
//                 h-[160px] w-[160px]
//                 -translate-x-1/2 -translate-y-1/2
//                 rounded-full
//                 border border-white/[0.08]
//                 sm:h-[210px] sm:w-[210px]
//                 md:h-[240px] md:w-[240px]
//                 lg:h-[280px] lg:w-[280px]
//               "
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />


//             {/* Cross */}

//             <div className="absolute left-1/2 top-[10%] h-[80%] w-px bg-white/[0.04]" />

//             <div className="absolute left-[10%] top-1/2 h-px w-[80%] bg-white/[0.04]" />


//             {/* Center */}

//             <motion.div
//               className="
//                 absolute left-1/2 top-1/2
//                 flex h-20 w-20
//                 -translate-x-1/2 -translate-y-1/2
//                 items-center justify-center
//                 rounded-[20px]
//                 border border-purple-300/30
//                 bg-purple-500/10
//                 shadow-[0_0_60px_rgba(124,58,237,0.3)]
//                 backdrop-blur-xl
//                 sm:h-24 sm:w-24
//                 md:h-28 md:w-28
//                 lg:h-32 lg:w-32
//                 lg:rounded-[28px]
//               "
//               initial={{ opacity: 0, scale: 0.4 }}
//               animate={{
//                 opacity: 1,
//                 scale: [1, 1.06, 1],
//                 boxShadow: [
//                   "0 0 60px rgba(124,58,237,0.3)",
//                   "0 0 90px rgba(124,58,237,0.5)",
//                   "0 0 60px rgba(124,58,237,0.3)",
//                 ],
//               }}
//               transition={{
//                 opacity: { duration: 0.6 },
//                 scale: {
//                   duration: 3.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//                 boxShadow: {
//                   duration: 3.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//               }}
//             >
//               <Code2
//                 className="
//                   h-8 w-8
//                   text-purple-300
//                   sm:h-10 sm:w-10
//                   lg:h-[52px] lg:w-[52px]
//                 "
//               />
//             </motion.div>


//             {/* =================================================
//                 TECH ICONS
//             ================================================= */}

//             <TechIcon
//               icon={
//                 <SiReact className="h-7 w-7 text-[#61DAFB] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
//               }
//               label="React"
//               className="left-[50%] top-[4%]"
//               index={0}
//             />

//             <TechIcon
//               icon={
//                 <SiJavascript className="h-7 w-7 text-[#F7DF1E] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
//               }
//               label="JavaScript"
//               className="right-[4%] top-[18%]"
//               index={1}
//             />

//             <TechIcon
//               icon={
//                 <SiNodedotjs className="h-7 w-7 text-[#339933] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
//               }
//               label="Node.js"
//               className="left-[15%] top-[27%]"
//               index={2}
//             />

//             <TechIcon
//               icon={
//                 <SiTypescript className="h-7 w-7 text-[#3178C6] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
//               }
//               label="TypeScript"
//               className="left-[44%] top-[40%]"
//               index={3}
//             />

//             <TechIcon
//               icon={
//                 <SiMongodb className="h-7 w-7 text-[#47A248] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
//               }
//               label="MongoDB"
//               className="right-[5%] top-[48%]"
//               index={4}
//             />

//             <TechIcon
//               icon={
//                 <FaGithub className="h-7 w-7 text-white sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
//               }
//               label="GitHub"
//               className="left-[43%] bottom-[8%]"
//               index={5}
//             />

//             <TechIcon
//               icon={
//                 <SiExpress className="h-7 w-7 text-white sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
//               }
//               label="Express.js"
//               className="left-[8%] bottom-[25%]"
//               index={6}
//             />

//             <TechIcon
//               icon={
//                 <Database className="h-7 w-7 text-cyan-400 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
//               }
//               label="Database"
//               className="right-[24%] bottom-[1%]"
//               index={7}
//             />

//             <TechIcon
//               icon={
//                 <Server className="h-7 w-7 text-purple-400 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
//               }
//               label="Backend"
//               className="right-[-1%] bottom-[24%]"
//               index={8}
//             />

//           </div>

//         </div>
//       </div>


//       {/* Bottom fade */}

//       <div
//         className="
//           pointer-events-none
//           absolute bottom-0 left-0 z-20
//           h-32 w-full
//           bg-gradient-to-t
//           from-[#030114]
//           to-transparent
//           sm:h-40
//         "
//       />
//     </section>
//   );
// }


// /* =========================================================
//    TECH ICON
// ========================================================= */

// type TechIconProps = {
//   icon: React.ReactNode;
//   label: string;
//   className: string;
//   index: number;
// };

// function TechIcon({
//   icon,
//   label,
//   className,
//   index,
// }: TechIconProps) {
//   const floatDuration = 3 + (index % 4) * 0.4;
//   const floatDelay = index * 0.15;

//   return (
//     <motion.div
//       className={`absolute ${className} group`}
//       initial={{ opacity: 0, scale: 0.3, y: 30 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{
//         delay: 0.15 + index * 0.08,
//         duration: 0.6,
//         type: "spring",
//         stiffness: 180,
//         damping: 14,
//       }}
//     >
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{
//           duration: floatDuration,
//           delay: floatDelay,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <motion.div
//           whileHover={{
//             scale: 1.18,
//             y: -6,
//             transition: {
//               duration: 0.25,
//               ease: "easeOut",
//             },
//           }}
//           className="
//             flex h-14 w-14
//             items-center justify-center
//             rounded-xl
//             border border-white/10
//             bg-white/[0.055]
//             shadow-[0_10px_40px_rgba(0,0,0,0.35)]
//             backdrop-blur-xl
//             transition-colors duration-500
//             group-hover:border-purple-400/40
//             group-hover:bg-purple-500/10
//             group-hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]
//             sm:h-16 sm:w-16
//             sm:rounded-2xl
//             lg:h-[76px] lg:w-[76px]
//           "
//         >
//           {icon}
//         </motion.div>

//         <p
//           className="
//             mt-1.5 text-center
//             text-[10px] text-gray-500
//             opacity-0
//             transition-all duration-300
//             group-hover:opacity-100
//             sm:text-xs
//             sm:mt-2
//           "
//         >
//           {label}
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Database,
  Server,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-[#030114] text-white
        transition-colors duration-500
        dark:bg-[#030114] dark:text-white
        light:bg-slate-50 light:text-slate-900
      "
    >
      {/* =====================================================
          SPACE PORTAL LIGHT
      ====================================================== */}

      <div className="portal-light pointer-events-none absolute inset-x-0 top-0 z-[1]">

        <div
          className="
            absolute left-1/2 top-[-220px]
            h-[500px] w-[500px]
            -translate-x-1/2
            rounded-full
            bg-purple-700/25
            blur-[130px]
            sm:top-[-260px]
            sm:h-[600px] sm:w-[600px]
            sm:blur-[150px]
          "
        />

        <div
          className="
            absolute left-1/2 top-[5px]
            h-[120px] w-[900px]
            -translate-x-1/2
            rounded-[50%]
            bg-purple-600/25
            blur-[70px]
            sm:h-[150px] sm:w-[1200px]
            lg:h-[170px] lg:w-[1500px]
            lg:blur-[90px]
          "
        />

        <div
          className="
            absolute left-1/2 top-[35px]
            h-[70px] w-[850px]
            -translate-x-1/2
            rounded-[50%]
            bg-violet-400/30
            blur-[45px]
            sm:h-[80px] sm:w-[1100px]
            lg:h-[90px] lg:w-[1400px]
            lg:blur-[55px]
          "
        />

        <div
          className="
            absolute left-1/2 top-[67px]
            h-[10px] w-[750px]
            -translate-x-1/2
            rounded-full
            bg-white/80
            blur-[12px]
            sm:w-[950px]
            lg:h-[12px] lg:w-[1150px]
            lg:blur-[15px]
          "
        />

        <div
          className="
            absolute left-1/2 top-[69px]
            h-[2px] w-full
            -translate-x-1/2
            bg-white/70
            shadow-[0_0_25px_10px_rgba(216,180,254,0.8)]
          "
        />

        <div
          className="
            absolute left-1/2 top-[-155px]
            h-[340px] w-[340px]
            -translate-x-1/2
            rounded-full
            border-[24px]
            border-purple-500/40
            blur-[18px]
            shadow-[0_0_80px_30px_rgba(124,58,237,0.45)]
            sm:top-[-180px]
            sm:h-[400px] sm:w-[400px]
            lg:top-[-180px]
            lg:h-[410px] lg:w-[410px]
          "
        />

        <div
          className="
            absolute left-1/2 top-[-150px]
            h-[330px] w-[330px]
            -translate-x-1/2
            rounded-full
            border-[10px]
            border-purple-300/75
            shadow-[0_0_20px_8px_rgba(255,255,255,0.7),0_0_50px_20px_rgba(192,132,252,0.9),0_0_110px_45px_rgba(124,58,237,0.65)]
            sm:top-[-176px]
            sm:h-[400px] sm:w-[400px]
            sm:border-[14px]
            lg:top-[-176px]
          "
        />

        <div
          className="
            absolute left-1/2 top-[-146px]
            h-[322px] w-[322px]
            -translate-x-1/2
            rounded-full
            border-[4px]
            border-white
            shadow-[0_0_12px_5px_white,0_0_35px_12px_rgba(255,255,255,0.9),0_0_75px_25px_rgba(216,180,254,0.9)]
            sm:top-[-171px]
            sm:h-[390px] sm:w-[390px]
            lg:top-[-171px]
          "
        />

        <div
          className="
            absolute left-1/2 top-[75px]
            h-[280px] w-[650px]
            -translate-x-1/2
            bg-gradient-to-b
            from-purple-400/30
            via-purple-600/12
            to-transparent
            blur-[60px]
            sm:h-[300px] sm:w-[750px]
            lg:h-[330px] lg:w-[800px]
            lg:blur-[70px]
          "
        />

        <div
          className="
            absolute left-1/2 top-[25px]
            h-[120px] w-[1000px]
            -translate-x-1/2
            rounded-full
            bg-purple-500/10
            blur-[80px]
            sm:w-[1400px]
            lg:h-[150px] lg:w-[1800px]
            lg:blur-[100px]
          "
        />
      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10 mx-auto flex
          min-h-[calc(100vh-80px)]
          w-full max-w-[1500px]
          items-center
          px-4 pb-8 pt-24
          sm:px-6 sm:pt-28
          lg:px-12 lg:pt-20
        "
      >

        <div
          className="
            grid w-full items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-8
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">

            {/* Badge */}

            <div
              className="
                mb-6 inline-flex max-w-full items-center gap-2
                rounded-full
                border border-purple-400/40
                bg-purple-500/10
                px-3 py-2
                text-xs text-purple-200
                shadow-[0_0_25px_rgba(139,92,246,0.15)]
                backdrop-blur-xl

                dark:border-purple-400/40
                dark:bg-purple-500/10
                dark:text-purple-200

                light:border-purple-300
                light:bg-purple-100
                light:text-purple-700

                sm:mb-7 sm:px-4 sm:text-sm
              "
            >
              <Sparkles
                size={14}
                className="
                  shrink-0
                  text-purple-300
                  light:text-purple-600
                  sm:h-[15px] sm:w-[15px]
                "
              />

              <span>Full-Stack Developer Portfolio</span>
            </div>


            {/* Heading */}

            <h1
              className="
                text-[clamp(2.8rem,11vw,4rem)]
                font-bold
                leading-[0.98]
                tracking-[-0.04em]

                dark:text-white
                light:text-slate-900

                sm:text-6xl
                lg:text-[76px]
              "
            >
              Building{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-purple-400
                  via-blue-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                digital
              </span>

              <br />

              experiences
            </h1>


            {/* Description */}

            <p
              className="
                mx-auto mt-6 max-w-xl
                text-sm leading-6
                text-gray-400

                dark:text-gray-400
                light:text-slate-600

                sm:mt-7 sm:text-base sm:leading-7
                md:text-lg
                lg:mx-0
              "
            >
              I&apos;m a Full-Stack Developer focused on building modern,
              responsive and scalable web applications using React, Next.js,
              Node.js, Express and MongoDB.
            </p>


            {/* Buttons */}

            <div
              className="
                mt-8 flex flex-col gap-3
                sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4
                lg:justify-start
              "
            >
              <Link
                href="#projects"
                className="
                  inline-flex min-h-[48px] items-center justify-center
                  rounded-lg
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-600
                  px-6 py-3
                  text-sm font-medium
                  text-white
                  shadow-[0_0_30px_rgba(124,58,237,0.4)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_50px_rgba(124,58,237,0.7)]
                  sm:px-7 sm:text-base
                "
              >
                View Projects
              </Link>

              <Link
                href="#contact"
                className="
                  inline-flex min-h-[48px] items-center justify-center
                  rounded-lg
                  border
                  border-white/15
                  bg-white/[0.04]
                  px-6 py-3
                  text-sm font-medium
                  text-gray-200
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.08]

                  dark:border-white/15
                  dark:bg-white/[0.04]
                  dark:text-gray-200

                  light:border-slate-300
                  light:bg-white/70
                  light:text-slate-700
                  light:hover:bg-white

                  sm:px-7 sm:text-base
                "
              >
                Contact Me
              </Link>
            </div>


            {/* Tech pills */}

            <div
              className="
                mt-8 flex flex-wrap justify-center gap-2
                sm:mt-10 sm:gap-3
                lg:justify-start
              "
            >
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.035]
                    px-3 py-1.5
                    text-[11px]
                    text-gray-400
                    backdrop-blur-xl
                    transition-all duration-300

                    dark:border-white/10
                    dark:bg-white/[0.035]
                    dark:text-gray-400

                    light:border-slate-200
                    light:bg-white/70
                    light:text-slate-600

                    hover:border-purple-400/40
                    hover:bg-purple-500/10
                    hover:text-purple-300

                    sm:text-xs
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>


          {/* =================================================
              TECH ORBIT
          ================================================= */}

          <div
            className="
              relative mx-auto
              h-[390px] w-full max-w-[390px]
              sm:h-[480px] sm:max-w-[480px]
              md:h-[540px] md:max-w-[540px]
              lg:h-[560px] lg:max-w-none
            "
          >

            {/* Outer orbit */}

            <motion.div
              className="
                absolute left-1/2 top-1/2
                h-[300px] w-[300px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                border border-purple-300/[0.08]

                dark:border-purple-300/[0.08]
                light:border-purple-500/15

                sm:h-[390px] sm:w-[390px]
                md:h-[460px] md:w-[460px]
                lg:h-[560px] lg:w-[560px]
              "
              animate={{ rotate: 360 }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Middle orbit */}

            <motion.div
              className="
                absolute left-1/2 top-1/2
                h-[230px] w-[230px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                border border-white/[0.09]

                dark:border-white/[0.09]
                light:border-purple-500/12

                sm:h-[300px] sm:w-[300px]
                md:h-[350px] md:w-[350px]
                lg:h-[420px] lg:w-[420px]
              "
              animate={{ rotate: -360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner orbit */}

            <motion.div
              className="
                absolute left-1/2 top-1/2
                h-[160px] w-[160px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                border border-white/[0.08]

                dark:border-white/[0.08]
                light:border-purple-500/10

                sm:h-[210px] sm:w-[210px]
                md:h-[240px] md:w-[240px]
                lg:h-[280px] lg:w-[280px]
              "
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />


            {/* Cross */}

            <div
              className="
                absolute left-1/2 top-[10%]
                h-[80%] w-px
                bg-white/[0.04]

                dark:bg-white/[0.04]
                light:bg-purple-900/10
              "
            />

            <div
              className="
                absolute left-[10%] top-1/2
                h-px w-[80%]
                bg-white/[0.04]

                dark:bg-white/[0.04]
                light:bg-purple-900/10
              "
            />


            {/* Center */}

            <motion.div
              className="
                absolute left-1/2 top-1/2
                flex h-20 w-20
                -translate-x-1/2 -translate-y-1/2
                items-center justify-center
                rounded-[20px]
                border border-purple-300/30
                bg-purple-500/10
                shadow-[0_0_60px_rgba(124,58,237,0.3)]
                backdrop-blur-xl

                dark:border-purple-300/30
                dark:bg-purple-500/10

                light:border-purple-300
                light:bg-purple-100/80

                sm:h-24 sm:w-24
                md:h-28 md:w-28
                lg:h-32 lg:w-32
                lg:rounded-[28px]
              "
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{
                opacity: 1,
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 60px rgba(124,58,237,0.3)",
                  "0 0 90px rgba(124,58,237,0.5)",
                  "0 0 60px rgba(124,58,237,0.3)",
                ],
              }}
              transition={{
                opacity: { duration: 0.6 },
                scale: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                boxShadow: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Code2
                className="
                  h-8 w-8
                  text-purple-300

                  dark:text-purple-300
                  light:text-purple-600

                  sm:h-10 sm:w-10
                  lg:h-[52px] lg:w-[52px]
                "
              />
            </motion.div>


            {/* =================================================
                TECH ICONS
            ================================================= */}

            <TechIcon
              icon={
                <SiReact className="h-7 w-7 text-[#61DAFB] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              }
              label="React"
              className="left-[50%] top-[4%]"
              index={0}
            />

            <TechIcon
              icon={
                <SiJavascript className="h-7 w-7 text-[#F7DF1E] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              }
              label="JavaScript"
              className="right-[4%] top-[18%]"
              index={1}
            />

            <TechIcon
              icon={
                <SiNodedotjs className="h-7 w-7 text-[#339933] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              }
              label="Node.js"
              className="left-[15%] top-[27%]"
              index={2}
            />

            <TechIcon
              icon={
                <SiTypescript className="h-7 w-7 text-[#3178C6] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              }
              label="TypeScript"
              className="left-[44%] top-[40%]"
              index={3}
            />

            <TechIcon
              icon={
                <SiMongodb className="h-7 w-7 text-[#47A248] sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              }
              label="MongoDB"
              className="right-[5%] top-[48%]"
              index={4}
            />

            <TechIcon
              icon={
                <FaGithub className="h-7 w-7 text-white sm:h-8 sm:w-8 lg:h-10 lg:w-10 dark:text-white light:text-slate-800" />
              }
              label="GitHub"
              className="left-[43%] bottom-[8%]"
              index={5}
            />

            <TechIcon
              icon={
                <SiExpress className="h-7 w-7 text-white sm:h-8 sm:w-8 lg:h-10 lg:w-10 dark:text-white light:text-slate-800" />
              }
              label="Express.js"
              className="left-[8%] bottom-[25%]"
              index={6}
            />

            <TechIcon
              icon={
                <Database className="h-7 w-7 text-cyan-400 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              }
              label="Database"
              className="right-[24%] bottom-[1%]"
              index={7}
            />

            <TechIcon
              icon={
                <Server className="h-7 w-7 text-purple-400 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              }
              label="Backend"
              className="right-[-1%] bottom-[24%]"
              index={8}
            />

          </div>

        </div>
      </div>


      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 z-20
          h-32 w-full
          bg-gradient-to-t
          from-[#030114]
          to-transparent

          dark:from-[#030114]
          light:from-slate-50

          sm:h-40
        "
      />
    </section>
  );
}


/* =========================================================
   TECH ICON
========================================================= */

type TechIconProps = {
  icon: React.ReactNode;
  label: string;
  className: string;
  index: number;
};

function TechIcon({
  icon,
  label,
  className,
  index,
}: TechIconProps) {
  const floatDuration = 3 + (index % 4) * 0.4;
  const floatDelay = index * 0.15;

  return (
    <motion.div
      className={`absolute ${className} group`}
      initial={{ opacity: 0, scale: 0.3, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 0.15 + index * 0.08,
        duration: 0.6,
        type: "spring",
        stiffness: 180,
        damping: 14,
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.18,
            y: -6,
            transition: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
          className="
            flex h-14 w-14
            items-center justify-center
            rounded-xl
            border border-white/10
            bg-white/[0.055]
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            transition-colors duration-500

            dark:border-white/10
            dark:bg-white/[0.055]

            light:border-slate-200
            light:bg-white/75
            light:shadow-[0_10px_40px_rgba(30,41,59,0.12)]

            group-hover:border-purple-400/40
            group-hover:bg-purple-500/10
            group-hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]

            sm:h-16 sm:w-16
            sm:rounded-2xl
            lg:h-[76px] lg:w-[76px]
          "
        >
          {icon}
        </motion.div>

        <p
          className="
            mt-1.5 text-center
            text-[10px]
            text-gray-500
            opacity-0
            transition-all duration-300

            dark:text-gray-500
            light:text-slate-500

            group-hover:opacity-100

            sm:text-xs
            sm:mt-2
          "
        >
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
}

