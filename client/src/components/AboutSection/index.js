import React from "react";
import "./style.css";
import Header from "../../components/Header";
import AboutImage from "../AboutImage";

function AboutSection() {
  return (
    <div className="uk-container about-container">
      <div className="uk-text-center">
        <div id="about-me-container">
          <div id="about-me">
            <Header title="About Me" />
            <p className="uk-text-justify about-me-desc">
              Hi, I'm Adam! I'm a full-stack developer experienced in
              Javascript (React & Node), Python, and Elixir.
              <br />
              <br />
              My professional experience includes writing, integrating, and maintaining code for various tech startups, consulting interantional ecommerce stores on modern React/Redux methods, as well as teaching and tutoring
              students at the University of Washignton. 
              I love creating new
              software that serves a purpose. A few projects I have created are
              a real estate market analyzing tool, Yelp and Zillow prototypes,
              as well as various professional sites for local organizations.
              <br />
              <br />
              For my free time, I love remodeling houses, as well
              as reading, hiking, and exploring. I am proficient in Spanish and
              Japanese, and love trying new things and meeting new people!
            </p>
            <p><AboutImage /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
