import React from "react";

const CardMode = (props) => {
  const { title, switchMode, mode} = props;
  return (
    <li className="nav-item">
        <a className={mode ? "nav-link active" : "nav-link"} onClick={switchMode}>{title}</a>
    </li>
  );
};
export default CardMode;
