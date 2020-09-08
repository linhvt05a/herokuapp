import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UploadAvatar, CardFile } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabJoinProject = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    return (
        <div class={`tab-pane fade ${activeTab === 2 ? "active show" : ""}`} id="tab_03" role="tabpanel" aria-labelledby="tab_03">
            {/* <!-- list project  --> */}
            <div class="row user-acc__project">
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
                            <a href="#" class="icon active fas fa-th"></a>
                            <a href="#" class="icon fas fa-list"></a>
                        </div>
                    </div>

                    <div class="project_item__grid">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6">
                                <div class="child">
                                    <figure class="image">
                                        <i class="noti active fas fa-bell"></i>
                                        <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                        <span class="type payment_status_bg_3">
                                            <i class="icon fas fa-exclamation-triangle"></i>
                                            Trễ hẹn
                                        </span>
                                    </figure>
                                    <div class="details">
                                        <div class="heading">
                                            <a href="#" class="name">Căn hộ F01</a>
                                            <p class="status">
                                                Thanh toán lần 3
                                            </p>
                                        </div>
                                        <p class="sub-child">
                                            <i class="icon fas fa-user"></i>
                                            <span class="text">Dự án : Royal Garden</span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-map-marker-alt"></i>
                                            <span class="text">
                                                Vị trí : Khu A | Khối B
                                            </span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-network-wired"></i>
                                            <span class="text">
                                                Tổng đợt thanh toán : 10 (đợt)
                                            </span>
                                        </p>
                                        <p class="sub-child mb-0">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            <span class="text">
                                                Số tiền : 3.000.000.000 (đồng)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6">
                                <div class="child">
                                    <figure class="image">
                                        <i class="noti active fas fa-bell"></i>
                                        <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                        <span class="type payment_status_bg_1">
                                            <i class="icon fas fa-check-circle"></i>
                                            Đã thanh toán
                                        </span>
                                    </figure>

                                    <div class="details">
                                        <div class="heading">
                                            <a href="#" class="name">Căn hộ F01</a>
                                            <p class="status">
                                                Thanh toán lần 3
                                            </p>
                                        </div>
                                        <p class="sub-child">
                                            <i class="icon fas fa-user"></i>
                                            <span class="text">Dự án : Royal Garden</span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-map-marker-alt"></i>
                                            <span class="text">
                                                Vị trí : Khu A | Khối B
                                            </span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-network-wired"></i>
                                            <span class="text">
                                                Tổng đợt thanh toán : 10 (đợt)
                                            </span>
                                        </p>
                                        <p class="sub-child mb-0">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            <span class="text">
                                                Số tiền : 3.000.000.000 (đồng)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6">
                                <div class="child">
                                    <figure class="image">
                                        <i class="noti active fas fa-bell"></i>
                                        <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                        <span class="type payment_status_bg_1">
                                            <i class="icon fas fa-check-circle"></i>
                                            Đã thanh toán
                                        </span>
                                    </figure>
                                    <div class="details">
                                        <div class="heading">
                                            <a href="#" class="name">Căn hộ F01</a>
                                            <p class="status">
                                                Thanh toán lần 3
                                            </p>
                                        </div>
                                        <p class="sub-child">
                                            <i class="icon fas fa-user"></i>
                                            <span class="text">Dự án : Royal Garden</span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-map-marker-alt"></i>
                                            <span class="text">
                                                Vị trí : Khu A | Khối B
                                            </span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-network-wired"></i>
                                            <span class="text">
                                                Tổng đợt thanh toán : 10 (đợt)
                                            </span>
                                        </p>
                                        <p class="sub-child mb-0">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            <span class="text">
                                                Số tiền : 3.000.000.000 (đồng)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6">
                                <div class="child">
                                    <figure class="image">
                                        <i class="noti active fas fa-bell"></i>
                                        <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                        <span class="type payment_status_bg_4">
                                            <i class="icon fas fa-stop-circle"></i>
                                            Dừng
                                        </span>
                                    </figure>

                                    <div class="details">
                                        <div class="heading">
                                            <a href="#" class="name">Căn hộ F01</a>
                                            <p class="status">
                                                Thanh toán lần 3
                                            </p>
                                        </div>
                                        <p class="sub-child">
                                            <i class="icon fas fa-user"></i>
                                            <span class="text">Dự án : Royal Garden</span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-map-marker-alt"></i>
                                            <span class="text">
                                                Vị trí : Khu A | Khối B
                                            </span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-network-wired"></i>
                                            <span class="text">
                                                Tổng đợt thanh toán : 10 (đợt)
                                            </span>
                                        </p>
                                        <p class="sub-child mb-0">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            <span class="text">
                                                Số tiền : 3.000.000.000 (đồng)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6">
                                <div class="child">
                                    <figure class="image">
                                        <i class="noti active fas fa-bell"></i>
                                        <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                        <span class="type payment_status_bg_3">
                                            <i class="icon fas fa-exclamation-triangle"></i>
                                            Trễ hẹn
                                        </span>
                                    </figure>

                                    <div class="details">
                                        <div class="heading">
                                            <a href="#" class="name">Căn hộ F01</a>
                                            <p class="status">
                                                Thanh toán lần 3
                                            </p>
                                        </div>
                                        <p class="sub-child">
                                            <i class="icon fas fa-user"></i>
                                            <span class="text">Dự án : Royal Garden</span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-map-marker-alt"></i>
                                            <span class="text">
                                                Vị trí : Khu A | Khối B
                                            </span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-network-wired"></i>
                                            <span class="text">
                                                Tổng đợt thanh toán : 10 (đợt)
                                            </span>
                                        </p>
                                        <p class="sub-child mb-0">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            <span class="text">
                                                Số tiền : 3.000.000.000 (đồng)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6">
                                <div class="child">
                                    <figure class="image">
                                        <i class="noti active fas fa-bell"></i>
                                        <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                        <span class="type payment_status_bg_3">
                                            <i class="icon fas fa-exclamation-triangle"></i>
                                            Trễ hẹn
                                        </span>
                                    </figure>

                                    <div class="details">
                                        <div class="heading">
                                            <a href="#" class="name">Căn hộ F01</a>
                                            <p class="status">
                                                Thanh toán lần 3
                                            </p>
                                        </div>
                                        <p class="sub-child">
                                            <i class="icon fas fa-user"></i>
                                            <span class="text">Dự án : Royal Garden</span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-map-marker-alt"></i>
                                            <span class="text">
                                                Vị trí : Khu A | Khối B
                                            </span>
                                        </p>
                                        <p class="sub-child">
                                            <i class="icon fas fa-network-wired"></i>
                                            <span class="text">
                                                Tổng đợt thanh toán : 10 (đợt)
                                            </span>
                                        </p>
                                        <p class="sub-child mb-0">
                                            <i class="icon fas fa-money-bill-wave"></i>
                                            <span class="text">
                                                Số tiền : 3.000.000.000 (đồng)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {% include "./_pagination.twig" %} */}

                    <div class="project_item__list ">
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

                                    {/* <!-- parent 1 --> */}
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
                                    {/* <!-- child 1 --> */}
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

                                    {/* <!-- child 2 --> */}
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

                                    {/* <!-- parent 2 --> */}
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
                                    {/* <!-- child  --> */}
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
                    <div class="benefit mb-45">
                        <div class="benefit--employee">
                            <div class="heading">Tổng tiền : 7.2 tỷ đồng</div>
                            <ul class="list">
                                <li>
                                    <p class="icon">
                                        <span class="number">1</span>
                                    </p>
                                    <p class="text">
                                        <span class="name">Căn hộ F01</span>
                                        <span>Giá tiền : 3.000.000 (đồng)</span>
                                        <span>Tiền đã trả : 1.500.000 (đồng)</span>
                                    </p>
                                </li>
                                <li>
                                    <p class="icon">
                                        <span class="number">2</span>
                                    </p>
                                    <p class="text">
                                        <span class="name">Căn hộ F01</span>
                                        <span>Giá tiền : 3.000.000 (đồng)</span>
                                        <span>Tiền đã trả : 1.500.000 (đồng)</span>
                                    </p>
                                </li>
                                <li>
                                    <p class="icon">
                                        <span class="number">3</span>
                                    </p>
                                    <p class="text">
                                        <span class="name">Căn hộ F01</span>
                                        <span>Giá tiền : 3.000.000 (đồng)</span>
                                        <span>Tiền đã trả : 1.500.000 (đồng)</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* {% include "./_promotion_item_tab_user.twig" %} */}
                </div>
            </div>

            {/* <!-- detail a project  --> */}
            <div class="row user-acc__project">
                <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div class="project_item__detail">
                        <div class="view_horizontal">
                            <div class="item">
                                <i class="icon fas fa-building"></i>
                                <div class="text">
                                    <span class="text-uppercase">
                                        DỰ ÁN
                                    </span>
                                    <span class="value">Royal Garden</span>
                                </div>
                            </div>
                            <div class="item">
                                <i class="icon fas fa-money-bill-wave"></i>
                                <div class="text">
                                    <span class="text-uppercase">
                                        SỐ TIỀN
                                    </span>
                                    (đồng)
                                    <span class="value money">3.000.000.000</span>
                                </div>
                            </div>
                            <div class="item">
                                <i class="icon fas fa-boxes"></i>
                                <div class="text">
                                    <span class="text-uppercase">
                                        ĐỢT THANH TOÁN
                                    </span>
                                    <span class="value times">15 đợt</span>
                                </div>
                            </div>
                        </div>
                        <div class="view_vertical">
                            <div class="item">
                                <div class="heading">
                                    <span class="text-uppercase">
                                        SẢN PHẨM
                                    </span>
                                    <span class="value">Căn hộ B6 - F01</span>
                                </div>
                                <div class="list">
                                    <div class="list_item">
                                        <span class="title">
                                            Mã hồ sơ
                                        </span>
                                        <span class="value">
                                            HS0938
                                        </span>
                                    </div>
                                    <div class="list_item">
                                        <span class="title">
                                            Loại
                                        </span>
                                        <span class="value">
                                            Căn hộ
                                        </span>
                                    </div>
                                    <div class="list_item">
                                        <span class="title">
                                            Đơn vị bán
                                        </span>
                                        <span class="value">
                                            Đại lý Hưng Phát
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="heading">
                                    <span class="text-uppercase">
                                        CHÍNH SÁCH BÁN HÀNG
                                    </span>
                                    <span class="value">Tiêu chuẩn</span>
                                </div>
                                <div class="list">
                                    <div class="list_item">
                                        <span class="title">
                                            Tiền cọc (đồng)
                                        </span>
                                        <span class="value">
                                            100.000.000
                                        </span>
                                    </div>
                                    <div class="list_item">
                                        <span class="title">
                                            Số đợt trả
                                        </span>
                                        <span class="value">
                                            15
                                        </span>
                                    </div>
                                    <div class="list_item">
                                        <span class="title">
                                            Tổng tiền (đồng)
                                        </span>
                                        <span class="value">
                                            3.000.000.000
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="heading">
                                    <span class="text-uppercase">
                                        CHÍNH SÁCH VAY
                                    </span>
                                    <span class="value">Vay thả nổi - SCB</span>
                                </div>
                                <div class="list">
                                    <div class="list_item">
                                        <span class="title">
                                            Tiền vay (đồng)
                                        </span>
                                        <span class="value">
                                            500.000.000
                                        </span>
                                    </div>
                                    <div class="list_item">
                                        <span class="title">
                                            Thời gian vay
                                        </span>
                                        <span class="value">
                                            10 năm
                                        </span>
                                    </div>
                                    <div class="list_item">
                                        <span class="title">
                                            Tồng tiền trả (đồng)
                                        </span>
                                        <span class="value">
                                            597.256.000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="project_item__list ">
                        <div class="table_original">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="pl-0">STT</th>
                                        <th>ĐỢT THANH TOÁN</th>
                                        <th>NGÀY TRẢ</th>
                                        <th>SỐ TIỀN (đồng)</th>
                                        <th>TRẠNG THÁI</th>
                                        <th class="text-center">
                                            <i class="fas fa-cog"></i>
                                        </th>
                                    </tr>
                                </thead>

                                <tr class="parent">
                                    <td colspan="3" class="name border-bottom-none color_6d30ab">
                                        Tiền đã trả
                                    </td>
                                    <td class="name border-bottom-none color_6d30ab">
                                        765.000.000
                                    </td>
                                    <td class="border-bottom-none"></td>
                                    <td class="border-bottom-none"></td>
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
                                        <div class="payment_status">
                                            <i class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                            <span class="payment_status_3">Trễ hẹn</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="noti">
                                            <i class="icon bell fas fa-bell"></i>
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
                                        <div class="payment_status">
                                            <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                            <span class="payment_status_1">Đã thanh toán</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="noti">
                                            <i class="icon active bell fas fa-bell"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="last">
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
                                        <div class="payment_status">
                                            <i class="icon type payment_status_4 fas fa-stop-circle"></i>
                                            <span class="payment_status_4">Dừng</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="noti">
                                            <i class="icon active bell fas fa-bell"></i>
                                        </div>
                                    </td>
                                </tr>

                                <tr class="parent">
                                    <td colspan="3" class="name border-bottom-none">
                                        Tiền còn lại
                                    </td>
                                    <td class="name border-bottom-none">
                                        2.235.000.000
                                    </td>
                                    <td class="border-bottom-none"></td>
                                    <td class="border-bottom-none"></td>
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
                                        <div class="payment_status">
                                            <i class="icon type payment_status_3 fas fa-exclamation-triangle"></i>
                                            <span class="payment_status_3">Trễ hẹn</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="noti">
                                            <i class="icon bell fas fa-bell"></i>
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
                                        <div class="payment_status">
                                            <i class="icon type payment_status_1 fas fa-check-circle"></i>
                                            <span class="payment_status_1">Đã thanh toán</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="noti">
                                            <i class="icon active bell fas fa-bell"></i>
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
                                        <div class="payment_status null">
                                            <i class="icon type fas fa-question-circle"></i>
                                            <span class="text">Trạng thái</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="noti">
                                            <i class="icon bell fas fa-bell"></i>
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
                                        <div class="payment_status null">
                                            <i class="icon type fas fa-question-circle"></i>
                                            <span class="text">Trạng thái</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="noti">
                                            <i class="icon bell fas fa-bell"></i>
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
                                        <div class="payment_status null">
                                            <i class="icon type fas fa-question-circle"></i>
                                            <span class="text">Trạng thái</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="noti">
                                            <i class="icon bell fas fa-bell"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="last">
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
                                        <div class="payment_status null">
                                            <i class="icon type fas fa-question-circle"></i>
                                            <span class="text">Trạng thái</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="noti">
                                            <i class="icon bell fas fa-bell"></i>
                                        </div>
                                    </td>
                                </tr>


                            </table>
                        </div>
                    </div>

                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <div class="options bg_white mb-45">
                        <ul class="options__menu">
                            <label class="options__menu-title">Dự án tham gia</label>
                            <li class="options__menu-item">
                                <a href="#">
                                    <i class="icon fas fa-angle-right mr-2"></i>
                                    Dự án Royal Garden
                                </a>
                            </li>
                            <li class="options__menu-item">
                                <a href="#">
                                    <i class="icon fas fa-angle-right mr-2"></i>
                                    Dự án VTP
                                </a>
                            </li>
                            <li class="options__menu-item">
                                <a href="#">
                                    <i class="icon fas fa-angle-right mr-2"></i>
                                    Dự án khu biệt thự Thảo Điền
                                </a>
                            </li>
                        </ul>
                        <div class="options__search">
                            <div class="text">Tìm kiếm</div>
                            <i class="icon fas fa-search"></i>
                            <div class="search form-group">
                                <input type="text" class="w-100 form-control" placeholder="Nhập nội dung"/>
                            </div>
                        </div>
                    </div>

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

                    <div class="benefit mb-45">
                        <div class="benefit--employee">
                            <div class="heading">Tổng tiền : 3 tỷ đồng</div>
                            <ul class="list">
                                <li>
                                    <p class="icon">
                                        <span class="number">1</span>
                                    </p>
                                    <p class="text">
                                        <span>Số tiền trả</span>
                                        <span class="money_number">765.000.000 (đồng)</span>
                                    </p>
                                </li>
                                <li>
                                    <p class="icon">
                                        <span class="number">2</span>
                                    </p>
                                    <p class="text">
                                        <span>Số còn lại</span>
                                        <span class="money_number">
                                            2.235.000.000 (đồng)</span>
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
export default TabJoinProject;