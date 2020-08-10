import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import BackgroundImage from "../components/BackgroundImage";
import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <BackgroundImage image={aboutImage}>
      <Navbar />
      <AboutSection />
    </BackgroundImage>
  );
}

export default About;
