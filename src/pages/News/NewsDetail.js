import React, { useState, useEffect } from "react";
import CardHeader from '../../components/common/CardHeader'
import {LeftContent, RightContent} from './index'
import { useDispatch, useSelector } from "react-redux";
import { newsDetailAction } from "../../store/action/index";

const NewsDetail = (props) => {
  
  const newsDetail = useSelector(state => state.newsDetailReducer);
  const newsDetailSuccess = newsDetail.newsDetail.success
  const listDetail = newsDetailSuccess ? newsDetail.newsDetail.detail : null;
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(newsDetailAction.LoadNewsDetail({}));
  }, []);

  return (
    <div className="news_detail">
      <div className="container container-sm container-md">
            <CardHeader label="News"/>
        <div className="row row_detail">
            <LeftContent data ={listDetail}/>
            <RightContent />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
