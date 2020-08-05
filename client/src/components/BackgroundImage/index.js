import React from "react";
import "./style.css";

function BackgroundImage(props) {
  return (
    <div
      className="pic-section"
      uk-parallax="bgy: -200"
      // style={{
      // backgroundImage: `url(https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg)`,
      // }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundImage;
