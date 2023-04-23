import React, { useState } from "react";
import "./Navbar.css";
import 'animate.css';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };

  return (
    <div>
    

   <nav className="navbar">
      
      <div className="navbar-brand">
        <span className="navbar-logo">Manish Tomar</span>
      </div>
      <div className={`navbar-menu ${showMenu ? "is-active" : ""}`}>
        <a className="navbar-item" onClick={() => scrollToSection("about")}>
          About
        </a>
        <a className="navbar-item" onClick={() => scrollToSection("skills")}>
          Skills
        </a>

        <a className="navbar-item" onClick={() => scrollToSection("projects")}>
          Projects
        </a>
        <a className="navbar-item" onClick={() => scrollToSection("education")}>
          Education
        </a>
        <a className="navbar-item" onClick={() => scrollToSection("contact")}>
          Contact
        </a>
      </div>
      <button class="toggle"
        className={`navbar-burger ${showMenu ? "is-active" : ""}`}
        onClick={toggleMenu}
      >
        <span style={{marginBottom:"35px"}} class="toggle-button">☰</span>
        
      </button>
    </nav>
    </div>
 
  );
}

export default Navbar;
