// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import ContactSection from "@/components/Contact";
// import Projects from "@/components/Project";
// import Skills from "@/components/Skills";

// export default function Home() {
//   return (
//     <>
//       <Header />

//       <main>
//         <Hero />

//         <About />
//         <Skills />

//         {/* <section
//           id="skills"
//           className="min-h-screen bg-[#060318]"
//         >
         
//         </section> */}

//         <section
//           id="projects"
//           className="min-h-screen "
//         >
//         <Projects/>
//         </section>

//         <section
//           id="contact"
//           className="min-h-screen"
//         >
//           <ContactSection/>
//         </section>
//       </main>
//     </>
//   );
// }


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactSection from "@/components/Contact";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import StarBackground from "@/components/StarBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Global stars */}
      <StarBackground />

      {/* Website content */}
      <div className="relative z-10">
        <Header />

        <main>
          <Hero />

          <section className="">
            <About />
          </section>

          <section className="">
            <Skills />
          </section>

          <section id="projects" className=" ">
            <Projects />
          </section>

          <section id="contact" className="">
            <ContactSection />
          </section>
        </main>
      </div>
    </div>
  );
}