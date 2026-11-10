
import { BriefcaseBusiness, Calendar } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <span className="section-label">MY BACKGROUND</span>
        <h2>Experience & <span className="blue">Education</span></h2>
        <p>My professional training and academic background.</p>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <BriefcaseBusiness />
          </div>

          <div className="timeline-content">
            <span className="timeline-date">Internship / OJT</span>
            <h3>Highly Succeed Inc. (HSI)</h3>
            <h4>Game Development / Project Management / UI/UX</h4>

            <p>
              Participated in application and game development
              activities, project coordination, UI/UX design,
              software testing, and quality assurance.
            </p>

            <div className="project-tech">
              <span>Unity</span>
              <span>Git</span>
              <span>Jira</span>
              <span>QA Testing</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <Calendar />
          </div>

          <div className="timeline-content">
            <span className="timeline-date">2025 – 2026</span>
            <h3>Bulacan State University</h3>
            <h4>Bachelor of Science in Information Technology</h4>

            <p>
              Major in Mobile Application and Web Development.
              Developed academic projects involving web systems,
              databases, programming, and application development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
