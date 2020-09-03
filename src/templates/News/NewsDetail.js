import React, { useState, useEffect } from "react";
import CardHeader from '../../components/common/CardHeader'
import {LeftContent, RightContent} from './index'
import { useDispatch, useSelector } from "react-redux";
import { newsDetailAction, hotNewsAction,newsAction, commentNewsAction, newsCommentListAction } from "../../store/action/index";
import {Link} from 'react-router-dom'

const NewsDetail = (props) => {
  const [comment, setComment] = useState('')
  const[parentID, setParentID] = useState('')
  const[childContent, setChildContent] = useState('')
  const[nameSearch, setName] = useState('')
  const[cateID, setCateId] = useState('')
  const[dateFrom, setDateFrom] = useState('')
  const[dateTo, setDateTo] = useState('')
  const[isFilter,setFilter] = useState(false)

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

  const news = useSelector(state => state.newsReducer);
  const newsListSuccess = news.newsList.success
  const newsList = newsListSuccess ? news.newsList.detail : null;
  const news_sort = true

  useEffect(() => {
      dispatch(newsAction.LoadNewsList({news_sort: news_sort}))
      dispatch(newsDetailAction.LoadNewsDetail({news_id: news_id}));
      
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

 const handleFilter = () =>{
   setFilter(true)
   if(isFilter){
    dispatch(newsAction.LoadNewsList({nameSearch: nameSearch,cateID : cateID, dateFrom: dateFrom, dateTo: dateTo}));
   }
 
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
        <div className={isFilter === true ? "row" : "row row_detail"}>
        {isFilter === false && 
        <LeftContent 
              listDetail ={listDetail} 
              sendChildComment={sendChildComment} 
              childContent={changeChildContent} 
              addChildComment={addChildComment} 
              commentList={commentList} 
              addComment={addComment} 
              handleChange={handleChange}
            />
          }
          {isFilter === true && <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8"> <RowNews datas={newsList}/></div>}
            <RightContent 
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

const RowNews = (props) =>{
  const {datas} = props
  return(
        <div className="row_content">
        {datas && datas.length > 0 ? datas && datas.map((item, index)=>
            <div className="card" >
            <Link  className="link"></Link>
            <div className="row ">
                <div className="col-sm-12 col-md-5 col-xl-5 d-flex">
                    <div className="news__card--img">
                        <img src={item.news_avatar}/>
                    </div>
                </div>
                <div className="col-md-7 col-xl-7">
                    <div className="news__card--content">
                        <Link  className="title" >
                            {item.news_title}
                        </Link>
                        <div className="times">
                            Ngày đăng : {datas?.from_date}
                        </div>
                        <p className="contain">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
      ) : <div>nodata</div>
    }
    </div>
   
      
  
  )
}
export default NewsDetail;
