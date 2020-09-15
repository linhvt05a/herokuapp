import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { Input, Select } from 'antd';

const TableFilter = (props) => {
    let { filterTab, onOrderDetail } = props;
    return (
        <div className="project_item__list ">
            <div className="table_original nowrap table-td-top">
                <table>
                    <thead>
                        <tr>
                            <th className="pl-0">STT</th>
                            <th className="text-uppercase">MÃ ĐƠN</th>
                            <th className="text-uppercase">NGÀY MUA</th>
                            <th className="text-uppercase">SẢN PHẨM</th>
                            <th>
                                <span className="text-uppercase">SỐ TIỀN</span>
                                <span className="unit">(đồng)</span>
                            </th>
                            <th className="text-uppercase">TRẠNG THÁI</th>
                            <th className="text-center">
                                <i className="icon fas fa-cog"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pl-0">1</td>
                            <td>
                                <a onClick={onOrderDetail} className="link">000011419</a>
                            </td>
                            <td>
                                <span className="color_656565">27/02/2020</span>
                            </td>
                            <td>
                                Căn hộ B6 - F01,...
                            </td>
                            <td className="text-right">
                                <span className="color_656565">50.000.000</span>
                            </td>
                            <td>
                                <div className="order_status_01">
                                    <i className="icon fas fa-question-circle"></i>
                                    <span className="text">Chờ duyệt</span>
                                </div>
                            </td>
                            <td className="text-right">
                                <div className="noti">
                                    <i className="icon bell active fas fa-bell"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="pl-0">1</td>
                            <td>
                                <a onClick={onOrderDetail} className="link">000011419</a>
                            </td>
                            <td>
                                <span className="color_656565">27/02/2020</span>
                            </td>
                            <td>
                                Căn hộ B6 - F01,...
                            </td>
                            <td className="text-right">
                                <span className="color_656565">50.000.000</span>
                            </td>
                            <td>
                                <div className="order_status_02">
                                    <i className="icon fas fa-check-circle"></i>
                                    <span className="text">Đã duyệt</span>
                                </div>
                            </td>
                            <td className="text-right">
                                <div className="noti_list">
                                    <div className="noti">
                                        <i className="icon comment fas fa-comment-dots"></i>
                                    </div>
                                    <div className="noti">
                                        <i className="icon bell active fas fa-bell"></i>
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