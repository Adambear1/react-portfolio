/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div>
      <div className="uk-card uk-card-default portfolio-card">
        <div className="uk-card-body portfolio-card-body">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            uk-slideshow="true"
          >
            <ul className="uk-slideshow-items">
              <li>
                <h3 className="uk-card-title project-title">{props.title}</h3>
                <p className="project-description">{props.about}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="uk-card-footer portfolio-card-footer">
          <div className="uk-text-center">
            <a href={props.siteURL} target="_blank" className="btn-link">
              <button
                className="uk-button uk-button-default portfolio-btn"
                uk-icon="world"
              >
                View Website
              </button>
            </a>
            <a href={props.repoURL} target="_blank" className="btn-link">
              <button
                className="uk-button uk-button-default portfolio-btn"
                uk-icon="github"
              >
                GitHub Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
