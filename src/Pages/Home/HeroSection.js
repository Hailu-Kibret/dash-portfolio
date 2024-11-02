import React from "react";
import herophoto from "../../asset/logo-photo.png";

function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey I'm Hailu</p>
          <h1 className="sero--section--title">
            <span className="hero--section--title--color">Front-end</span>{" "}
            <br /> developer
          </h1>

          <p className="hero--section--description">
            {" "}
            I am a dedicated front end developer with more than 2 years of
            experience <br /> I worked with many projects and real life
            problems.
          </p>
        </div>

        <button onClick={scrollToContact} className="btn btn-primary">
          Get in Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src={herophoto} alt="hero section" />
      </div>
    </section>
  );
}

export default HeroSection;
