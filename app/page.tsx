import About from "./ui/sections/About";
import Experience from "./ui/sections/Experience";
import Header from "./ui/components/Header";
import Hero from "./ui/sections/Hero";
import Education from "./ui/sections/Education";
import Skills from "./ui/sections/Skills";
import Contact from "./ui/sections/Contact";

export default function Home() {
  return (
    <main className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#324DD2]/80  z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[#0f172a] text-[#dcdbd1]">
      {/* <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#324DD2]/10" /> */}

      <Header />
      <section id="hero" className="md:snap-start">
        <Hero />
      </section>
      <section id="about" className="pt-16 md:snap-center md:pt-0">
        <About />
      </section>
      <section id="experience" className="pt-2 md:snap-center md:pt-0">
        <Experience />
      </section>
      <section id="education" className="pt-16 md:snap-center md:pt-0">
        <Education />
      </section>
      <section id="skills" className="pt-16 md:snap-center md:pt-0">
        <Skills />
      </section>
      <section id="contact" className="pt-16 md:snap-center md:pt-0">
        <Contact />
      </section>
    </main>
  );
}
