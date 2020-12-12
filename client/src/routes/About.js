import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import BackgroundImage from "../components/BackgroundImage";
import aboutImage from "../assets/images/about.jpg";
import AboutImage from "../components/AboutImage";

function About() {
  return (
    <BackgroundImage
      image={aboutImage}
      style={{ height: 100, position: "fixed" }}
    >
      <Navbar />
      {/* <div className="uk-grid" uk-grid="true"> */}
      <AboutSection />
      {/* </div> */}
    </BackgroundImage>
  );
}

export default About;
