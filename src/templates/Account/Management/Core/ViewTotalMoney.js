import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const ViewPaymentNotice = (props) => {
    return (
        <div className="benefit mb-45">
            <div className="benefit--employee">
                <div className="heading">Tổng tiền : 7.2 tỷ đồng</div>
                <ul className="list">
                    <li>
                        <p className="icon">
                            <span className="number">1</span>
                        </p>
                        <p className="text">
                            <span className="name">Căn hộ F01</span>
                            <span>Giá tiền : 3.000.000 (đồng)</span>
                            <span>Tiền đã trả : 1.500.000 (đồng)</span>
                        </p>
                    </li>
                    <li>
                        <p className="icon">
                            <span className="number">2</span>
                        </p>
                        <p className="text">
                            <span className="name">Căn hộ F01</span>
                            <span>Giá tiền : 3.000.000 (đồng)</span>
                            <span>Tiền đã trả : 1.500.000 (đồng)</span>
                        </p>
                    </li>
                    <li>
                        <p className="icon">
                            <span className="number">3</span>
                        </p>
                        <p className="text">
                            <span className="name">Căn hộ F01</span>
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