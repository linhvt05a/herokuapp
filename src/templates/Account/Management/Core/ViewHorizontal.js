import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const ViewHorizontal = (props) => {
    return (
        <div className="view_horizontal">
            <div className="item">
                <i className="icon fas fa-building"></i>
                <div className="text">
                    <span className="text-uppercase">
                        MÃ ĐƠN HÀNG
                    </span>
                    <span className="value">000011419</span>
                </div>
            </div>
            <div className="item">
                <i className="icon fas fa-money-bill-wave"></i>
                <div className="text">
                    <span className="text-uppercase">
                        SỐ TIỀN CỌC (đồng)
                    </span>
                    <span className="value money">50.000.000</span>
                </div>
            </div>
            <div className="item">
                <i className="icon fas fa-boxes"></i>
                <div className="text">
                    <span className="text-uppercase">
                        TRẠNG THÁI
                    </span>
                    <span className="value times waiting">Chờ duyệt</span>
                </div>
            </div>
        </div>
    )
}
export default ViewHorizontal;