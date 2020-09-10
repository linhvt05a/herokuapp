import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const ViewVertical = (props) => {
    return (
        <div class="view_vertical">
            <div class="item">
                <div class="heading">
                    <span class="text-uppercase">
                        KHÁCH HÀNG
                    </span>
                    <span class="value">Trần Thị Thu Hoài</span>
                </div>
                <div class="list">
                    <div class="list_item w-100">
                        <span class="title">
                            Số CMND/CCCD/Hộ chiếu
                        </span>
                        <span class="value">
                            340320350
                        </span>
                    </div>
                    <div class="list_item">
                        <span class="title">
                            Địa chỉ thường trú
                        </span>
                        <span class="value">
                            24/3 đường Lê Hồng Phong,
                            Phường 16, Q.3, Tp.HCM,...
                        </span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="heading">
                    <span class="text-uppercase">
                        TỔNG TIỀN (đồng)
                    </span>
                    <span class="value">10.212.520.022</span>
                </div>
                <div class="list">
                    <div class="list_item w-100">
                        <span class="title">
                            Tổng giá BĐS (đồng)
                        </span>
                        <span class="value">
                            10.460.091.972
                        </span>
                    </div>
                    <div class="list_item">
                        <span class="title">
                            Giảm giá voucher
                        </span>
                        <span class="value">
                            247.571.950
                        </span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="heading">
                    <span class="text-uppercase">
                        THANH TOÁN
                    </span>
                    <span class="value">Chuyển khoản</span>
                </div>
                <div class="list">
                    <div class="list_item w-100">
                        <span class="title">
                            Số tài khoản
                        </span>
                        <span class="value">
                            19130848623336
                        </span>
                    </div>
                    <div class="list_item">
                        <span class="title">
                            Tên tài khoản
                        </span>
                        <span class="value">
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