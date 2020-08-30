import React, { Component } from "react";
import { Trans } from "react-i18next";

const SocialNetwork = (props) => {
  const { social , onClick} = props;
  return (
    <div className="news_connect--link">
      <div className="title">
        <Trans>Social</Trans>:
        {social &&
          social.map((item, index) => (
            <a href={item.href} key={index} >
              <i className={item.icon} />
            </a>
          ))}
      </div>
    </div>
  );
};
export default SocialNetwork;
