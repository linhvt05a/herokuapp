import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UploadAvatar, CardFile } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabPayment = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    return (
        <div class={`tab-pane fade ${activeTab === 3 ? "active show" : ""}`} id="tab_04" role="tabpanel" aria-labelledby="tab_04">
            <div class="row user-acc__payment">
                <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div class="user-acc__filter">
                        <div class="filter__left">
                            <div class="form-group">
                                <select class="form-control h-100 js-select2" name="" id="">
                                    <option value="1">Tất cả dự án</option>
                                    <option value="1">xxxx</option>
                                    <option value="1">xxxx</option>
                                    <option value="1">xxxx</option>
                                    <option value="1">xxxx</option>
                                    <option value="1">xxxx</option>
                                </select>
                                <a href="#" class="btn btn_green">
                                    LỌC
                                </a>
                            </div>
                        </div>
                        <div class="filter__right">
                            <a href="#" class="icon fas fa-calendar-alt"></a>
                        </div>
                    </div>
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
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <div class="payment-info mb-45">
                        <div class="payment-info__heading">
                            Thông báo thanh toán
                        </div>
                        <div class="payment-info__content">
                            <div class="payment-info__wrap">
                                <div class="payment-info__list">
                                    <div class="payment-info__name">Dự án Royal Garden</div>
                                    <div class="payment-info__detail">
                                        <div class="payment-info__aparment">
                                            <i class="noti noti_01 fas fa-bell"></i>
                                            <div class="content">
                                                <a href="#" class="name">
                                                    Căn hộ F11
                                                </a>
                                                <div class="time_remaining noti_01">
                                                    Còn 29 ngày
                                                </div>
                                                <div class="date_money">
                                                    <span class="item">
                                                        <i class="icon far fa-calendar-alt"></i>
                                                        10/05/2020
                                                    </span>
                                                    <span class="item">
                                                        <i class="icon fas fa-money-bill-wave"></i>
                                                        275.000.000 (đồng)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="payment-info__aparment">
                                            <i class="noti noti_02 fas fa-exclamation"></i>
                                            <div class="content">
                                                <a href="#" class="name">
                                                    Căn hộ F11
                                                </a>
                                                <div class="time_remaining noti_02">
                                                    Còn 29 ngày
                                                </div>
                                                <div class="date_money">
                                                    <span class="item">
                                                        <i class="icon far fa-calendar-alt"></i>
                                                        10/05/2020
                                                    </span>
                                                    <span class="item">
                                                        <i class="icon fas fa-money-bill-wave"></i>
                                                        275.000.000 (đồng)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="payment-info__aparment">
                                            <i class="noti noti_03 fas fa-exclamation-triangle"></i>
                                            <div class="content">
                                                <a href="#" class="name">
                                                    Căn hộ F11
                                                </a>
                                                <div class="time_remaining noti_03">
                                                    Còn 29 ngày
                                                </div>
                                                <div class="date_money">
                                                    <span class="item">
                                                        <i class="icon far fa-calendar-alt"></i>
                                                        10/05/2020
                                                    </span>
                                                    <span class="item">
                                                        <i class="icon fas fa-money-bill-wave"></i>
                                                        275.000.000 (đồng)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="payment-info__list">
                                    <div class="payment-info__name">Khu biệt thự Thảo Điền</div>
                                    <div class="payment-info__detail">
                                        <div class="payment-info__aparment">
                                            <i class="noti noti_01 fas fa-bell"></i>
                                            <div class="content">
                                                <a href="#" class="name">
                                                    Căn hộ F11
                                                </a>
                                                <div class="time_remaining noti_01">
                                                    Còn 29 ngày
                                                </div>
                                                <div class="date_money">
                                                    <span class="item">
                                                        <i class="icon far fa-calendar-alt"></i>
                                                        10/05/2020
                                                    </span>
                                                    <span class="item">
                                                        <i class="icon fas fa-money-bill-wave"></i>
                                                        275.000.000 (đồng)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="payment-info__aparment">
                                            <i class="noti noti_02 fas fa-exclamation"></i>
                                            <div class="content">
                                                <a href="#" class="name">
                                                    Căn hộ F11
                                                </a>
                                                <div class="time_remaining noti_02">
                                                    Còn 29 ngày
                                                </div>
                                                <div class="date_money">
                                                    <span class="item">
                                                        <i class="icon far fa-calendar-alt"></i>
                                                        10/05/2020
                                                    </span>
                                                    <span class="item">
                                                        <i class="icon fas fa-money-bill-wave"></i>
                                                        275.000.000 (đồng)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="payment-info__aparment">
                                            <i class="noti noti_03 fas fa-exclamation-triangle"></i>
                                            <div class="content">
                                                <a href="#" class="name">
                                                    Căn hộ F11
                                                </a>
                                                <div class="time_remaining noti_03">
                                                    Còn 29 ngày
                                                </div>
                                                <div class="date_money">
                                                    <span class="item">
                                                        <i class="icon far fa-calendar-alt"></i>
                                                        10/05/2020
                                                    </span>
                                                    <span class="item">
                                                        <i class="icon fas fa-money-bill-wave"></i>
                                                        275.000.000 (đồng)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="benefit">
                        <div class="benefit--employee">
                            <div class="heading">Tổng tiền : 3 tỷ đồng</div>
                            <ul class="list">
                                <li>
                                    <p class="icon">
                                        <i class="fas fa-money-bill-wave"></i>
                                    </p>
                                    <p class="text">
                                        <span>Số tiền mua</span>
                                        <span class="money_number">30.200.000.000 (đồng)
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p class="icon">
                                        <i class="fas fa-money-bill-wave"></i>
                                    </p>
                                    <p class="text">
                                        <span>Số tiền đã trả</span>
                                        <span class="money_number">18.500.000 (đồng)
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p class="icon">
                                        <i class="fas fa-money-bill-wave"></i>
                                    </p>
                                    <p class="text">
                                        <span>Số tiền còn lại</span>
                                        <span class="money_number">11.700.000.000 (đồng)
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TabPayment;