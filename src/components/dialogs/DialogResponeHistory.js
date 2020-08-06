import React, { useState } from "react";
import { CardHeader } from "../common";
import {Modal} from 'react-bootstrap'
const data = [
  {
    id: 1,
    title: "Trưởng phòng sales Công ty Bất Động Sản Thành Công",
    descriptiom:
      " Sản phẩm này không nằm ở vị thế tiện lợi và đã không bán được trong suốt 2 tháng qua ",
    avatar: "../images/all/chat_avatar.jpeg",
    time: "00:00 - Th 7 - 04/07/2020",
  },
  {
    id: 2,
    title: "Trưởng phòng sales Công ty Bất Động Sản Thành Công",
    descriptiom:
      "Sản phẩm này không nằm ở vị thế tiện lợi và đã không bánđược trong suốt 2 tháng qua ",
    avatar: "../images/all/chat_avatar.jpeg",
    time: "00:00 - Th 7 - 04/07/2020",
  },
  {
    id: 3,
    title: "Trưởng phòng sales Công ty Bất Động Sản Thành Công",
    descriptiom:
      "Sản phẩm này không nằm ở vị thế tiện lợi và đã không bánđược trong suốt 2 tháng qua ",
    avatar: "../images/all/chat_avatar.jpeg",
    time: "00:00 - Th 7 - 04/07/2020",
  },
  {
    id: 4,
    title: "Trưởng phòng sales Công ty Bất Động Sản Thành Công",
    descriptiom:
      "Sản phẩm này không nằm ở vị thế tiện lợi và đã không bánđược trong suốt 2 tháng qua ",
    avatar: "../images/all/chat_avatar.jpeg",
    time: "00:00 - Th 7 - 04/07/2020",
  },
  {
    id: 5,
    title: "Trưởng phòng sales Công ty Bất Động Sản Thành Công",
    descriptiom:
      "Sản phẩm này không nằm ở vị thế tiện lợi và đã không bánđược trong suốt 2 tháng qua ",
    avatar: "../images/all/chat_avatar.jpeg",
    time: "00:00 - Th 7 - 04/07/2020",
  },
  {
    id: 6,
    title: "Trưởng phòng sales Công ty Bất Động Sản Thành Công",
    descriptiom:
      " Sản phẩm này không nằm ở vị thế tiện lợi và đã không bánđược trong suốt 2 tháng qua",
    avatar: "../images/all/chat_avatar.jpeg",
    time: "00:00 - Th 7 - 04/07/2020",
  },
];

const DialogResponeHistory = (props) => {
    const[showReplyForm, setshowReplyForm] = useState(false)
  
    return (
     <Modal show ={props.showPopUp} onHide = {props.close}>
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
                <div className="uni_text_6d30ab fw-medium fs-18 mb-2">
                  PHẢN HỒI
                </div>
                <div className="approval_history--modal">
                  {data &&
                    data.map((item) => (
                      <div className="item">
                        <figure className="avatar">
                          <img src={item.avatar} />
                        </figure>
                        <div className="content">
                          <div className="head">
                            <b className="name">{item.title}</b>
                            <span className="d-flex align-items-center">
                              <i className="time">{item.time}</i>
                              {item.id === 6 ? (
                                <i className="reply las la-undo" onClick={()=>setshowReplyForm(true)}></i>
                              ) : (
                                <></>
                              )}
                            </span>
                          </div>
                          <div className="detail">{item.descriptiom}</div>
                        </div>
                      </div>
                    ))}
                    <ShowFormReply showReplyForm ={showReplyForm} closeForm = {()=>setshowReplyForm(false)}/>
                </div>
                
              </div>
                
                <CreateBtn close ={props.close}/>
            </div>
          </div>
        </div>

     </Modal>

    );
  }

