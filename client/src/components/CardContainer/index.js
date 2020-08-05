import React from "react";
import "./style.css";

function CardContainer(props) {
  return <div className="uk-container card-container">{props.children}</div>;
}

export default CardContainer;
