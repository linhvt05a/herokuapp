import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UploadAvatar, CardFile } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabOrder = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    return (
        <div class={`tab-pane fade ${activeTab === 1 ? "active show": ""}`} id="tab_02" role="tabpanel">
            <div class="row user-acc__order">
                <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div class="user-acc__filter">
                        <div class="filter__left">
                            <div class="form-group">
                                <input type="text" placeholder="Nhập mã đơn hàng" class="form-control"/>
                                <a href="#" class="btn btn_green">
                                    TÌM KIẾM
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
                                        <th class="text-uppercase">MÃ ĐƠN</th>
                                        <th class="text-uppercase">NGÀY MUA</th>
                                        <th class="text-uppercase">SẢN PHẨM</th>
                                        <th><span class="text-uppercase">SỐ TIỀN</span> <span
                                                class="unit">(đồng)</span></th>
                                        <th class="text-uppercase">TRẠNG THÁI</th>
                                        <th class="text-center">
                                            <i class="icon fas fa-cog"></i>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {/* {% for i in 0..3 %} */}
                                    <tr>
                                        <td class="pl-0">
                                            1
                                        </td>
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
                                        <td class="pl-0">
                                            1
                                        </td>
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
                                    {/* {% endfor %} */}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="project_item__detail">
                        <div class="view_horizontal">
                            <div class="item">
                                <i class="icon fas fa-building"></i>
                                <div class="text">
                                    <span class="text-uppercase">
                                        MÃ ĐƠN HÀNG
                                    </span>
                                    <span class="value">000011419</span>
                                </div>
                            </div>
                            <div class="item">
                                <i class="icon fas fa-money-bill-wave"></i>
                                <div class="text">
                                    <span class="text-uppercase">
                                        SỐ TIỀN CỌC (đồng)
                                    </span>
                                    <span class="value money">50.000.000</span>
                                </div>
                            </div>
                            <div class="item">
                                <i class="icon fas fa-boxes"></i>
                                <div class="text">
                                    <span class="text-uppercase">
                                        TRẠNG THÁI
                                    </span>
                                    <span class="value times waiting">Chờ duyệt</span>
                                </div>
                            </div>
                        </div>
                        <div class="view_vertical">

                            <div class="item">
                                <div class="heading">
                                    <span class="text-uppercase">
                                        KHÁCH HÀNG
                                    </span>
                                    <span class="value">Trần Thị Thu Hoài</span>
                                </div>
                                <div class="list">
                                    <div class="list_item w-100">
                                        <span class="title">
                                            Số CMND/CCCD/Hộ chiếu
                                        </span>
                                        <span class="value">
                                            340320350
                                        </span>
                                    </div>
                                    <div class="list_item">
                                        <span class="title">
                                            Địa chỉ thường trú
                                        </span>
                                        <span class="value">
                                            24/3 đường Lê Hồng Phong,
                                            Phường 16, Q.3, Tp.HCM,...
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="heading">
                                    <span class="text-uppercase">
                                        TỔNG TIỀN (đồng)
                                    </span>
                                    <span class="value">10.212.520.022</span>
                                </div>
                                <div class="list">
                                    <div class="list_item w-100">
                                        <span class="title">
                                            Tổng giá BĐS (đồng)
                                        </span>
                                        <span class="value">
                                            10.460.091.972
                                        </span>
                                    </div>
                                    <div class="list_item">
                                        <span class="title">
                                            Giảm giá voucher
                                        </span>
                                        <span class="value">
                                            247.571.950
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="heading">
                                    <span class="text-uppercase">
                                        THANH TOÁN
                                    </span>
                                    <span class="value">Chuyển khoản</span>
                                </div>
                                <div class="list">
                                    <div class="list_item w-100">
                                        <span class="title">
                                            Số tài khoản
                                        </span>
                                        <span class="value">
                                            19130848623336
                                        </span>
                                    </div>
                                    <div class="list_item">
                                        <span class="title">
                                            Tên tài khoản
                                        </span>
                                        <span class="value">
                                            Công ty đầu tư và xây dựng
                                            bất động sản Minerva
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="user-acc__total_sales">
                        <div class="project_item__list table-order-info">
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
                                                        <img class="img-fluid" src="./assets/images/living-room-area-2988860.png" alt="livingroom"/>
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
                                                        <img class="img-fluid"
                                                            src="./assets/images/living-room-area-2988860.png"
                                                            alt="livingroom"/>
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
                                            {/* <!-- parent 2 --> */}
                                            <tr class="parent">
                                                <td colspan="3" class="name border-bottom-none">
                                                    Dự án Royal Garden
                                                </td>
    
                                                <td class="border-bottom-none"></td>
                                                <td class="border-bottom-none"></td>
                                            </tr>
                                            {/* <!-- child 1 --> */}
                                            <tr>
                                                <td style={{width: "5%"}} class="pd-left-0 color_656565">3</td>
                                                <td style={{width: "32%"}}>
                                                    <div class="apartment-info-table">
                                                        <img class="img-fluid"
                                                            src="./assets/images/living-room-area-2988860.png"
                                                            alt="livingroom"/>
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
                                            <tr>
                                                <td style={{width: "5%"}} class="pd-left-0 color_656565">4</td>
                                                <td style={{width: "32%"}}>
                                                    <div class="apartment-info-table">
                                                        <img class="img-fluid"
                                                            src="./assets/images/living-room-area-2988860.png"
                                                            alt="livingroom"/>
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
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <div class="payment-info  mb-45">
                        <div class="payment-info__heading">
                            Thông báo đơn hàng
                        </div>
                        <div class="payment-info__content">
                            <div class="payment-info__wrap">
                                <div class="order_notice__item">
                                    <i class="order_notice__icon fas fa-bell"></i>
                                    <div class="order_notice__content">
                                        <div class="order_notice__name">Căn hộ B6 - F01,...</div>
                                        <div class="order_notice__code">Mã đơn : <span class="code">000011419</span>
                                        </div>
                                        <div class="order_notice__noted">Bạn đã đặt cọc thành công, chúng tôi sẽ
                                            duyệt hồ sơ sớm nhất</div>
                                    </div>
                                </div>
                                <div class="order_notice__item">
                                    <i class="order_notice__icon fas fa-bell"></i>
                                    <div class="order_notice__content">
                                        <div class="order_notice__name">Căn hộ B6 - F01,...</div>
                                        <div class="order_notice__code">Mã đơn : <span class="code">000011419</span>
                                        </div>
                                        <div class="order_notice__noted">Bạn đã đặt cọc thành công, chúng tôi sẽ
                                            duyệt hồ sơ sớm nhất</div>
                                    </div>
                                </div>
                                <div class="order_notice__item">
                                    <i class="order_notice__icon fas fa-bell"></i>
                                    <div class="order_notice__content">
                                        <div class="order_notice__name">Căn hộ B6 - F01,...</div>
                                        <div class="order_notice__code">Mã đơn : <span class="code">000011419</span>
                                        </div>
                                        <div class="order_notice__noted">Bạn đã đặt cọc thành công, chúng tôi sẽ
                                            duyệt hồ sơ sớm nhất</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="benefit">
                        <div class="benefit--employee">
                            <div class="heading">Liên hệ với chúng tôi </div>
                            <ul class="list">
                                <li class="align-items-start">
                                    <p class="icon mt-2">
                                        <i class="fas fa-phone-alt"></i>
                                    </p>
                                    <p class="text">
                                        <span>Số điện thoại </span>
                                        <span class="money_number">0909 123 456</span>
                                    </p>
                                </li>
                                <li class="align-items-start">
                                    <p class="icon mt-2">
                                        <i class="fas fa-envelope"></i>
                                    </p>
                                    <p class="text">
                                        <span>Email liên hệ </span>
                                        <span class="money_number">minerva@gmail.com </span>
                                    </p>
                                </li>
                                <li class="align-items-start">
                                    <p class="icon mt-2">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </p>
                                    <p class="text">
                                        <span>Địa chỉ trụ sở</span>
                                        <span class="money_number">119 Pastuer, Phường 6, Quận 3, Tp. Hồ Chí
                                            Minh</span>
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
export default TabOrder;