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
  return (
    <div className="noise grid-bg scanlines relative min-h-screen" style={{ position: 'relative', zIndex: 2 }}>
      <ParticleField />
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
