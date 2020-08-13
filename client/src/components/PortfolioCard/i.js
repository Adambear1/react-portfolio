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
          <li>
            <img src={props.gif} alt="" uk-cover="true" />
          </li>
        </ul>
        <a
          className="uk-position-top-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next="true"
          uk-slideshow-item="next"
        ></a>
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
</div>;
