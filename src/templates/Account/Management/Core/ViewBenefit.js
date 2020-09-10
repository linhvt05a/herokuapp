import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const ViewBenefit = (props) => {
    return (
        <div class="benefit">
            <div class="benefit--employee">
                <div class="heading">Liên hệ với chúng tôi </div>
                <ul class="list">
                    <li class="align-items-start">
                        <p class="icon mt-2">
                            <i class="fas fa-phone-alt"></i>
                        </p>
                        <p class="text">
                            <span>Số điện thoại </span>
                            <span class="money_number">0909 123 456</span>
                        </p>
                    </li>
                    <li class="align-items-start">
                        <p class="icon mt-2">
                            <i class="fas fa-envelope"></i>
                        </p>
                        <p class="text">
                            <span>Email liên hệ </span>
                            <span class="money_number">minerva@gmail.com </span>
                        </p>
                    </li>
                    <li class="align-items-start">
                        <p class="icon mt-2">
                            <i class="fas fa-map-marker-alt"></i>
                        </p>
                        <p class="text">
                            <span>Địa chỉ trụ sở</span>
                            <span class="money_number">119 Pastuer, Phường 6, Quận 3, Tp. Hồ Chí
                                Minh</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ViewBenefit;