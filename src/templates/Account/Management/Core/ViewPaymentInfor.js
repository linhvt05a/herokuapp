import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const ViewPaymentInfor = (props) => {
    return (
        <div className="payment-info  mb-45">
            <div className="payment-info__heading">
                Thông báo đơn hàng
            </div>
            <div className="payment-info__content">
                <div className="payment-info__wrap">
                    <div className="order_notice__item">
                        <i className="order_notice__icon fas fa-bell"></i>
                        <div className="order_notice__content">
                            <div className="order_notice__name">Căn hộ B6 - F01,...</div>
                            <div className="order_notice__code">Mã đơn : <span className="code">000011419</span>
                            </div>
                            <div className="order_notice__noted">Bạn đã đặt cọc thành công, chúng tôi sẽ
                                duyệt hồ sơ sớm nhất</div>
                        </div>
                    </div>
                    <div className="order_notice__item">
                        <i className="order_notice__icon fas fa-bell"></i>
                        <div className="order_notice__content">
                            <div className="order_notice__name">Căn hộ B6 - F01,...</div>
                            <div className="order_notice__code">Mã đơn : <span className="code">000011419</span>
                            </div>
                            <div className="order_notice__noted">Bạn đã đặt cọc thành công, chúng tôi sẽ
                                duyệt hồ sơ sớm nhất</div>
                        </div>
                    </div>
                    <div className="order_notice__item">
                        <i className="order_notice__icon fas fa-bell"></i>
                        <div className="order_notice__content">
                            <div className="order_notice__name">Căn hộ B6 - F01,...</div>
                            <div className="order_notice__code">Mã đơn : <span className="code">000011419</span>
                            </div>
                            <div className="order_notice__noted">Bạn đã đặt cọc thành công, chúng tôi sẽ
                                duyệt hồ sơ sớm nhất</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewPaymentInfor;