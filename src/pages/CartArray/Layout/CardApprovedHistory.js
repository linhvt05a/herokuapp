import React, { useState } from "react"
import {CardHeader, CardNodata, Spinner} from '../../../components/common'
import {InputDate, InputSelect} from '../../../components/input'
import {CUSTOMER_REQUEST_TYPE, CUSTOMER_REQUEST_STATUS, CUSTOMER_REQUEST_PRIORITY} from '../../../constant'

const CardApprovedHistory = (props) => {
    const [selected, setSelected] = useState(true)
    const [defaultValue, setDefault] = useState([])
    const changeTab = () => {
        setSelected(!selected)
    }


    const CancelSearch = () =>{
       setDefault(
        CUSTOMER_REQUEST_TYPE , 
        CUSTOMER_REQUEST_PRIORITY, 
        CUSTOMER_REQUEST_STATUS)
    }
    return (
        <div className="row ">
            <CardFilterApproved onChange ={props.onChange}  onSearch={props.onSearch} onCancel={CancelSearch} defaultValue={defaultValue}/>
            <CardReview 
                    selected={selected} 
                    data={props.data} 
                    isFetching={props.isFetching} 
                    approveSuccess ={props.approveSuccess} 
                    changeTab={changeTab} 
                    handleClick={props.handleClick} 
                    list_comment ={props.list_comment}
                    
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
                    <InputSelect className="form-group" label="LOẠI YÊU CẦU" placeholder ="--Select--"  datas ={props.defaultValue === null ? [] : CUSTOMER_REQUEST_TYPE } name="request_type" onChange ={props.onChange}/>
                    <InputDate label="CHOOSE DATE" name="from_date" />
                    <InputDate  label="CHOOSE DATE" name="to_date" />
                    <InputSelect className="form-group" label="TRẠNG THÁI" placeholder ="--Select--" datas={CUSTOMER_REQUEST_STATUS} name="request_status" onChange ={props.onChange}/>
                    <InputSelect className="form-group" label="ĐỘ ƯU TIÊN" placeholder ="--Select--" datas ={CUSTOMER_REQUEST_PRIORITY} name="priority" onChange ={props.onChange}/>
                    <FilterButton onSearch={props.onSearch} onCancel ={props.onCancel}/>
                </div>
            </div>
        </div>
    )
}
const Mode = (props) => {
    return (
        <a className={props.act === true ? "nav-item nav-link active" : " nav-link"} style={{ cursor: 'pointer' }} onClick={props.changeTab}>
            {props.content}
        </a>
    )
}
const FilterButton = (props) => {
    return (
        <div className="text-center d-flex justify-space-between mt-4">
            <button type="button" className="btn-uni-purple-outline min-height-40 w-50 mr-2" onClick={props.onCancel}>
                Cancel search
            </button>
            <button type="button" className="btn-uni-purple min-height-40 w-50" onClick={props.onSearch}>
                Search
            </button>
        </div>
    )
}
const CardReview = (props) => {
    return (
        <div className="col-lg-9 col-lg-9 col-md-12 col-sm-12">
            <CardHeader label="DANH SÁCH LỊCH SỬ PHÊ DUYỆT" />
            <div className="card square">
                <div className="card-body approval_history">
                    {props.data && props.data.length > 0 ?
                        <div className="approval_history">
                        <div className="d-flex flex-wrap">
                            <div className="nav nav-tabs mb-2" role="tablist">
                                <Mode act={props.selected} content="Yêu cầu mới nhất" selected={true} changeTab={props.changeTab} />
                                <Mode act={!props.selected} content="Yêu cầu phê duyệt cũ nhất" selected={false} changeTab={props.changeTab} />
                            </div>
                            <div className="fw-medium ml-0 ml-lg-auto">
                                Có <span className="uni_text_e94c4c">{props.data && props.data.length > 0 ? props.data.length : 0}</span> lịch sử phê duyệt
                            </div>
                        </div>
                        {props.data && props.data.map((item) =>
                            <div className="tab-content">
                                <div className="tab-pane fade show active">
                                    <div className="approval_history--item">
                                        <RequestTypeIcon request_type = {item.request_type}/>
                                        <div className="approval_history--detail">
                                            {
                                                props.selected === true || props.isFetching === true ?
                                                    (
                                                    <NewestMessage list_comment ={props.list_comment} handleClick={()=>props.handleClick(item.request_id)} data={item} />
                                                    )
                                                    :
                                                    ( <OldestMessage data={item}  handleClick={props.handleClick} list_comment={props.list_comment} handleClick={()=>props.handleClick(item.request_id)}/>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>:
                        <CardNodata />
                    }
                </div>
            </div>
        </div>

    )
}

const NewestMessage = (props) => {
    return (
        <>
            <div className="approval_history--detail-content">
                <a href="#" className="approval_history--title fs-16 font-weight-bold">
                        <label className="fw-medium">
                                <RequestType data = {props.data}/>
                                <span class="uni_star_e94c4c" style={{color:'red', fontSize: 14, marginLeft:3}}>
                                    ({props.data.comment_count ? props.data.comment_count : 0} phản hồi mới)
                                </span>
                        </label>
                        </a>
                <div className="approval_history--list">
                    <p className="child">
                        <i className="icon uni_text_6d30ab las la-user" /> Ngày gửi yêu cầu:
                                <span className="fw-medium">{props.data.request_customer}</span>
                        </p>
                        <p className="child">
                            <i className="icon uni_text_6d30ab las la-calendar-check" />Thời gian gửi yêu cầu:
                            <span className="fw-medium">{props.data.created_at}</span>
                        </p>
                        <p className="child">
                            <i className="icon uni_text_6d30ab las la-flag" /> Độ ưu tiên:
                            <Priority data ={props.data}/>
                        </p>
                        <a href="#" className="uni_text_6d30ab fs-12" onClick={props.handleClick}>
                           {props.data.request_status === 1 || props.data.request_status === 3 ?  <u> Phản hồi</u> :<u> Xem lịch sử phản hồi</u>}
                        </a>
                        </div>
                </div>
            <ApprovedStatus data={props.data} />
        </>
    )
}

const OldestMessage = (props) => {
    return (
        <>
            <div className="approval_history--detail-content">
                <a href="#" className="approval_history--title fs-16 font-weight-bold">
                        <RequestType data ={props.data}/>
                <span class="uni_star_e94c4c" style={{color:'red', fontSize: 14, marginLeft:3}}>
                ({props.data.comment_count ? props.data.comment_count : 0} phản hồi mới)
                </span>
                    </a>
                <div className="approval_history--list">
                    <p className="child">
                        <i className="icon uni_text_6d30ab las la-user" /> Ngày gửi yêu cầu:
                                <span className="fw-medium">{props.data.request_customer}</span>
                    </p>
                    <p className="child">
                        <i className="icon uni_text_6d30ab las la-calendar-check" />Thời gian gửi yêu cầu:
                            <span className="fw-medium">{props.data.created_at}</span>
                        </p>
                        <p className="child">
                            <i className="icon uni_text_6d30ab las la-flag" /> Độ ưu tiên:
                            <Priority data={props.data}/>
                        </p>
                        <a href="#" className="uni_text_6d30ab fs-12" onClick={props.handleClick}>
                        {props.data.request_status === 1 || props.data.request_status === 3 ?  <u> Phản hồi</u> :<u> Xem lịch sử phản hồi</u>}
                        </a>
                    </div>
                </div>
                <ApprovedStatus data = {props.data}/>
            </>
        )
    }
const Priority = (props) =>{
    if(props.data.priority === 1){
        return <span className="fw-medium">Cao (1 - 3 ngày)</span>  
    }
    if(props.data.priority === 2){
        return <span className="fw-medium">Trung bình (1 - 5 ngày)</span>  
    }else {
        return <span className="fw-medium">Thấp (1 - 7 ngày)</span>
    }
    
}

const RequestType = (props) => {
    if(props.data.request_type === 1){
        return(
            <span> Yêu cầu khác </span>
        )
    }
    if(props.data.request_type === 2){
        return(
            <span> Yêu cầu quy đổi khuyến mãi cho khách hàng </span>
        )
    }
    if(props.data.request_type === 3){
        return(
            <span> Yêu cầu thay đổi chiết khấu hoa hồng cho kênh phân phối </span>
        )
    }else {
        return<></>
    }
    
}
const ApprovedStatus = (props) => {
    if (props.data.request_status === 1) {
        return (
            <div className="approval_history--status status_03">
                <div className="status">
                    <i className="las fs-16 pr-1 la-check-circle" />
                    <span className="fw-medium">Chờ duyệt</span>
                </div>
            </div>
        )
    } else if (props.data.request_status === 2) {
        return (
            <div className="approval_history--status status_01">
                <div className="status">
                    <i className="las fs-16 pr-1 la-check-circle" />
                    <span className="fw-medium">Phê duyệt</span>
                </div>
            </div>
        )
    } else if (props.data.request_status === 3) {
        return (
            <div className="approval_history--status status_02">
                <div className="status">
                    <i className="las fs-16 pr-1 la-check-circle" />
                    <span className="fw-medium">Từ chối</span>
                </div>
            </div>
        )
    }


}

const RequestTypeIcon = (props) =>{
    if(props.request_type === 1){
        return(
            <div className="approval_history--icon type_03 las la-ticket-alt"></div>
        )
    }
    if(props.request_type === 2){
        return(
            <div className="approval_history--icon type_02 las la-ticket-alt"></div>
        )  
    }
    return(
        <div className="approval_history--icon type_01 las la-ticket-alt"></div>
    )
}

export default CardApprovedHistory;
