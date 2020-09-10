import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const ViewPaymentInfor = (props) => {
    return (
        <div class="payment-info  mb-45">
            <div class="payment-info__heading">
                Thông báo đơn hàng
            </div>
            <div class="payment-info__content">
                <div class="payment-info__wrap">
                    <div class="order_notice__item">
                        <i class="order_notice__icon fas fa-bell"></i>
                        <div class="order_notice__content">
                            <div class="order_notice__name">Căn hộ B6 - F01,...</div>
                            <div class="order_notice__code">Mã đơn : <span class="code">000011419</span>
                            </div>
                            <div class="order_notice__noted">Bạn đã đặt cọc thành công, chúng tôi sẽ
                                duyệt hồ sơ sớm nhất</div>
                        </div>
                    </div>
                    <div class="order_notice__item">
                        <i class="order_notice__icon fas fa-bell"></i>
                        <div class="order_notice__content">
                            <div class="order_notice__name">Căn hộ B6 - F01,...</div>
                            <div class="order_notice__code">Mã đơn : <span class="code">000011419</span>
                            </div>
                            <div class="order_notice__noted">Bạn đã đặt cọc thành công, chúng tôi sẽ
                                duyệt hồ sơ sớm nhất</div>
                        </div>
                    </div>
                    <div class="order_notice__item">
                        <i class="order_notice__icon fas fa-bell"></i>
                        <div class="order_notice__content">
                            <div class="order_notice__name">Căn hộ B6 - F01,...</div>
                            <div class="order_notice__code">Mã đơn : <span class="code">000011419</span>
                            </div>
                            <div class="order_notice__noted">Bạn đã đặt cọc thành công, chúng tôi sẽ
                                duyệt hồ sơ sớm nhất</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewPaymentInfor;