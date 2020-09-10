import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";

const ViewProject = (props) => {
    let {getIdProject} = props;
    return (
        <div className="col-12 col-sm-12 col-md-6">
            <div className="child">
                <figure className="image">
                    <i className="noti active fas fa-bell"></i>
                    <img src={IMAGE_URL + "/images/house_highlight.jpg"} alt="Căn hộ Saigon Royal"/>
                    <span className="type payment_status_bg_1">
                        <i className="icon fas fa-check-circle"></i>
                        Đã thanh toán
                    </span>
                </figure>
                <div className="details">
                    <div className="heading">
                        <a className="name" onClick={getIdProject}>Căn hộ F01</a>
                        <p className="status">
                            Thanh toán lần 3
                        </p>
                    </div>
                    <p className="sub-child">
                        <i className="icon fas fa-user"></i>
                        <span className="text">Dự án : Royal Garden</span>
                    </p>
                    <p className="sub-child">
                        <i className="icon fas fa-map-marker-alt"></i>
                        <span className="text">
                            Vị trí : Khu A | Khối B
                        </span>
                    </p>
                    <p className="sub-child">
                        <i className="icon fas fa-network-wired"></i>
                        <span className="text">
                            Tổng đợt thanh toán : 10 (đợt)
                        </span>
                    </p>
                    <p className="sub-child mb-0">
                        <i className="icon fas fa-money-bill-wave"></i>
                        <span className="text">
                            Số tiền : 3.000.000.000 (đồng)
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ViewProject;