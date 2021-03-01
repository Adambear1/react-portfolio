/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import PortfolioViewMoreModal from "../PortfolioViewMoreModal.js";
import "./style.css";

function PortfolioCard({ name, description, site }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open && <PortfolioViewMoreModal open={open} setOpen={setOpen} />}
      <div className="uk-card uk-card-default portfolio-card">
        <div className="uk-card-body portfolio-card-body">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            uk-slideshow="true"
          >
            <ul className="uk-slideshow-items">
              <li>
                <h3 className="uk-card-title project-title">{name}</h3>
                <p className="project-description">{description}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="uk-card-footer portfolio-card-footer">
          <div className="uk-text-center">
            <a
              href={site}
              target="_blank"
              rel="noreferrer"
              className="btn-link"
            >
              <button
                className="uk-button uk-button-default portfolio-btn"
                uk-icon="icon: world"
              >
                View Application
              </button>
            </a>
            <a
              onClick={() => setOpen(true)}
              target="_blank"
              className="btn-link"
            >
              <button
                className="uk-button uk-button-default portfolio-btn"
                uk-icon="icon: more-vertical"
              >
                View More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
