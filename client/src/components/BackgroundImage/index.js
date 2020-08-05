import React from "react";
import "./style.css";

function BackgroundImage(props) {
  return (
    <div
      className="pic-section"
      uk-parallax="bgy: -200"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundImage;
