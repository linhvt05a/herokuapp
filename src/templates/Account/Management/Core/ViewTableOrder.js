import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";

const ViewTableOrder = (props) => {
    return (
        <div class="table_original table-order">
            <div class="table_content">
                <table>
                    <thead>
                        <tr>
                            <th class="pl-0">STT</th>
                            <th >SẢN PHẨM</th>
                            <th class="text-center">GIÁ NIÊM YẾT</th>
                            <th class="text-center">GIẢM GIÁ</th>
                            <th class="text-right">TIỀN TẠM TÍNH</th>
                        </tr>
                    </thead>
                    <tbody style={{maxHeight: "300px"}}>
                        <tr class="parent">
                            <td colspan="3" class="name border-bottom-none">
                                Dự án Royal Garden
                            </td>
                            <td class="border-bottom-none"></td>
                            <td class="border-bottom-none"></td>
                        </tr>
                        <tr>
                            <td style={{width: "5%"}} class="pd-left-0 color_656565">1</td>
                            <td style={{width: "32%"}}>
                                <div class="apartment-info-table">
                                    <img class="img-fluid" src={IMAGE_URL + "/images/news_card_2.jpg"} alt="livingroom"/>
                                    <div class="info">
                                        <span class="fw-bold">Căn hộ B6 - F01</span>
                                        <div class="details">
                                            <div>
                                                <p class="child mb-0 icon-description">
                                                    <i class="icon far fa-object-ungroup"></i>
                                                    <span class="text">80</span>
                                                </p>
                                                <p class="child mb-0 icon-description">
                                                    <i class="icon fas fa-bed"></i>
                                                    <span class="text">
                                                        2
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <p class="child mb-0 icon-description">
                                                    <i class="icon fas fa-compass"></i>
                                                    <span class="text">
                                                        ĐB
                                                    </span>
                                                </p>
                                                <p class="child mb-0 icon-description">
                                                    <i class="icon fas fa-restroom"></i>
                                                    <span class="text">
                                                        2
                                                    </span>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td style={{width: "22%"}}  class="text-center">
                                1.333.677.000
                            </td>
                            <td style={{width: "19%"}}   class="text-center">
                                <div class="sale-off-txt text_51c471 text-center">
                                    66.683.850
                                </div>
                                <div class="sale-off-link text-center">
                                    <a class="color_656565" href="#">Chi tiết</a>
                                </div>
                                <div class="sale-off-icon text-center ">
                                    <i class="fas fa-gift color_e9c301"></i>
                                </div>
                            </td>
                            <td style={{width: "22%"}} class="text-right">
                                <span class="text_e94c4c">1.266.993.150</span>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "5%"}} class="pd-left-0 color_656565">2</td>
                            <td style={{width: "32%"}}>
                                <div class="apartment-info-table">
                                    <img class="img-fluid" src={IMAGE_URL + "/images/news_card_2.jpg"}alt="livingroom"/>
                                    <div class="info">
                                        <span class="fw-bold">Căn hộ B6 - F01</span>
                                        <div class="details">
                                            <div>
                                                <p class="child mb-0 icon-description">
                                                    <i class="icon far fa-object-ungroup"></i>
                                                    <span class="text">80</span>
                                                </p>
                                                <p class="child mb-0 icon-description">
                                                    <i class="icon fas fa-bed"></i>
                                                    <span class="text">
                                                        2
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <p class="child mb-0 icon-description">
                                                    <i class="icon fas fa-compass"></i>
                                                    <span class="text">
                                                        ĐB
                                                    </span>
                                                </p>
                                                <p class="child mb-0 icon-description">
                                                    <i class="icon fas fa-restroom"></i>
                                                    <span class="text">
                                                        2
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td style={{width: "22%"}} class="text-center">
                                1.333.677.000
                            </td>
                            <td style={{width: "19%"}} class="text-center">
                                <div class="sale-off-txt text_51c471 text-center">
                                    66.683.850
                                </div>
                                <div class="sale-off-link text-center">
                                    <a class="color_656565" href="#">Chi tiết</a>
                                </div>
                                <div class="sale-off-icon text-center ">
                                    <i class="fas fa-gift color_e9c301"></i>
                                </div>
                            </td>
                            <td style={{width: "22%"}} class="text-right">
                                <span class="text_e94c4c">1.266.993.150</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-order-bottom">
                <table  class="bg-purple">
                    <thead>
                        <tr>
                            <td style={{width: "37%"}} colspan="2" class="total-bg">
                                <div class="total-text">TỔNG CỘNG</div>
                            </td>
                            <td style={{width: "22%"}}>
                                <div class="fw-bold money-color-black">10.460.091.972</div>
                            </td>
                            <td style={{width: "19%"}}>
                                <div class="fw-bold text_51c471">10.460.091.972</div>
                            </td>
                            <td style={{width: "22%"}}>
                                <div class="fw-bold color_e94c4c ">10.460.091.972</div>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default ViewTableOrder;