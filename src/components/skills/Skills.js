import React from "react";
import "./Skills.css";

function Skills() {
  const skillsList = [
    { name: "C++", icon: "fas fa-code", level: "Expert" },
    { name: "Data Structures", icon: "fas fa-sitemap", level: "Intermediate" },
    { name: "HTML", icon: "fab fa-html5", level: "Expert" },
    { name: "CSS", icon: "fab fa-css3-alt", level: "Intermediate" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", level: "Intermediate" },
    { name: "JavaScript", icon: "fab fa-js", level: "Intermediate" },
    { name: "React", icon: "fab fa-react", level: "Intermediate" },
    { name: "Node.js", icon: "fab fa-node-js", level: "Intermediate" },
    { name: "Express.js", icon: "fas fa-server", level: "Intermediate" },
    { name: "MongoDB", icon: "fas fa-database", level: "Expert" },
    { name: "Git", icon: "fab fa-git-alt", level: "Expert" },
    { name: "GitHub", icon: "fab fa-github", level: "Intermediate" },
  ];

  return (
    <section id="skills">
      <div className="skills">
        <h2 className="skills-heading">SKILLS</h2>
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill.name}>
              <i className={`fa ${skill.icon}`}></i>
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.level} level</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
