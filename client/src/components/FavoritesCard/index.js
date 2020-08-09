/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import "./style.css";

function FavoritesCard(props) {
  return (
    <div className="uk-card uk-card-default portfolio-card">
      <div id={props.url} uk-modal>
        <div id={props.url} class="uk-modal-dialog uk-modal-body">
          <img src={props.gif} width="" height="" alt="" uk-img />
          <button class="uk-modal-close" type="button"></button>
        </div>
      </div>
      <div className="uk-card-body portfolio-card-body">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          uk-slideshow="true"
        >
          <ul className="uk-slideshow-items">
            <li>
              <h3 className="uk-card-title project-title">
                {props.name}
                <button
                  href={"#" + props.html_url}
                  type="button"
                  class="color"
                  uk-icon="tv"
                  uk-toggle
                />
              </h3>
              <p className="project-description">{props.description}</p>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="uk-card-footer portfolio-card-footer">
        <div className="uk-text-center">
          <a href={props.html_url} target="_blank" className="btn-link">
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
  );
}

export default FavoritesCard;
