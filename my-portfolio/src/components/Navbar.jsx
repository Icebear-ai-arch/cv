
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          <Code2 size={25} />
          <span>Justfer<span className="blue">.</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="nav-hire">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
