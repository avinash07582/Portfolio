// // "use client";

// // import { motion } from "framer-motion";

// // import {
// //   FaGithub,
// //   FaLinkedinIn,
// //   FaInstagram,
// //   FaEnvelope,
// //   FaReact,
// //   FaNodeJs,
// // } from "react-icons/fa";

// // import { SiNextdotjs } from "react-icons/si";

// // const EMAIL = "avinashkmr5528@gmail.com";

// // const gmailLink =
// //   `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

// // export default function Contact() {
// //   return (
// //     <section
// //       id="contact"
// //       className="relative min-h-screen overflow-hidden  px-6 py-24 text-white md:px-10 lg:px-16"
// //     >
// //       {/* ================================================= */}
// //       {/* ATMOSPHERIC GLOWS */}
// //       {/* StarBackground is already global */}
// //       {/* ================================================= */}

// //       <div className="pointer-events-none absolute inset-0 overflow-hidden">

// //         {/* Main purple glow */}

// //         <div className="absolute left-1/2 top-[20%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

// //         {/* Cyan glow */}

// //         <div className="absolute right-[-10%] top-[50%] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[140px]" />

// //         {/* Bottom purple glow */}

// //         <div className="absolute bottom-[-15%] left-[10%] h-[400px] w-[500px] rounded-full bg-purple-700/10 blur-[150px]" />
// //       </div>

// //       {/* ================================================= */}
// //       {/* MAIN CONTENT */}
// //       {/* ================================================= */}

// //       <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl items-center">
// //         <div className="w-full">

// //           {/* ================================================= */}
// //           {/* BADGE */}
// //           {/* ================================================= */}

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7 }}
// //             className="mb-8 text-center"
// //           >
// //             <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/[0.06] px-5 py-2 text-xs font-medium tracking-[0.2em] text-purple-300 backdrop-blur-xl">
// //               <span className="text-purple-400">✦</span>

// //               LET'S CONNECT
// //             </div>
// //           </motion.div>

// //           {/* ================================================= */}
// //           {/* HEADING */}
// //           {/* ================================================= */}

// //           <motion.div
// //             initial={{ opacity: 0, y: 35 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.9, delay: 0.1 }}
// //             className="text-center"
// //           >
// //             <h2 className="mx-auto max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
// //               Let's create something
// //               <br />

// //               <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
// //                 extraordinary.
// //               </span>
// //             </h2>

// //             <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
// //               Have a project in mind, an opportunity to discuss, or simply
// //               want to connect? My inbox is always open.
// //             </p>
// //           </motion.div>

// //           {/* ================================================= */}
// //           {/* GMAIL CARD */}
// //           {/* ================================================= */}

// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //               y: 40,
// //               scale: 0.97,
// //             }}
// //             whileInView={{
// //               opacity: 1,
// //               y: 0,
// //               scale: 1,
// //             }}
// //             viewport={{ once: true }}
// //             transition={{
// //               duration: 0.8,
// //               delay: 0.25,
// //             }}
// //             className="mx-auto mt-12 max-w-2xl"
// //           >
// //             <a
// //               href={gmailLink}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="group relative block"
// //             >

// //               {/* Outer glow */}

// //               <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/20 via-fuchsia-500/20 to-cyan-500/20 opacity-50 blur-xl transition duration-700 group-hover:opacity-100" />

// //               {/* Card */}

// //               <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 group-hover:border-purple-400/40 group-hover:bg-white/[0.05] sm:p-8">

// //                 {/* Background glow */}

// //                 <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-500/10 blur-[80px] transition duration-700 group-hover:bg-purple-500/20" />

// //                 <div className="relative flex flex-col items-center gap-6 sm:flex-row">

// //                   {/* Gmail icon */}

// //                   <motion.div
// //                     whileHover={{
// //                       scale: 1.08,
// //                       rotate: -4,
// //                     }}
// //                     className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
// //                   >
// //                     <FaEnvelope size={28} />
// //                   </motion.div>

// //                   {/* Email */}

// //                   <div className="min-w-0 flex-1 text-center sm:text-left">
// //                     <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
// //                       Send me an email
// //                     </p>

// //                     <p className="mt-2 truncate text-base font-medium text-white sm:text-lg">
// //                       {EMAIL}
// //                     </p>

// //                     <p className="mt-1 text-xs text-slate-500">
// //                       Opens Gmail compose
// //                     </p>
// //                   </div>

// //                   {/* Arrow */}

