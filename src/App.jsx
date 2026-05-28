import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/App.css";

export default function App() {
  return (
    <main className="app">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
