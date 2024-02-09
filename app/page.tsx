import About from "./ui/sections/About";
import Experience from "./ui/sections/Experience";
import Header from "./ui/components/Header";
import Hero from "./ui/sections/Hero";
import Education from "./ui/sections/Education";
import Skills from "./ui/sections/Skills";
import Contact from "./ui/sections/Contact";

export default function Home() {
  return (
    <main className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-[#dcdbd1]">
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
      <section id="education" className="snap-start">
        <Education />
      </section>
      <section id="education" className="snap-start">
        <Skills />
      </section>
      <section id="education" className="snap-start">
        <Contact />
      </section>
    </main>
  );
}
