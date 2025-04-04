import React from "react";
import "./aboutStyling.css";

function AboutMe() {
  return (
    <section id="AboutMe" className="about--section container">
      <div>
        {" "}
        <p className="sub--title">About</p>
        <h1 className="section--title">About Me</h1>
      </div>

      <div className="about-description">
        <p className="hero--section--description">
          Hello! I am a Computer Science student at Addis Ababa University,
          specializing in <strong>Full Stack (MERN) Development</strong> with
          strong expertise in both frontend and backend development. My skill
          set includes:
        </p>
        <ul className="skills-list">
          <li>
            <strong>React</strong>
          </li>
          <li>
            <strong>TypeScript</strong>
          </li>
          <li>
            <strong>Express</strong>
          </li>
          <li>
            <strong>MongoDB</strong>
          </li>
          <li>
            <strong>Node.js</strong>
          </li>
        </ul>
        <div className="about-paragraphs">
          <p className="hero--section--description">
            In addition to my development expertise, I am a skilled{" "}
            <strong>UX/UI designer</strong> focused on creating intuitive user
            interfaces.
          </p>
          <p className="hero--section--description">
            I also have a strong background in <strong>video editing</strong>,
            mastering tools like <strong>Adobe Photoshop</strong>,{" "}
            <strong>CapCut</strong>, and <strong>Adobe Premiere Pro</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
