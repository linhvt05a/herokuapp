import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { Input, Select } from 'antd';

const TableFilter = (props) => {
    let { filterTab } = props;
    return (
        <div class="project_item__list ">
            <div class="table_original nowrap table-td-top">
                <table>
                    <thead>
                        <tr>
                            <th class="pl-0">STT</th>
                            <th class="text-uppercase">MÃ ĐƠN</th>
                            <th class="text-uppercase">NGÀY MUA</th>
                            <th class="text-uppercase">SẢN PHẨM</th>
                            <th>
                                <span class="text-uppercase">SỐ TIỀN</span> 
                                <span class="unit">(đồng)</span>
                            </th>
                            <th class="text-uppercase">TRẠNG THÁI</th>
                            <th class="text-center">
                                <i class="icon fas fa-cog"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pl-0">1</td>
                            <td>
                                <a href="#" class="link">000011419</a>
                            </td>
                            <td>
                                <span class="color_656565">27/02/2020</span>
                            </td>
                            <td>
                                Căn hộ B6 - F01,...
                            </td>
                            <td class="text-right">
                                <span class="color_656565">50.000.000</span>
                            </td>
                            <td>
                                <div class="order_status_01">
                                    <i class="icon fas fa-question-circle"></i>
                                    <span class="text">Chờ duyệt</span>
                                </div>
                            </td>
                            <td class="text-right">
                                <div class="noti">
                                    <i class="icon bell active fas fa-bell"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-0">1</td>
                            <td>
                                <a href="#" class="link">000011419</a>
                            </td>
                            <td>
                                <span class="color_656565">27/02/2020</span>
                            </td>
                            <td>
                                Căn hộ B6 - F01,...
                            </td>
                            <td class="text-right">
                                <span class="color_656565">50.000.000</span>
                            </td>
                            <td>
                                <div class="order_status_02">
                                    <i class="icon fas fa-check-circle"></i>
                                    <span class="text">Đã duyệt</span>
                                </div>
                            </td>
                            <td class="text-right">
                                <div class="noti_list">
                                    <div class="noti">
                                        <i class="icon comment fas fa-comment-dots"></i>
                                    </div>
                                    <div class="noti">
                                        <i class="icon bell active fas fa-bell"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TableFilter;