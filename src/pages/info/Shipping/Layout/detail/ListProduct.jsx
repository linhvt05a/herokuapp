/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const ListProduct = props => {
    return (
        <div class="card square h-100">
            <div class="card-body">

                <p class="mb-4 mt-4 fs-18 uni_text_6d30ab text-uppercase text-center font-weight-bold">TÌM KIẾM </p>

                <div class="row mb-4">
                    <div class="col-lg-6 col-xl-3">
                        <div class="form-group">
                            <label class="fw-medium">Chọn khu</label>
                            <select name="" id="" class="form-control m_select_change js-select2 " data-placeholder="Chọn khu">
                                <option disabled value="">Chọn khu</option>
                                <option value="2" selected>Khu Valencia</option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="form-group">
                            <label class="fw-medium">Chọn khối</label>
                            <select name="" id="" class="form-control m_select_change js-select2" data-placeholder="Chọn khối">
                                <option disabled value="">Chọn khối</option>
                                <option value="2" selected>Khối F </option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="form-group">
                            <label class="fw-medium">Chọn tầng / lô</label>
                            <select name="" id="" class="form-control m_select_change js-select2" data-placeholder="Chọn tầng / lô">
                                <option selected disabled value="">Chọn tầng / lô</option>
                                <option value="2">Biệt thự</option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="form-group">
                            <label class="fw-medium">Chọn chính sách </label>
                            <select name="" id="" class="form-control m_select_change js-select2" data-placeholder="Chọn chính sách ">
                                <option selected disabled value="">Chọn chính sách </option>
                                <option value="2">Biệt thự</option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-6">
                        <div class="form-group custom_select2_multiple">
                            <label class="fw-medium">Chọn loại sản phẩm </label>
                            <select name="" id="" class="form-control m_select_change js-select2" multiple data-placeholder="Chọn các loại sản phẩm ">
                                <option value="2">Biệt thự</option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-2 align-items-end d-flex">
                        <div class="form-group">
                            <button type="submit" class="min-width-button btn-uni-purple min-height-40">Tìm kiếm </button>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center justify-content-xl-between flex-xl-nowrap flex-wrap justify-content-start">
                    <div class="sales_status sales_management_filter mb-2">
                        <p class="title">Chú thích</p>
                        <p class="item" data-status="sales_status_all">
                            <span class="square sales_status_cart_bg_00"></span>
                            <a href="#" class="uni_text_000 text"><u>Tất cả</u></a>
                        </p>
                        <p class="item" data-status="internal">
                            <span class="square sales_internal_bg"></span>
                            <a href="#" class="sales_internal_text"><u>Nội bộ</u></a>
                        </p>
                        <p class="item" data-status="agency">
                            <span class="square sales_agency_bg"></span>
                            <a href="#" class="sales_agency_text"><u>Đại lý</u></a>
                        </p>
                        <p class="item">
                            <span class="d-flex align-items-center payment_status_1">
                                Đã thanh toán
                            <i class="pl-1 fs-16 lar la-check-circle"></i>
                            </span>
                        </p>
                        <p class="item">
                            <span class="d-flex align-items-center payment_status_2">
                                Sắp tới hạn
                            <i class="pl-1 fs-16 las la-fast-forward"></i>
                            </span>
                        </p>
                        <p class="item">
                            <span class="d-flex align-items-center payment_status_3">
                                Trễ hạn
                            <i class="pl-1 fs-16 las la-exclamation-triangle"></i>
                            </span>
                        </p>
                        <p class="item">
                            <span class="d-flex align-items-center payment_status_4">
                                Dừng
                            <i class="pl-1 fs-16 las la-hourglass-end"></i>
                            </span>
                        </p>
                        <p class="item">
                            <span class="d-flex align-items-center payment_status_5">
                                Chưa thanh toán
                            <i class="pl-1 fs-16 las la-file-alt"></i>
                            </span>
                        </p>

                    </div>
                    <div class="uni_text_000">ĐVT: tỷ đồng</div>
                </div>

                <div class="sales_house-selected">
                    <div class="m_table m_table--sales min-width-100-pc">
                        <table>
                            <thead>
                                <tr>
                                    <th class="pl-0">STT</th>
                                    <th>TẦNG / LÔ
                                    <i class="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>SẢN PHẨM
                                    <i class="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>CHÍNH SÁCH TT
                                    <i class="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>ĐỢT TT</th>
                                    <th>TÊN KHÁCH HÀNG</th>
                                    <th>TÌNH TRẠNG</th>
                                    <th>SỐ TIỀN</th>
                                    <th>LŨY KẾ</th>
                                    <th>THỰC TẾ</th>
                                    <th width="6%"></th>
                                    <th class="text-right">
                                        <i class="icon las la-cog"></i>
                                    </th>
                                </tr>
                            </thead>

                            <tr class="parent" data-parent="row01">
                                <td class="number text-left pl-0">1</td>
                                <td colspan="2">

                                    <div class="floor_selected">
                                        <div class="floor text-uppercase min-width-110">B6</div>
                                        <a class="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                            Tổng số sản phẩm: 14
                                    </a>
                                    </div>

                                </td>
                                <td colspan="4"></td>

                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td class="text-center"><i class="icon icon_collapse las la-plus-circle"></i></td>
                            </tr>

                            <tr class="child child-row01" data-parent="sub-row0101" data-child="row01">
                                <td class="text-left pl-0">
                                    a
                            </td>
                                <td colspan="2">
                                    <div class="floor_selected">
                                        <div class="agency channel text-uppercase min-width-110 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a class="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                                <td colspan="4"></td>

                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td class="text-center">
                                    <i class="icon icon_collapse angle las la-angle-down"></i>
                                </td>
                            </tr>

                            <tr class="child child-sub-row0101" data-filter="agency" data-child="row01">
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation opacity-0">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>
                                    <a href="#" class="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span class="payment_status_border_1 payment_status_1 d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán
                                </span>
                                </td>

                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>

                                <td class="text-center">
                                    <i class="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item fw-medium" href="#">
                                                <i class="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="child child-sub-row0101" data-filter="internal" data-child="row01">
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>

                                    <a href="#" class="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span class="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>

                                <td class="text-center">
                                    <i class="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item fw-medium" href="#">
                                                <i class="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr class="child child-row01" data-parent="sub-row0102" data-child="row01">
                                <td class="text-left pl-0">
                                    b
                            </td>
                                <td colspan="2">
                                    <div class="floor_selected">
                                        <div class="agency channel text-uppercase min-width-110 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 2
                                    </div>
                                        <a class="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                                <td colspan="4"></td>

                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td class="text-center">
                                    <i class="icon icon_collapse angle las la-angle-down"></i>
                                </td>
                            </tr>

                            <tr class="child child-sub-row0102" data-filter="agency" data-child="row01">
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation opacity-0">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>
                                    <a href="#" class="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span class="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>

                                <td class="text-center">
                                    <i class="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item fw-medium" href="#">
                                                <i class="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="child child-sub-row0102" data-filter="internal" data-child="row01">
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>

                                    <a href="#" class="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span class="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>

                                <td class="text-center">
                                    <i class="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item fw-medium" href="#">
                                                <i class="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>


                            <tr class="parent" data-parent="row02">
                                <td class="number text-left pl-0">1</td>
                                <td colspan="2">

                                    <div class="floor_selected">
                                        <div class="floor text-uppercase min-width-110">B6</div>
                                        <a class="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                            Tổng số sản phẩm: 14
                                    </a>
                                    </div>

                                </td>
                                <td colspan="4"></td>

                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td class="text-center"><i class="icon icon_collapse las la-plus-circle"></i></td>
                            </tr>


                            <tr class="child child-row02" data-parent="sub-row0201" data-child="row02">
                                <td class="text-left pl-0">
                                    a
                            </td>
                                <td colspan="2">
                                    <div class="floor_selected">
                                        <div class="agency channel text-uppercase min-width-110 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a class="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                                <td colspan="4"></td>

                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div class="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td class="text-center">
                                    <i class="icon icon_collapse angle las la-angle-down"></i>
                                </td>
                            </tr>


                            <tr class="child child-sub-row0201" data-filter="internal" data-child="row02">
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation opacity-0">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>
                                    <a href="#" class="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span class="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>

                                <td class="text-center">
                                    <i class="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item fw-medium" href="#">
                                                <i class="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="child child-sub-row0201" data-filter="agency" data-child="row02">
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>

                                    <a href="#" class="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span class="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>
                                <td>
                                    <b class="">0.1</b>
                                </td>

                                <td class="text-center">
                                    <i class="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item fw-medium" href="#">
                                                <i class="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="sales_select-dates">
                    <div class="item from d-flex align-items-center max-width-auto w-auto">
                        <div class="text fw-medium uni_text_6d30ab pr-3 mb-0">Từ</div>
                        <div class="m_datepicker max-width-130">
                            <input type="text" class="form-control js-datepicker border_color_6d30ab" placeholder="-" />
                        </div>
                    </div>
                    <div class="item to d-flex align-items-center max-width-auto w-auto">
                        <div class="text fw-medium uni_text_6d30ab pr-3 mb-0">Đến</div>
                        <div class="m_datepicker max-width-130">
                            <input type="text" class="form-control js-datepicker border_color_6d30ab" placeholder="-" />
                        </div>
                    </div>
                </div>

                <div class="sales_time-payment d-flex">
                    <div class="m_table m_table--sales m_table--fixed td-border-right max-height-100">
                        <table style="min-width: 665px;">
                            <thead>
                                <tr>
                                    <th class="pl-0">STT</th>
                                    <th>TẦNG / LÔ
                                    <i class="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>SẢN PHẨM
                                    <i class="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>CHÍNH SÁCH TT
                                    <i class="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>ĐỢT TT</th>
                                </tr>
                            </thead>
                            <tr>
                                <td colspan="5" class="pl-0">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="uni_text_6d30ab font-weight-bold text-uppercase">
                                            Tổng doanh thu của dự án
                                    </span>
                                        <div class="ml-auto min-height-40 width-110 text-white bg_color_6d30ab d-flex align-items-center justify-content-center">
                                            152.546
                                    </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>

                                <td colspan="5" class="pl-0">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="m_text_e94c4c font-weight-bold text-uppercase">
                                            Tổng CÔNG NỢ PHẢI THU
                                    </span>
                                        <div class="ml-auto min-height-40 width-110 text-white bg_color_e94c4c d-flex align-items-center justify-content-center">
                                            3.845
                                    </div>
                                    </div>
                                </td>
                            </tr>

                            <tr class="parent" data-parent="row01">
                                <td class="number text-left pl-0 pr-0">
                                    <div class="d-flex align-items-center">
                                        <span>1</span>
                                        <i class="pl-3 icon icon_collapse las la-plus-circle"></i>
                                    </div>
                                </td>
                                <td colspan="4">

                                    <div class="floor_selected">
                                        <div class="floor text-uppercase min-width-80">B6</div>
                                        <a class="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                            Tổng số sản phẩm: 14
                                    </a>
                                    </div>

                                </td>
                            </tr>

                            <tr class="child child-row01" data-parent="sub-row0101" data-child="row01">
                                <td class="text-left pl-0 pr-0">
                                    <div class="d-flex align-items-center">
                                        <span>a</span>
                                        <i class="pl-3 fs-18 icon icon_collapse angle las la-angle-down"></i>
                                    </div>
                                </td>
                                <td colspan="4">
                                    <div class="floor_selected">
                                        <div class="agency channel text-uppercase min-width-80 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a class="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                            </tr>

                            <tr class="child child-sub-row0101" data-filter="agency" data-child="row01">
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation opacity-0">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>
                                    <a href="#" class="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>
                            <tr class="child child-sub-row0101" data-filter="internal" data-child="row01">
                                <td class="null"></td>
                                <td class="null"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>

                                    <a href="#" class="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>


                            <tr class="child child-row01" data-parent="sub-row0102" data-child="row01">
                                <td class="text-left pl-0 pr-0">
                                    <div class="d-flex align-items-center">
                                        <span>b</span>
                                        <i class="pl-3 fs-18 icon icon_collapse angle las la-angle-down"></i>
                                    </div>
                                </td>
                                <td colspan="4">
                                    <div class="floor_selected">
                                        <div class="agency channel text-uppercase min-width-80 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a class="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                            </tr>

                            <tr class="child child-sub-row0102" data-filter="agency" data-child="row01">
                                <td class="null"></td>
                                <td class="null"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation opacity-0">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>
                                    <a href="#" class="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>



                            <tr class="parent" data-parent="row02">
                                <td class="number text-left pl-0 pr-0">
                                    <div class="d-flex align-items-center">
                                        <span>2</span>
                                        <i class="pl-3 icon icon_collapse las la-plus-circle"></i>
                                    </div>
                                </td>
                                <td colspan="4">

                                    <div class="floor_selected">
                                        <div class="floor text-uppercase min-width-80">B6</div>
                                        <a class="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                            Tổng số sản phẩm: 14
                                    </a>
                                    </div>

                                </td>
                            </tr>

                            <tr class="child child-row02" data-parent="sub-row0201" data-child="row02">
                                <td class="text-left pl-0 pr-0">
                                    <div class="d-flex align-items-center">
                                        <span>a</span>
                                        <i class="pl-3 fs-18 icon icon_collapse angle las la-angle-down"></i>
                                    </div>
                                </td>
                                <td colspan="4">
                                    <div class="floor_selected">
                                        <div class="agency channel text-uppercase min-width-80 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a class="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                            </tr>

                            <tr class="child child-sub-row0201" data-filter="agency" data-child="row02">
                                <td class="border-bottom-none"></td>
                                <td class="border-bottom-none"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation opacity-0">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>
                                    <a href="#" class="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>
                            <tr class="child child-sub-row0201" data-filter="internal" data-child="row02">
                                <td class="null"></td>
                                <td class="null"></td>
                                <td colspan="1" class="pl-0">
                                    <span class="exclamation">
                                        <i class="icon las la-exclamation-triangle"></i>
                                        <i class="text">1</i>
                                    </span>

                                    <a href="#" class="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" class="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="m_table m_table--sales m_table--fixed table_text_center max-height-100 pb-2">
                        <table style="min-width: 1000px">
                            <thead>
                                <tr>
                                    <th>
                                        <b>T1</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T2</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T3</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T4</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T5</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T6</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T7</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T8</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T9</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T10</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T11</b>
                                        <b>20</b>
                                    </th>
                                    <th>
                                        <b>T12</b>
                                        <b>20</b>
                                    </th>
                                </tr>
                            </thead>

                            <tr>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                                <td class="uni_text_6d30ab fw-medium">12.512</td>
                            </tr>

                            <tr>
                                <td class="m_text_e94c4c fw-medium">0.214</td>
                                <td class="m_text_e94c4c fw-medium">0.214</td>
                                <td class="m_text_e94c4c fw-medium">0.214</td>
                                <td class="m_text_e94c4c fw-medium">0.214</td>
                                <td class="m_text_e94c4c fw-medium">0.214</td>
                                <td class="m_text_e94c4c fw-medium">-</td>
                                <td class="m_text_e94c4c fw-medium">-</td>
                                <td class="m_text_e94c4c fw-medium">-</td>
                                <td class="m_text_e94c4c fw-medium">-</td>
                                <td class="m_text_e94c4c fw-medium">-</td>
                                <td class="m_text_e94c4c fw-medium">0.214</td>
                                <td class="m_text_e94c4c fw-medium">0.214</td>
                            </tr>


                            <tr>
                                <td colspan="12"></td>
                            </tr>
                            <tr class="child child-row01" data-parent="sub-row0101" data-child="row01">
                                <td colspan="12"></td>
                            </tr>
                            <tr class="child child-sub-row0101" data-filter="agency" data-child="row01">
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 lar la-check-circle payment_status_1"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-exclamation-triangle payment_status_3"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-hourglass-end payment_status_4"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-file-alt payment_status_5"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr class="child child-sub-row0101" data-filter="internal" data-child="row01">
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>


                            <tr class="child child-row01" data-parent="sub-row0102" data-child="row01">
                                <td colspan="12"></td>
                            </tr>
                            <tr class="child child-sub-row0102" data-parent="sub-row0102" data-child="row01">
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 lar la-check-circle payment_status_1"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-exclamation-triangle payment_status_3"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-hourglass-end payment_status_4"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-file-alt payment_status_5"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td colspan="12"></td>
                            </tr>


                            <tr class="child child-row02" data-parent="sub-row0201" data-child="row02">
                                <td colspan="12"></td>
                            </tr>
                            <tr class="child child-sub-row0201" data-filter="agency" data-child="row02">
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-exclamation-triangle payment_status_3"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-hourglass-end payment_status_4"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-file-alt payment_status_5"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="fw-medium">20</span>
                                        <i class="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr class="child child-sub-row0201" data-filter="internal" data-child="row02">
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ListProduct;