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
              Hi! I'm Adam, I'm a full-stack web developer and software engineer
              with a passion for databases and algorithms. After graduating from
              the University of Washington I worked two years at a grass-roots
              organization in Tacoma creating projection models, databases, and
              helping facilitate the remodeling and construction of residential
              properties. My career as a real estate investor has been teaching
              the importance databases and numbers, as well as the importance of
              loyalty and communication. To thrive in such an industry, personal
              connections and precision mean everything; I look to continue such
              routes in the world of web development.
              <br />
              <br />
              As I have just finished a Full-Stack Web Development Certification
              course at the University of Washington, I have had the opportunity
              to roll into the Python Certification course, where I look to
              further hone my software development skills while continuing my
              daily life.
              <br />
              <br />I am always open to additional work and opportunities. For
              any inquiries, please feel free to reach out!
            </p>
            {/* <img src={profilePic} alt="Me" style={{ width: 175 }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
