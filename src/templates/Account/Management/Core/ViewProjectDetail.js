import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { ViewHorizontal, ViewVertical } from "../../index";

const ViewProjectDetail = (props) => {
    return (
        <>
            <div className="project_item__detail">
                <ViewHorizontal />
                <ViewVertical />
            </div>
            <div className="project_item__list ">
                <div className="table_original">
                    <table>
                        <thead>
                            <tr>
                                <th className="pl-0">STT</th>
                                <th>ĐỢT THANH TOÁN</th>
                                <th>NGÀY TRẢ</th>
                                <th>SỐ TIỀN (đồng)</th>
                                <th>TRẠNG THÁI</th>
                                <th className="text-center">
                                    <i className="fas fa-cog"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="parent">
                                <td colspan="3" className="name border-bottom-none color_6d30ab">
                                    Tiền đã trả
                                </td>
                                <td className="name border-bottom-none color_6d30ab">
                                    765.000.000
                                </td>
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
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
                                    <div className="payment_status">
                                        <i className="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                        <span className="payment_status_3">Trễ hẹn</span>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="noti">
                                        <i className="icon bell fas fa-bell"></i>
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
                                    <div className="payment_status">
                                        <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                        <span className="payment_status_1">Đã thanh toán</span>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="noti">
                                        <i className="icon active bell fas fa-bell"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr className="last">
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
                                    <div className="payment_status">
                                        <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                        <span className="payment_status_4">Dừng</span>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="noti">
                                        <i className="icon active bell fas fa-bell"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr className="parent">
                                <td colspan="3" className="name border-bottom-none">
                                    Tiền còn lại
                                </td>
                                <td className="name border-bottom-none">
                                    2.235.000.000
                                </td>
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
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
                                    <div className="payment_status">
                                        <i className="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                        <span className="payment_status_3">Trễ hẹn</span>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="noti">
                                        <i className="icon bell fas fa-bell"></i>
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
                                    <div className="payment_status">
                                        <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                        <span className="payment_status_1">Đã thanh toán</span>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="noti">
                                        <i className="icon active bell fas fa-bell"></i>
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
                                    <div className="payment_status null">
                                        <i className="icon type fas fa-question-circle"></i>
                                        <span className="text">Trạng thái</span>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="noti">
                                        <i className="icon bell fas fa-bell"></i>
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