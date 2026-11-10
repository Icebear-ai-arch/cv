
import { useState } from "react";
import { Mail, Send, MapPin } from "lucide-react";

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

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/your-email@example.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus(
        "Unable to send message. Please try again later."
      );
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <span className="section-label">GET IN TOUCH</span>
        <h2>Let's Work <span className="blue">Together</span></h2>
        <p>Have an opportunity or project? Feel free to contact me.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          <h3>Let's connect!</h3>
          <p>
            I'm open to software development opportunities,
            collaborations, and learning experiences.
          </p>

          <div className="contact-item">
            <Mail />
            <div>
              <strong>Email</strong>
              <p>carabuenajustfer@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <MapPin />
            <div>
              <strong>Location</strong>
              <p>Bulacan, Philippines</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Icebear-ai-arch"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubMark />
            </a>

            <a
              href="https://www.linkedin.com/in/justfer-carabuena-068381341/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInMark />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button type="submit" className="btn btn-primary">
            Send Message <Send size={18} />
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