// //                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-purple-400/40 group-hover:text-purple-300">
// //                     <span className="text-xl">↗</span>
// //                   </div>

// //                 </div>
// //               </div>
// //             </a>
// //           </motion.div>

// //           {/* ================================================= */}
// //           {/* SOCIAL LINKS */}
// //           {/* ================================================= */}

// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //               y: 25,
// //             }}
// //             whileInView={{
// //               opacity: 1,
// //               y: 0,
// //             }}
// //             viewport={{ once: true }}
// //             transition={{
// //               duration: 0.7,
// //               delay: 0.4,
// //             }}
// //             className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-between gap-6 sm:flex-row"
// //           >

// //             {/* Social icons */}

// //             <div className="flex items-center gap-3">

// //               {/* GitHub */}

// //               <a
// //                 href="https://github.com/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="GitHub"
// //                 className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/5 hover:text-white"
// //               >
// //                 <FaGithub
// //                   size={19}
// //                   className="transition-transform duration-300 group-hover:scale-110"
// //                 />
// //               </a>

// //               {/* LinkedIn */}

// //               <a
// //                 href="https://linkedin.com/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="LinkedIn"
// //                 className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
// //               >
// //                 <FaLinkedinIn
// //                   size={18}
// //                   className="transition-transform duration-300 group-hover:scale-110"
// //                 />
// //               </a>

// //               {/* Instagram */}

// //               <a
// //                 href="https://instagram.com/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="Instagram"
// //                 className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-400"
// //               >
// //                 <FaInstagram
// //                   size={19}
// //                   className="transition-transform duration-300 group-hover:scale-110"
// //                 />
// //               </a>

// //               {/* Email */}

// //               <a
// //                 href={gmailLink}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="Send me an email"
// //                 className="group flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.04] text-purple-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
// //               >
// //                 <FaEnvelope
// //                   size={18}
// //                   className="transition-transform duration-300 group-hover:scale-110"
// //                 />
// //               </a>

// //             </div>

// //             {/* Availability */}

// //             <div className="flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-500/[0.04] px-4 py-2 backdrop-blur-md">
// //               <span className="relative flex h-2.5 w-2.5">

// //                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

// //                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />

// //               </span>

// //               <span className="text-xs text-slate-400">
// //                 Available for opportunities
// //               </span>
// //             </div>

// //           </motion.div>

// //           {/* ================================================= */}
// //           {/* DIVIDER */}
// //           {/* ================================================= */}

// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //               scaleX: 0,
// //             }}
// //             whileInView={{
// //               opacity: 1,
// //               scaleX: 1,
// //             }}
// //             viewport={{ once: true }}
// //             transition={{
// //               duration: 0.8,
// //               delay: 0.5,
// //             }}
// //             className="mx-auto mt-16 h-px max-w-2xl origin-center bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
// //           />

// //           {/* ================================================= */}
// //           {/* FOOTER */}
// //           {/* ================================================= */}

// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //             }}
// //             whileInView={{
// //               opacity: 1,
// //             }}
// //             viewport={{ once: true }}
// //             transition={{
// //               duration: 0.7,
// //               delay: 0.6,
// //             }}
// //             className="mt-8 text-center"
// //           >
// //             <p className="text-xs tracking-wide text-slate-600">
// //               Built with{" "}
// //               <span className="text-cyan-400">
// //                 <FaReact className="mx-1 inline" />
// //                 React
// //               </span>

// //               {" · "}

// //               <span className="text-white">
// //                 <SiNextdotjs className="mx-1 inline" />
// //                 Next.js
// //               </span>

// //               {" · "}

// //               <span className="text-green-400">
// //                 <FaNodeJs className="mx-1 inline" />
// //                 Node.js
// //               </span>
// //             </p>

// //             <p className="mt-3 text-xs text-slate-700">
// //               © {new Date().getFullYear()} Avinash Kumar. All rights reserved.
// //             </p>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";

// import {
//   FaGithub,
//   FaLinkedinIn,
//   FaInstagram,
//   FaEnvelope,
//   FaReact,
//   FaNodeJs,
// } from "react-icons/fa";

// import { SiNextdotjs } from "react-icons/si";

// const EMAIL = "avinashkmr5528@gmail.com";

// /* =========================================================
//    GMAIL HANDLER
//    Mobile  → Try Gmail App
//    Desktop → Gmail Web
//    ========================================================= */

// const openGmail = () => {
//   const subject = encodeURIComponent("Hello Avinash");
//   const body = encodeURIComponent("Hi Avinash, ");

