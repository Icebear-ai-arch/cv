
import { ExternalLink, FolderCode } from "lucide-react";

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="17" height="17" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.6 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.34-3.37-1.34-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.57 2.37 1.12 2.94.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.4-2.04 1.05-2.76-.11-.26-.45-1.31.1-2.73 0 0 .86-.28 2.82 1.07A9.76 9.76 0 0 1 12 6.8c.87 0 1.75.12 2.57.35 1.96-1.35 2.82-1.07 2.82-1.07.55 1.42.22 2.47.11 2.73.66.72 1.05 1.64 1.05 2.76 0 3.95-2.34 4.81-4.58 5.07.36.32.68.96.68 1.94v2.87c0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z" />
    </svg>
  );
}

function Projects() {
  const projects = [
    {
      title: "BPAMIS",
      category: "Web Application",
      description:
        "Barangay Panducot Adjudication Management Information System. A web-based system designed to manage barangay dispute records, mediation, conciliation, and related processes.",
      technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      image: encodeURI("/images/BPAMIS/BPAMIS.png"),
      github: "https://github.com/Icebear-ai-arch",
      demo: "https://bp4mis.liveblog365.com",
    },
    {
      title: "Space Explorer",
      category: "Game Development",
      description:
        "A 2D platformer game developed using Unity, featuring space exploration and interactive gameplay mechanics.",
      technologies: ["C#", "Unity", "2D Game Development"],
      image: encodeURI("/images/SpaceExplorer/spaceexplorer.png"),
      github: "https://github.com/Icebear-ai-arch",
      demo: "https://justfer-16.itch.io/space-explorer",
    },
    {
      title: "Core Gear Tech",
      category: "E-commerce",
      description:
        "An e-commerce project focused on technology products, providing an online shopping interface.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      image: encodeURI("/images/CoreGearTech/CoreGearTech.png"),
      github: "https://github.com/Icebear-ai-arch",
      demo: "https://coregeartech.freehosting.dev/",
    },
    {
      title: "Build Me Up",
      category: "Educational Game",
      description:
        "An educational game developed using Java, designed to provide an interactive learning experience.",
      technologies: ["Java", "OOP", "GUI"],
      image: encodeURI("/images/BUILD ME UP/Main Menu.png"),
      github: "https://github.com/Icebear-ai-arch",
      demo: "#",
    },
    {
      title: "TitanCruise",
      category: "Booking System",
      description:
        "A Java-based cruise booking system for managing reservations, schedules, and trip information for passengers and administrators.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      image: encodeURI("/images/TitanScreenShots/homepage.png"),
      github: "https://github.com/Icebear-ai-arch",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-label">MY WORK</span>
        <h2>Featured <span className="blue">Projects</span></h2>
        <p>Some of the applications and games I have developed.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="project-image-placeholder">
                <FolderCode size={45} />
              </div>
            </div>

            <div className="project-info">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubMark /> GitHub
                </a>

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={17} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
