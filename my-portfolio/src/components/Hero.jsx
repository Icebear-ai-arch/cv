
import {
  ArrowDown,
  Download,
  Code2,
} from "lucide-react";

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.6 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.34-3.37-1.34-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.57 2.37 1.12 2.94.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.4-2.04 1.05-2.76-.11-.26-.45-1.31.1-2.73 0 0 .86-.28 2.82 1.07A9.76 9.76 0 0 1 12 6.8c.87 0 1.75.12 2.57.35 1.96-1.35 2.82-1.07 2.82-1.07.55 1.42.22 2.47.11 2.73.66.72 1.05 1.64 1.05 2.76 0 3.95-2.34 4.81-4.58 5.07.36.32.68.96.68 1.94v2.87c0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor">
      <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5a1.5 1.5 0 0 1 0 3.5ZM5.5 9.73h2.9V18H5.5V9.73Zm5.09 0h2.77v1.14h.04c.39-.73 1.34-1.5 2.75-1.5 2.95 0 3.49 1.94 3.49 4.46V18h-2.9v-16.8c0-1.4-.03-3.21-1.96-3.21-1.97 0-2.27 1.53-2.27 3.11V18h-2.9V9.73Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          Open to Opportunities
        </div>

        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          Justfer <span className="gradient-text">Carabuena</span>
        </h1>

        <h2>
          Aspiring <span className="blue">Software Developer</span>
        </h2>

        <p className="hero-description">
          A BS Information Technology graduate passionate
          about building responsive websites, software
          applications, and interactive digital experiences.
          I enjoy turning ideas into functional solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects <Code2 size={18} />
          </a>

          <a href="/resume.pdf" className="btn btn-outline" download>
            Download CV <Download size={18} />
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Icebear-ai-arch"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubMark />
          </a>

          <a
            href="https://www.linkedin.com/in/justfer-carabuena-068381341/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInMark />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glow-circle"></div>
        <div className="code-card">
          <div className="code-header">
            <span></span><span></span><span></span>
            <p>developer.js</p>
          </div>

          <div className="code-content">
            <p><span className="purple">const</span> developer = {"{"}</p>
            <p className="indent">
              name: <span className="green">"Justfer"</span>,
            </p>
            <p className="indent">
              role: <span className="green">"Software Developer"</span>,
            </p>
            <p className="indent">
              skills: [
            </p>
            <p className="indent2">
              <span className="green">"React"</span>,
              <span className="green"> "Node.js"</span>,
            </p>
            <p className="indent2">
              <span className="green">"JavaScript"</span>,
              <span className="green"> "PHP"</span>
            </p>
            <p className="indent">],</p>
            <p className="indent">
              passion: <span className="green">"Building solutions"</span>
            </p>
            <p>{"}"}</p>
            <p className="code-comment">
              // Always learning. Always building.
            </p>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={20} />
        Scroll to explore
      </a>
    </section>
  );
}

export default Hero;
