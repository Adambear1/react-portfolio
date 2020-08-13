/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <>
      <div className="uk-card uk-card-default portfolio-card">
        {/* <div id={props.repoURL} uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <img src={props.gif} width="" height="" alt="" uk-img />
          <button class="uk-modal-close" type="button"></button>
        </div>
      </div> */}
        <div className="uk-card-body portfolio-card-body">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            uk-slideshow="true"
          >
            <ul className="uk-slideshow-items">
              <li>
                <h3 className="uk-card-title project-title">
                  {props.title}

                  {/* <button
                  href={"#" + props.repoURL}
                  type="button"
                  class="color"
                  uk-icon="tv"
                  uk-toggle
                /> */}
                  <button
                    class="uk-button uk-button-default uk-margin-small-right"
                    type="button"
                    uk-toggle="target: #modal-example"
                  >
                    Open
                  </button>
                </h3>
                <p className="project-description">{props.about}</p>
              </li>
              {props.lEx.map((item) => {
                return <li title={item.learningExp}>{item.learningExp}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="uk-card-footer portfolio-card-footer">
          <div className="uk-text-center">
            <a href={props.siteURL} target="_blank" className="btn-link">
              <button
                className="uk-button uk-button-default portfolio-btn "
                uk-icon="world"
              >
                View Website{"    "}
              </button>
            </a>
            <a href={props.repoURL} target="_blank" className="btn-link">
              <button
                className="uk-button uk-button-default portfolio-btn "
                uk-icon="github"
              >
                GitHub Repo{"    "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div id="modal-example" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <h2 class="uk-modal-title">Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="uk-text-right">
            <button
              class="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancel
            </button>
            <button class="uk-button uk-button-primary" type="button">
              Save
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
