import React from "react";
import "./style.css";
import Header from "../../components/Header";
// import profilePic from "../../assets/images/me.png";

function AboutSection() {
  return (
    <div className="uk-container">
      <div className="uk-text-center">
        <div id="about-me-container">
          <div id="about-me">
            <Header title="About Me" />
            <p className="uk-text-justify about-me-desc">
              Hi! I'm Joanna, I'm a full-stack web developer and designer. I
              spent the last five years of my career in retail design, working
              for Urban Outfitters as a Market Display Artist. My career in
              design has taught me how to learn quickly, creatively solve
              problems, and build customer-focused spaces that are both
              functional and visually engaging. It's my passion for creating
              that made me fall in love with web development ever since my very
              first "Hello World".
              <br />
              <br />
              Currently, I'm finishing up a Full-Stack Web Development bootcamp
              through the University of Washington, where I am learning to
              convert my skills in building physical spaces, to building
              impactful user experiences on the web. I hope to transition into
              web development as a full time career, and am open to any and all
              opportunities. I am excited about merging my background in design
              with my newly developed technical skills, to build both useful and
              beautiful things on the web.
            </p>
            {/* <img src={} alt="Me" style={{ width: 175 }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
