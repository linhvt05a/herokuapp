import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { ViewHorizontal, ViewVertical } from "../../index";

const ViewPaymentNotice = (props) => {
    return (
        <div className="payment-info mb-45">
            <div className="payment-info__heading">
                Thông báo thanh toán
            </div>
            <div className="payment-info__content">
                <div className="payment-info__wrap">
                    <div className="payment-info__list">
                        <div className="payment-info__name">Dự án Royal Garden</div>
                        <div className="payment-info__detail">
                            <div className="payment-info__aparment">
                                <i className="noti noti_01 fas fa-bell"></i>
                                <div className="content">
                                    <a href="#" className="name">
                                        Căn hộ F11
                                    </a>
                                    <div className="time_remaining noti_01">
                                        Còn 29 ngày
                                    </div>
                                    <div className="date_money">
                                        <span className="item">
                                            <i className="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span className="item">
                                            <i className="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-info__aparment">
                                <i className="noti noti_02 fas fa-exclamation"></i>
                                <div className="content">
                                    <a href="#" className="name">
                                        Căn hộ F11
                                    </a>
                                    <div className="time_remaining noti_02">
                                        Còn 29 ngày
                                    </div>
                                    <div className="date_money">
                                        <span className="item">
                                            <i className="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span className="item">
                                            <i className="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-info__aparment">
                                <i className="noti noti_03 fas fa-exclamation-triangle"></i>
                                <div className="content">
                                    <a href="#" className="name">
                                        Căn hộ F11
                                    </a>
                                    <div className="time_remaining noti_03">
                                        Còn 29 ngày
                                    </div>
                                    <div className="date_money">
                                        <span className="item">
                                            <i className="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span className="item">
                                            <i className="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-info__list">
                        <div className="payment-info__name">Khu biệt thự Thảo Điền</div>
                        <div className="payment-info__detail">
                            <div className="payment-info__aparment">
                                <i className="noti noti_01 fas fa-bell"></i>
                                <div className="content">
                                    <a href="#" className="name">
                                        Căn hộ F11
                                    </a>
                                    <div className="time_remaining noti_01">
                                        Còn 29 ngày
                                    </div>
                                    <div className="date_money">
                                        <span className="item">
                                            <i className="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span className="item">
                                            <i className="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-info__aparment">
                                <i className="noti noti_02 fas fa-exclamation"></i>
                                <div className="content">
                                    <a href="#" className="name">
                                        Căn hộ F11
                                    </a>
                                    <div className="time_remaining noti_02">
                                        Còn 29 ngày
                                    </div>
                                    <div className="date_money">
                                        <span className="item">
                                            <i className="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span className="item">
                                            <i className="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-info__aparment">
                                <i className="noti noti_03 fas fa-exclamation-triangle"></i>
                                <div className="content">
                                    <a href="#" className="name">
                                        Căn hộ F11
                                    </a>
                                    <div className="time_remaining noti_03">
                                        Còn 29 ngày
                                    </div>
                                    <div className="date_money">
                                        <span className="item">
                                            <i className="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span className="item">
                                            <i className="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewPaymentNotice;