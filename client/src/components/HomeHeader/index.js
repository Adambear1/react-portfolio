import React from "react";
import "./style.css";

function HomeHeader() {
  return (
    <div className="uk-container home-container uk-text-center">
      <div className="uk-text-center">
        <div id="title-container">
          <h1
            className="uk-heading-medium uk-text-center"
            id="my-name"
            style={{ margin: 0 }}
          >
            Adam Birgenheier
          </h1>
          <h5 className="uk-text-lighter subtitle uk-text-center" id="my-sub">
            Full-Stack Web Developer & Software Engineer
          </h5>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
