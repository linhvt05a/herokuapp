import React, { Component } from "react";
import { Trans } from "react-i18next";

const SupportGuide = (props) => {
  const {item, onClick, selected} = props
  return (
    <li className="nav-item">
      <a className={selected === item.active ? "nav-link active" : "nav-link"} onClick ={onClick}>
        <div className="step_item">
          <figure className="icon_step">
            <div className="no_active">
              <img src="./assets/images/review_purple.png" />
            </div>
            <div className="actived">
              <img src="./assets/images/review.png" />
            </div>
          </figure>
          <span className="step fw-medium"><Trans>{item.step}</Trans></span>
          <div className="direction">
            <div className="title text-uppercase fw-medium">
              <Trans>{item.title}</Trans>
            </div>
            <div className="content">
              <i><Trans>{item.guideLine}</Trans></i>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SupportGuide;
