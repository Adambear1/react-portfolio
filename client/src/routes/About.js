import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import AboutSection from "../components/AboutSection";
import BackgroundImage from "../components/BackgroundImage";

function About() {
  return (
    <BackgroundImage>
      <Navbar />
      <HomeHeader />
      <AboutSection />
    </BackgroundImage>
  );
}

export default About;
