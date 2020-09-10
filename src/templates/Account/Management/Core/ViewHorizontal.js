import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const ViewHorizontal = (props) => {
    return (
        <div class="view_horizontal">
            <div class="item">
                <i class="icon fas fa-building"></i>
                <div class="text">
                    <span class="text-uppercase">
                        MÃ ĐƠN HÀNG
                    </span>
                    <span class="value">000011419</span>
                </div>
            </div>
            <div class="item">
                <i class="icon fas fa-money-bill-wave"></i>
                <div class="text">
                    <span class="text-uppercase">
                        SỐ TIỀN CỌC (đồng)
                    </span>
                    <span class="value money">50.000.000</span>
                </div>
            </div>
            <div class="item">
                <i class="icon fas fa-boxes"></i>
                <div class="text">
                    <span class="text-uppercase">
                        TRẠNG THÁI
                    </span>
                    <span class="value times waiting">Chờ duyệt</span>
                </div>
            </div>
        </div>
    )
}
export default ViewHorizontal;