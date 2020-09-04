
import React, { useState } from "react";
import { SocialNetwork, Comment, ReplyComment } from "./index";
import Parser from 'html-react-parser';
import { Trans } from "react-i18next";
import moment from 'moment'
const social = [
    {id: 1, icon : 'fab fa-facebook-square', href:'/promotion'},
    {id: 2, icon : 'fab fa-youtube', href:'/support'}, 
    {id: 3, icon : 'fab fa-twitter', href:'/project/selling'}
]
function convertDate(value){
	const date = moment().format("DD/MM/YYYY")
	return date
}
const LeftContent = (props) => {
  const{listDetail, addComment, handleChange,commentList, addChildComment, sendChildComment, childContent} = props
  return (
    <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
      <div className="image_news">
        <img src={listDetail?.news_avatar}/>
      </div>
      <div className="news_detail_title pb-4">
        <label>{listDetail?.news_title}</label>
        <div className="news_connect">
          <div className="news_connect--time">
            <div className="title">
              <i className="far fa-clock" /> 
                <Trans>Create at</Trans>: {convertDate(listDetail?.from_date)}
            </div>
          </div>
          <SocialNetwork social={social} />
        </div>
      </div>
        <RowContent listDetail={listDetail}/>
        <Comment addComment={addComment} handleChange={handleChange}/>
        <TotalComment label="COMMENT" title="comment" commentList={commentList}/>
        <ReplyComment commentList={commentList} addChildComment={addChildComment} sendChildComment={sendChildComment} handleChange={childContent}/>
    </div>
  );
};

const TotalComment = (props) =>{
  const{commentList} = props
    return(
        <div className="comment onSignIn">
        <div className="comment_title">{props.label}</div>
        <div className="comment_number">
                <Trans>Total</Trans>
        <span className="text_e94c4c" style={{color:'red'}}> {commentList && commentList.length} </span>
            {props.title}
        </div>
      </div>
    )
}
const RowContent = (props) =>{
    const {listDetail} = props
    const htmlParse = listDetail ? listDetail.content : null
    return(
      
        <div className="content_detail">
        <p>
          {listDetail?.description}
        </p>
          {Parser(htmlParse ? htmlParse : "" )}
      </div>
      
    )
}
export default LeftContent;
