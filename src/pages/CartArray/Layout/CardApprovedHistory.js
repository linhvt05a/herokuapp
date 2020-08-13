import React, { useState } from "react";
import { CardHeader, CardNodata, Spinner } from "../../../components/common";
import { Select } from "../../../components/base/Select";
import {
  CUSTOMER_REQUEST_TYPE,
  CUSTOMER_REQUEST_STATUS,
  CUSTOMER_REQUEST_PRIORITY,
} from "../../../constant";
import InputDate from "../../../components/base/DatePicker/DatePicker";
import {CardApproval} from '../Layout'

const CardApprovedHistory = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="row ">
      <CardFilterApproved onChange={props.onChange} onSearch={props.onSearch} />
      <CardReview
        selected={selected}
        listApprove={props.listApprove}
        isFetching={props.isFetchingApprove}
        approveSuccess={props.approveSuccess}
        totalApprove ={props.totalApprove}
        changeTab={() => setSelected(!selected)}
        handleClick={props.handleClick}
        list_comment={props.list_comment}
      />
    </div>
  );
};
const CardFilterApproved = (props) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
      <CardHeader label="LỌC LỊCH SỬ PHÊ DUYỆT" />
      <div className="card square">
        <div className="card-body">
          <Select
            className="form-group"
            label="LOẠI YÊU CẦU"
            placeholder="--Select--"
            datas={CUSTOMER_REQUEST_TYPE}
            name="request_type"
            onChange={props.onChange}
          />
          <InputDate label="FROM DATE" name="from_date" />
          <InputDate label="TO DATE" name="to_date" />
          <Select
            className="form-group"
            label="TRẠNG THÁI"
            placeholder="--Select--"
            datas={CUSTOMER_REQUEST_STATUS}
            name="request_status"
            onChange={props.onChange}
          />
          <Select
            className="form-group"
            label="ĐỘ ƯU TIÊN"
            placeholder="--Select--"
            datas={CUSTOMER_REQUEST_PRIORITY}
            name="priority"
            onChange={props.onChange}
          />
          <FilterButton onSearch={props.onSearch} />
        </div>
      </div>
    </div>
  );
};
const Mode = (props) => {
  return (
    <a
      className={props.act === true ? "nav-item nav-link active" : " nav-link"}
      style={{ cursor: "pointer" }}
      onClick={props.changeTab}
    >
      {props.content}
    </a>
  );
};
const FilterButton = (props) => {
  return (
    <div className="text-center d-flex justify-space-between mt-4">
      <button
        type="button"
        className="btn-uni-purple-outline min-height-40 w-50 mr-2"
      >
        Cancel search
      </button>
      <button
        type="button"
        className="btn-uni-purple min-height-40 w-50"
        onClick={props.onSearch}
      >
        Search
      </button>
    </div>
  );
};
const CardReview = (props) => {
  return (
    <div className="col-lg-9 col-lg-9 col-md-12 col-sm-12">
      <CardHeader label="DANH SÁCH LỊCH SỬ PHÊ DUYỆT" />
      <div className="card square">
        <div className="card-body approval_history">
          <div className="approval_history">
            <div className="d-flex flex-wrap">
              <div className="nav nav-tabs mb-2" role="tablist">
                <Mode
                  act={props.selected}
                  content="Yêu cầu mới nhất"
                  selected={true}
                  changeTab={props.changeTab}
                />
                <Mode
                  act={!props.selected}
                  content="Yêu cầu phê duyệt cũ nhất"
                  selected={false}
                  changeTab={props.changeTab}
                />
              </div>
              <div className="fw-medium ml-0 ml-lg-auto">
                Có
                <span className="uni_text_e94c4c" style={{padding: 5}}>
                    {props.totalApprove}
                </span>
                lịch sử phê duyệt
            </div>
            </div>
                {
                    props.listApprove && props.listApprove.length > 0 ?
                    <div className="tab-content">
                        {props.selected === true ? <div className="tab-pane fade show active" id="newest">
                        
                            {props.listApprove && props.listApprove.map((approveItem, index)=>
                                <CardApproval approveItem={approveItem} handleClick={props.handleClick} />
                            )}
                        </div>:  <CardNodata />}
                    </div>:  <CardNodata />
                    
                }
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardApprovedHistory;