//   // Gmail mobile app
//   const gmailAppUrl = `googlegmail://co?to=${EMAIL}&subject=${subject}&body=${body}`;

//   // Gmail browser fallback
//   const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`;

//   // Try opening Gmail app
//   window.location.href = gmailAppUrl;

//   // Fallback to Gmail website
//   setTimeout(() => {
//     window.open(gmailWebUrl, "_blank", "noopener,noreferrer");
//   }, 700);
// };

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen overflow-hidden px-4 py-20 text-white sm:px-6 sm:py-24 md:px-10 lg:px-16 lg:py-28"
//     >
//       {/* ================================================= */}
//       {/* ATMOSPHERIC GLOWS */}
//       {/* ================================================= */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Main purple glow */}
//         <div className="absolute left-1/2 top-[15%] h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px] sm:h-[400px] sm:w-[550px] sm:blur-[130px] lg:h-[500px] lg:w-[700px] lg:blur-[160px]" />

//         {/* Cyan glow */}
//         <div className="absolute right-[-20%] top-[50%] h-[250px] w-[250px] rounded-full bg-cyan-500/5 blur-[100px] sm:h-[300px] sm:w-[300px] sm:blur-[120px] lg:right-[-10%] lg:h-[350px] lg:w-[350px] lg:blur-[140px]" />

//         {/* Bottom purple glow */}
//         <div className="absolute bottom-[-15%] left-[5%] h-[300px] w-[400px] rounded-full bg-purple-700/10 blur-[110px] sm:h-[350px] sm:w-[450px] sm:blur-[130px] lg:left-[10%] lg:h-[400px] lg:w-[500px] lg:blur-[150px]" />
//       </div>

//       {/* ================================================= */}
//       {/* MAIN CONTENT */}
//       {/* ================================================= */}

//       <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl items-center">
//         <div className="w-full">

//           {/* ================================================= */}
//           {/* BADGE */}
//           {/* ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//             }}
//             className="mb-6 text-center sm:mb-8"
//           >
//             <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/[0.06] px-4 py-2 text-[10px] font-medium tracking-[0.18em] text-purple-300 backdrop-blur-xl sm:px-5 sm:text-xs sm:tracking-[0.2em]">
//               <span className="text-purple-400">✦</span>

//               LET&apos;S CONNECT
//             </div>
//           </motion.div>

//           {/* ================================================= */}
//           {/* HEADING */}
//           {/* ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 35,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.9,
//               delay: 0.1,
//             }}
//             className="text-center"
//           >
//             <h2 className="mx-auto max-w-5xl px-1 text-[clamp(2.25rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight">
//               Let&apos;s create something
//               <br />

//               <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
//                 extraordinary.
//               </span>
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-6 text-slate-400 sm:mt-7 sm:text-base sm:leading-7 md:text-lg">
//               Have a project in mind, an opportunity to discuss, or simply
//               want to connect? My inbox is always open.
//             </p>
//           </motion.div>

//           {/* ================================================= */}
//           {/* GMAIL CARD */}
//           {/* ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//               scale: 0.97,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.25,
//             }}
//             className="mx-auto mt-9 w-full max-w-2xl sm:mt-12"
//           >
//             <button
//               type="button"
//               onClick={openGmail}
//               aria-label="Send me an email"
//               className="group relative block w-full text-left"
//             >
//               {/* Outer glow */}

//               <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/20 via-fuchsia-500/20 to-cyan-500/20 opacity-50 blur-xl transition duration-700 group-hover:opacity-100 sm:rounded-3xl" />

//               {/* Card */}

//               <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-2xl transition-all duration-500 group-hover:border-purple-400/40 group-hover:bg-white/[0.05] sm:rounded-3xl sm:p-6 md:p-8">

//                 {/* Background glow */}

//                 <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px] transition duration-700 group-hover:bg-purple-500/20 sm:h-60 sm:w-60 sm:blur-[80px]" />

//                 <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:gap-6">

//                   {/* Gmail icon */}

//                   <motion.div
//                     whileHover={{
//                       scale: 1.08,
//                       rotate: -4,
//                     }}
//                     className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.15)] sm:h-16 sm:w-16 sm:rounded-2xl"
//                   >
//                     <FaEnvelope size={25} />
//                   </motion.div>

//                   {/* Email */}

//                   <div className="min-w-0 flex-1 text-center sm:text-left">
//                     <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
//                       Send me an email
//                     </p>

//                     <p className="mt-1.5 break-all text-sm font-medium text-white sm:mt-2 sm:truncate sm:text-base md:text-lg">
//                       {EMAIL}
//                     </p>

