
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaGithub,
//    FaEnvelope,
// } from "react-icons/fa";

// const navLinks = [
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];
// const EMAIL = "avinashkmr5528@gmail.com"; 

// export default function Navbar() {
//   return (
//     <header className="fixed top-0 left-0 z-50 w-full">
//       <nav className="border-b border-white/[0.07] bg-[#060318]/75 backdrop-blur-xl">
//         <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-6 lg:px-12">

//           {/* ================= LEFT - PROFILE ================= */}

//           <Link
//             href="#"
//             className="group flex items-center gap-3"
//           >
//             <div className="relative">

//               <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-md transition-all duration-300 group-hover:bg-purple-400/60" />

//               <Image
//                 src="/profile.png"
//                 alt="Avinash Kumar"
//                 width={48}
//                 height={48}
//                 className="relative h-12 w-12 rounded-full border border-white/20 object-cover"
//               />

//             </div>

//             <div className="hidden sm:block">

//               <p className="text-[17px] font-semibold tracking-tight text-white">
//                 Avinash Kumar
//               </p>

//               <p className="text-[11px] tracking-[0.18em] text-gray-500">
//                 FULL-STACK DEVELOPER
//               </p>

//             </div>
//           </Link>


//           {/* ================= CENTER - NAVIGATION ================= */}

// {/* ================= CENTER - NAVIGATION ================= */}

// <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
//   {navLinks.map((link) => (
//     <Link
//       key={link.name}
//       href={link.href}
//       className="
//         group
//         relative
//         py-3
//         text-[14px]
//         font-medium
//         tracking-wide
//         text-gray-400
//         transition-all
//         duration-300
//         hover:text-white
//       "
//     >
//       {link.name}

//       {/* glowing underline */}
//       <span
//         className="
//           absolute
//           bottom-0
//           left-1/2
//           h-[2px]
//           w-0
//           -translate-x-1/2
//           rounded-full
//           bg-gradient-to-r
//           from-purple-500
//           via-blue-500
//           to-cyan-400
//           shadow-[0_0_12px_rgba(139,92,246,0.9)]
//           transition-all
//           duration-300
//           group-hover:w-full
//         "
//       />

//       {/* small glow */}
//       <span
//         className="
//           absolute
//           inset-x-0
//           bottom-[-8px]
//           mx-auto
//           h-3
//           w-0
//           rounded-full
//           bg-purple-500/20
//           blur-md
//           transition-all
//           duration-300
//           group-hover:w-8
//         "
//       />
//     </Link>
//   ))}
// </div>

//           {/* ================= RIGHT - SOCIALS ================= */}

//           <div className="flex items-center gap-2">

//             {/* Instagram */}

//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="group flex h-10 w-10 items-center justify-center rounded-full border border-transparent transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10"
//             >
//               <FaInstagram
//                 size={19}
//                 className="text-[#E4405F] transition-transform duration-300 group-hover:scale-110"
//               />
//             </a>


//             {/* Facebook */}

//             {/* GitHub */}

//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//               className="group flex h-10 w-10 items-center justify-center rounded-full border border-transparent transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10"
//             >
//               <FaGithub
//                 size={20}
//                 className="text-[#F0F6FC] transition-transform duration-300 group-hover:scale-110"
//               />
//             </a>
//             {/* EMAIL */}

//            <a
//   href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Send me an email"
//   className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
// >
//   <FaEnvelope size={15} />
// </a>


//           </div>

//         </div>
//       </nav>
//     </header>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaLinkedinIn
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

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="border-b border-white/[0.07] bg-[#060318]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between px-4 sm:h-[78px] sm:px-6 lg:h-[82px] lg:px-12">

          {/* ================= LEFT - PROFILE ================= */}

          <Link
            href="#"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-md transition-all duration-300 group-hover:bg-purple-400/60" />

              <Image
                src="/profile.png"
                alt="Avinash Kumar"
                width={48}
                height={48}
                priority
                className="relative h-10 w-10 rounded-full border border-white/20 object-cover sm:h-12 sm:w-12"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-[16px] font-semibold tracking-tight text-white md:text-[17px]">
                Avinash Kumar
              </p>

              <p className="text-[9px] tracking-[0.16em] text-gray-500 md:text-[11px] md:tracking-[0.18em]">
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
                  text-gray-400
                  transition-all
                  duration-300
                  hover:text-white
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
            <a
              href="https://www.linkedin.com/in/avinashupa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group flex h-9 w-9 items-center justify-center
                rounded-full border border-transparent
                transition-all duration-300
                hover:border-purple-500/30
                hover:bg-purple-500/10
                sm:h-10 sm:w-10
              "
            >
              <FaLinkedinIn
                size={19}
                className="text-[#F0F6FC] transition-transform duration-300 group-hover:scale-110 sm:text-[20px]"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/the_upadhayay?igsi=bmU4YzJxaWlnanJp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className=" text-[#0A66C2]
                group flex h-9 w-9 items-center justify-center
                rounded-full border border-transparent
                transition-all duration-300
                hover:border-purple-500/30
                hover:bg-purple-500/10
                sm:h-10 sm:w-10
              "
            >
              <FaInstagram
                size={18}
                className="text-[#E4405F] transition-transform duration-300 group-hover:scale-110 sm:text-[19px]"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/avinash07582"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group flex h-9 w-9 items-center justify-center
                rounded-full border border-transparent
                transition-all duration-300
                hover:border-purple-500/30
                hover:bg-purple-500/10
                sm:h-10 sm:w-10
              "
            >
              <FaGithub
                size={19}
                className="text-[#F0F6FC] transition-transform duration-300 group-hover:scale-110 sm:text-[20px]"
              />
            </a>

            {/* Email */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me an email"
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full border border-white/10
                text-slate-400
                transition-all duration-300
                hover:border-purple-400/50
                hover:bg-purple-500/10
                hover:text-purple-300
                hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                sm:h-10 sm:w-10
              "
            >
              <FaEnvelope size={14} className="sm:text-[15px]" />
            </a>

            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                ml-1 flex h-9 w-9 items-center justify-center
                rounded-full border border-white/10
                text-gray-300
                transition-all duration-300
                hover:border-purple-400/40
                hover:bg-purple-500/10
                hover:text-white
                lg:hidden
                sm:ml-2 sm:h-10 sm:w-10
              "
            >
              {menuOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`
            overflow-hidden border-t border-white/[0.05]
            bg-[#060318]/95 backdrop-blur-2xl
            transition-all duration-300 ease-in-out
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
                    group flex items-center
                    rounded-xl px-4 py-3
                    text-sm font-medium
                    text-gray-400
                    transition-all duration-300
                    hover:bg-purple-500/10
                    hover:text-white
                  "
                >
                  <span
                    className="
                      mr-3 h-1.5 w-1.5 rounded-full
                      bg-purple-500
                      opacity-50
                      shadow-[0_0_8px_rgba(139,92,246,0.8)]
                      transition-all duration-300
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
