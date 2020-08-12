import React, { useState } from "react";
import { CardHeader } from "../common";
import { Modal } from 'react-bootstrap'
import TextEditor from '../base/Editor/TextEditor'
import {Spinner} from '../../components/common'
import {InfiniteScroll} from 'react-infinite-scroll-component'

const DialogResponeHistory = (props) => {
  const [showReplyForm, setshowReplyForm] = useState(false)
  const { list_comment ,data, isLoading} = props
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
          <CardHeader label="PHẢN HỒI" />
          <div className="modal-content square">
            <div className="modal-body pb-0 pr-3">
              <div className="uni_text_6d30ab fw-medium fs-18 mb-2">PHẢN HỒI</div>
                    {/* <InfiniteScroll >
                  <div>fdsfsdfsdfdsfdsfds</div>
              </InfiniteScroll> */}
              {/* <div className="approval_history--modal">
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
                            <i className="reply las la-undo" ></i>
                          </span>
                        </div>
                        <div className="detail">{item.content}</div>
                      </div>
                      
                    </div>
                  ))}
                    {props.isLoading && <Spinner />}
                    <ShowFormReply 
                      image={props.image} 
                      changeComment ={props.changeComment} 
                      showReplyForm={showReplyForm} 
                      sendMessage ={()=>props.sendMessage(props.request_id)} 
                      closeForm={() => setshowReplyForm(false)} 
                      />
              </div>
             */}
            </div>
            {/* <CloseButton close={props.close} /> */}
          </div>
        </div>
      </div>
    </Modal>
  );
}

// function ShowFormReply(props) {
//     return(
//       <>
//       <figure className="avatar">
//           <img src= {props.image} />
//       </figure>
//       <TextEditor value = "" handleChange = {props.changeComment} />
//           <div className="modal-footer pt-0 border-top-0" style={{ marginTop: 25}}>
//             <button className=" square btn-uni-exit min-width-button" style={{backgroundColor:'#6d30ab', color:'#fff'}} onClick={props.sendMessage}>SEND</button>
//           </div>
//       </>
//     )
//  }
 
// function CloseButton(props) {
//   return (
//     <div className="modal-footer pt-0 border-top-0">
//       <button className=" square btn-uni-exit min-width-button" onClick={props.close}>Đóng</button>
//     </div>
//   )
// }
export default DialogResponeHistory;
