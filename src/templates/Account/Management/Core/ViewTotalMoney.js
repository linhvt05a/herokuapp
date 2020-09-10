import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { ViewHorizontal, ViewVertical } from "../../index";

const ViewPaymentNotice = (props) => {
    return (
        <div class="benefit mb-45">
            <div class="benefit--employee">
                <div class="heading">Tổng tiền : 7.2 tỷ đồng</div>
                <ul class="list">
                    <li>
                        <p class="icon">
                            <span class="number">1</span>
                        </p>
                        <p class="text">
                            <span class="name">Căn hộ F01</span>
                            <span>Giá tiền : 3.000.000 (đồng)</span>
                            <span>Tiền đã trả : 1.500.000 (đồng)</span>
                        </p>
                    </li>
                    <li>
                        <p class="icon">
                            <span class="number">2</span>
                        </p>
                        <p class="text">
                            <span class="name">Căn hộ F01</span>
                            <span>Giá tiền : 3.000.000 (đồng)</span>
                            <span>Tiền đã trả : 1.500.000 (đồng)</span>
                        </p>
                    </li>
                    <li>
                        <p class="icon">
                            <span class="number">3</span>
                        </p>
                        <p class="text">
                            <span class="name">Căn hộ F01</span>
                            <span>Giá tiền : 3.000.000 (đồng)</span>
                            <span>Tiền đã trả : 1.500.000 (đồng)</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ViewPaymentNotice;