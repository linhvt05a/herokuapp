import React, { useState, useEffect, useLayoutEffect} from "react";
import { CardHeader } from "../common";
import { Modal } from 'antd'
import TextEditor from '../base/Editor/TextEditor'
import {Spinner} from '../../components/common'
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from 'react-redux'
import {commentListRequest} from '../../store/action/approval'
import { Trans } from 'react-i18next';

const DialogResponeHistory = (props) => {
  const [showReplyForm, setshowReplyForm] = useState(false)
  const { list_comment ,data, isLoading} = props

  return (
        <Modal
            closable={props.close}
            visible={props.showPopUp}
            footer={null}
            width={1200}
            onCancel={() => props.close()}>
        <div
    className="modal fade show"
    style={{ display: "block", paddingRight: 15 }}
  >
    <div
      className="modal-dialog center"
      style={{ maxWidth: 1095 }}
      role="document"
    >
      <CardHeader label={props.requestStatus=== 1 || props.requestStatus === 3 ? "PHẢN HỒI" : "LỊCH SỬ PHẢN HỒI"} />
      <div className="modal-content square">
        <div className="modal-body pb-0 pr-3">
          <div className="uni_text_6d30ab fw-medium fs-18 mb-2">PHẢN HỒI</div>
          <div className="approval_history--modal" onScroll={props.handleScroll}>
          {isLoading  && <Spinner />}
            {
              list_comment && list_comment.map((item, index)=>
              <ListComment item={item} />
              ) 
            }
            
            {props.validContent !=="" && isLoading && <Spinner />}
            {props.requestStatus === 1 || props.requestStatus === 3 ?
                <ShowFormReply 
                      image={props.image} 
                      changeComment ={props.changeComment} 
                      showReplyForm={showReplyForm} 
                      sendMessage ={()=>props.sendMessage(props.request_id)} 
                      closeForm={() => setshowReplyForm(false)} 
                      validContent = {props.validContent}
                    />:<></>}
          </div>
        </div>
        <CloseButton close={props.close} />
      </div>
    </div>
  </div>
    </Modal>
  );
}
function ListComment (props){

  return(
          <div className="item">
          <figure className="avatar">
            <img src={props.item.customer_avatar} />
          </figure>
          <div className="content" >
            <div className="head">
              <b className="name">{props.item.title}</b>
              <span className="d-flex align-items-center">
                <i className="time">{props.item.created_at}</i>
                <i className="reply las la-undo" ></i>
              </span>
            </div>
            <div className="detail">{props.item.content}</div>
          </div>
      </div>
  )

}

function ShowFormReply(props) {
    return(
      <>
      <figure className="avatar">
          <img src= {props.image} />
      </figure>
      <TextEditor handleChange = {props.changeComment} />
        <span style={{color:'red', fontSize: 14, marginTop: 20}}>{props.validContent !== "" ? "Missing Information" : ''}</span>
          <div className="modal-footer pt-0 border-top-0" style={{ marginTop: 25}}>
            <button className=" square btn-uni-exit min-width-button" style={{backgroundColor:'#6d30ab', color:'#fff'}} onClick={props.sendMessage}>SEND</button>
          </div>
      </>
    )
 }
 
function CloseButton(props) {
  return (
    <div className="modal-footer pt-0 border-top-0">
      <button className=" square btn-uni-exit min-width-button" onClick={props.close}>Đóng</button>
    </div>
  )
}
export default DialogResponeHistory;