function ShowFormReply (props){
    if(props.showReplyForm === true){
        return (
            <div className="item reply_content show-input">
            <div className="d-flex w-100">
              <figure className="avatar">
                <img src="../images/all/chat_avatar.jpeg" alt />
              </figure>
              <div className="content">
                <div className="reply_name">
                  <i className="reply_icon las la-reply" />
                  <span className="reply_name--user">
                    Trưởng phòng sales Công ty Bất Động Sản Thành Công
                  </span>
                  <i className="reply_close las la-times" />
                </div>
                <div className="reply_wrap summernote" style={{ display: "none" }}></div>
                <div className="note-editor note-frame panel panel-default">
                  <div className="note-dropzone">
                    <div className="note-dropzone-message" />
                  </div>
                  <div className="note-toolbar panel-heading" role="toolbar">
                    <div className="note-btn-group btn-group note-misc">
                      <button
                        type="button"
                        className="note-btn btn btn-default btn-sm"
                        tabIndex={-1}
                        title
                        aria-label="Undo (⌘+Z)"
                        data-original-title="Undo (⌘+Z)"
                      >
                        <i className="note-icon-undo" />
                      </button>
                      <button
                        type="button"
                        className="note-btn btn btn-default btn-sm"
                        tabIndex={-1}
                        title
                        aria-label="Redo (⌘+⇧+Z)"
                        data-original-title="Redo (⌘+⇧+Z)"
                      >
                        <i className="note-icon-redo" />
                      </button>
                    </div>
                    <div className="note-btn-group btn-group note-fontname">
                      <div className="note-btn-group btn-group">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm dropdown-toggle"
                          tabIndex={-1}
                          data-toggle="dropdown"
                          title
                          aria-label="Font Family"
                          data-original-title="Font Family"
                        >
                          <span
                            className="note-current-fontname"
                            style={{ fontFamily: "Roboto" }}
                          >
                            Roboto
                          </span>{" "}
                          <span className="note-icon-caret" />
                        </button>
                        <ul
                          className="note-dropdown-menu dropdown-menu note-check dropdown-fontname"
                          aria-label="Font Family"
                        >
                          <li aria-label="Arial">
                            <a href="#" data-value="Arial">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Arial"' }}>Arial</span>
                            </a>
                          </li>
                          <li aria-label="Arial Black">
                            <a href="#" data-value="Arial Black">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Arial Black"' }}>
                                Arial Black
                              </span>
                            </a>
                          </li>
                          <li aria-label="Comic Sans MS">
                            <a href="#" data-value="Comic Sans MS">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Comic Sans MS"' }}>
                                Comic Sans MS
                              </span>
                            </a>
                          </li>
                          <li aria-label="Courier New">
                            <a href="#" data-value="Courier New">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Courier New"' }}>
                                Courier New
                              </span>
                            </a>
                          </li>
                          <li aria-label="Helvetica Neue">
                            <a href="#" data-value="Helvetica Neue">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Helvetica Neue"' }}>
                                Helvetica Neue
                              </span>
                            </a>
                          </li>
                          <li aria-label="Helvetica">
                            <a href="#" data-value="Helvetica">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Helvetica"' }}>Helvetica</span>
                            </a>
                          </li>
                          <li aria-label="Impact">
                            <a href="#" data-value="Impact">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Impact"' }}>Impact</span>
                            </a>
                          </li>
                          <li aria-label="Lucida Grande">
                            <a href="#" data-value="Lucida Grande">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Lucida Grande"' }}>
                                Lucida Grande
                              </span>
                            </a>
                          </li>
                          <li aria-label="Tahoma">
                            <a href="#" data-value="Tahoma">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Tahoma"' }}>Tahoma</span>
                            </a>
                          </li>
                          <li aria-label="Times New Roman">
                            <a href="#" data-value="Times New Roman">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Times New Roman"' }}>
                                Times New Roman
                              </span>
                            </a>
                          </li>
                          <li aria-label="Verdana">
                            <a href="#" data-value="Verdana">
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Verdana"' }}>Verdana</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="note-btn-group btn-group note-style">
                      <div className="note-btn-group btn-group">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm dropdown-toggle"
                          tabIndex={-1}
                          data-toggle="dropdown"
                          title
                          aria-label="Style"
                          data-original-title="Style"
                        >
                          <i className="note-icon-magic" />{" "}
                          <span className="note-icon-caret" />
                        </button>
                        <ul
                          className="note-dropdown-menu dropdown-menu dropdown-style"
                          aria-label="Style"
                        >
                          <li aria-label="p">
                            <a href="#" data-value="p">
                              <p>Normal</p>
                            </a>
                          </li>
                          <li aria-label="blockquote">
                            <a href="#" data-value="blockquote">
                              <blockquote>Quote</blockquote>
                            </a>
                          </li>
                          <li aria-label="pre">
                            <a href="#" data-value="pre">
                              <pre>Code</pre>
                            </a>
                          </li>
                          <li aria-label="h1">
                            <a href="#" data-value="h1">
                              <h1>Header 1</h1>
                            </a>
                          </li>
                          <li aria-label="h2">
                            <a href="#" data-value="h2">
                              <h2>Header 2</h2>
                            </a>
                          </li>
                          <li aria-label="h3">
                            <a href="#" data-value="h3">
                              <h3>Header 3</h3>
                            </a>
                          </li>
                          <li aria-label="h4">
                            <a href="#" data-value="h4">
                              <h4>Header 4</h4>
                            </a>
                          </li>
                          <li aria-label="h5">
                            <a href="#" data-value="h5">
                              <h5>Header 5</h5>
                            </a>
                          </li>
                          <li aria-label="h6">
                            <a href="#" data-value="h6">
                              <h6>Header 6</h6>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="note-btn-group btn-group note-font">
                      <button
                        type="button"
                        className="note-btn btn btn-default btn-sm note-btn-bold"
                        tabIndex={-1}
                        title
                        aria-label="Bold (⌘+B)"
                        data-original-title="Bold (⌘+B)"
                      >
                        <i className="note-icon-bold" />
                      </button>
                      <button
                        type="button"
                        className="note-btn btn btn-default btn-sm note-btn-italic"
                        tabIndex={-1}
                        title
                        aria-label="Italic (⌘+I)"
                        data-original-title="Italic (⌘+I)"
                      >
                        <i className="note-icon-italic" />
                      </button>
                      <button
                        type="button"
                        className="note-btn btn btn-default btn-sm note-btn-underline"
                        tabIndex={-1}
                        title
                        aria-label="Underline (⌘+U)"
                        data-original-title="Underline (⌘+U)"
                      >
                        <i className="note-icon-underline" />
                      </button>
                    </div>
                    <div className="note-btn-group btn-group note-color">
                      <div className="note-btn-group btn-group note-color note-color-all">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm note-current-color-button"
                          tabIndex={-1}
                          title
                          aria-label="Recent Color"
                          data-original-title="Recent Color"
                          data-backcolor="#BD9400"
                          data-forecolor="#000000"
                        >
                          <i
                            className="note-icon-font note-recent-color"
                            style={{
                              backgroundColor: "rgb(189, 148, 0)",
                              color: "rgb(0, 0, 0)"
                            }}
                          />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm dropdown-toggle"
                          tabIndex={-1}
                          data-toggle="dropdown"
                          title
                          aria-label="More Color"
                          data-original-title="More Color"
                          aria-expanded="false"
                        >
                          {" "}
                          <span className="note-icon-caret" />
                        </button>
                        <ul
                          className="note-dropdown-menu dropdown-menu"
                          style={{ willChange: "transform" }}
                        >
                          <div className="note-palette">
                            <div className="note-palette-title">Background Color</div>
                            <div>
                              <button
                                type="button"
                                className="note-color-reset btn btn-light"
                                data-event="backColor"
                                data-value="inherit"
                              >
                                Transparent
                              </button>
                            </div>
                            <div className="note-holder" data-event="backColor">
                              <div className="note-color-palette">
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#000000" }}
                                    data-event="backColor"
                                    data-value="#000000"
                                    title
                                    aria-label="Black"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Black"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#424242" }}
                                    data-event="backColor"
                                    data-value="#424242"
                                    title
                                    aria-label="Tundora"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Tundora"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#636363" }}
                                    data-event="backColor"
                                    data-value="#636363"
                                    title
                                    aria-label="Dove Gray"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Dove Gray"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#9C9C94" }}
                                    data-event="backColor"
                                    data-value="#9C9C94"
                                    title
                                    aria-label="Star Dust"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Star Dust"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#CEC6CE" }}
                                    data-event="backColor"
                                    data-value="#CEC6CE"
                                    title
                                    aria-label="Pale Slate"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Pale Slate"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#EFEFEF" }}
                                    data-event="backColor"
                                    data-value="#EFEFEF"
                                    title
                                    aria-label="Gallery"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Gallery"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    data-event="backColor"
                                    data-value="#F7F7F7"
                                    title
                                    aria-label="Alabaster"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Alabaster"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="backColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="White"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="White"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FF0000" }}
                                    data-event="backColor"
                                    data-value="#FF0000"
                                    title
                                    aria-label="Red"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Red"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FF9C00" }}
                                    data-event="backColor"
                                    data-value="#FF9C00"
                                    title
                                    aria-label="Orange Peel"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Orange Peel"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFF00" }}
                                    data-event="backColor"
                                    data-value="#FFFF00"
                                    title
                                    aria-label="Yellow"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Yellow"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#00FF00" }}
                                    data-event="backColor"
                                    data-value="#00FF00"
                                    title
                                    aria-label="Green"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Green"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#00FFFF" }}
                                    data-event="backColor"
                                    data-value="#00FFFF"
                                    title
                                    aria-label="Cyan"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cyan"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#0000FF" }}
                                    data-event="backColor"
                                    data-value="#0000FF"
                                    title
                                    aria-label="Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#9C00FF" }}
                                    data-event="backColor"
                                    data-value="#9C00FF"
                                    title
                                    aria-label="Electric Violet"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Electric Violet"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FF00FF" }}
                                    data-event="backColor"
                                    data-value="#FF00FF"
                                    title
                                    aria-label="Magenta"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Magenta"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#F7C6CE" }}
                                    data-event="backColor"
                                    data-value="#F7C6CE"
                                    title
                                    aria-label="Azalea"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Azalea"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFE7CE" }}
                                    data-event="backColor"
                                    data-value="#FFE7CE"
                                    title
                                    aria-label="Karry"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Karry"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFEFC6" }}
                                    data-event="backColor"
                                    data-value="#FFEFC6"
                                    title
                                    aria-label="Egg White"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Egg White"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#D6EFD6" }}
                                    data-event="backColor"
                                    data-value="#D6EFD6"
                                    title
                                    aria-label="Zanah"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Zanah"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#CEDEE7" }}
                                    data-event="backColor"
                                    data-value="#CEDEE7"
                                    title
                                    aria-label="Botticelli"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Botticelli"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#CEE7F7" }}
                                    data-event="backColor"
                                    data-value="#CEE7F7"
                                    title
                                    aria-label="Tropical Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Tropical Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#D6D6E7" }}
                                    data-event="backColor"
                                    data-value="#D6D6E7"
                                    title
                                    aria-label="Mischka"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Mischka"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#E7D6DE" }}
                                    data-event="backColor"
                                    data-value="#E7D6DE"
                                    title
                                    aria-label="Twilight"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Twilight"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#E79C9C" }}
                                    data-event="backColor"
                                    data-value="#E79C9C"
                                    title
                                    aria-label="Tonys Pink"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Tonys Pink"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFC69C" }}
                                    data-event="backColor"
                                    data-value="#FFC69C"
                                    title
                                    aria-label="Peach Orange"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Peach Orange"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFE79C" }}
                                    data-event="backColor"
                                    data-value="#FFE79C"
                                    title
                                    aria-label="Cream Brulee"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cream Brulee"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#B5D6A5" }}
                                    data-event="backColor"
                                    data-value="#B5D6A5"
                                    title
                                    aria-label="Sprout"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Sprout"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#A5C6CE" }}
                                    data-event="backColor"
                                    data-value="#A5C6CE"
                                    title
                                    aria-label="Casper"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Casper"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#9CC6EF" }}
                                    data-event="backColor"
                                    data-value="#9CC6EF"
                                    title
                                    aria-label="Perano"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Perano"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#B5A5D6" }}
                                    data-event="backColor"
                                    data-value="#B5A5D6"
                                    title
                                    aria-label="Cold Purple"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cold Purple"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#D6A5BD" }}
                                    data-event="backColor"
                                    data-value="#D6A5BD"
                                    title
                                    aria-label="Careys Pink"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Careys Pink"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#E76363" }}
                                    data-event="backColor"
                                    data-value="#E76363"
                                    title
                                    aria-label="Mandy"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Mandy"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#F7AD6B" }}
                                    data-event="backColor"
                                    data-value="#F7AD6B"
                                    title
                                    aria-label="Rajah"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Rajah"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFD663" }}
                                    data-event="backColor"
                                    data-value="#FFD663"
                                    title
                                    aria-label="Dandelion"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Dandelion"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#94BD7B" }}
                                    data-event="backColor"
                                    data-value="#94BD7B"
                                    title
                                    aria-label="Olivine"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Olivine"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#73A5AD" }}
                                    data-event="backColor"
                                    data-value="#73A5AD"
                                    title
                                    aria-label="Gulf Stream"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Gulf Stream"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#6BADDE" }}
                                    data-event="backColor"
                                    data-value="#6BADDE"
                                    title
                                    aria-label="Viking"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Viking"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#8C7BC6" }}
                                    data-event="backColor"
                                    data-value="#8C7BC6"
                                    title
                                    aria-label="Blue Marguerite"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Blue Marguerite"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#C67BA5" }}
                                    data-event="backColor"
                                    data-value="#C67BA5"
                                    title
                                    aria-label="Puce"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Puce"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#CE0000" }}
                                    data-event="backColor"
                                    data-value="#CE0000"
                                    title
                                    aria-label="Guardsman Red"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Guardsman Red"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#E79439" }}
                                    data-event="backColor"
                                    data-value="#E79439"
                                    title
                                    aria-label="Fire Bush"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Fire Bush"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#EFC631" }}
                                    data-event="backColor"
                                    data-value="#EFC631"
                                    title
                                    aria-label="Golden Dream"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Golden Dream"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#6BA54A" }}
                                    data-event="backColor"
                                    data-value="#6BA54A"
                                    title
                                    aria-label="Chelsea Cucumber"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Chelsea Cucumber"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#4A7B8C" }}
                                    data-event="backColor"
                                    data-value="#4A7B8C"
                                    title
                                    aria-label="Smalt Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Smalt Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#3984C6" }}
                                    data-event="backColor"
                                    data-value="#3984C6"
                                    title
                                    aria-label="Boston Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Boston Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#634AA5" }}
                                    data-event="backColor"
                                    data-value="#634AA5"
                                    title
                                    aria-label="Butterfly Bush"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Butterfly Bush"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#A54A7B" }}
                                    data-event="backColor"
                                    data-value="#A54A7B"
                                    title
                                    aria-label="Cadillac"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cadillac"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#9C0000" }}
                                    data-event="backColor"
                                    data-value="#9C0000"
                                    title
                                    aria-label="Sangria"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Sangria"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#B56308" }}
                                    data-event="backColor"
                                    data-value="#B56308"
                                    title
                                    aria-label="Mai Tai"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Mai Tai"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#BD9400" }}
                                    data-event="backColor"
                                    data-value="#BD9400"
                                    title
                                    aria-label="Buddha Gold"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Buddha Gold"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#397B21" }}
                                    data-event="backColor"
                                    data-value="#397B21"
                                    title
                                    aria-label="Forest Green"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Forest Green"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#104A5A" }}
                                    data-event="backColor"
                                    data-value="#104A5A"
                                    title
                                    aria-label="Eden"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Eden"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#085294" }}
                                    data-event="backColor"
                                    data-value="#085294"
                                    title
                                    aria-label="Venice Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Venice Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#311873" }}
                                    data-event="backColor"
                                    data-value="#311873"
                                    title
                                    aria-label="Meteorite"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Meteorite"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#731842" }}
                                    data-event="backColor"
                                    data-value="#731842"
                                    title
                                    aria-label="Claret"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Claret"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#630000" }}
                                    data-event="backColor"
                                    data-value="#630000"
                                    title
                                    aria-label="Rosewood"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Rosewood"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#7B3900" }}
                                    data-event="backColor"
                                    data-value="#7B3900"
                                    title
                                    aria-label="Cinnamon"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cinnamon"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#846300" }}
                                    data-event="backColor"
                                    data-value="#846300"
                                    title
                                    aria-label="Olive"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Olive"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#295218" }}
                                    data-event="backColor"
                                    data-value="#295218"
                                    title
                                    aria-label="Parsley"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Parsley"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#083139" }}
                                    data-event="backColor"
                                    data-value="#083139"
                                    title
                                    aria-label="Tiber"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Tiber"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#003163" }}
                                    data-event="backColor"
                                    data-value="#003163"
                                    title
                                    aria-label="Midnight Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Midnight Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#21104A" }}
                                    data-event="backColor"
                                    data-value="#21104A"
                                    title
                                    aria-label="Valentino"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Valentino"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#4A1031" }}
                                    data-event="backColor"
                                    data-value="#4A1031"
                                    title
                                    aria-label="Loulou"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Loulou"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                type="button"
                                className="note-color-select btn btn-light"
                                data-event="openPalette"
                                data-value="backColorPicker"
                              >
                                Select
                              </button>
                              <input
                                type="color"
                                id="backColorPicker"
                                className="note-btn note-color-select-btn"
                                defaultValue="#FFFF00"
                                data-event="backColorPalette"
                              />
                            </div>
                            <div
                              className="note-holder-custom"
                              id="backColorPalette"
                              data-event="backColor"
                            >
                              <div className="note-color-palette">
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="backColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="backColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="backColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="backColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="backColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="backColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="backColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="backColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="note-palette">
                            <div className="note-palette-title">Text Color</div>
                            <div>
                              <button
                                type="button"
                                className="note-color-reset btn btn-light"
                                data-event="removeFormat"
                                data-value="foreColor"
                              >
                                Reset to default
                              </button>
                            </div>
                            <div className="note-holder" data-event="foreColor">
                              <div className="note-color-palette">
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#000000" }}
                                    data-event="foreColor"
                                    data-value="#000000"
                                    title
                                    aria-label="Black"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Black"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#424242" }}
                                    data-event="foreColor"
                                    data-value="#424242"
                                    title
                                    aria-label="Tundora"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Tundora"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#636363" }}
                                    data-event="foreColor"
                                    data-value="#636363"
                                    title
                                    aria-label="Dove Gray"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Dove Gray"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#9C9C94" }}
                                    data-event="foreColor"
                                    data-value="#9C9C94"
                                    title
                                    aria-label="Star Dust"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Star Dust"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#CEC6CE" }}
                                    data-event="foreColor"
                                    data-value="#CEC6CE"
                                    title
                                    aria-label="Pale Slate"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Pale Slate"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#EFEFEF" }}
                                    data-event="foreColor"
                                    data-value="#EFEFEF"
                                    title
                                    aria-label="Gallery"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Gallery"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    data-event="foreColor"
                                    data-value="#F7F7F7"
                                    title
                                    aria-label="Alabaster"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Alabaster"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="foreColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="White"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="White"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FF0000" }}
                                    data-event="foreColor"
                                    data-value="#FF0000"
                                    title
                                    aria-label="Red"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Red"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FF9C00" }}
                                    data-event="foreColor"
                                    data-value="#FF9C00"
                                    title
                                    aria-label="Orange Peel"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Orange Peel"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFF00" }}
                                    data-event="foreColor"
                                    data-value="#FFFF00"
                                    title
                                    aria-label="Yellow"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Yellow"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#00FF00" }}
                                    data-event="foreColor"
                                    data-value="#00FF00"
                                    title
                                    aria-label="Green"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Green"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#00FFFF" }}
                                    data-event="foreColor"
                                    data-value="#00FFFF"
                                    title
                                    aria-label="Cyan"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cyan"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#0000FF" }}
                                    data-event="foreColor"
                                    data-value="#0000FF"
                                    title
                                    aria-label="Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#9C00FF" }}
                                    data-event="foreColor"
                                    data-value="#9C00FF"
                                    title
                                    aria-label="Electric Violet"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Electric Violet"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FF00FF" }}
                                    data-event="foreColor"
                                    data-value="#FF00FF"
                                    title
                                    aria-label="Magenta"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Magenta"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#F7C6CE" }}
                                    data-event="foreColor"
                                    data-value="#F7C6CE"
                                    title
                                    aria-label="Azalea"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Azalea"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFE7CE" }}
                                    data-event="foreColor"
                                    data-value="#FFE7CE"
                                    title
                                    aria-label="Karry"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Karry"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFEFC6" }}
                                    data-event="foreColor"
                                    data-value="#FFEFC6"
                                    title
                                    aria-label="Egg White"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Egg White"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#D6EFD6" }}
                                    data-event="foreColor"
                                    data-value="#D6EFD6"
                                    title
                                    aria-label="Zanah"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Zanah"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#CEDEE7" }}
                                    data-event="foreColor"
                                    data-value="#CEDEE7"
                                    title
                                    aria-label="Botticelli"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Botticelli"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#CEE7F7" }}
                                    data-event="foreColor"
                                    data-value="#CEE7F7"
                                    title
                                    aria-label="Tropical Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Tropical Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#D6D6E7" }}
                                    data-event="foreColor"
                                    data-value="#D6D6E7"
                                    title
                                    aria-label="Mischka"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Mischka"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#E7D6DE" }}
                                    data-event="foreColor"
                                    data-value="#E7D6DE"
                                    title
                                    aria-label="Twilight"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Twilight"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#E79C9C" }}
                                    data-event="foreColor"
                                    data-value="#E79C9C"
                                    title
                                    aria-label="Tonys Pink"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Tonys Pink"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFC69C" }}
                                    data-event="foreColor"
                                    data-value="#FFC69C"
                                    title
                                    aria-label="Peach Orange"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Peach Orange"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFE79C" }}
                                    data-event="foreColor"
                                    data-value="#FFE79C"
                                    title
                                    aria-label="Cream Brulee"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cream Brulee"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#B5D6A5" }}
                                    data-event="foreColor"
                                    data-value="#B5D6A5"
                                    title
                                    aria-label="Sprout"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Sprout"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#A5C6CE" }}
                                    data-event="foreColor"
                                    data-value="#A5C6CE"
                                    title
                                    aria-label="Casper"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Casper"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#9CC6EF" }}
                                    data-event="foreColor"
                                    data-value="#9CC6EF"
                                    title
                                    aria-label="Perano"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Perano"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#B5A5D6" }}
                                    data-event="foreColor"
                                    data-value="#B5A5D6"
                                    title
                                    aria-label="Cold Purple"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cold Purple"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#D6A5BD" }}
                                    data-event="foreColor"
                                    data-value="#D6A5BD"
                                    title
                                    aria-label="Careys Pink"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Careys Pink"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#E76363" }}
                                    data-event="foreColor"
                                    data-value="#E76363"
                                    title
                                    aria-label="Mandy"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Mandy"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#F7AD6B" }}
                                    data-event="foreColor"
                                    data-value="#F7AD6B"
                                    title
                                    aria-label="Rajah"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Rajah"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFD663" }}
                                    data-event="foreColor"
                                    data-value="#FFD663"
                                    title
                                    aria-label="Dandelion"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Dandelion"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#94BD7B" }}
                                    data-event="foreColor"
                                    data-value="#94BD7B"
                                    title
                                    aria-label="Olivine"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Olivine"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#73A5AD" }}
                                    data-event="foreColor"
                                    data-value="#73A5AD"
                                    title
                                    aria-label="Gulf Stream"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Gulf Stream"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#6BADDE" }}
                                    data-event="foreColor"
                                    data-value="#6BADDE"
                                    title
                                    aria-label="Viking"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Viking"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#8C7BC6" }}
                                    data-event="foreColor"
                                    data-value="#8C7BC6"
                                    title
                                    aria-label="Blue Marguerite"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Blue Marguerite"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#C67BA5" }}
                                    data-event="foreColor"
                                    data-value="#C67BA5"
                                    title
                                    aria-label="Puce"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Puce"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#CE0000" }}
                                    data-event="foreColor"
                                    data-value="#CE0000"
                                    title
                                    aria-label="Guardsman Red"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Guardsman Red"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#E79439" }}
                                    data-event="foreColor"
                                    data-value="#E79439"
                                    title
                                    aria-label="Fire Bush"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Fire Bush"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#EFC631" }}
                                    data-event="foreColor"
                                    data-value="#EFC631"
                                    title
                                    aria-label="Golden Dream"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Golden Dream"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#6BA54A" }}
                                    data-event="foreColor"
                                    data-value="#6BA54A"
                                    title
                                    aria-label="Chelsea Cucumber"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Chelsea Cucumber"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#4A7B8C" }}
                                    data-event="foreColor"
                                    data-value="#4A7B8C"
                                    title
                                    aria-label="Smalt Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Smalt Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#3984C6" }}
                                    data-event="foreColor"
                                    data-value="#3984C6"
                                    title
                                    aria-label="Boston Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Boston Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#634AA5" }}
                                    data-event="foreColor"
                                    data-value="#634AA5"
                                    title
                                    aria-label="Butterfly Bush"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Butterfly Bush"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#A54A7B" }}
                                    data-event="foreColor"
                                    data-value="#A54A7B"
                                    title
                                    aria-label="Cadillac"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cadillac"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#9C0000" }}
                                    data-event="foreColor"
                                    data-value="#9C0000"
                                    title
                                    aria-label="Sangria"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Sangria"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#B56308" }}
                                    data-event="foreColor"
                                    data-value="#B56308"
                                    title
                                    aria-label="Mai Tai"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Mai Tai"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#BD9400" }}
                                    data-event="foreColor"
                                    data-value="#BD9400"
                                    title
                                    aria-label="Buddha Gold"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Buddha Gold"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#397B21" }}
                                    data-event="foreColor"
                                    data-value="#397B21"
                                    title
                                    aria-label="Forest Green"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Forest Green"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#104A5A" }}
                                    data-event="foreColor"
                                    data-value="#104A5A"
                                    title
                                    aria-label="Eden"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Eden"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#085294" }}
                                    data-event="foreColor"
                                    data-value="#085294"
                                    title
                                    aria-label="Venice Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Venice Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#311873" }}
                                    data-event="foreColor"
                                    data-value="#311873"
                                    title
                                    aria-label="Meteorite"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Meteorite"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#731842" }}
                                    data-event="foreColor"
                                    data-value="#731842"
                                    title
                                    aria-label="Claret"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Claret"
                                  />
                                </div>
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#630000" }}
                                    data-event="foreColor"
                                    data-value="#630000"
                                    title
                                    aria-label="Rosewood"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Rosewood"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#7B3900" }}
                                    data-event="foreColor"
                                    data-value="#7B3900"
                                    title
                                    aria-label="Cinnamon"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Cinnamon"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#846300" }}
                                    data-event="foreColor"
                                    data-value="#846300"
                                    title
                                    aria-label="Olive"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Olive"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#295218" }}
                                    data-event="foreColor"
                                    data-value="#295218"
                                    title
                                    aria-label="Parsley"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Parsley"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#083139" }}
                                    data-event="foreColor"
                                    data-value="#083139"
                                    title
                                    aria-label="Tiber"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Tiber"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#003163" }}
                                    data-event="foreColor"
                                    data-value="#003163"
                                    title
                                    aria-label="Midnight Blue"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Midnight Blue"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#21104A" }}
                                    data-event="foreColor"
                                    data-value="#21104A"
                                    title
                                    aria-label="Valentino"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Valentino"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#4A1031" }}
                                    data-event="foreColor"
                                    data-value="#4A1031"
                                    title
                                    aria-label="Loulou"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="Loulou"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                type="button"
                                className="note-color-select btn btn-light"
                                data-event="openPalette"
                                data-value="foreColorPicker"
                              >
                                Select
                              </button>
                              <input
                                type="color"
                                id="foreColorPicker"
                                className="note-btn note-color-select-btn"
                                defaultValue="#000000"
                                data-event="foreColorPalette"
                              />
                            </div>
                            <div
                              className="note-holder-custom"
                              id="foreColorPalette"
                              data-event="foreColor"
                            >
                              <div className="note-color-palette">
                                <div className="note-color-row">
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="foreColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="foreColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="foreColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="foreColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="foreColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="foreColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="foreColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                  <button
                                    type="button"
                                    className="note-color-btn"
                                    style={{ backgroundColor: "#FFFFFF" }}
                                    data-event="foreColor"
                                    data-value="#FFFFFF"
                                    title
                                    aria-label="#FFFFFF"
                                    data-toggle="button"
                                    tabIndex={-1}
                                    data-original-title="#FFFFFF"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                    <div className="note-btn-group btn-group note-para">
                      <div className="note-btn-group btn-group">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm dropdown-toggle"
                          tabIndex={-1}
                          data-toggle="dropdown"
                          title
                          aria-label="Paragraph"
                          data-original-title="Paragraph"
                          aria-expanded="false"
                        >
                          <i className="note-icon-align-left" />{" "}
                          <span className="note-icon-caret" />
                        </button>
                        <ul
                          className="note-dropdown-menu dropdown-menu"
                          style={{ willChange: "transform" }}
                        >
                          <div className="note-btn-group btn-group note-align">
                            <button
                              type="button"
                              className="note-btn btn btn-default btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Align left (⌘+⇧+L)"
                              data-original-title="Align left (⌘+⇧+L)"
                            >
                              <i className="note-icon-align-left" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-default btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Align center (⌘+⇧+E)"
                              data-original-title="Align center (⌘+⇧+E)"
                            >
                              <i className="note-icon-align-center" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-default btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Align right (⌘+⇧+R)"
                              data-original-title="Align right (⌘+⇧+R)"
                            >
                              <i className="note-icon-align-right" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-default btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Justify full (⌘+⇧+J)"
                              data-original-title="Justify full (⌘+⇧+J)"
                            >
                              <i className="note-icon-align-justify" />
                            </button>
                          </div>
                          <div className="note-btn-group btn-group note-list">
                            <button
                              type="button"
                              className="note-btn btn btn-default btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Outdent (⌘+[)"
                              data-original-title="Outdent (⌘+[)"
                            >
                              <i className="note-icon-align-outdent" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-default btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Indent (⌘+])"
                              data-original-title="Indent (⌘+])"
                            >
                              <i className="note-icon-align-indent" />
                            </button>
                          </div>
                        </ul>
                      </div>
                      <button
                        type="button"
                        className="note-btn btn btn-default btn-sm"
                        tabIndex={-1}
                        title
                        aria-label="Unordered list (⌘+⇧+NUM7)"
                        data-original-title="Unordered list (⌘+⇧+NUM7)"
                      >
                        <i className="note-icon-unorderedlist" />
                      </button>
                      <button
                        type="button"
                        className="note-btn btn btn-default btn-sm"
                        tabIndex={-1}
                        title
                        aria-label="Ordered list (⌘+⇧+NUM8)"
                        data-original-title="Ordered list (⌘+⇧+NUM8)"
                      >
                        <i className="note-icon-orderedlist" />
                      </button>
                    </div>
                    <div className="note-btn-group btn-group note-font">
                      <button
                        type="button"
                        className="note-btn btn btn-default btn-sm note-btn-strikethrough"
                        tabIndex={-1}
                        title
                        aria-label="Strikethrough (⌘+⇧+S)"
                        data-original-title="Strikethrough (⌘+⇧+S)"
                      >
                        <i className="note-icon-strikethrough" />
                      </button>
                    </div>
                    <div className="note-btn-group btn-group note-font">
                      <button
                        type="button"
                        className="note-btn btn btn-default btn-sm"
                        tabIndex={-1}
                        title
                        aria-label="Remove Font Style (⌘+\)"
                        data-original-title="Remove Font Style (⌘+\)"
                      >
                        <i className="note-icon-eraser" />
                      </button>
                    </div>
                  </div>
                  <div className="note-editing-area">
                    <div className="note-placeholder" style={{ display: "block" }}>
                      Nhập nội dung
                    </div>
                    <div className="note-handle">
                      <div className="note-control-selection" style={{ display: "none" }}>
                        <div className="note-control-selection-bg" />
                        <div className="note-control-holder note-control-nw" />
                        <div className="note-control-holder note-control-ne" />
                        <div className="note-control-holder note-control-sw" />
                        <div className="note-control-sizing note-control-se" />
                        <div className="note-control-selection-info" />
                      </div>
                    </div>
                    <textarea
                      className="note-codable"
                      aria-multiline="true"
                      defaultValue={""}
                    />
                    <div
                      className="note-editable"
                      contentEditable="true"
                      role="textbox"
                      aria-multiline="true"
                      spellCheck="true"
                      autoCorrect="true"
                      style={{ maxHeight: 100, minHeight: 80, fontFamily: "Roboto" }}
                    >
                      <br />
                    </div>
                  </div>
                  <output
                    className="note-status-output"
                    role="status"
                    aria-live="polite"
                  />
                  <div
                    className="note-statusbar"
                    role="status"
                    style={{ display: "none" }}
                  >
                    <div className="note-resizebar" aria-label="Resize">
                      <div className="note-icon-bar" />
                      <div className="note-icon-bar" />
                      <div className="note-icon-bar" />
                    </div>
                  </div>
                  <div
                    className="modal note-modal link-dialog"
                    aria-hidden="false"
                    tabIndex={-1}
                    role="dialog"
                    aria-label="Insert Link"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            aria-hidden="true"
                            onClick ={props.closeForm}
                          >
                            ×
                          </button>
                          <h4 className="modal-title">Insert Link</h4>
                        </div>
                        <div className="modal-body">
                          <div className="form-group note-form-group">
                            <label
                              htmlFor="note-dialog-link-txt-15965945615321"
                              className="note-form-label"
                            >
                              Text to display
                            </label>
                            <input
                              id="note-dialog-link-txt-15965945615321"
                              className="note-link-text form-control note-form-control note-input"
                              type="text"
                            />
                          </div>
                          <div className="form-group note-form-group">
                            <label
                              htmlFor="note-dialog-link-url-15965945615321"
                              className="note-form-label"
                            >
                              To what URL should this link go?
                            </label>
                            <input
                              id="note-dialog-link-url-15965945615321"
                              className="note-link-url form-control note-form-control note-input"
                              type="text"
                              defaultValue="http://"
                            />
                          </div>
                          <div className="checkbox sn-checkbox-open-in-new-window">
                            <label>
                              <input type="checkbox" defaultChecked aria-checked="true" />
                              Open in new window
                            </label>
                          </div>
                          <div className="checkbox sn-checkbox-use-protocol">
                            <label>
                              <input type="checkbox" defaultChecked aria-checked="true" />
                              Use default protocol
                            </label>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <input
                            type="button"
                            href="#"
                            className="btn btn-primary note-btn note-btn-primary note-link-btn"
                            defaultValue="Insert Link"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="note-popover popover in note-link-popover bottom"
                    style={{ display: "none" }}
                  >
                    <div className="arrow" />
                    <div className="popover-content note-children-container">
                      <span>
                        <a target="_blank" />
                        &nbsp;
                      </span>
                      <div className="note-btn-group btn-group note-link">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Edit"
                          data-original-title="Edit"
                        >
                          <i className="note-icon-link" />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Unlink"
                          data-original-title="Unlink"
                        >
                          <i className="note-icon-chain-broken" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal note-modal"
                    aria-hidden="false"
                    tabIndex={-1}
                    role="dialog"
                    aria-label="Insert Image"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                          <h4 className="modal-title">Insert Image</h4>
                        </div>
                        <div className="modal-body">
                          <div className="form-group note-form-group note-group-select-from-files">
                            <label
                              htmlFor="note-dialog-image-file-15965945615321"
                              className="note-form-label"
                            >
                              Select from files
                            </label>
                            <input
                              id="note-dialog-image-file-15965945615321"
                              className="note-image-input form-control-file note-form-control note-input"
                              type="file"
                              name="files"
                              accept="image/*"
                              multiple="multiple"
                            />
                          </div>
                          <div className="form-group note-group-image-url">
                            <label
                              htmlFor="note-dialog-image-url-15965945615321"
                              className="note-form-label"
                            >
                              Image URL
                            </label>
                            <input
                              id="note-dialog-image-url-15965945615321"
                              className="note-image-url form-control note-form-control note-input"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <input
                            type="button"
                            href="#"
                            className="btn btn-primary note-btn note-btn-primary note-image-btn"
                            defaultValue="Insert Image"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="note-popover popover in note-image-popover bottom"
                    style={{ display: "none" }}
                  >
                    <div className="arrow" />
                    <div className="popover-content note-children-container">
                      <div className="note-btn-group btn-group note-resize">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Resize full"
                          data-original-title="Resize full"
                        >
                          <span className="note-fontsize-10">100%</span>
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Resize half"
                          data-original-title="Resize half"
                        >
                          <span className="note-fontsize-10">50%</span>
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Resize quarter"
                          data-original-title="Resize quarter"
                        >
                          <span className="note-fontsize-10">25%</span>
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Original size"
                          data-original-title="Original size"
                        >
                          <i className="note-icon-rollback" />
                        </button>
                      </div>
                      <div className="note-btn-group btn-group note-float">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Float Left"
                          data-original-title="Float Left"
                        >
                          <i className="note-icon-float-left" />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Float Right"
                          data-original-title="Float Right"
                        >
                          <i className="note-icon-float-right" />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Remove float"
                          data-original-title="Remove float"
                        >
                          <i className="note-icon-rollback" />
                        </button>
                      </div>
                      <div className="note-btn-group btn-group note-remove">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm"
                          tabIndex={-1}
                          title
                          aria-label="Remove Image"
                          data-original-title="Remove Image"
                        >
                          <i className="note-icon-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="note-popover popover in note-table-popover bottom"
                    style={{ display: "none" }}
                  >
                    <div className="arrow" />
                    <div className="popover-content note-children-container">
                      <div className="note-btn-group btn-group note-add">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm btn-md"
                          tabIndex={-1}
                          title
                          aria-label="Add row below"
                          data-original-title="Add row below"
                        >
                          <i className="note-icon-row-below" />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm btn-md"
                          tabIndex={-1}
                          title
                          aria-label="Add row above"
                          data-original-title="Add row above"
                        >
                          <i className="note-icon-row-above" />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm btn-md"
                          tabIndex={-1}
                          title
                          aria-label="Add column left"
                          data-original-title="Add column left"
                        >
                          <i className="note-icon-col-before" />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm btn-md"
                          tabIndex={-1}
                          title
                          aria-label="Add column right"
                          data-original-title="Add column right"
                        >
                          <i className="note-icon-col-after" />
                        </button>
                      </div>
                      <div className="note-btn-group btn-group note-delete">
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm btn-md"
                          tabIndex={-1}
                          title
                          aria-label="Delete row"
                          data-original-title="Delete row"
                        >
                          <i className="note-icon-row-remove" />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm btn-md"
                          tabIndex={-1}
                          title
                          aria-label="Delete column"
                          data-original-title="Delete column"
                        >
                          <i className="note-icon-col-remove" />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn btn-default btn-sm btn-md"
                          tabIndex={-1}
                          title
                          aria-label="Delete table"
                          data-original-title="Delete table"
                        >
                          <i className="note-icon-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal note-modal"
                    aria-hidden="false"
                    tabIndex={-1}
                    role="dialog"
                    aria-label="Insert Video"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                          <h4 className="modal-title">Insert Video</h4>
                        </div>
                        <div className="modal-body">
                          <div className="form-group note-form-group row-fluid">
                            <label
                              htmlFor="note-dialog-video-url-15965945615321"
                              className="note-form-label"
                            >
                              Video URL{" "}
                              <small className="text-muted">
                                (YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)
                              </small>
                            </label>
                            <input
                              id="note-dialog-video-url-15965945615321"
                              className="note-video-url form-control note-form-control note-input"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <input
                            type="button"
                            href="#"
                            className="btn btn-primary note-btn note-btn-primary note-video-btn"
                            defaultValue="Insert Video"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal note-modal"
                    aria-hidden="false"
                    tabIndex={-1}
                    role="dialog"
                    aria-label="Help"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                          <h4 className="modal-title">Help</h4>
                        </div>
                        <div
                          className="modal-body"
                          style={{ maxHeight: 300, overflow: "scroll" }}
                        >
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>ENTER</kbd>
                          </label>
                          <span>Insert Paragraph</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+Z</kbd>
                          </label>
                          <span>Undoes the last command</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+SHIFT+Z</kbd>
                          </label>
                          <span>Redoes the last command</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>TAB</kbd>
                          </label>
                          <span>Tab</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>SHIFT+TAB</kbd>
                          </label>
                          <span>Untab</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+B</kbd>
                          </label>
                          <span>Set a bold style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+I</kbd>
                          </label>
                          <span>Set a italic style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+U</kbd>
                          </label>
                          <span>Set a underline style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+SHIFT+S</kbd>
                          </label>
                          <span>Set a strikethrough style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+BACKSLASH</kbd>
                          </label>
                          <span>Clean a style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+SHIFT+L</kbd>
                          </label>
                          <span>Set left align</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+SHIFT+E</kbd>
                          </label>
                          <span>Set center align</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+SHIFT+R</kbd>
                          </label>
                          <span>Set right align</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+SHIFT+J</kbd>
                          </label>
                          <span>Set full align</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+SHIFT+NUM7</kbd>
                          </label>
                          <span>Toggle unordered list</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+SHIFT+NUM8</kbd>
                          </label>
                          <span>Toggle ordered list</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+LEFTBRACKET</kbd>
                          </label>
                          <span>Outdent on current paragraph</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+RIGHTBRACKET</kbd>
                          </label>
                          <span>Indent on current paragraph</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+NUM0</kbd>
                          </label>
                          <span>Change current block's format as a paragraph(P tag)</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+NUM1</kbd>
                          </label>
                          <span>Change current block's format as H1</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+NUM2</kbd>
                          </label>
                          <span>Change current block's format as H2</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+NUM3</kbd>
                          </label>
                          <span>Change current block's format as H3</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+NUM4</kbd>
                          </label>
                          <span>Change current block's format as H4</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+NUM5</kbd>
                          </label>
                          <span>Change current block's format as H5</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+NUM6</kbd>
                          </label>
                          <span>Change current block's format as H6</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+ENTER</kbd>
                          </label>
                          <span>Insert horizontal rule</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CMD+K</kbd>
                          </label>
                          <span>Show Link Dialog</span>
                        </div>
                        <div className="modal-footer">
                          <p className="text-center">
                            <a href="http://summernote.org/" target="_blank">
                              Summernote 0.8.16
                            </a>{" "}
                            ·{" "}
                            <a
                              href="https://github.com/summernote/summernote"
                              target="_blank"
                            >
                              Project
                            </a>{" "}
                            ·{" "}
                            <a
                              href="https://github.com/summernote/summernote/issues"
                              target="_blank"
                            >
                              Issues
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reply_attachment_files" />
                <div className="reply_format">
                  <span className="reply_toolbar las la-font" />
                  <span className="reply_attachment las la-paperclip">
                    <i className="text">Đính kèm tệp</i>
                    <input type="file" className="input" />
                  </span>
                  <button
                    type="submit"
                    className="reply_submit min-width-button min-height-40 min-width-button btn-uni-purple"
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        )
    }else {
        return <></>
    }
   
}

function CreateBtn (props){
    return (
        <div className="modal-footer pt-0 border-top-0">
            <button className=" square btn-uni-exit min-width-button" onClick={props.close}>Đóng</button>
      </div>
    )
}
export default DialogResponeHistory;
