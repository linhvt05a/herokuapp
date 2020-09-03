import React, { useState, useEffect } from "react";
import CardHeader from '../../components/common/CardHeader'
import {LeftContent, RightContent} from './index'
import { useDispatch, useSelector } from "react-redux";
import {newsAction} from "../../store/action/index";
import moment from 'moment';
const NewsDetail = (props) => {
  const [comment, setComment] = useState('')
  const[parentID, setParentID] = useState('')
  const[childContent, setChildContent] = useState('')
  const[nameSearch, setName] = useState('')
  const[cateID, setCateId] = useState('')
  const[dateFrom, setDateFrom] = useState('')
  const[dateTo, setDateTo] = useState('')
  const[isFilter,setFilter] = useState(false)
  const [dataSearch, setDataFilter] = useState('')
  const newsDetail = useSelector(state => state.newsReducer);
  const newsDetailSuccess = newsDetail.newsDetail.success
  const listDetail = newsDetailSuccess ? newsDetail.newsDetail.detail : null;
 
  const dispatch = useDispatch();

  const newsCates = useSelector(state => state.newsReducer);
  const newsCateSuccess = newsCates.newsCategories.success
  const newsCategories = newsCateSuccess ? newsCates.newsCategories.detail : null;

  const newsComment = useSelector(state => state.newsReducer);
  const newsCommentSuccess = newsComment.newsCommentList.success
  const commentList = newsCommentSuccess ? newsComment.newsCommentList.detail : null;
  
  const hotNews = useSelector(state => state.newsReducer);
  const hotNewsSuccess = hotNews.newsList.success
  const hotList = hotNewsSuccess ? hotNews.newsList.detail : null;
  const news_id = 141

  const news = useSelector(state => state.newsReducer);
  const newsListSuccess = news.newsList.success
  const newsList = newsListSuccess ? news.newsList.detail : null;
  const news_sort = true

  useEffect(() => {
      dispatch(newsAction.LoadNewsList({news_sort: news_sort}))
      dispatch(newsAction.LoadNewsDetail({news_id: news_id}));
      dispatch(newsAction.commentList({news_id: news_id}))
      
  }, []);

 const addComment = (e) =>{
  e.preventDefault()
  if(comment !== ""){
    dispatch(newsAction.addComment({news_id: news_id, comment: comment}))
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
    dispatch(newsAction.addComment({news_id: news_id, comment: childContent, parent: parentID}))
 }

 const changeChildContent = (e)=>{
  const childValue = e.target.value
    setChildContent(childValue)
 }

 const handleFilter = () =>{
  
 }

const handleChangeNewsTitle = (e) =>{
  const value = e.target.value
  setName(value)
}
const changeSelect = (value) =>{
  setCateId(value)
}

const changeDateFrom = (value) =>{
  convertDateFrom(value)
}

const changeDateTo = (value) =>{
  convertDateTo(value)
}

function convertDateTo(value){
  const date = moment(value).format('DD/MM/YYYY')
  setDateTo(date)
  return date
}
function convertDateFrom(value){
  const date = moment(value).format('DD/MM/YYYY')
  setDateFrom(date)
  return date
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
          
          
            <RightContent 
              paramsSearch ={cateID, nameSearch, dateTo, dateFrom}
              data={hotList} 
              cateID={cateID} 
              changeDateTo={changeDateTo} 
              handleChange ={handleChangeNewsTitle} 
              changeDateFrom={changeDateFrom} 
              changeSelect={changeSelect} 
              handleFilter={handleFilter} 
              newsCategories={newsCategories} 

            />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
