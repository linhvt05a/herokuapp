import React, { Component, useState } from 'react';
import {TextArea, ButtonStyle} from '../../components/base/index'
import { Trans } from 'react-i18next';


const ReplyComment = (props) =>{
  const [like, setLike] = useState(false)
  const [totalLike, setTotalLike] = useState(0)
  
  const increaseLike = () =>{
      setLike(true)
      setTotalLike(totalLike + 1)
  }
    return (
        <div className="reply__child">
          <div className="reply__child--list">
            <ReplyBox like={like} onClickLike ={increaseLike} totalLike={totalLike}/>
            <ChildAdmin />
          </div>
      </div>
    
    );
}

const ChildAdmin = () =>{
  return(          
    <div className="child admin">
    <figure className="avatar">
      <img src="./assets/images/avatar_logged.jpg" alt />
    </figure>
    <div className="box border-bottom-0">
      <div className="reply_name"><Trans>Sale department</Trans></div>
      <TextArea width={660} placeholder="Your comment"/>
      <ButtonStyle className="btn btn_purple btn_send" label="SEND" />
    </div>
  </div>
  )
}

const ReplyBox = (props) =>{
  const {like, onClickLike, totalLike} = props
  return(
    <div className="child">
    <figure className="avatar">
      <img src="./assets/images/avatar_logged.jpg" alt />
    </figure>
    <div className="box">
      <div className="reply_name"><Trans>Sale department</Trans></div>
      <div className="reply_text">
        Cảm ơn bạn rất nhiều,đã quan tâm đến dự án căn hộ của VTP
        chúng tôi, hiện tại dự án đang được bán tại các chi nhánh
        chính và đại lý liên doanh với chúng tôi. Cụ thể đại lý
        203 đường 2/3,phường 10, quận 10, Tp.HCM
      </div>
      <div className="reply_social">
        <div className="reply_item time">
          <i className="icon far fa-clock" />
          <i className="text">9:00 - 27/02/2020</i>
        </div>
        <div className="reply_item cmt">
          <i className="icon fas fa-comments" />
          <i className="text">Thảo luận</i>
        </div>
        <div className={like ? "reply_item like active" : "reply_item like"}>
          <i className="icon fas fa-thumbs-up active" onClick ={onClickLike}/>
          <i className="text">{totalLike}</i>
        </div>
      </div>
      <ChildReply />
    </div>
  </div>
  )
}

const ChildReply = () =>{
  return(
    <div className="child">
    <figure className="avatar">
      <img src="./assets/images/avatar_logged.jpg" alt />
    </figure>
    <div className="box pb-0 border-bottom-0">
      <div className="reply_name"><Trans>Sale department</Trans></div>
      <div className="reply_text">
        Cảm ơn bạn rất nhiều,đã quan tâm đến dự án căn hộ của
        VTP chúng tôi, hiện tại dự án đang được bán tại các
        chi nhánh chính và đại lý liên doanh với chúng tôi. Cụ
        thể đại lý 203 đường 2/3,phường 10, quận 10, Tp.HCM
      </div>
    </div>
  </div>
  )
}
export default ReplyComment