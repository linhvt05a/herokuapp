import React, { useState } from "react";
import { CardHeader } from "../common";
import { Modal } from 'react-bootstrap'
import TextEditor from '../base/Editor/TextEditor'


const DialogResponeHistory = (props) => {
  const [showReplyForm, setshowReplyForm] = useState(false)
  const { list_comment } = props
  return (
    <Modal show={props.showPopUp} onHide={props.close}>
      <div
        className="modal fade show"
        style={{ display: "block", paddingRight: 15 }}
      >
        <div
          className="modal-dialog center"
          style={{ maxWidth: 1095 }}
          role="document"
        >
          <CardHeader label="LỊCH SỬ PHẢN HỒI" />
          <div className="modal-content square">
            <div className="modal-body pb-0 pr-3">
              <div className="uni_text_6d30ab fw-medium fs-18 mb-2">PHẢN HỒI</div>
              <div className="approval_history--modal">
                {list_comment &&
                  list_comment.map((item) => (
                    <div className="item">
                      <figure className="avatar">
                        <img src={item.customer_avatar} />
                      </figure>
                      <div className="content">
                        <div className="head">
                          <b className="name">{item.title}</b>
                          <span className="d-flex align-items-center">
                            <i className="time">{item.created_at}</i>
                            <i className="reply las la-undo" onClick={() => setshowReplyForm(true)}></i>
                          </span>
                        </div>
                        <div className="detail">{item.content}</div>
                      </div>
                    </div>
                  ))}
                <ShowFormReply showReplyForm={showReplyForm}  closeForm={() => setshowReplyForm(false)} />
              </div>
            </div>
            <CloseButton close={props.close} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

function ShowFormReply(props) {
  if (props.showReplyForm === true) {
    return (
      <>
        <TextEditor value = "" handleChange = {props.handleChange}/>
      </>
    )
}else{
  return <></>
}
}

function CloseButton(props) {
  return (
    <div className="modal-footer pt-0 border-top-0">
      <button className=" square btn-uni-exit min-width-button" onClick={props.close}>Đóng</button>
    </div>
  )
}
export default DialogResponeHistory;
