import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

function Home() {
  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <HeroSection ref={sectionRef} />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}

export default Home;
