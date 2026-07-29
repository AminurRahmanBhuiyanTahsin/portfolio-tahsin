import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}