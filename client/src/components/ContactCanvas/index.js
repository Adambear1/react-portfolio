/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

function ContactCanvas() {
  return (
    <div id="contact-canvas" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          uk-close="true"
        ></button>
        <h3 id="contact-title">Contact Me</h3>
        <ul className="uk-list">
          <li>
            <a
              uk-icon="icon: mail"
              className="contact-icon contact-link-icon"
              href="mailto:adamcarlbirgenheier@gmail.com"
            ></a>
            <a
              className="contact-link contact-li uk-text-middle"
              href="mailto:adamcarlbirgenheier@gmail.com"
            >
              adamcarlbirgenheier@gmail.com
            </a>
          </li>
          <li>
            <span className="contact-icon" uk-icon="icon: receiver"></span>
            <span className="contact-li uk-text-middle">(253) 355-2021</span>
          </li>
          <li>
            <span uk-icon="icon: home" className="contact-icon"></span>
            <span className="contact-li uk-text-bottom">Tacoma, WA 98402</span>
          </li>
          <li>
            <a
              uk-icon="icon: github"
              href="https://github.com/Adambear1"
              className="contact-icon contact-link-icon"
              target="_blank"
            ></a>
            <a
              className="contact-link contact-li uk-text-middle"
              href="https://github.com/Adambear1"
              target="_blank"
            >
              Adambear1
            </a>
          </li>
          <li>
            <a
              uk-icon="icon: world"
              href="http://www.quality-creations.com"
              className="contact-icon contact-link-icon"
              target="_blank"
            ></a>
            <a
              className="contact-link contact-li uk-text-middle"
              href="http://www.quality-creations.com/"
              target="_blank"
            >
              Quality-Creations
            </a>
          </li>
          <li>
            <a
              uk-icon="icon: linkedin"
              href="https://www.linkedin.com/in/abirgenheier/"
              className="contact-icon contact-link-icon"
              target="_blank"
            ></a>
            <a
              className="contact-link contact-li uk-text-bottom"
              href="https://www.linkedin.com/in/abirgenheier/"
              target="_blank"
            >
              Adam Birgenheier
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactCanvas;
