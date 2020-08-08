import React, { useEffect, useState } from "react";
import "./style.css";

function SkillsCard(props) {
  return (
    <div className="uk-text-center client-side-card">
      <div
        className={`uk-card uk-card-default ${props.name}-card ${props.animate}`}
      >
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.title}</h3>
          <ul className="uk-list uk-list-divider">
            {props.skills.map((item) => {
              return (
                <li title={item.name}>
                  <a href={item.url}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`uk-card-footer portfolio-card-footer ${props.name}-card-footer`}
        ></div>
      </div>
    </div>
  );
}

export default SkillsCard;
