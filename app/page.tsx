import About from "./ui/About";
import Header from "./ui/Header";
import Hero from "./ui/Hero";

export default function Home() {
  return (
    <main className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-[#dcdbd1]">
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      {/* Skills */}
      {/* Contact Me */}
    </main>
  );
}
