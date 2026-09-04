



// "use client";

// import { ReactNode, useEffect, useRef } from "react";
// import {
//   Layers3,
//   Rocket,
//   Sparkles,
// } from "lucide-react";
// import { FaLaptopCode } from "react-icons/fa";
// import Image from "next/image";

// export default function About() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const section = sectionRef.current;

//     if (!section) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = section.getBoundingClientRect();

//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       section.style.setProperty("--mouse-x", `${x}px`);
//       section.style.setProperty("--mouse-y", `${y}px`);
//     };

//     section.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       section.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="
//         about-section
//         relative
//         overflow-hidden
//         px-2
//         py-5
//         text-white
//         sm:px-6
//         sm:py-24
//         lg:px-12
//         lg:py-36
//       "
//     >
//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       {/* Purple atmosphere */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[-250px]
//           top-[100px]
//           h-[350px]
//           w-[350px]
//           rounded-full
//           bg-purple-600/[0.08]
//           blur-[110px]
//           sm:h-[450px]
//           sm:w-[450px]
//           sm:blur-[130px]
//         "
//       />

//       {/* Blue atmosphere */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[-220px]
//           bottom-[50px]
//           h-[320px]
//           w-[320px]
//           rounded-full
//           bg-blue-600/[0.06]
//           blur-[110px]
//           sm:h-[400px]
//           sm:w-[400px]
//           sm:blur-[130px]
//         "
//       />

//       {/* Mouse glow */}

//       <div className="about-mouse-glow pointer-events-none absolute inset-0" />

//       {/* Stars */}

//       <div className="about-stars pointer-events-none absolute inset-0 opacity-50" />


//       {/* =====================================================
//           CONTENT
//       ====================================================== */}

//       <div className="relative z-10 mx-auto w-full max-w-[1250px]">

//         {/* =================================================
//             SECTION HEADING
//         ================================================== */}

//         <div className="mb-14 text-center sm:mb-16 lg:mb-20">

//           {/* Badge */}

//           <div
//             className="
//               mb-4
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-purple-400/20
//               bg-purple-500/[0.05]
//               px-3
//               py-1.5
//               text-[10px]
//               uppercase
//               tracking-[0.18em]
//               text-purple-300
//               backdrop-blur-md
//               sm:mb-5
//               sm:px-4
//               sm:py-2
//               sm:text-xs
//               sm:tracking-[0.2em]
//             "
//           >
//             <Sparkles size={13} />

//             About Me
//           </div>


//           {/* Heading */}

//           <h2
//             className="
//               mx-auto
//               max-w-[900px]
//               text-[clamp(2rem,8vw,3.75rem)]
//               font-bold
//               leading-[1.05]
//               tracking-[-0.03em]
//             "
//           >
//             Turning ideas into{" "}

//             <span className="hero-gradient-text">
//               digital reality
//             </span>
//           </h2>


//           {/* Description */}

//           <p
//             className="
//               mx-auto
//               mt-5
//               max-w-[650px]
//               px-2
//               text-sm
//               leading-6
//               text-[#9996ad]
//               sm:mt-6
//               sm:px-0
//               sm:text-base
//               sm:leading-7
//               md:text-lg
//             "
//           >
//             I&apos;m a Full-Stack Developer who enjoys building
//             modern web applications, solving problems and
//             turning complex ideas into simple experiences.
//           </p>

//         </div>


//         {/* =================================================
//             MAIN ABOUT GRID
//         ================================================== */}

//         <div
//           className="
//             grid
//             items-center
//             gap-12
//             lg:grid-cols-[0.9fr_1.1fr]
//             lg:gap-14
//           "
//         >

//           {/* =================================================
//               LEFT — DEVELOPER CARD
//           ================================================= */}

//           <div
//             className="
//               relative
//               mx-auto
//               w-full
//               max-w-[470px]
//             "
//           >

//             {/* Outer glow */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 left-1/2
//                 top-1/2
//                 h-[280px]
//                 w-[280px]
//                 -translate-x-1/2
//                 -translate-y-1/2
//                 rounded-full
//                 bg-purple-600/[0.12]
//                 blur-[80px]
//                 sm:h-[350px]
//                 sm:w-[350px]
//                 sm:blur-[100px]
//               "
//             />


//             {/* Developer card */}

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[24px]
//                 border
//                 border-white/[0.09]
//                 bg-[#0b0920]/75
//                 p-5
//                 shadow-[0_30px_100px_rgba(0,0,0,0.35)]
//                 backdrop-blur-xl
//                 sm:rounded-[28px]
//                 sm:p-7
//                 md:p-8
//               "
//             >

