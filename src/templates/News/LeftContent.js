import Parser from 'html-react-parser';
import React, { Component } from "react";
import { SocialNetwork, Comment, ReplyComment } from "./index";


const social = [
    {id: 1, icon : 'fab fa-facebook-square', href:'/promotion'},
    {id: 2, icon : 'fab fa-youtube', href:'/support'}, 
    {id: 3, icon : 'fab fa-twitter', href:'/project/selling'}
]

const LeftContent = (props) => {
  const {data} = props
  return (
    <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
      <div className="image_news">
        <img src={data?.news_avatar} />
      </div>
      <div className="news_detail_title pb-4">
        <label>{data?.news_title}</label>
        <div className="news_connect">
          <div className="news_connect--time">
            <div className="title">
              <i className="far fa-clock" /> Ngày đăng: {data?.from_date}
            </div>
          </div>
          <SocialNetwork social={social} />
        </div>
      </div>
        <RowContent data={data}/>
        <Comment />
        <TotalComment label="COMMENT" title="comment"/>
        <ReplyComment />
    </div>
  );
};

const TotalComment = (props) =>{
    return(
        <div className="comment onSignIn">
        <div className="comment_title">{props.label}</div>
        <div className="comment_number">
                Có
        <span className="text_e94c4c"> 3 </span>
            {props.title}
        </div>
      </div>
    )
}
const RowContent = (props) =>{
  const {data} = props
  
   return(
        <div className="content_detail">
        <p>
          {data?.description}
        </p>
        
      </div>
      
    )
}
export default LeftContent;
