
import { Code2, Database, Wrench } from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code2 />,
      skills: [
        "JavaScript",
        "PHP",
        "Java",
        "C++",
        "C#",
        "Python",
      ],
    },
    {
      title: "Web Development",
      icon: <Code2 />,
      skills: [
        "HTML5",
        "CSS3",
        "React.js",
        "Node.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Database Management",
      icon: <Database />,
      skills: [
        "MySQL",
        "SQL Server",
        "Database Design",
        "SQL Queries",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Unity",
        "Jira",
        "XAMPP",
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span className="section-label">MY EXPERTISE</span>
        <h2>Technical <span className="blue">Skills</span></h2>
        <p>Technologies and tools I have worked with.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-icon">{group.icon}</div>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