//               {/* Card top glow */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   left-1/2
//                   top-[-100px]
//                   h-[200px]
//                   w-[320px]
//                   -translate-x-1/2
//                   rounded-full
//                   bg-purple-600/[0.12]
//                   blur-[70px]
//                   sm:h-[220px]
//                   sm:w-[400px]
//                   sm:blur-[80px]
//                 "
//               />


//               {/* Avatar */}

//               <div
//                 className="
//                   relative
//                   mx-auto
//                   mb-6
//                   flex
//                   h-28
//                   w-28
//                   items-center
//                   justify-center
//                   sm:mb-7
//                   sm:h-32
//                   sm:w-32
//                 "
//               >

//                 {/* Rotating ring */}

//                 <div
//                   className="
//                     about-avatar-ring
//                     absolute
//                     inset-0
//                     rounded-full
//                     border
//                     border-purple-400/30
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     inset-2
//                     rounded-full
//                     border
//                     border-cyan-400/10
//                   "
//                 />

//                 {/* Avatar */}

//                 <div
//                   className="
//                     flex
//                     h-20
//                     w-20
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-gradient-to-br
//                     from-purple-600
//                     via-blue-600
//                     to-cyan-400
//                     shadow-[0_0_50px_rgba(124,58,237,0.45)]
//                     sm:h-24
//                     sm:w-24
//                   "
//                 >
//                   <Image
//                     src="/profile.png"
//                     alt="Avinash Kumar"
//                     width={96}
//                     height={96}
//                     className="
//                       h-full
//                       w-full
//                       rounded-full
//                       object-cover
//                       p-[3px]
//                     "
//                   />
//                 </div>

//               </div>


//               {/* Name */}

//               <div className="relative text-center">

//                 <h3 className="text-xl font-semibold sm:text-2xl">
//                   Avinash Upadhyay
//                 </h3>

//                 <p className="mt-1.5 text-xs text-purple-300 sm:mt-2 sm:text-sm">
//                   Full-Stack Developer
//                 </p>

//               </div>


//               {/* Divider */}

//               <div className="my-5 h-px bg-white/[0.07] sm:my-7" />


//               {/* Small info */}

//               <div className="grid grid-cols-2 gap-2.5 sm:gap-4">

//                 <Info
//                   label="Based in"
//                   value="India"
//                 />

//                 <Info
//                   label="Experience"
//                   value="Developer"
//                 />

//                 <Info
//                   label="Focus"
//                   value="Full Stack"
//                 />

//                 <Info
//                   label="Available"
//                   value="For Work"
//                 />

//               </div>


//               {/* Status */}

//               <div
//                 className="
//                   mt-5
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-emerald-400/15
//                   bg-emerald-400/[0.04]
//                   py-2.5
//                   text-[11px]
//                   text-emerald-300
//                   sm:mt-7
//                   sm:py-3
//                   sm:text-xs
//                 "
//               >

//                 <span
//                   className="
//                     h-1.5
//                     w-1.5
//                     rounded-full
//                     bg-emerald-400
//                     shadow-[0_0_10px_rgba(52,211,153,0.8)]
//                     sm:h-2
//                     sm:w-2
//                   "
//                 />

//                 Open to opportunities

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//               RIGHT — CONTENT
//           ================================================== */}

//           <div className="w-full">

//             <span
//               className="
//                 text-xs
//                 font-medium
//                 uppercase
//                 tracking-[0.16em]
//                 text-purple-400
//                 sm:text-sm
//                 sm:tracking-[0.18em]
//               "
//             >
//               Who I am
//             </span>


//             <h3
//               className="
//                 mt-3
//                 text-[clamp(1.8rem,6vw,2.5rem)]
//                 font-semibold
//                 leading-[1.15]
//                 sm:mt-4
//                 sm:text-4xl
//               "
//             >
//               I build websites that are
//               <span className="text-purple-400">
//                 {" "}beautiful,
//               </span>{" "}
//               functional and scalable.
//             </h3>


//             {/* Description */}

//             <div
//               className="
//                 mt-5
//                 space-y-4
//                 text-sm
//                 leading-6
//                 text-[#9996ad]
//                 sm:mt-6
//                 sm:text-[15px]
//                 sm:leading-7
//                 md:text-base
//               "
//             >

//               <p>
//                 I&apos;m a B.Tech graduate and Full-Stack Developer
//                 passionate about creating modern web applications
//                 with clean interfaces and reliable backend systems.
//               </p>

