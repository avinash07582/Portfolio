



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import {
//   FaInstagram,
//   FaGithub,
//   FaEnvelope,
//   FaBars,
//   FaTimes,
//   FaLinkedinIn,
//   FaSun, 
//   FaMoon,
// } from "react-icons/fa";  

// const navLinks = [
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];


// const EMAIL = "avinashkmr5528@gmail.com";


// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => setMenuOpen(false);
//   const { theme, setTheme } = useTheme();

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full">
//       <nav className="border-b border-white/[0.07] bg-[#060318]/75 backdrop-blur-xl">
//         <div className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between px-4 sm:h-[78px] sm:px-6 lg:h-[82px] lg:px-12">

//           {/* ================= LEFT - PROFILE ================= */}

//           <Link
//             href="#"
//             onClick={closeMenu}
//             className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
//           >
//             <div className="relative shrink-0">
//               <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-md transition-all duration-300 group-hover:bg-purple-400/60" />

//               <Image
//                 src="/profile.png"
//                 alt="Avinash Upadhyay"
//                 width={48}
//                 height={48}
//                 priority
//                 className="relative h-10 w-10 rounded-full border border-white/20 object-cover sm:h-12 sm:w-12"
//               />
//             </div>

//             <div className="hidden sm:block">
//               <p className="text-[16px] font-semibold tracking-tight text-white md:text-[17px]">
//                 Avinash Upadhyay
//               </p>

//               <p className="text-[9px] tracking-[0.16em] text-gray-500 md:text-[11px] md:tracking-[0.18em]">
//                 FULL-STACK DEVELOPER
//               </p>
//             </div>
//           </Link>

//           {/* ================= CENTER - DESKTOP NAVIGATION ================= */}

//           <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex xl:gap-10">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="
//                   group
//                   relative
//                   py-3
//                   text-[14px]
//                   font-medium
//                   tracking-wide
//                   text-gray-400
//                   transition-all
//                   duration-300
//                   hover:text-white
//                 "
//               >
//                 {link.name}

//                 {/* Glowing underline */}
//                 <span
//                   className="
//                     absolute
//                     bottom-0
//                     left-1/2
//                     h-[2px]
//                     w-0
//                     -translate-x-1/2
//                     rounded-full
//                     bg-gradient-to-r
//                     from-purple-500
//                     via-blue-500
//                     to-cyan-400
//                     shadow-[0_0_12px_rgba(139,92,246,0.9)]
//                     transition-all
//                     duration-300
//                     group-hover:w-full
//                   "
//                 />

//                 {/* Small glow */}
//                 <span
//                   className="
//                     absolute
//                     inset-x-0
//                     bottom-[-8px]
//                     mx-auto
//                     h-3
//                     w-0
//                     rounded-full
//                     bg-purple-500/20
//                     blur-md
//                     transition-all
//                     duration-300
//                     group-hover:w-8
//                   "
//                 />
//               </Link>
//             ))}
//           </div>

//           {/* ================= RIGHT - SOCIALS ================= */}


           

