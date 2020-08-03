import React, { Component } from 'react';

import './PageNotify.css';

class Item extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="col-12 col-md-12 d-flex flex-column">
                    <div className="notification">
                        <div className="noti-heading">Bạn có <span className="heading-total">1</span> thông Báo</div>
                        <div className="item" data-id="999">
                            <div className="times">
                                <span className="text bg-danger">Còn 7 ngày</span>
                                <i className="before">6 Giờ trước</i>
                            </div>
                            <div className="content">
                                <p className="heading">
                                    <span className="title">
                                        <a href="/backend/internal-project/2/task/2779/edit/" target="_blank" className="uni_text_black" onClick="reload(999)">
                                            <b>Chủ tịch</b> vừa mới bổ sung nội dung task <b>"Test tao task noi bo indochina"</b>
                                        </a>
                                    </span>
                                    <span className="d-none d-md-block">
                                        <a href="javascript:void(0)" onClick="removeNotification(event, '/backend/notification/remove_user_notification', '999', '1')">
                                            <i className="uni_action las la-trash"></i>
                                        </a>
                                    </span>
                                </p>
                                <span className="name">
                                    <i className="text">Dự Án: INDOCHINA PLAZA HANOI</i>
                                </span>
                                <p className="responsibility">
                                    <span className="updater">
                                        <i className="las la-clock"></i>
                                        <i className="text">Mốc Thời Gian: </i>
                                        27/05/2020
                                    </span>
                                    <span className="assigned">
                                        <i className="las la-user"></i>
                                        <i className="text">Phân Công: </i>
                                        Trưởng phòng Pháp lý dự án
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class PageNotify extends Component {
    render() {
        return (
            <div>
                <div className="d-flex align-items-end">
                    <div className="m_heading">
                        <button className="m_button no-event"><span>Thông Báo</span></button>
                    </div>
                    <div className="dropdown m-action">
                        <button type="button" className="btn-uni-action dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hoạt Động
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="javascript:void(0)">Xóa Tất Cả</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card square h-100">
                            <Item/>
                            <Item/>
                            <Item/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageNotify;