//               <p>
//                 My primary stack includes React, Next.js, Node.js,
//                 Express and MongoDB. I enjoy working across the
//                 entire development process — from designing the
//                 interface to building APIs and connecting databases.
//               </p>

//               <p>
//                 I&apos;m constantly learning new technologies and
//                 improving the way I write code, design applications
//                 and solve real-world problems.
//               </p>

//             </div>


//             {/* =================================================
//                 SKILL CARDS
//             ================================================== */}

//             <div
//               className="
//                 mt-8
//                 grid
//                 gap-3
//                 sm:mt-10
//                 sm:grid-cols-3
//                 sm:gap-4
//               "
//             >

//               <AboutCard
//                 icon={<FaLaptopCode size={21} />}
//                 title="Clean Code"
//                 text="Readable and maintainable code."
//               />

//               <AboutCard
//                 icon={<Layers3 size={21} />}
//                 title="Full Stack"
//                 text="Frontend, backend and databases."
//               />

//               <AboutCard
//                 icon={<Rocket size={21} />}
//                 title="Performance"
//                 text="Fast and responsive experiences."
//               />

//             </div>


//             {/* Bottom line */}

//             <div className="mt-8 flex items-center gap-3 sm:mt-10 sm:gap-4">

//               <div
//                 className="
//                   h-px
//                   w-10
//                   shrink-0
//                   bg-gradient-to-r
//                   from-purple-500
//                   to-transparent
//                   sm:w-16
//                 "
//               />

//               <span
//                 className="
//                   text-[9px]
//                   uppercase
//                   tracking-[0.15em]
//                   text-gray-600
//                   sm:text-xs
//                   sm:tracking-[0.2em]
//                 "
//               >
//                 Always building. Always learning.
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


// /* ============================================================
//    INFO
// ============================================================ */

// function Info({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div
//       className="
//         min-w-0
//         rounded-xl
//         border
//         border-white/[0.06]
//         bg-white/[0.02]
//         p-3
//         sm:p-4
//       "
//     >
//       <p
//         className="
//           truncate
//           text-[9px]
//           uppercase
//           tracking-wider
//           text-gray-600
//           sm:text-[11px]
//         "
//       >
//         {label}
//       </p>

//       <p
//         className="
//           mt-1
//           truncate
//           text-xs
//           font-medium
//           text-gray-300
//           sm:text-sm
//         "
//       >
//         {value}
//       </p>
//     </div>
//   );
// }


// /* ============================================================
//    ABOUT CARD
// ============================================================ */

// function AboutCard({
//   icon,
//   title,
//   text,
// }: {
//   icon: ReactNode;
//   title: string;
//   text: string;
// }) {
//   return (
//     <div
//       className="
//         group
//         rounded-xl
//         border
//         border-white/[0.07]
//         bg-white/[0.02]
//         p-4
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:border-purple-400/25
//         hover:bg-purple-500/[0.04]
//         sm:rounded-2xl
//         sm:p-5
//       "
//     >

//       <div
//         className="
//           mb-3
//           flex
//           h-9
//           w-9
//           items-center
//           justify-center
//           rounded-lg
//           border
//           border-purple-400/20
//           bg-purple-500/[0.07]
//           text-purple-300
//           transition-all
//           duration-300
//           group-hover:scale-110
//           group-hover:bg-purple-500/[0.12]
//           sm:mb-4
//           sm:h-10
//           sm:w-10
//           sm:rounded-xl
//         "
//       >
//         {icon}
//       </div>

//       <h4 className="text-sm font-semibold text-gray-200">
//         {title}
//       </h4>

//       <p className="mt-1.5 text-[11px] leading-5 text-gray-600 sm:mt-2 sm:text-xs">
//         {text}
//       </p>

//     </div>
//   );
// }

"use client";

