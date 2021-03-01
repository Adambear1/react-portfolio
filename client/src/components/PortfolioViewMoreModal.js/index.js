import React from "react";
import "./styles.css";
function PortfolioViewMoreModal({
  open,
  setOpen,
  timeSpent,
  giph,
  learningExp,
  name,
  site,
  futureAdditions,
  technologiesUsed,
}) {
  return (
    <div className="more-modal uk-text-center">
      <div className="more-modal-content">
        <span className="close" onClick={() => setOpen(false)}>
          &times;
        </span>
        <h3 className="uk-card-title project-title">{name}</h3>
        <a
          href={site}
          target="_blank"
          rel="noreferrer"
          title={"Visit: " + name}
        >
          <img src={giph} alt="gif of work" />
        </a>
        <div className="uk-text-center">
          <ul className="uk-list">
            <p>Technologies Used:</p>
            {technologiesUsed.map((item, index) => (
              <li key={index} style={{ display: "inline" }}>
                {item}
                {index !== technologiesUsed.length - 2 &&
                index !== technologiesUsed.length - 1
                  ? ",  "
                  : index === technologiesUsed.length - 2
                  ? ", and "
                  : "."}
              </li>
            ))}
          </ul>
          <ul className="uk-list">
            <p>Learning Experiences:</p>
            {learningExp.map((item, index) => (
              <li key={index} style={{ display: "inline" }}>
                {item}
                {index !== learningExp.length - 2 &&
                index !== learningExp.length - 1
                  ? ",  "
                  : index === learningExp.length - 2
                  ? ", and "
                  : "."}
              </li>
            ))}
          </ul>
          {futureAdditions && (
            <ul className="uk-list">
              <p>Future Additions</p>
              {futureAdditions.map((item, index) => (
                <li key={index} style={{ display: "inline" }}>
                  {item}
                  {index !== futureAdditions.length - 2 &&
                  index !== futureAdditions.length - 1
                    ? ",  "
                    : index === futureAdditions.length - 2
                    ? ", and "
                    : "."}
                </li>
              ))}
            </ul>
          )}
          <p>Time Spent: {timeSpent}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioViewMoreModal;