//           <div className="flex items-center gap-0.5 sm:gap-1">
//             <a
//               href="https://www.linkedin.com/in/avinashupa/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//               className="
//                 group flex h-9 w-9 items-center justify-center
//                 rounded-full border border-transparent
//                 transition-all duration-300
//                 hover:border-purple-500/30
//                 hover:bg-purple-500/10
//                 sm:h-10 sm:w-10
//               "
//             >
//               <FaLinkedinIn
//                 size={19}
//                 className="text-[#F0F6FC] transition-transform duration-300 group-hover:scale-110 sm:text-[20px]"
//               />
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/the_upadhayay?igsi=bmU4YzJxaWlnanJp"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className=" text-[#0A66C2]
//                 group flex h-9 w-9 items-center justify-center
//                 rounded-full border border-transparent
//                 transition-all duration-300
//                 hover:border-purple-500/30
//                 hover:bg-purple-500/10
//                 sm:h-10 sm:w-10
//               "
//             >
//               <FaInstagram
//                 size={18}
//                 className="text-[#E4405F] transition-transform duration-300 group-hover:scale-110 sm:text-[19px]"
//               />
//             </a>

//             {/* GitHub */}
//             <a
//               href="https://github.com/avinash07582"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//               className="
//                 group flex h-9 w-9 items-center justify-center
//                 rounded-full border border-transparent
//                 transition-all duration-300
//                 hover:border-purple-500/30
//                 hover:bg-purple-500/10
//                 sm:h-10 sm:w-10
//               "
//             >
//               <FaGithub
//                 size={19}
//                 className="text-[#F0F6FC] transition-transform duration-300 group-hover:scale-110 sm:text-[20px]"
//               />
//             </a>

//             {/* Email */}
//             <a
//               href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Send me an email"
//               className="
//                 flex h-9 w-9 items-center justify-center
//                 rounded-full border border-white/10
//                 text-slate-400
//                 transition-all duration-300
//                 hover:border-purple-400/50
//                 hover:bg-purple-500/10
//                 hover:text-purple-300
//                 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
//                 sm:h-10 sm:w-10
//               "
//             >
//               <FaEnvelope size={14} className="sm:text-[15px]" />
//             </a>
            
// {/* ================= THEME TOGGLE ================= */}

// <button
//   type="button"
//   aria-label={
//     theme === "dark"
//       ? "Switch to light mode"
//       : "Switch to dark mode"
//   }
//   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//   className="
//     group relative
//     flex h-9 w-9 items-center justify-center
//     rounded-full
//     px-2
//     border border-white/10
//     bg-white/[0.03]
//     text-gray-300
//     transition-all duration-300
//     hover:border-purple-400/40
//     hover:bg-purple-500/10
//     hover:text-white
//     hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
//     sm:h-10 sm:w-10
//   "
// >
//   <span
//     className="
//       absolute inset-0 rounded-full
//       bg-purple-500/10
//       opacity-0 blur-md
//       transition-opacity duration-300
//       group-hover:opacity-100
//     "
//   />

//   <span className="relative transition-transform duration-300 group-hover:rotate-12">
//     {theme === "dark" ? (
//       <FaSun size={15} className="text-yellow-300 sm:text-[16px]" />
//     ) : (
//       <FaMoon size={15} className="text-purple-600 sm:text-[16px]" />
//     )}
//   </span>
// </button>



//             {/* ================= MOBILE MENU BUTTON ================= */}

//             <button
//               type="button"
//               aria-label={menuOpen ? "Close menu" : "Open menu"}
//               aria-expanded={menuOpen}
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="
//                 ml-1 flex h-9 w-9 items-center justify-center
//                 rounded-full border border-white/10
//                 text-gray-300
//                 transition-all duration-300
//                 hover:border-purple-400/40
//                 hover:bg-purple-500/10
//                 hover:text-white
//                 lg:hidden
//                 sm:ml-2 sm:h-10 sm:w-10
//               "
//             >
//               {menuOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
//             </button>
//           </div>
//         </div>

//         {/* ================= MOBILE MENU ================= */}

//         <div
//           className={`
//             overflow-hidden border-t border-white/[0.05]
//             bg-[#060318]/95 backdrop-blur-2xl
//             transition-all duration-300 ease-in-out
//             lg:hidden
//             ${
//               menuOpen
//                 ? "max-h-[360px] opacity-100"
//                 : "max-h-0 opacity-0"
//             }
//           `}
//         >
//           <div className="mx-auto max-w-[1500px] px-4 py-4 sm:px-6">
//             <div className="flex flex-col gap-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={closeMenu}
//                   className="
//                     group flex items-center
//                     rounded-xl px-4 py-3
//                     text-sm font-medium
//                     text-gray-400
//                     transition-all duration-300
//                     hover:bg-purple-500/10
//                     hover:text-white
//                   "
//                 >
//                   <span
//                     className="
//                       mr-3 h-1.5 w-1.5 rounded-full
//                       bg-purple-500
//                       opacity-50
//                       shadow-[0_0_8px_rgba(139,92,246,0.8)]
//                       transition-all duration-300
//                       group-hover:opacity-100
//                     "
//                   />

//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaLinkedinIn,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const EMAIL = "avinashkmr5528@gmail.com";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className="
          border-b
          border-slate-200/80
          bg-white/75
          backdrop-blur-xl
          dark:border-white/[0.07]
          dark:bg-[#060318]/75
        "
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between px-4 sm:h-[78px] sm:px-6 lg:h-[82px] lg:px-12">

          {/* ================= LEFT - PROFILE ================= */}

          <Link
            href="#"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="relative shrink-0">
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-purple-500/25
                  blur-md
                  transition-all
                  duration-300
                  group-hover:bg-purple-400/50
                  dark:bg-purple-500/40
                  dark:group-hover:bg-purple-400/60
                "
              />

              <Image
                src="/profile.png"
                alt="Avinash Upadhyay"
                width={48}
                height={48}
                priority
                className="
                  relative
                  h-10
                  w-10
                  rounded-full
                  border
                  border-slate-300
                  object-cover
                  dark:border-white/20
                  sm:h-12
                  sm:w-12
                "
              />
            </div>

            <div className="hidden sm:block">
              <p
                className="
                  text-[16px]
                  font-semibold
                  tracking-tight
                  text-slate-900
                  dark:text-white
                  md:text-[17px]
                "
              >
                Avinash Upadhyay
              </p>

              <p
                className="
                  text-[9px]
                  tracking-[0.16em]
                  text-slate-500
                  dark:text-gray-500
                  md:text-[11px]
                  md:tracking-[0.18em]
                "
              >
                FULL-STACK DEVELOPER
              </p>
            </div>
          </Link>

          {/* ================= CENTER - DESKTOP NAVIGATION ================= */}

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  group
                  relative
                  py-3
                  text-[14px]
                  font-medium
                  tracking-wide
                  text-slate-600
                  transition-all
                  duration-300
                  hover:text-slate-950
                  dark:text-gray-400
                  dark:hover:text-white
                "
              >
                {link.name}

                {/* Glowing underline */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-purple-500
                    via-blue-500
                    to-cyan-400
                    shadow-[0_0_12px_rgba(139,92,246,0.9)]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

                {/* Small glow */}

                <span
                  className="
                    absolute
                    inset-x-0
                    bottom-[-8px]
                    mx-auto
                    h-3
                    w-0
                    rounded-full
                    bg-purple-500/20
                    blur-md
                    transition-all
                    duration-300
                    group-hover:w-8
                  "
                />
              </Link>
            ))}
          </div>

          {/* ================= RIGHT - SOCIALS ================= */}

          <div className="flex items-center gap-0.5 sm:gap-1">

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/avinashupa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-transparent
                transition-all
                duration-300
                hover:border-purple-500/30
                hover:bg-purple-500/10
                sm:h-10
                sm:w-10
              "
            >
              <FaLinkedinIn
                size={19}
                className="
                  text-[#0A66C2]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  sm:text-[20px]
                "
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
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-transparent
                transition-all
                duration-300
                hover:border-purple-500/30
                hover:bg-purple-500/10
                sm:h-10
                sm:w-10
              "
            >
              <FaInstagram
                size={18}
                className="
                  text-[#E4405F]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  sm:text-[19px]
                "
              />
            </a>

            {/* GitHub */}

            <a
              href="https://github.com/avinash07582"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-transparent
                transition-all
                duration-300
                hover:border-purple-500/30
                hover:bg-purple-500/10
                sm:h-10
                sm:w-10
              "
            >
              <FaGithub
                size={19}
                className="
                  text-slate-800
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  dark:text-[#F0F6FC]
                  sm:text-[20px]
                "
              />
            </a>

            {/* Email */}

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me an email"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                text-slate-500
                transition-all
                duration-300
                hover:border-purple-400/50
                hover:bg-purple-500/10
                hover:text-purple-600
                hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                dark:border-white/10
                dark:text-slate-400
                dark:hover:text-purple-300
                dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                sm:h-10
                sm:w-10
              "
            >
              <FaEnvelope size={14} className="sm:text-[15px]" />
            </a>

            {/* ================= THEME TOGGLE ================= */}

            <button
              type="button"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="
                group
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-slate-100/70
                px-2
                text-slate-600
                transition-all
                duration-300
                hover:border-purple-400/40
                hover:bg-purple-500/10
                hover:text-purple-700
                hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:text-gray-300
                dark:hover:text-white
                dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                sm:h-10
                sm:w-10
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-purple-500/10
                  opacity-0
                  blur-md
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <span className="relative transition-transform duration-300 group-hover:rotate-12">
                {theme === "dark" ? (
                  <FaSun
                    size={12}
                    className="text-yellow-300 sm:text-[16px]"
                  />
                ) : (
                  <FaMoon
                    size={12}
                    className="text-purple-600 sm:text-[16px]"
                  />
                )}
              </span>
            </button>

            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                ml-1
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
                duration-300
                hover:border-purple-400/40
                hover:bg-purple-500/10
                hover:text-purple-700
                dark:border-white/10
                dark:text-gray-300
                dark:hover:text-white
                lg:hidden
                sm:ml-2
                sm:h-10
                sm:w-10
              "
            >
              {menuOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`
            overflow-hidden
            border-t
            border-slate-200/80
            bg-white/95
            backdrop-blur-2xl
            transition-all
            duration-300
            ease-in-out
            dark:border-white/[0.05]
            dark:bg-[#060318]/95
            lg:hidden
            ${
              menuOpen
                ? "max-h-[360px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="mx-auto max-w-[1500px] px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    group
                    flex
                    items-center
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-slate-600
                    transition-all
                    duration-300
                    hover:bg-purple-500/10
                    hover:text-slate-950
                    dark:text-gray-400
                    dark:hover:text-white
                  "
                >
                  <span
                    className="
                      mr-3
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-purple-500
                      opacity-50
                      shadow-[0_0_8px_rgba(139,92,246,0.8)]
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}