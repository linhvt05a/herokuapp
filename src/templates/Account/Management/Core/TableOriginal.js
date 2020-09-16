import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const TableOriginal = (props) => {
    return (
        <div className="table_original">
            <table>
                <thead>
                    <tr>
                        <th className="pl-0">STT</th>
                        <th>TẦNG</th>
                        <th>SẢN PHẨM</th>
                        <th>SỐ TIỀN (vnd)</th>
                        <th className="text-center">TỒNG ĐỢT TT</th>
                        <th className="text-center">
                            <i className="fas fa-cog"></i>
                        </th>
                    </tr>
                </thead>
                <tbody style={{ maxHeight: "300px" }}>
                    <tr className="parent">
                        <td colspan="3" className="name border-bottom-none">
                            Royal Garden
                        </td>
                        <td className="name border-bottom-none">
                            13.280.000.000
                        </td>
                        <td className="border-bottom-none"></td>
                        <td className="border-bottom-none"></td>
                    </tr>
                    <tr>
                        <td className="number">
                            1
                        </td>
                        <td colspan="5">
                            <div className="floor">
                                <span className="floor_name">B6</span>
                                <div className="floor_total">Tổng sản phẩm : 3</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="border-bottom-none"></td>
                        <td className="pl-0 align-middle">
                            <a href="#" className="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div className="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="payment_time">
                                15
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="noti">
                                <i
                                    className="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i className="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="border-bottom-none"></td>
                        <td className="pl-0 align-middle">
                            <a href="#" className="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div className="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="payment_time">
                                15
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="noti">
                                <i
                                    className="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i className="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="border-bottom-none"></td>
                        <td className="pl-0 align-middle">
                            <a href="#" className="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div className="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="payment_time">
                                15
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="noti">
                                <i
                                    className="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i className="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="number">
                            2
                        </td>
                        <td colspan="5">
                            <div className="floor">
                                <span className="floor_name">B6</span>
                                <div className="floor_total">Tổng sản phẩm : 3</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="border-bottom-none"></td>
                        <td className="pl-0 align-middle">
                            <a href="#" className="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div className="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="payment_time">
                                15
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="noti">
                                <i
                                    className="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i className="icon bell active fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="border-bottom-none"></td>
                        <td className="pl-0 align-middle">
                            <a href="#" className="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div className="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="payment_time">
                                15
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="noti">
                                <i
                                    className="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i className="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr className="last">
                        <td colspan="2" className="border-bottom-none"></td>
                        <td className="pl-0 align-middle">
                            <a href="#" className="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div className="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="payment_time">
                                15
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="noti">
                                <i
                                    className="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i className="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr className="parent">
                        <td colspan="3" className="name border-bottom-none">
                            Royal Garden
                        </td>
                        <td className="name border-bottom-none">
                            13.280.000.000
                        </td>
                        <td className="border-bottom-none"></td>
                        <td className="border-bottom-none"></td>
                    </tr>
                    <tr>
                        <td className="number">
                            1
                        </td>
                        <td colspan="5">
                            <div className="floor">
                                <span className="floor_name">B6</span>
                                <div className="floor_total">Tổng sản phẩm : 3</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="border-bottom-none"></td>
                        <td className="pl-0 align-middle">
                            <a href="#" className="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div className="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="payment_time">
                                15
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="noti">
                                <i
                                    className="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i className="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="border-bottom-none"></td>
                        <td className="pl-0 align-middle">
                            <a href="#" className="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div className="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="payment_time">
                                15
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="noti">
                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                <i className="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr className="last">
                        <td colspan="2" className="border-bottom-none"></td>
                        <td className="pl-0 align-middle">
                            <a href="#" className="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div className="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="payment_time">
                                15
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="noti">
                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                <i className="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default TableOriginal;