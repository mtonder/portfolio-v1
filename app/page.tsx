import About from "./ui/sections/About";
import Experience from "./ui/sections/Experience";
import Header from "./ui/components/Header";
import Hero from "./ui/sections/Hero";
import Education from "./ui/sections/Education";
import Skills from "./ui/sections/Skills";
import Contact from "./ui/sections/Contact";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#041828",
};

export default function Home() {
  return (
    <main className="z-0 h-screen overflow-x-hidden overflow-y-scroll  bg-[#041828] text-[#dcdbd1] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#324DD2]/80 md:snap-y md:snap-mandatory">
      <div className="sticky top-0 z-30 bg-[#041828]">
        <Header />
      </div>
      <section id="hero" className="md:snap-start">
        <Hero />
      </section>
      <section id="about" className=" md:snap-center md:pt-0">
        <About />
      </section>
      <section id="experience" className=" md:snap-start md:pt-0">
        <Experience />
      </section>
      <section id="education" className=" md:snap-start md:pt-0">
        <Education />
      </section>
      <section id="skills" className=" md:snap-start md:pt-0">
        <Skills />
      </section>
      <section id="contact" className=" md:snap-center md:pt-0">
        <Contact />
      </section>
    </main>
  );
}
