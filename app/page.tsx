import Header from "./ui/Header";
import Hero from "./ui/Hero";

export default function Home() {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    <main className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-[#dcdbd1]">
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Contact Me */}
    </main>
  );
}
