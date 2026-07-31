import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Architecture from "./components/Architecture";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleField from "./components/ParticleField";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(!document.documentElement.classList.contains("light"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(!document.documentElement.classList.contains("light"));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="noise grid-bg scanlines relative min-h-screen" style={{ position: 'relative', zIndex: 2 }}>
      {isDark && <ParticleField />}
      <Navbar />
      <main className="relative" style={{ zIndex: 2 }}>
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <Experience />
        <Projects />
        <ArchitectureDiagram />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
