import React from "react";

function Header(props) {
  return (
    <div className="uk-text-center" id={props.id}>
      <h1 className="page-heading" style={{ paddingTop: props.padding }}>
        {props.title}
      </h1>
      <hr />
    </div>
  );
}

export default Header;
