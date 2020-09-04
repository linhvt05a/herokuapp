import React, { Component } from "react";
import { Trans } from "react-i18next";
import CardNoData from '../../../components/common/CardNoData';

const SupportGuide = (props) => {
  return (
    <li className="nav-item">
      <a className= {props.active} onClick={props.onSelectItem}>
        <div className="step_item">
          <figure className="icon_step">
            {props.content}
          </figure>
          <span className="step fw-medium"><Trans>{props.step}</Trans></span>
          <div className="direction">
            <div className="title text-uppercase fw-medium">
              <Trans>{props.title}</Trans>
            </div>
            <div className="content">
              <i><Trans>{props.guideLine}</Trans></i>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SupportGuide;
