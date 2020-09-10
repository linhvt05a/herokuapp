import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";

const ViewTableOrder = (props) => {
    return (
        <div className="table_original table-order">
            <div className="table_content">
                <table>
                    <thead>
                        <tr>
                            <th className="pl-0">STT</th>
                            <th >SẢN PHẨM</th>
                            <th className="text-center">GIÁ NIÊM YẾT</th>
                            <th className="text-center">GIẢM GIÁ</th>
                            <th className="text-right">TIỀN TẠM TÍNH</th>
                        </tr>
                    </thead>
                    <tbody style={{maxHeight: "300px"}}>
                        <tr className="parent">
                            <td colspan="3" className="name border-bottom-none">
                                Dự án Royal Garden
                            </td>
                            <td className="border-bottom-none"></td>
                            <td className="border-bottom-none"></td>
                        </tr>
                        <tr>
                            <td style={{width: "5%"}} className="pd-left-0 color_656565">1</td>
                            <td style={{width: "32%"}}>
                                <div className="apartment-info-table">
                                    <img className="img-fluid" src={IMAGE_URL + "/images/news_card_2.jpg"} alt="livingroom"/>
                                    <div className="info">
                                        <span className="fw-bold">Căn hộ B6 - F01</span>
                                        <div className="details">
                                            <div>
                                                <p className="child mb-0 icon-description">
                                                    <i className="icon far fa-object-ungroup"></i>
                                                    <span className="text">80</span>
                                                </p>
                                                <p className="child mb-0 icon-description">
                                                    <i className="icon fas fa-bed"></i>
                                                    <span className="text">
                                                        2
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <p className="child mb-0 icon-description">
                                                    <i className="icon fas fa-compass"></i>
                                                    <span className="text">
                                                        ĐB
                                                    </span>
                                                </p>
                                                <p className="child mb-0 icon-description">
                                                    <i className="icon fas fa-restroom"></i>
                                                    <span className="text">
                                                        2
                                                    </span>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td style={{width: "22%"}}  className="text-center">
                                1.333.677.000
                            </td>
                            <td style={{width: "19%"}}   className="text-center">
                                <div className="sale-off-txt text_51c471 text-center">
                                    66.683.850
                                </div>
                                <div className="sale-off-link text-center">
                                    <a className="color_656565" href="#">Chi tiết</a>
                                </div>
                                <div className="sale-off-icon text-center ">
                                    <i className="fas fa-gift color_e9c301"></i>
                                </div>
                            </td>
                            <td style={{width: "22%"}} className="text-right">
                                <span className="text_e94c4c">1.266.993.150</span>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "5%"}} className="pd-left-0 color_656565">2</td>
                            <td style={{width: "32%"}}>
                                <div className="apartment-info-table">
                                    <img className="img-fluid" src={IMAGE_URL + "/images/news_card_2.jpg"}alt="livingroom"/>
                                    <div className="info">
                                        <span className="fw-bold">Căn hộ B6 - F01</span>
                                        <div className="details">
                                            <div>
                                                <p className="child mb-0 icon-description">
                                                    <i className="icon far fa-object-ungroup"></i>
                                                    <span className="text">80</span>
                                                </p>
                                                <p className="child mb-0 icon-description">
                                                    <i className="icon fas fa-bed"></i>
                                                    <span className="text">
                                                        2
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <p className="child mb-0 icon-description">
                                                    <i className="icon fas fa-compass"></i>
                                                    <span className="text">
                                                        ĐB
                                                    </span>
                                                </p>
                                                <p className="child mb-0 icon-description">
                                                    <i className="icon fas fa-restroom"></i>
                                                    <span className="text">
                                                        2
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td style={{width: "22%"}} className="text-center">
                                1.333.677.000
                            </td>
                            <td style={{width: "19%"}} className="text-center">
                                <div className="sale-off-txt text_51c471 text-center">
                                    66.683.850
                                </div>
                                <div className="sale-off-link text-center">
                                    <a className="color_656565" href="#">Chi tiết</a>
                                </div>
                                <div className="sale-off-icon text-center ">
                                    <i className="fas fa-gift color_e9c301"></i>
                                </div>
                            </td>
                            <td style={{width: "22%"}} className="text-right">
                                <span className="text_e94c4c">1.266.993.150</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-order-bottom">
                <table  className="bg-purple">
                    <thead>
                        <tr>
                            <td style={{width: "37%"}} colspan="2" className="total-bg">
                                <div className="total-text">TỔNG CỘNG</div>
                            </td>
                            <td style={{width: "22%"}}>
                                <div className="fw-bold money-color-black">10.460.091.972</div>
                            </td>
                            <td style={{width: "19%"}}>
                                <div className="fw-bold text_51c471">10.460.091.972</div>
                            </td>
                            <td style={{width: "22%"}}>
                                <div className="fw-bold color_e94c4c ">10.460.091.972</div>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default ViewTableOrder;