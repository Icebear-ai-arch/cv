
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

const currentYear = new Date().getFullYear();

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="footer">
        <p>
          © {currentYear} Justfer Carabuena.
          Built with React.js
        </p>
      </footer>
    </div>
  );
}

export default App;
