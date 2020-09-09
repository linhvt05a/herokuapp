import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { ViewHorizontal, ViewVertical } from "../../index";

const ViewPaymentNotice = (props) => {
    return (
        <div class="payment-info mb-45">
            <div class="payment-info__heading">
                Thông báo thanh toán
            </div>
            <div class="payment-info__content">
                <div class="payment-info__wrap">
                    <div class="payment-info__list">
                        <div class="payment-info__name">Dự án Royal Garden</div>
                        <div class="payment-info__detail">
                            <div class="payment-info__aparment">
                                <i class="noti noti_01 fas fa-bell"></i>
                                <div class="content">
                                    <a href="#" class="name">
                                        Căn hộ F11
                                    </a>
                                    <div class="time_remaining noti_01">
                                        Còn 29 ngày
                                    </div>
                                    <div class="date_money">
                                        <span class="item">
                                            <i class="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span class="item">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="payment-info__aparment">
                                <i class="noti noti_02 fas fa-exclamation"></i>
                                <div class="content">
                                    <a href="#" class="name">
                                        Căn hộ F11
                                    </a>
                                    <div class="time_remaining noti_02">
                                        Còn 29 ngày
                                    </div>
                                    <div class="date_money">
                                        <span class="item">
                                            <i class="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span class="item">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="payment-info__aparment">
                                <i class="noti noti_03 fas fa-exclamation-triangle"></i>
                                <div class="content">
                                    <a href="#" class="name">
                                        Căn hộ F11
                                    </a>
                                    <div class="time_remaining noti_03">
                                        Còn 29 ngày
                                    </div>
                                    <div class="date_money">
                                        <span class="item">
                                            <i class="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span class="item">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="payment-info__list">
                        <div class="payment-info__name">Khu biệt thự Thảo Điền</div>
                        <div class="payment-info__detail">
                            <div class="payment-info__aparment">
                                <i class="noti noti_01 fas fa-bell"></i>
                                <div class="content">
                                    <a href="#" class="name">
                                        Căn hộ F11
                                    </a>
                                    <div class="time_remaining noti_01">
                                        Còn 29 ngày
                                    </div>
                                    <div class="date_money">
                                        <span class="item">
                                            <i class="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span class="item">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="payment-info__aparment">
                                <i class="noti noti_02 fas fa-exclamation"></i>
                                <div class="content">
                                    <a href="#" class="name">
                                        Căn hộ F11
                                    </a>
                                    <div class="time_remaining noti_02">
                                        Còn 29 ngày
                                    </div>
                                    <div class="date_money">
                                        <span class="item">
                                            <i class="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span class="item">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            275.000.000 (đồng)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="payment-info__aparment">
                                <i class="noti noti_03 fas fa-exclamation-triangle"></i>
                                <div class="content">
                                    <a href="#" class="name">
                                        Căn hộ F11
                                    </a>
                                    <div class="time_remaining noti_03">
                                        Còn 29 ngày
                                    </div>
                                    <div class="date_money">
                                        <span class="item">
                                            <i class="icon far fa-calendar-alt"></i>
                                            10/05/2020
                                        </span>
                                        <span class="item">
                                            <i class="icon fas fa-money-bill-wave"></i>
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