//                     <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
//                       Opens Gmail
//                     </p>
//                   </div>

//                   {/* Arrow */}

//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-purple-400/40 group-hover:text-purple-300 sm:h-11 sm:w-11">
//                     <span className="text-lg sm:text-xl">↗</span>
//                   </div>
//                 </div>
//               </div>
//             </button>
//           </motion.div>

//           {/* ================================================= */}
//           {/* SOCIAL LINKS + AVAILABILITY */}
//           {/* ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 25,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.4,
//             }}
//             className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center justify-between gap-5 sm:mt-10 sm:flex-row sm:gap-6"
//           >
//             {/* Social icons */}

//             <div className="flex items-center gap-2.5 sm:gap-3">

//               {/* GitHub */}

//               <a
//                 href="https://github.com/avinash07582"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/5 hover:text-white sm:h-11 sm:w-11"
//               >
//                 <FaGithub
//                   size={17}
//                   className="transition-transform duration-300 group-hover:scale-110 sm:h-[19px] sm:w-[19px]"
//                 />
//               </a>

//               {/* LinkedIn */}

//               <a
//                 href="https://www.linkedin.com/in/avinashupa/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400 sm:h-11 sm:w-11"
//               >
//                 <FaLinkedinIn
//                   size={16}
//                   className="transition-transform duration-300 group-hover:scale-110 sm:h-[18px] sm:w-[18px]"
//                 />
//               </a>

//               {/* Instagram */}

//               <a
//                 href="https://www.instagram.com/the_upadhayay?igsi=bmU4YzJxaWlnanJp"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-400 sm:h-11 sm:w-11"
//               >
//                 <FaInstagram
//                   size={17}
//                   className="transition-transform duration-300 group-hover:scale-110 sm:h-[19px] sm:w-[19px]"
//                 />
//               </a>

//               {/* Email */}

//               <button
//                 type="button"
//                 onClick={openGmail}
//                 aria-label="Send me an email"
//                 className="group flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.04] text-purple-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] sm:h-11 sm:w-11"
//               >
//                 <FaEnvelope
//                   size={16}
//                   className="transition-transform duration-300 group-hover:scale-110 sm:h-[18px] sm:w-[18px]"
//                 />
//               </button>
//             </div>

//             {/* Availability */}

//             <div className="flex max-w-full items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-500/[0.04] px-3.5 py-2 backdrop-blur-md sm:gap-3 sm:px-4">
//               <span className="relative flex h-2.5 w-2.5 shrink-0">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
//               </span>

//               <span className="text-[10px] text-slate-400 sm:text-xs">
//                 Available for opportunities
//               </span>
//             </div>
//           </motion.div>

//           {/* ================================================= */}
//           {/* DIVIDER */}
//           {/* ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               scaleX: 0,
//             }}
//             whileInView={{
//               opacity: 1,
//               scaleX: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.5,
//             }}
//             className="mx-auto mt-12 h-px w-full max-w-2xl origin-center bg-gradient-to-r from-transparent via-purple-500/30 to-transparent sm:mt-16"
//           />

//           {/* ================================================= */}
//           {/* FOOTER */}
//           {/* ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             whileInView={{
//               opacity: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.6,
//             }}
//             className="mt-6 text-center sm:mt-8"
//           >
//             <p className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[10px] tracking-wide text-slate-600 sm:text-xs">
//               <span>Built with</span>

//                   <span>·</span>

//               <span className="text-white">
//                 <SiNextdotjs className="mx-1 inline" />
//                 Next.js
//               </span>

//               <span>·</span>

//               <span className="text-green-400">
//                 <FaNodeJs className="mx-1 inline" />
//                 Node.js
//               </span>
//             </p>

//             <p className="mt-3 text-[10px] text-slate-700 sm:text-xs">
//               © {new Date().getFullYear()} Avinash Kumar. All rights reserved.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";

const EMAIL = "avinashkmr5528@gmail.com";

/* =========================================================
   GMAIL HANDLER
   Mobile  → Try Gmail App
   Desktop → Gmail Web
   ========================================================= */

