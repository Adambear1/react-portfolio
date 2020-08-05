import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import AboutSection from "../components/AboutSection";
import BackgroundImage from "../components/BackgroundImage";
// import imageURL from "../../assets/images/background/top-left.jpeg";

function About() {
  return (
    <BackgroundImage
    // image={imageURL}
    >
      <Navbar />
      <HomeHeader />
      <AboutSection />
    </BackgroundImage>
  );
}

export default About;
