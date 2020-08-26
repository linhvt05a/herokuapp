import React, { Component } from "react";
import CardHeader from '../../components/common/CardHeader'
import {LeftContent, RightContent} from './index'

const NewsDetail = () => {
  return (
    <div className="news_detail">
      <div className="container container-sm container-md">
            <CardHeader label="News"/>
        <div className="row row_detail">
            <LeftContent />
            <RightContent />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
