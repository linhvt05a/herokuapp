import React, { Component, useState } from 'react';
import {TextArea, ButtonStyle} from '../../components/base/index'
import { Trans } from 'react-i18next';


const ReplyComment = (props) =>{
  const {commentList, addChildComment, sendChildComment, handleChange} = props
 
    return (
        <div className="reply__child">
          <div className="reply__child--list">
            {commentList && commentList.map((comment, index)=> <ReplyBox addChildComment={()=>addChildComment(comment.comment_id)} data={comment} key={index}/>)}
          </div>
          <ChildAdmin sendChildComment={sendChildComment} handleChange={handleChange}/>
      </div>
    
    );
}

const ChildAdmin = (props) =>{
  const{sendChildComment, handleChange} = props
  return(          
    <div className="child admin">
    <figure className="avatar">
      <img src="../images/avatar_logged.jpg" alt />
    </figure>
    <div className="box border-bottom-0">
      <div className="reply_name"><Trans>Sale department</Trans></div>
      <TextArea width={660} placeholder="Your comment" handleChange={handleChange}/>
      <ButtonStyle className="btn btn_purple btn_send" label="SEND" onClick={sendChildComment}/>
    </div>
  </div>
  )
}

const ReplyBox = (props) =>{
  const[parentLike, setLikes] = useState(false)

  const {data, addChildComment} = props
  const handleLike = () =>{
    setLikes(!parentLike)
  }
  return(
    <div className="child">
    <figure className="avatar">
      <img src={data.customer_avatar} alt />
    </figure>
    <div className="box">
      <div className="reply_name"><Trans>{data.customer_name}</Trans></div>
      <div className="reply_text">
       <Trans>{data.comment_content}</Trans>
      </div>
      <div className="reply_social">
        <div className="reply_item time">
          <i className="icon far fa-clock" />
          <i className="text">{data.created_at}</i>
        </div>
        <div className="reply_item cmt">
          <i className="icon fas fa-comments" />
          <i className="text" onClick={addChildComment}><Trans>Comment</Trans></i>
        </div>
        <div className={parentLike ?"reply_item like active":  "reply_item like" } onClick={handleLike}>
          <i className="icon fas fa-thumbs-up active" />
          <i className="text">{parentLike === true ? data.total_like + 1 : data.total_like}</i>
        </div>
      </div>
        {data && data.child_list.map((datas, index)=><ChildReply data={datas} key={index}/>)}
    </div>
  </div>
  )
}

const ChildReply = (props) =>{
  const {data} = props
  const [childLike, setChildLikes] = useState(false)

  const handleChildLikes = () =>{
    setChildLikes(!childLike)
  }
  
  return(
    <div className="child">
    <figure className="avatar">
      <img src={data.customer_avatar}  />
    </figure>
    <div className="box pb-0 border-bottom-0">
      <div className="reply_name"><Trans>{data.customer_name}</Trans></div>
      <div className="reply_text">
       <Trans>{data.comment_content}</Trans>
      </div>
      <div className="reply_social">
        <div className="reply_item time">
          <i className="icon far fa-clock" />
          <i className="text">{data.created_at}</i>
        </div>
        <div className="reply_item cmt">
          <i className="icon fas fa-comments" />
          <i className="text"><Trans>Comment</Trans></i>
        </div>
        <div className={childLike ? "reply_item like active" :"reply_item like"} onClick={handleChildLikes}>
          <i className="icon fas fa-thumbs-up active" />
          <i className="text">{childLike === true ? data.total_like + 1: data.total_like}</i>
        </div>
      </div>
    </div>
  </div>
  )
}
export default ReplyComment