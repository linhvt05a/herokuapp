import React from "react";
import TopBanner from "../../../components/common/Header/TopBanner";
import {LeftContent, RightContent} from './index'
import { useDispatch, useSelector } from "react-redux";
import RightContact from "./RightContact";

const Contact = (props) => {
  return (
    <div className="contact__page">
      <div className="container container-sm container-md">
        <div className="row">
          <LeftContent />
          <RightContact />
        </div>
      </div>
    </div>
  );
};
export default Contact;