const openGmail = () => {
  const subject = encodeURIComponent("Hello Avinash");
  const body = encodeURIComponent("Hi Avinash, ");

  const gmailAppUrl = `googlegmail://co?to=${EMAIL}&subject=${subject}&body=${body}`;

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`;

  window.location.href = gmailAppUrl;

  setTimeout(() => {
    window.open(gmailWebUrl, "_blank", "noopener,noreferrer");
  }, 700);
};

export default function Contact() {
  return (
    <section
      id="contact"
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
            top-[15%]
            h-[300px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.06]
            blur-[100px]
            dark:bg-purple-600/10
            sm:h-[400px]
            sm:w-[550px]
            sm:blur-[130px]
            lg:h-[500px]
            lg:w-[700px]
            lg:blur-[160px]
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
            lg:right-[-10%]
            lg:h-[350px]
            lg:w-[350px]
            lg:blur-[140px]
          "
        />

        {/* Bottom purple glow */}

        <div
          className="
            absolute
            bottom-[-15%]
            left-[5%]
            h-[300px]
            w-[400px]
            rounded-full
            bg-purple-700/[0.06]
            blur-[110px]
            dark:bg-purple-700/10
            sm:h-[350px]
            sm:w-[450px]
            sm:blur-[130px]
            lg:left-[10%]
            lg:h-[400px]
            lg:w-[500px]
            lg:blur-[150px]
          "
        />
      </div>

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl items-center">
        <div className="w-full">

          {/* ================================================= */}
          {/* BADGE */}
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
            transition={{
              duration: 0.7,
            }}
            className="mb-6 text-center sm:mb-8"
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-purple-400/30
                bg-purple-500/[0.06]
                px-4
                py-2
                text-[10px]
                font-medium
                tracking-[0.18em]
                text-purple-600
                backdrop-blur-xl
                dark:text-purple-300
                sm:px-5
                sm:text-xs
                sm:tracking-[0.2em]
              "
            >
              <span className="text-purple-500 dark:text-purple-400">
                ✦
              </span>

              LET&apos;S CONNECT
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* HEADING */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="text-center"
          >
            <h2
              className="
                mx-auto
                max-w-5xl
                px-1
                text-[clamp(2.25rem,8vw,5rem)]
                font-bold
                leading-[1.05]
                tracking-tight
              "
            >
              Let&apos;s create something
              <br />

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
                extraordinary.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                px-2
                text-sm
                leading-6
                text-slate-600
                dark:text-slate-400
                sm:mt-7
                sm:text-base
                sm:leading-7
                md:text-lg
              "
            >
              Have a project in mind, an opportunity to discuss, or simply
              want to connect? My inbox is always open.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* GMAIL CARD */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mx-auto mt-9 w-full max-w-2xl sm:mt-12"
          >
            <button
              type="button"
              onClick={openGmail}
              aria-label="Send me an email"
              className="group relative block w-full text-left"
            >
              {/* Outer glow */}

              <div
                className="
                  absolute
                  -inset-1
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-600/15
                  via-fuchsia-500/15
                  to-cyan-500/15
                  opacity-50
                  blur-xl
                  transition
                  duration-700
                  group-hover:opacity-100
                  dark:from-purple-600/20
                  dark:via-fuchsia-500/20
                  dark:to-cyan-500/20
                  sm:rounded-3xl
                "
              />

              {/* Card */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/70
                  p-4
                  shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  group-hover:border-purple-400/40
                  group-hover:bg-white/85
                  dark:border-white/10
                  dark:bg-white/[0.035]
                  dark:shadow-none
                  dark:group-hover:bg-white/[0.05]
                  sm:rounded-3xl
                  sm:p-6
                  md:p-8
                "
              >

                {/* Background glow */}

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-purple-500/[0.06]
                    blur-[70px]
                    transition
                    duration-700
                    group-hover:bg-purple-500/15
                    dark:bg-purple-500/10
                    dark:group-hover:bg-purple-500/20
                    sm:h-60
                    sm:w-60
                    sm:blur-[80px]
                  "
                />

                <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:gap-6">

                  {/* Gmail icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -4,
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-purple-400/30
                      bg-purple-500/10
                      text-purple-600
                      shadow-[0_0_30px_rgba(168,85,247,0.15)]
                      dark:text-purple-300
                      sm:h-16
                      sm:w-16
                      sm:rounded-2xl
                    "
                  >
                    <FaEnvelope size={25} />
                  </motion.div>

                  {/* Email */}

                  <div className="min-w-0 flex-1 text-center sm:text-left">

                    <p
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-slate-500
                        sm:text-xs
                        sm:tracking-[0.18em]
                      "
                    >
                      Send me an email
                    </p>

                    <p
                      className="
                        mt-1.5
                        break-all
                        text-sm
                        font-medium
                        text-slate-900
                        dark:text-white
                        sm:mt-2
                        sm:truncate
                        sm:text-base
                        md:text-lg
                      "
                    >
                      {EMAIL}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                      Opens Gmail
                    </p>
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:border-purple-400/40
                      group-hover:text-purple-500
                      dark:border-white/10
                      dark:text-slate-500
                      dark:group-hover:text-purple-300
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <span className="text-lg sm:text-xl">↗</span>
                  </div>
                </div>
              </div>
            </button>
          </motion.div>

          {/* ================================================= */}
          {/* SOCIAL LINKS + AVAILABILITY */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center justify-between gap-5 sm:mt-10 sm:flex-row sm:gap-6"
          >

            {/* Social icons */}

            <div className="flex items-center gap-2.5 sm:gap-3">

              {/* GitHub */}

              <a
                href="https://github.com/avinash07582"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white/60
                  text-slate-500
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-slate-300
                  hover:bg-slate-100
                  hover:text-slate-900
                  dark:border-white/10
                  dark:bg-white/[0.02]
                  dark:text-slate-400
                  dark:hover:border-white/30
                  dark:hover:bg-white/5
                  dark:hover:text-white
                  sm:h-11
                  sm:w-11
                "
              >
                <FaGithub
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110 sm:h-[19px] sm:w-[19px]"
                />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/avinashupa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white/60
                  text-slate-500
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/40
                  hover:bg-blue-500/10
                  hover:text-blue-500
                  dark:border-white/10
                  dark:bg-white/[0.02]
                  dark:text-slate-400
                  dark:hover:text-blue-400
                  sm:h-11
                  sm:w-11
                "
              >
                <FaLinkedinIn
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110 sm:h-[18px] sm:w-[18px]"
                />
              </a>

              {/* Instagram */}

              <a
                href="https://www.instagram.com/the_upadhayay?igsi=bmU4YzJxaWlnanJp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white/60
                  text-slate-500
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-pink-400/40
                  hover:bg-pink-500/10
                  hover:text-pink-500
                  dark:border-white/10
                  dark:bg-white/[0.02]
                  dark:text-slate-400
                  dark:hover:text-pink-400
                  sm:h-11
                  sm:w-11
                "
              >
                <FaInstagram
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110 sm:h-[19px] sm:w-[19px]"
                />
              </a>

              {/* Email */}

              <button
                type="button"
                onClick={openGmail}
                aria-label="Send me an email"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-purple-400/30
                  bg-purple-500/[0.05]
                  text-purple-600
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/50
                  hover:bg-purple-500/10
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
                  dark:border-purple-400/20
                  dark:bg-purple-500/[0.04]
                  dark:text-purple-300
                  sm:h-11
                  sm:w-11
                "
              >
                <FaEnvelope
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110 sm:h-[18px] sm:w-[18px]"
                />
              </button>
            </div>

            {/* Availability */}

            <div
              className="
                flex
                max-w-full
                items-center
                gap-2.5
                rounded-full
                border
                border-emerald-400/30
                bg-emerald-500/[0.05]
                px-3.5
                py-2
                backdrop-blur-md
                sm:gap-3
                sm:px-4
                dark:border-emerald-400/20
                dark:bg-emerald-500/[0.04]
              "
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />

              </span>

              <span className="text-[10px] text-slate-600 dark:text-slate-400 sm:text-xs">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* DIVIDER */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              mx-auto
              mt-12
              h-px
              w-full
              max-w-2xl
              origin-center
              bg-gradient-to-r
              from-transparent
              via-purple-500/30
              to-transparent
              sm:mt-16
            "
          />

          {/* ================================================= */}
          {/* FOOTER */}
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
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-6 text-center sm:mt-8"
          >

            <p
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-1
                gap-y-1
                text-[10px]
                tracking-wide
                text-slate-600
                sm:text-xs
              "
            >
              <span>Built with</span>

              <span>·</span>

              <span className="text-cyan-500 dark:text-cyan-400">
                <FaReact className="mx-1 inline" />
                React
              </span>

              <span>·</span>

              <span className="text-slate-900 dark:text-white">
                <SiNextdotjs className="mx-1 inline" />
                Next.js
              </span>

              <span>·</span>

              <span className="text-green-500 dark:text-green-400">
                <FaNodeJs className="mx-1 inline" />
                Node.js
              </span>
            </p>

            <p className="mt-3 text-[10px] text-slate-500 dark:text-slate-700 sm:text-xs">
              © {new Date().getFullYear()} Avinash Kumar. All rights reserved.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
} 