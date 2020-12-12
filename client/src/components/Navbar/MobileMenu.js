/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MobileMenu() {
  return (
    <div id="menu-canvas" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          uk-close="true"
        ></button>
        <ul className="uk-list">
          <li>
            <a href="/" className="nav-item mobile-nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item mobile-nav-item">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-item mobile-nav-item">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-item mobile-nav-item">
              Skills
            </a>
          </li>
          <li>
            <a
              uk-toggle="target: #resume-modal"
              className="nav-item mobile-nav-item"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              uk-toggle="target: #contact-canvas"
              className="nav-item mobile-nav-item"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
