import React from "react";
import "./style.css";
import Header from "../../components/Header";

function AboutSection() {
  return (
    <div className="uk-container about-container">
      <div className="uk-text-center">
        <div id="about-me-container">
          <div id="about-me">
            <Header title="About Me" />
            <p className="uk-text-justify about-me-desc">
              Hi, I'm Adam! I'm a full-stack developer with a experience in
              Javascript, Node, Python, Elixir, and Google and Amazon Web
              Services.
              <br />
              <br />
              I have been a full-stack developer for a year now, and have
              developed, hosted, and maintained over 15 professional projects
              from companies all throughout Washington State. I strive to be the
              best web developer I can, and am up to any task.
              <br />
              <br />
              For my free time, I love renovating and developing housing and
              condominiums, reading, hiking, and exploring. I am proficient in
              Spanish and Japanese, and love trying new things!
            </p>
            {/* <img src={profilePic} alt="Me" style={{ width: 175 }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
