import React from "react";
import "./Projects.css"; // Import CSS file
function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React.",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Todo App",
      description: "A simple todo app with local storage.",
      github: "https://github.com/yourusername/todo-app",
    },
    {
      title: "Weather App",
      description: "Weather forecast app using OpenWeather API.",
      github: "https://github.com/yourusername/weather-app",
    },
  ];
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;