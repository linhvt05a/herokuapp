import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const TableOriginal = (props) => {
    return (
        <div class="table_original">
            <table>
                <thead>
                    <tr>
                        <th class="pl-0">STT</th>
                        <th>TẦNG</th>
                        <th>SẢN PHẨM</th>
                        <th>SỐ TIỀN (vnd)</th>
                        <th class="text-center">TỒNG ĐỢT TT</th>
                        <th class="text-center">
                            <i class="fas fa-cog"></i>
                        </th>
                    </tr>
                </thead>
                <tbody style={{maxHeight: "300px"}}>
                    <tr class="parent">
                        <td colspan="3" class="name border-bottom-none">
                            Royal Garden
                        </td>
                        <td class="name border-bottom-none">
                            13.280.000.000
                        </td>
                        <td class="border-bottom-none"></td>
                        <td class="border-bottom-none"></td>
                    </tr>
                    <tr>
                        <td class="number">
                            1
                        </td>
                        <td colspan="5">
                            <div class="floor">
                                <span class="floor_name">B6</span>
                                <div class="floor_total">Tổng sản phẩm : 3</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="border-bottom-none"></td>
                        <td class="pl-0 align-middle">
                            <a href="#" class="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div class="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="payment_time">
                                15
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="noti">
                                <i
                                    class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i class="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="border-bottom-none"></td>
                        <td class="pl-0 align-middle">
                            <a href="#" class="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div class="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="payment_time">
                                15
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="noti">
                                <i
                                    class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i class="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="border-bottom-none"></td>
                        <td class="pl-0 align-middle">
                            <a href="#" class="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div class="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="payment_time">
                                15
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="noti">
                                <i
                                    class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i class="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="number">
                            2
                        </td>
                        <td colspan="5">
                            <div class="floor">
                                <span class="floor_name">B6</span>
                                <div class="floor_total">Tổng sản phẩm : 3</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="border-bottom-none"></td>
                        <td class="pl-0 align-middle">
                            <a href="#" class="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div class="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="payment_time">
                                15
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="noti">
                                <i
                                    class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i class="icon bell active fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="border-bottom-none"></td>
                        <td class="pl-0 align-middle">
                            <a href="#" class="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div class="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="payment_time">
                                15
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="noti">
                                <i
                                    class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i class="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr class="last">
                        <td colspan="2" class="border-bottom-none"></td>
                        <td class="pl-0 align-middle">
                            <a href="#" class="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div class="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="payment_time">
                                15
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="noti">
                                <i
                                    class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i class="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr class="parent">
                        <td colspan="3" class="name border-bottom-none">
                            Royal Garden
                        </td>
                        <td class="name border-bottom-none">
                            13.280.000.000
                        </td>
                        <td class="border-bottom-none"></td>
                        <td class="border-bottom-none"></td>
                    </tr>
                    <tr>
                        <td class="number">
                            1
                        </td>
                        <td colspan="5">
                            <div class="floor">
                                <span class="floor_name">B6</span>
                                <div class="floor_total">Tổng sản phẩm : 3</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="border-bottom-none"></td>
                        <td class="pl-0 align-middle">
                            <a href="#" class="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div class="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="payment_time">
                                15
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="noti">
                                <i
                                    class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                <i class="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="border-bottom-none"></td>
                        <td class="pl-0 align-middle">
                            <a href="#" class="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div class="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="payment_time">
                                15
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="noti">
                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                <i class="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                    <tr class="last">
                        <td colspan="2" class="border-bottom-none"></td>
                        <td class="pl-0 align-middle">
                            <a href="#" class="apartment_name">
                                Căn hộ B6 - F01
                            </a>
                        </td>
                        <td>
                            <div class="apartment_price">
                                3.000.000.000
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="payment_time">
                                15
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="noti">
                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                <i class="icon bell fas fa-bell"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default TableOriginal;