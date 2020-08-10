import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import BackgroundImage from "../components/BackgroundImage";
import homeImage from "../assets/images/home.jpg";

function About() {
  return (
    <BackgroundImage image={homeImage}>
      <Navbar />
      <HomeHeader />
    </BackgroundImage>
  );
}

export default About;
