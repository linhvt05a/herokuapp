import React, { useState, useEffect } from "react";
import CardHeader from '../../components/common/CardHeader'
import {LeftContent, RightContent} from './index'
import { useDispatch, useSelector } from "react-redux";
import { newsDetailAction, hotNewsAction,newsAction, commentNewsAction, newsCommentListAction } from "../../store/action/index";


const NewsDetail = (props) => {
  const [comment, setComment] = useState('')
  const[parentID, setParentID] = useState('')
  const[childContent, setChildContent] = useState('')

  const newsDetail = useSelector(state => state.newsDetailReducer);
  const newsDetailSuccess = newsDetail.newsDetail.success
  const listDetail = newsDetailSuccess ? newsDetail.newsDetail.detail : null;
 
  const dispatch = useDispatch();

  const newsCates = useSelector(state => state.newsCategoriesReducer);
  const newsCateSuccess = newsCates.newsCate.success
  const newsCategories = newsCateSuccess ? newsCates.newsCate.detail : null;

  const newsComment = useSelector(state => state.newsCommentListReducer);
  const newsCommentSuccess = newsComment.commentList.success
  const commentList = newsCommentSuccess ? newsComment.commentList.detail : null;
  
  const hotNews = useSelector(state => state.newsReducer);
  const hotNewsSuccess = hotNews.newsList.success
  const hotList = hotNewsSuccess ? hotNews.newsList.detail : null;
  const news_id = 141

  useEffect(() => {
      dispatch(newsAction.LoadNewsList({news_sort: true}))
      dispatch(newsDetailAction.LoadNewsDetail({news_id: news_id}));
      dispatch(hotNewsAction.hotNewsList({}));
      dispatch(newsCommentListAction.commentList({news_id: news_id}))
      
  }, []);

 const addComment = (e) =>{
  e.preventDefault()
  if(comment !== ""){
    dispatch(commentNewsAction.addComment({news_id: news_id, comment: comment}))
  }else {
    return false
  }
 }

 const handleChange = (e) =>{
    const value = e.target.value
    setComment(value)
 }
 const addChildComment = (parentID) =>{
   setParentID(parentID)
 }

 const sendChildComment = (e) =>{
   e.preventDefault()
    dispatch(commentNewsAction.addComment({news_id: news_id, comment: childContent, parent: parentID}))
 }

 const changeChildContent = (e)=>{
  const childValue = e.target.value
    setChildContent(childValue)
 }
  return (
    <div className="news_detail">
      <div className="container container-sm container-md">
            <CardHeader label="News"/>
        <div className="row row_detail">
            <LeftContent 
              listDetail ={listDetail} 
              sendChildComment={sendChildComment} 
              childContent={changeChildContent} 
              addChildComment={addChildComment} 
              commentList={commentList} 
              addComment={addComment} 
              handleChange={handleChange}
            />
            <RightContent data={hotList}  newsCategories={newsCategories} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
