import About from "./ui/sections/About";
import Experience from "./ui/sections/Experience";
import Header from "./ui/components/Header";
import Hero from "./ui/sections/Hero";
import Education from "./ui/sections/Education";
import Skills from "./ui/sections/Skills";
import Contact from "./ui/sections/Contact";
import Link from "next/link";

export default function Home() {
  const YEAR = new Date().getFullYear();
  return (
    <main className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#324DD2]/80  z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(15,23,42)] text-[#dcdbd1]">
      {/* <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#324DD2]/10" /> */}

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="education" className="snap-center">
        <Education />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-1 z-20 w-full cursor-pointer text-center text-gray-500/80">
          {YEAR} @ Marek Tonder
        </footer>
      </Link>
    </main>
  );
}
