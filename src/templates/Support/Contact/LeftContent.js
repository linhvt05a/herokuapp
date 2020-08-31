import React, { Component } from 'react';
import { Trans } from 'react-i18next';

const LeftContent= () =>{
    return(
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-left">
        <h2 className="heading"><Trans>Contact Details</Trans></h2>
        <h3 className="description">
          <Trans>
            If you have any questions, just fill out the contact form, and
            We will reply to you shortly. If you live nearby, come
            visit our office.
          </Trans>
        </h3>
        <ul className="details">
          <li>
            <i className="icon fas fa-phone-alt" />
            <p className="text">
              <span className="sub"><Trans>Customer support :</Trans></span>
              <span className="main">1900-123-456</span>
            </p>
          </li>
          <li>
            <i className="icon fas fa-envelope" />
            <p className="text">
              <span className="sub"><Trans>Contact email:</Trans></span>
              <span className="main">minerva@gmail.com</span>
            </p>
          </li>
          <li>
            <i className="icon fas fa-map-marker-alt" />
            <p className="text">
              <span className="sub"><Trans>Office Address:</Trans></span>
              <span className="main address">
                <Trans>119 Pastuer, Ward 6, District 3, Tp. Ho Chi Minh</Trans>
              </span>
            </p>
          </li>
        </ul>
      </div>
     
    )
}

export default LeftContent