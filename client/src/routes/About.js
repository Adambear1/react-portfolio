import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import BackgroundImage from "../components/BackgroundImage";

function About() {
  return (
    <BackgroundImage>
      <Navbar />
      <AboutSection />
    </BackgroundImage>
  );
}

export default About;
