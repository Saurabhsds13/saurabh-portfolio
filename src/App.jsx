import { useState, useEffect } from "react";
import useScrollReveal from "./hooks/useScrollReveal";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import CommandPalette from "./components/CommandPalette";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Architecture from "./components/Architecture";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import GitHubStats from "./components/GitHubStats";
import CurrentlyLearning from "./components/CurrentlyLearning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleField from "./components/ParticleField";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useScrollReveal();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(!document.documentElement.classList.contains("light"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(!document.documentElement.classList.contains("light"));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CommandPalette />
      <BackToTop />
      <a href="#about" className="skip-link">Skip to content</a>
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
          <GitHubStats />
          <CurrentlyLearning />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