import { ReactNode, useEffect, useRef } from "react";
import {
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";
import { FaLaptopCode } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      section.style.setProperty("--mouse-x", `${x}px`);
      section.style.setProperty("--mouse-y", `${y}px`);
    };

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        about-section
        relative
        overflow-hidden
        px-2
        py-5
        text-slate-900
        dark:text-white
        sm:px-6
        sm:py-24
        lg:px-12
        lg:py-36
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Purple atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-250px]
          top-[100px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-purple-600/[0.10]
          blur-[110px]
          dark:bg-purple-600/[0.08]
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[130px]
        "
      />

      {/* Blue atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-220px]
          bottom-[50px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-600/[0.08]
          blur-[110px]
          dark:bg-blue-600/[0.06]
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[130px]
        "
      />

      {/* Mouse glow */}

      <div className="about-mouse-glow pointer-events-none absolute inset-0" />

      {/* Stars */}

      <div
        className="
          about-stars
          pointer-events-none
          absolute
          inset-0
          opacity-10
          dark:opacity-50
        "
      />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1250px]">

        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <div className="mb-14 text-center sm:mb-16 lg:mb-20">

          {/* Badge */}

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
              px-3
              py-1.5
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-purple-600
              backdrop-blur-md
              dark:border-purple-400/20
              dark:bg-purple-500/[0.05]
              dark:text-purple-300
              sm:mb-5
              sm:px-4
              sm:py-2
              sm:text-xs
              sm:tracking-[0.2em]
            "
          >
            <Sparkles size={13} />

            About Me
          </div>


          {/* Heading */}

          <h2
            className="
              mx-auto
              max-w-[900px]
              text-[clamp(2rem,8vw,3.75rem)]
              font-bold
              leading-[1.05]
              tracking-[-0.03em]
            "
          >
            Turning ideas into{" "}

            <span className="hero-gradient-text">
              digital reality
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]
              px-2
              text-sm
              leading-6
              text-slate-600
              dark:text-[#9996ad]
              sm:mt-6
              sm:px-0
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            I&apos;m a Full-Stack Developer who enjoys building
            modern web applications, solving problems and
            turning complex ideas into simple experiences.
          </p>

        </div>


        {/* =================================================
            MAIN ABOUT GRID
        ================================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-14
          "
        >

          {/* =================================================
              LEFT — DEVELOPER CARD
          ================================================= */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[470px]
            "
          >

            {/* Outer glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-purple-600/[0.10]
                blur-[80px]
                dark:bg-purple-600/[0.12]
                sm:h-[350px]
                sm:w-[350px]
                sm:blur-[100px]
              "
            />


            {/* Developer card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-slate-200
                bg-white/75
                p-5
                shadow-[0_30px_100px_rgba(15,23,42,0.12)]
                backdrop-blur-xl
                dark:border-white/[0.09]
                dark:bg-[#0b0920]/75
                dark:shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                sm:rounded-[28px]
                sm:p-7
                md:p-8
              "
            >

              {/* Card top glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[-100px]
                  h-[200px]
                  w-[320px]
                  -translate-x-1/2
                  rounded-full
                  bg-purple-600/[0.08]
                  blur-[70px]
                  dark:bg-purple-600/[0.12]
                  sm:h-[220px]
                  sm:w-[400px]
                  sm:blur-[80px]
                "
              />


              {/* Avatar */}

              <div
                className="
                  relative
                  mx-auto
                  mb-6
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  sm:mb-7
                  sm:h-32
                  sm:w-32
                "
              >

                {/* Rotating ring */}

                <div
                  className="
                    about-avatar-ring
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-purple-400/40
                    dark:border-purple-400/30
                  "
                />

                <div
                  className="
                    absolute
                    inset-2
                    rounded-full
                    border
                    border-cyan-400/20
                    dark:border-cyan-400/10
                  "
                />

                {/* Avatar */}

                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-purple-600
                    via-blue-600
                    to-cyan-400
                    shadow-[0_0_50px_rgba(124,58,237,0.30)]
                    dark:shadow-[0_0_50px_rgba(124,58,237,0.45)]
                    sm:h-24
                    sm:w-24
                  "
                >
                  <Image
                    src="/profile.png"
                    alt="Avinash Kumar"
                    width={96}
                    height={96}
                    className="
                      h-full
                      w-full
                      rounded-full
                      object-cover
                      p-[3px]
                    "
                  />
                </div>

              </div>


              {/* Name */}

              <div className="relative text-center">

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                  Avinash Upadhyay
                </h3>

                <p className="mt-1.5 text-xs text-purple-600 dark:text-purple-300 sm:mt-2 sm:text-sm">
                  Full-Stack Developer
                </p>

              </div>


              {/* Divider */}

              <div className="my-5 h-px bg-slate-200 dark:bg-white/[0.07] sm:my-7" />


              {/* Small info */}

              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">

                <Info
                  label="Based in"
                  value="India"
                />

                <Info
                  label="Experience"
                  value="Developer"
                />

                <Info
                  label="Focus"
                  value="Full Stack"
                />

                <Info
                  label="Available"
                  value="For Work"
                />

              </div>


              {/* Status */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-emerald-400/[0.05]
                  py-2.5
                  text-[11px]
                  text-emerald-600
                  dark:border-emerald-400/15
                  dark:bg-emerald-400/[0.04]
                  dark:text-emerald-300
                  sm:mt-7
                  sm:py-3
                  sm:text-xs
                "
              >

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_10px_rgba(52,211,153,0.8)]
                    sm:h-2
                    sm:w-2
                  "
                />

                Open to opportunities

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — CONTENT
          ================================================== */}

          <div className="w-full">

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.16em]
                text-purple-600
                dark:text-purple-400
                sm:text-sm
                sm:tracking-[0.18em]
              "
            >
              Who I am
            </span>


            <h3
              className="
                mt-3
                text-[clamp(1.8rem,6vw,2.5rem)]
                font-semibold
                leading-[1.15]
                text-slate-900
                dark:text-white
                sm:mt-4
                sm:text-4xl
              "
            >
              I build websites that are
              <span className="text-purple-600 dark:text-purple-400">
                {" "}beautiful,
              </span>{" "}
              functional and scalable.
            </h3>


            {/* Description */}

            <div
              className="
                mt-5
                space-y-4
                text-sm
                leading-6
                text-slate-600
                dark:text-[#9996ad]
                sm:mt-6
                sm:text-[15px]
                sm:leading-7
                md:text-base
              "
            >

              <p>
                I&apos;m a B.Tech graduate and Full-Stack Developer
                passionate about creating modern web applications
                with clean interfaces and reliable backend systems.
              </p>

              <p>
                My primary stack includes React, Next.js, Node.js,
                Express and MongoDB. I enjoy working across the
                entire development process — from designing the
                interface to building APIs and connecting databases.
              </p>

              <p>
                I&apos;m constantly learning new technologies and
                improving the way I write code, design applications
                and solve real-world problems.
              </p>

            </div>


            {/* =================================================
                SKILL CARDS
            ================================================== */}

            <div
              className="
                mt-8
                grid
                gap-3
                sm:mt-10
                sm:grid-cols-3
                sm:gap-4
              "
            >

              <AboutCard
                icon={<FaLaptopCode size={21} />}
                title="Clean Code"
                text="Readable and maintainable code."
              />

              <AboutCard
                icon={<Layers3 size={21} />}
                title="Full Stack"
                text="Frontend, backend and databases."
              />

              <AboutCard
                icon={<Rocket size={21} />}
                title="Performance"
                text="Fast and responsive experiences."
              />

            </div>


            {/* Bottom line */}

            <div className="mt-8 flex items-center gap-3 sm:mt-10 sm:gap-4">

              <div
                className="
                  h-px
                  w-10
                  shrink-0
                  bg-gradient-to-r
                  from-purple-500
                  to-transparent
                  sm:w-16
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                  dark:text-gray-600
                  sm:text-xs
                  sm:tracking-[0.2em]
                "
              >
                Always building. Always learning.
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   INFO
============================================================ */

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        min-w-0
        rounded-xl
        border
        border-slate-200
        bg-slate-50/70
        p-3
        dark:border-white/[0.06]
        dark:bg-white/[0.02]
        sm:p-4
      "
    >
      <p
        className="
          truncate
          text-[9px]
          uppercase
          tracking-wider
          text-slate-500
          dark:text-gray-600
          sm:text-[11px]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          truncate
          text-xs
          font-medium
          text-slate-700
          dark:text-gray-300
          sm:text-sm
        "
      >
        {value}
      </p>
    </div>
  );
}


/* ============================================================
   ABOUT CARD
============================================================ */

function AboutCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        rounded-xl
        border
        border-slate-200
        bg-white/70
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-purple-400/30
        hover:bg-purple-500/[0.04]
        dark:border-white/[0.07]
        dark:bg-white/[0.02]
        dark:hover:border-purple-400/25
        dark:hover:bg-purple-500/[0.04]
        sm:rounded-2xl
        sm:p-5
      "
    >

      <div
        className="
          mb-3
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-purple-400/30
          bg-purple-500/[0.07]
          text-purple-600
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-purple-500/[0.12]
          dark:border-purple-400/20
          dark:text-purple-300
          sm:mb-4
          sm:h-10
          sm:w-10
          sm:rounded-xl
        "
      >
        {icon}
      </div>

      <h4 className="text-sm font-semibold text-slate-800 dark:text-gray-200">
        {title}
      </h4>

      <p className="mt-1.5 text-[11px] leading-5 text-slate-500 dark:text-gray-600 sm:mt-2 sm:text-xs">
        {text}
      </p>

    </div>
  );
}
