import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UserFilter, ViewPaymentNotice, ViewTotalMoney } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabPayment = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    return (
        <div class={`tab-pane fade ${activeTab === 3 ? "active show" : ""}`} id="tab_04" role="tabpanel" aria-labelledby="tab_04">
            <div class="row user-acc__payment">
                <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                    <UserFilter filterTab={3} />
                    <div class="project_item__list ">
                        <div class="table_original nowrap table-td-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="pl-0">STT</th>
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
                                        <td class="number">
                                            1
                                        </td>
                                        <td colspan="14">
                                            <div class="floor">
                                                <span class="floor_name">B6</span>
                                                <div class="floor_total">Tổng sản phẩm : 3</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="parent">
                                        <td colspan="15" class="name border-bottom-none">
                                            Royal Garden
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="number">
                                            2
                                        </td>
                                        <td colspan="14">
                                            <div class="floor">
                                                <span class="floor_name">B6</span>
                                                <div class="floor_total">Tổng sản phẩm : 3</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"></td>
                                        <td class="pl-0 align-middle">
                                            <a href="#" class="apartment_name">
                                                Căn hộ B6 - F01
                                            </a>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="number">
                                            2
                                        </td>
                                        <td colspan="14">
                                            <div class="floor">
                                                <span class="floor_name">B6</span>
                                                <div class="floor_total">Tổng sản phẩm : 3</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="last">
                                        <td colspan="2" class="border-bottom-none"></td>
                                        <td class="pl-0 align-middle">
                                            <a href="#" class="apartment_name">
                                                Căn hộ B6 - F02
                                            </a>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="payment_process">
                                                <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                                <div class="money">
                                                    120.000.000
                                                </div>
                                                <div class="date">( 10/01/2020 )</div>
                                                <div class="noted payment_status_4">Dừng đóng tiền</div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <ViewPaymentNotice /> 
                    <ViewTotalMoney />
                </div>
            </div>
        </div>
    )
}
export default TabPayment;