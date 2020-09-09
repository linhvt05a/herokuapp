import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";

const ViewProject = (props) => {
    let {getIdProject} = props;
    return (
        <div class="col-12 col-sm-12 col-md-6">
            <div class="child">
                <figure class="image">
                    <i class="noti active fas fa-bell"></i>
                    <img src={IMAGE_URL + "/images/house_highlight.jpg"} alt="Căn hộ Saigon Royal"/>
                    <span class="type payment_status_bg_1">
                        <i class="icon fas fa-check-circle"></i>
                        Đã thanh toán
                    </span>
                </figure>
                <div class="details">
                    <div class="heading">
                        <a class="name" onClick={getIdProject}>Căn hộ F01</a>
                        <p class="status">
                            Thanh toán lần 3
                        </p>
                    </div>
                    <p class="sub-child">
                        <i class="icon fas fa-user"></i>
                        <span class="text">Dự án : Royal Garden</span>
                    </p>
                    <p class="sub-child">
                        <i class="icon fas fa-map-marker-alt"></i>
                        <span class="text">
                            Vị trí : Khu A | Khối B
                        </span>
                    </p>
                    <p class="sub-child">
                        <i class="icon fas fa-network-wired"></i>
                        <span class="text">
                            Tổng đợt thanh toán : 10 (đợt)
                        </span>
                    </p>
                    <p class="sub-child mb-0">
                        <i class="icon fas fa-money-bill-wave"></i>
                        <span class="text">
                            Số tiền : 3.000.000.000 (đồng)
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ViewProject;