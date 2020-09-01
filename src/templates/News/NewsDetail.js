import React, { useState, useEffect } from "react";
import CardHeader from '../../components/common/CardHeader'
import {LeftContent, RightContent} from './index'
import { useDispatch, useSelector } from "react-redux";
import { newsDetailAction, hotNewsAction } from "../../store/action/index";


const NewsDetail = (props) => {
 
  const newsDetail = useSelector(state => state.newsDetailReducer);
  const newsDetailSuccess = newsDetail.newsDetail.success
  const listDetail = newsDetailSuccess ? newsDetail.newsDetail.detail : null;
  const dispatch = useDispatch();

  const hotNews = useSelector(state => state.hotNewsReducer);
  const hotListSuccess = hotNews.hotNewsList.success
  const hotList = hotListSuccess ? hotNews.hotNewsList.detail : null;

  const newsCates = useSelector(state => state.newsCategoriesReducer);
  const newsCateSuccess = newsCates.newsCate.success
  const newsCategories = newsCateSuccess ? newsCates.newsCate.detail : null;
  const news_id = 141
  useEffect(() => {
    
      dispatch(newsDetailAction.LoadNewsDetail({news_id: news_id}));
      dispatch(hotNewsAction.hotNewsList({}));
      
  }, []);
  console.log(props)
  return (
    <div className="news_detail">
      <div className="container container-sm container-md">
            <CardHeader label="News"/>
        <div className="row row_detail">
            <LeftContent data ={listDetail}/>
            <RightContent data={hotList}  newsCategories={newsCategories} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
