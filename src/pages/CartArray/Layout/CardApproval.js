import React, { useState } from "react";

const CardApproval = (props) => {
  return (
    <div className="approval_history--item">
      <RequestTypeIcon requestIcon = {props.approveItem}/>
      <div className="approval_history--detail">
        <div className="approval_history--detail-content">
          <RequestType requestData={props.approveItem}/>
          <div className="approval_history--list">
            <p className="child">
              <i className="icon uni_text_6d30ab las la-user" />
                Ngày gửi yêu cầu:
              <span className="fw-medium">
               {props.approveItem.request_customer}
              </span>
            </p>
            <p className="child">
              <i className="icon uni_text_6d30ab las la-calendar-check" />
              Thời gian gửi yêu cầu:
              <span className="fw-medium">{props.approveItem.created_at}</span>
            </p>
            <p className="child">
              <i className="icon uni_text_6d30ab las la-flag" />
              Độ ưu tiên:
              <Priority priorityData={props.approveItem}/>
            </p>
            <RespondButton requestBtn = {props.approveItem} handleClick={props.handleClick}/>
          </div>
        </div>
            <ApprovedStatus approveData={props.approveItem}/>
      </div>
    </div>
  );
};

const Priority = (props) => {
    if (props.priorityData.priority === 1) {
      return <span className="fw-medium">Cao (1 - 3 ngày)</span>;
    }
    if (props.priorityData.priority === 2) {
      return <span className="fw-medium">Trung bình (1 - 5 ngày)</span>;
    } else {
      return <span className="fw-medium">Thấp (1 - 7 ngày)</span>;
    }
  };


const RequestType = (props) => {
    if (props.requestData.request_type === 1) {
      return (
        <a href="#" className="approval_history--title fs-16 font-weight-bold" >
            Yêu cầu khác
            <span className="uni_star_e94c4c fs-12" style={{padding: 5}}>(có {props.requestData.comment_count} phản hồi mới)</span>
        </a>
      )
    }
    if (props.requestData.request_type === 2) {
        return(
            <a href="#" className="approval_history--title fs-16 font-weight-bold" >
                Yêu cầu quy đổi khuyến mãi cho khách hàng
                <span className="uni_star_e94c4c fs-12" style={{padding: 5}}>(có {props.requestData.comment_count} phản hồi mới)</span>
            </a>
        )
    }
    if (props.requestData.request_type === 3) {
      return (
        <a href="#" className="approval_history--title fs-16 font-weight-bold" >
            Yêu cầu thay đổi chiết khấu hoa hồng cho kênh phân phối
            <span className="uni_star_e94c4c fs-12" style={{padding:5}}>(có {props.requestData.comment_count} phản hồi mới)</span>
        </a>
      );
    } else {
      return <></>;
    }
  };

  const ApprovedStatus = (props) => {
    if (props.approveData.request_status === 1) {
      return (
        <div className="approval_history--status status_03">
          <div className="status">
            <i className="las fs-16 pr-1 la-check-circle" />
            <span className="fw-medium">Chờ duyệt</span>
          </div>
        </div>
      );
    } else if (props.approveData.request_status === 2) {
      return (
        <div className="approval_history--status status_01">
          <div className="status">
            <i className="las fs-16 pr-1 la-check-circle" />
            <span className="fw-medium">Phê duyệt</span>
          </div>
        </div>
      );
    } else if (props.approveData.request_status === 3) {
      return (
        <div className="approval_history--status status_02">
          <div className="status">
            <i className="las fs-16 pr-1 la-check-circle" />
            <span className="fw-medium">Từ chối</span>
          </div>
        </div>
      );
    }
  };

  const RequestTypeIcon = (props) => {
    if (props.requestIcon.request_type === 1) {
      return (
        <div className="approval_history--icon type_03 las la-ticket-alt"></div>
      );
    }
    if (props.requestIcon.request_type === 2) {
      return (
        <div className="approval_history--icon type_02 las la-ticket-alt"></div>
      );
    }
    return (
      <div className="approval_history--icon type_01 las la-ticket-alt"></div>
    );
  };
const RespondButton = (props) =>{
    if(props.requestBtn.request_status === 2){
        return(
            <a href="#" className="uni_text_6d30ab fs-12" onClick={()=> props.handleClick(props.requestBtn.request_status)}>
                <u>Xem lịch sử phản hồi</u>
            </a>
        )
    }else{
        return(
            <a href="#" className="uni_text_6d30ab fs-12" onClick={()=>props.handleClick(props.requestBtn.request_id, props.requestBtn.request_status)} >
                <u >Phản hồi</u>
            </a>
        )
    }
   
}
export default CardApproval;
