import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { ViewHorizontal, ViewVertical } from "../../index";

const ViewProjectDetail = (props) => {
    return (
        <>
            <div class="project_item__detail">
                <ViewHorizontal />
                <ViewVertical />
            </div>
            <div class="project_item__list ">
                <div class="table_original">
                    <table>
                        <thead>
                            <tr>
                                <th class="pl-0">STT</th>
                                <th>ĐỢT THANH TOÁN</th>
                                <th>NGÀY TRẢ</th>
                                <th>SỐ TIỀN (đồng)</th>
                                <th>TRẠNG THÁI</th>
                                <th class="text-center">
                                    <i class="fas fa-cog"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="parent">
                                <td colspan="3" class="name border-bottom-none color_6d30ab">
                                    Tiền đã trả
                                </td>
                                <td class="name border-bottom-none color_6d30ab">
                                    765.000.000
                                </td>
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    Tiền cọc
                                </td>
                                <td>
                                    10/04/2019
                                </td>
                                <td>
                                    100.000.000
                                </td>
                                <td>
                                    <div class="payment_status">
                                        <i class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                        <span class="payment_status_3">Trễ hẹn</span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="noti">
                                        <i class="icon bell fas fa-bell"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    Thanh toán đợt 1
                                </td>
                                <td>
                                    10/04/2019
                                </td>
                                <td>
                                    100.000.000
                                </td>
                                <td>
                                    <div class="payment_status">
                                        <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                        <span class="payment_status_1">Đã thanh toán</span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="noti">
                                        <i class="icon active bell fas fa-bell"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr class="last">
                                <td>3</td>
                                <td>
                                    Thanh toán đợt 1
                                </td>
                                <td>
                                    10/04/2019
                                </td>
                                <td>
                                    100.000.000
                                </td>
                                <td>
                                    <div class="payment_status">
                                        <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                        <span class="payment_status_4">Dừng</span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="noti">
                                        <i class="icon active bell fas fa-bell"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr class="parent">
                                <td colspan="3" class="name border-bottom-none">
                                    Tiền còn lại
                                </td>
                                <td class="name border-bottom-none">
                                    2.235.000.000
                                </td>
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>
                                    Tiền cọc
                                </td>
                                <td>
                                    10/04/2019
                                </td>
                                <td>
                                    100.000.000
                                </td>
                                <td>
                                    <div class="payment_status">
                                        <i class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                        <span class="payment_status_3">Trễ hẹn</span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="noti">
                                        <i class="icon bell fas fa-bell"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    Thanh toán đợt 1
                                </td>
                                <td>
                                    10/04/2019
                                </td>
                                <td>
                                    100.000.000
                                </td>
                                <td>
                                    <div class="payment_status">
                                        <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                        <span class="payment_status_1">Đã thanh toán</span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="noti">
                                        <i class="icon active bell fas fa-bell"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    Thanh toán đợt 1
                                </td>
                                <td>
                                    10/04/2019
                                </td>
                                <td>
                                    100.000.000
                                </td>
                                <td>
                                    <div class="payment_status null">
                                        <i class="icon type fas fa-question-circle"></i>
                                        <span class="text">Trạng thái</span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="noti">
                                        <i class="icon bell fas fa-bell"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}
export default ViewProjectDetail;