
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

const currentYear = new Date().getFullYear();

const stations = [
  { id: "home", label: "Launch" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeStation, setActiveStation] = useState("home");

  useEffect(() => {
    const sections = stations
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveStation(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections
      .filter((section) => section.id !== "home")
      .forEach((section) => revealObserver.observe(section));

    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      document.documentElement.style.setProperty(
        "--scene-drift",
        `${Math.round(window.scrollY * 0.035)}px`
      );
      document.documentElement.style.setProperty(
        "--scene-drift-reverse",
        `${Math.round(window.scrollY * -0.035)}px`
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${Math.min(progress * 100, 100)}%`
      );
    };

    const handlePointerMove = (event) => {
      const lookX = ((event.clientX / window.innerWidth) - 0.5) * 10;
      const lookY = ((event.clientY / window.innerHeight) - 0.5) * 6;
      const satelliteX = ((event.clientX / window.innerWidth) - 0.5) * 90;
      const satelliteY = ((event.clientY / window.innerHeight) - 0.5) * 60;
      document.documentElement.style.setProperty("--look-x", `${lookX}px`);
      document.documentElement.style.setProperty(
        "--look-x-reverse",
        `${lookX * -1}px`
      );
      document.documentElement.style.setProperty("--look-y", `${lookY}px`);
      document.documentElement.style.setProperty(
        "--satellite-x",
        `${satelliteX}px`
      );
      document.documentElement.style.setProperty(
        "--satellite-y",
        `${satelliteY}px`
      );
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <div className="app">
      <div className="cosmos" aria-hidden="true">
        <div className="nebula nebula-one"></div>
        <div className="nebula nebula-two"></div>
        <div className="star-field">
          {Array.from({ length: 72 }, (_, index) => (
            <span
              className="star"
              key={index}
              style={{
                "--star-x": `${(index * 47 + 13) % 100}%`,
                "--star-y": `${(index * 71 + 8) % 100}%`,
                "--star-size": `${index % 9 === 0 ? 3 : 1 + (index % 2)}px`,
                "--twinkle-delay": `${(index % 13) * -0.37}s`,
              }}
            />
          ))}
        </div>
        <div className="space-scene" aria-hidden="true">
          <div className="scene-orbit scene-orbit-one"></div>
          <div className="scene-orbit scene-orbit-two"></div>
          <div className="scene-planet scene-planet-one">
            <span className="scene-planet-shadow"></span>
          </div>
          <div className="scene-planet scene-planet-two"></div>
          <div className="scene-planet scene-planet-three"></div>
          <span className="scene-asteroid scene-asteroid-one"></span>
          <span className="scene-asteroid scene-asteroid-two"></span>
          <span className="scene-asteroid scene-asteroid-three"></span>
        </div>
      </div>
      <div className="scroll-progress" aria-hidden="true"></div>
      <Navbar />

      <nav className="expedition-rail" aria-label="Portfolio journey">
        <span className="rail-title">JOURNEY</span>
        <div className="rail-stations">
          {stations.map((station, index) => (
            <a
              className={`rail-station ${
                activeStation === station.id ? "active" : ""
              }`}
              href={`#${station.id}`}
              key={station.id}
              aria-label={`Go to ${station.label}`}
              aria-current={activeStation === station.id ? "location" : undefined}
            >
              <span className="rail-dot"></span>
              <span className="rail-tooltip">{station.label}</span>
              <span className="sr-only">
                {String(index + 1).padStart(2, "0")} {station.label}
              </span>
            </a>
          ))}
        </div>
        <span className="rail-count">
          {String(
            stations.findIndex(({ id }) => id === activeStation) + 1
          ).padStart(2, "0")}
          <span> / 06</span>
        </span>
      </nav>

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
