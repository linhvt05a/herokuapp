import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const ViewVertical = (props) => {
    return (
        <div className="view_vertical">
            <div className="item">
                <div className="heading">
                    <span className="text-uppercase">
                        KHÁCH HÀNG
                    </span>
                    <span className="value">Trần Thị Thu Hoài</span>
                </div>
                <div className="list">
                    <div className="list_item w-100">
                        <span className="title">
                            Số CMND/CCCD/Hộ chiếu
                        </span>
                        <span className="value">
                            340320350
                        </span>
                    </div>
                    <div className="list_item">
                        <span className="title">
                            Địa chỉ thường trú
                        </span>
                        <span className="value">
                            24/3 đường Lê Hồng Phong,
                            Phường 16, Q.3, Tp.HCM,...
                        </span>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="heading">
                    <span className="text-uppercase">
                        TỔNG TIỀN (đồng)
                    </span>
                    <span className="value">10.212.520.022</span>
                </div>
                <div className="list">
                    <div className="list_item w-100">
                        <span className="title">
                            Tổng giá BĐS (đồng)
                        </span>
                        <span className="value">
                            10.460.091.972
                        </span>
                    </div>
                    <div className="list_item">
                        <span className="title">
                            Giảm giá voucher
                        </span>
                        <span className="value">
                            247.571.950
                        </span>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="heading">
                    <span className="text-uppercase">
                        THANH TOÁN
                    </span>
                    <span className="value">Chuyển khoản</span>
                </div>
                <div className="list">
                    <div className="list_item w-100">
                        <span className="title">
                            Số tài khoản
                        </span>
                        <span className="value">
                            19130848623336
                        </span>
                    </div>
                    <div className="list_item">
                        <span className="title">
                            Tên tài khoản
                        </span>
                        <span className="value">
                            Công ty đầu tư và xây dựng
                            bất động sản Minerva
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewVertical;