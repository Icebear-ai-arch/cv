
import { GraduationCap, Code, Lightbulb } from "lucide-react";

function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <span className="section-label">GET TO KNOW ME</span>
        <h2>About <span className="blue">Me</span></h2>
        <p>A little introduction about who I am.</p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>Passionate about technology and development.</h3>

          <p>
            I am a Bachelor of Science in Information Technology
            graduate from Bulacan State University – Hagonoy Campus,
            majoring in Mobile Application and Web Development.
          </p>

          <p>
            I have experience working on web applications,
            desktop applications, and game development projects.
            I have also participated in project management,
            UI/UX design, and software quality assurance.
          </p>

          <p>
            I am continuously improving my programming skills
            and exploring modern technologies to become a
            well-rounded software developer.
          </p>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <GraduationCap size={30} />
            <h3>Education</h3>
            <p>BS Information Technology</p>
            <span>Bulacan State University</span>
          </div>

          <div className="info-card">
            <Code size={30} />
            <h3>Development</h3>
            <p>Web & Software Development</p>
            <span>Frontend and Backend</span>
          </div>

          <div className="info-card">
            <Lightbulb size={30} />
            <h3>Mindset</h3>
            <p>Continuous Learning</p>
            <span>Problem-solving and innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
