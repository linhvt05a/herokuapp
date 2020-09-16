import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const ViewBenefit = (props) => {
    return (
        <div className="benefit">
            <div className="benefit--employee">
                <div className="heading">Liên hệ với chúng tôi </div>
                <ul className="list">
                    <li className="align-items-start">
                        <p className="icon mt-2">
                            <i className="fas fa-phone-alt"></i>
                        </p>
                        <p className="text">
                            <span>Số điện thoại </span>
                            <span className="money_number">0909 123 456</span>
                        </p>
                    </li>
                    <li className="align-items-start">
                        <p className="icon mt-2">
                            <i className="fas fa-envelope"></i>
                        </p>
                        <p className="text">
                            <span>Email liên hệ </span>
                            <span className="money_number">minerva@gmail.com </span>
                        </p>
                    </li>
                    <li className="align-items-start">
                        <p className="icon mt-2">
                            <i className="fas fa-map-marker-alt"></i>
                        </p>
                        <p className="text">
                            <span>Địa chỉ trụ sở</span>
                            <span className="money_number">119 Pastuer, Phường 6, Quận 3, Tp. Hồ Chí
                                Minh</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ViewBenefit;