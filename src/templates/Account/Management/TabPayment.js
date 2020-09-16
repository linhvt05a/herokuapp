import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UserFilter, ViewPaymentNotice, ViewTotalMoney } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabPayment = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    return (
        <div className={`tab-pane fade ${activeTab === 3 ? "active show" : ""}`} id="tab_04" role="tabpanel" aria-labelledby="tab_04">
            <div className="row user-acc__payment">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    <UserFilter filterTab={3} />
                    <div className="project_item__list ">
                        <div className="table_original nowrap table-td-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="pl-0">STT</th>
                                        <th>TẦNG</th>
                                        <th style={{ width: "120px" }}>SẢN PHẨM</th>
                                        <th>THÁNG 1</th>
                                        <th>THÁNG 2</th>
                                        <th>THÁNG 3</th>
                                        <th>THÁNG 4</th>
                                        <th>THÁNG 5</th>
                                        <th>THÁNG 6</th>
                                        <th>THÁNG 7</th>
                                        <th>THÁNG 8</th>
                                        <th>THÁNG 9</th>
                                        <th>THÁNG 10</th>
                                        <th>THÁNG 11</th>
                                        <th>THÁNG 12</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="number">
                                            1
                                        </td>
                                        <td colspan="14">
                                            <div className="floor">
                                                <span className="floor_name">B6</span>
                                                <div className="floor_total">Tổng sản phẩm : 3</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="parent">
                                        <td colspan="15" className="name border-bottom-none">
                                            Royal Garden
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                            2
                                        </td>
                                        <td colspan="14">
                                            <div className="floor">
                                                <span className="floor_name">B6</span>
                                                <div className="floor_total">Tổng sản phẩm : 3</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"></td>
                                        <td className="pl-0 align-middle">
                                            <a href="#" className="apartment_name">
                                                Căn hộ B6 - F01
                                            </a>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                            2
                                        </td>
                                        <td colspan="14">
                                            <div className="floor">
                                                <span className="floor_name">B6</span>
                                                <div className="floor_total">Tổng sản phẩm : 3</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="last">
                                        <td colspan="2" className="border-bottom-none"></td>
                                        <td className="pl-0 align-middle">
                                            <a href="#" className="apartment_name">
                                                Căn hộ B6 - F02
                                            </a>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="payment_process">
                                                <i className="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div className="money">
                                                    120.000.000
                                                </div>
                                                <div className="date">( 10/01/2020 )</div>
                                                <div className="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                    <ViewPaymentNotice />
                    <ViewTotalMoney />
                </div>
            </div>
        </div>
    )
}
export default TabPayment;