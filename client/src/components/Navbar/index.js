/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const style = {
  navbar: {
    backgroundColor: "transparent",
  },
};

function Navbar(props) {
  return (
    <div>
      <nav
        className="uk-navbar-container uk-navbar navbar"
        style={style.navbar}
      >
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-visible@m">
            <li>
              <Link to="/" className="nav-item" style={{ color: props.color }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-item"
                style={{ color: props.color }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="nav-item"
                style={{ color: props.color }}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="nav-item"
                style={{ color: props.color }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link uk-toggle="target: #resume-modal" className="nav-item">
                Resume
              </Link>
            </li>
            <li>
              <Link
                uk-toggle="target: #contact-canvas"
                className="nav-item"
                style={{ color: props.color }}
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            className="uk-hidden@m"
            href="#menu-canvas"
            uk-toggle="target: #menu-canvas"
          >
            <span className="menu-icon" uk-icon="icon: menu; ratio: 1.5"></span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
