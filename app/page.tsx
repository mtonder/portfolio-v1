import About from "./ui/sections/About";
import Experience from "./ui/sections/Experience";
import Header from "./ui/components/Header";
import Hero from "./ui/sections/Hero";
import Education from "./ui/sections/Education";
import Skills from "./ui/sections/Skills";
import Contact from "./ui/sections/Contact";

export default function Home() {
  return (
    <main className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#324DD2]/80  z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(15,23,42)] text-[#dcdbd1]">
      {/* <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#324DD2]/10" /> */}

      <Header />
      <section id="hero" className="md:snap-start">
        <Hero />
      </section>
      <section id="about" className="md:snap-center">
        <About />
      </section>
      <section id="experience" className="md:snap-center">
        <Experience />
      </section>
      <section id="education" className="md:snap-center">
        <Education />
      </section>
      <section id="skills" className="md:snap-center">
        <Skills />
      </section>
      <section id="contact" className="md:snap-center">
        <Contact />
      </section>
    </main>
  );
}
