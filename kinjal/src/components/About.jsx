import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://via.placeholder.com/250"
            alt="Profile"
          />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi! I'm Sandesh Sah, a passionate web developer and computer instructor.
            I love building web applications using <strong>React.js</strong>,
            experimenting with new technologies, and teaching students how to code.
          </p>
          <p>
            My goal is to keep improving my skills while helping others
            understand programming in the simplest way possible 🚀.
          </p>
          <a href="#projects" className="btn">See My Projects</a>
        </div>
      </div>
    </section>
  );
};
export default About;