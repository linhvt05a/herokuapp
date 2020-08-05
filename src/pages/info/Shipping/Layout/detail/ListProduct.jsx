/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const ListProduct = props => {
    return (
        <div className="card square h-100">
            <div className="card-body">

                <p className="mb-4 mt-4 fs-18 uni_text_6d30ab text-uppercase text-center font-weight-bold">TÌM KIẾM </p>

                <div className="row mb-4">
                    <div className="col-lg-6 col-xl-3">
                        <div className="form-group">
                            <label className="fw-medium">Chọn khu</label>
                            <select name="" id="" className="form-control m_select_change js-select2 " data-placeholder="Chọn khu">
                                <option disabled value="">Chọn khu</option>
                                <option value="2" selected>Khu Valencia</option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">
                        <div className="form-group">
                            <label className="fw-medium">Chọn khối</label>
                            <select name="" id="" className="form-control m_select_change js-select2" data-placeholder="Chọn khối">
                                <option disabled value="">Chọn khối</option>
                                <option value="2" selected>Khối F </option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">
                        <div className="form-group">
                            <label className="fw-medium">Chọn tầng / lô</label>
                            <select name="" id="" className="form-control m_select_change js-select2" data-placeholder="Chọn tầng / lô">
                                <option selected disabled value="">Chọn tầng / lô</option>
                                <option value="2">Biệt thự</option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">
                        <div className="form-group">
                            <label className="fw-medium">Chọn chính sách </label>
                            <select name="" id="" className="form-control m_select_change js-select2" data-placeholder="Chọn chính sách ">
                                <option selected disabled value="">Chọn chính sách </option>
                                <option value="2">Biệt thự</option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <div className="form-group custom_select2_multiple">
                            <label className="fw-medium">Chọn loại sản phẩm </label>
                            <select name="" id="" className="form-control m_select_change js-select2" multiple data-placeholder="Chọn các loại sản phẩm ">
                                <option value="2">Biệt thự</option>
                                <option value="2">Căn hộ</option>
                                <option value="2">Shop house</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-2 align-items-end d-flex">
                        <div className="form-group">
                            <button type="submit" className="min-width-button btn-uni-purple min-height-40">Tìm kiếm </button>
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-xl-between flex-xl-nowrap flex-wrap justify-content-start">
                    <div className="sales_status sales_management_filter mb-2">
                        <p className="title">Chú thích</p>
                        <p className="item" data-status="sales_status_all">
                            <span className="square sales_status_cart_bg_00"></span>
                            <a href="#" className="uni_text_000 text"><u>Tất cả</u></a>
                        </p>
                        <p className="item" data-status="internal">
                            <span className="square sales_internal_bg"></span>
                            <a href="#" className="sales_internal_text"><u>Nội bộ</u></a>
                        </p>
                        <p className="item" data-status="agency">
                            <span className="square sales_agency_bg"></span>
                            <a href="#" className="sales_agency_text"><u>Đại lý</u></a>
                        </p>
                        <p className="item">
                            <span className="d-flex align-items-center payment_status_1">
                                Đã thanh toán
                            <i className="pl-1 fs-16 lar la-check-circle"></i>
                            </span>
                        </p>
                        <p className="item">
                            <span className="d-flex align-items-center payment_status_2">
                                Sắp tới hạn
                            <i className="pl-1 fs-16 las la-fast-forward"></i>
                            </span>
                        </p>
                        <p className="item">
                            <span className="d-flex align-items-center payment_status_3">
                                Trễ hạn
                            <i className="pl-1 fs-16 las la-exclamation-triangle"></i>
                            </span>
                        </p>
                        <p className="item">
                            <span className="d-flex align-items-center payment_status_4">
                                Dừng
                            <i className="pl-1 fs-16 las la-hourglass-end"></i>
                            </span>
                        </p>
                        <p className="item">
                            <span className="d-flex align-items-center payment_status_5">
                                Chưa thanh toán
                            <i className="pl-1 fs-16 las la-file-alt"></i>
                            </span>
                        </p>

                    </div>
                    <div className="uni_text_000">ĐVT: tỷ đồng</div>
                </div>

                <div className="sales_house-selected">
                    <div className="m_table m_table--sales min-width-100-pc">
                        <table>
                            <thead>
                                <tr>
                                    <th className="pl-0">STT</th>
                                    <th>TẦNG / LÔ
                                    <i className="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>SẢN PHẨM
                                    <i className="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>CHÍNH SÁCH TT
                                    <i className="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>ĐỢT TT</th>
                                    <th>TÊN KHÁCH HÀNG</th>
                                    <th>TÌNH TRẠNG</th>
                                    <th>SỐ TIỀN</th>
                                    <th>LŨY KẾ</th>
                                    <th>THỰC TẾ</th>
                                    <th width="6%"></th>
                                    <th className="text-right">
                                        <i className="icon las la-cog"></i>
                                    </th>
                                </tr>
                            </thead>

                            <tr className="parent" data-parent="row01">
                                <td className="number text-left pl-0">1</td>
                                <td colspan="2">

                                    <div className="floor_selected">
                                        <div className="floor text-uppercase min-width-110">B6</div>
                                        <a className="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                            Tổng số sản phẩm: 14
                                    </a>
                                    </div>

                                </td>
                                <td colspan="4"></td>

                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td className="text-center"><i className="icon icon_collapse las la-plus-circle"></i></td>
                            </tr>

                            <tr className="child child-row01" data-parent="sub-row0101" data-child="row01">
                                <td className="text-left pl-0">
                                    a
                            </td>
                                <td colspan="2">
                                    <div className="floor_selected">
                                        <div className="agency channel text-uppercase min-width-110 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a className="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                                <td colspan="4"></td>

                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td className="text-center">
                                    <i className="icon icon_collapse angle las la-angle-down"></i>
                                </td>
                            </tr>

                            <tr className="child child-sub-row0101" data-filter="agency" data-child="row01">
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation opacity-0">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>
                                    <a href="#" className="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span className="payment_status_border_1 payment_status_1 d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán
                                </span>
                                </td>

                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>

                                <td className="text-center">
                                    <i className="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td className="text-center">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item fw-medium" href="#">
                                                <i className="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="child child-sub-row0101" data-filter="internal" data-child="row01">
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>

                                    <a href="#" className="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span className="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>

                                <td className="text-center">
                                    <i className="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td className="text-center">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item fw-medium" href="#">
                                                <i className="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="child child-row01" data-parent="sub-row0102" data-child="row01">
                                <td className="text-left pl-0">
                                    b
                            </td>
                                <td colspan="2">
                                    <div className="floor_selected">
                                        <div className="agency channel text-uppercase min-width-110 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 2
                                    </div>
                                        <a className="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                                <td colspan="4"></td>

                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td className="text-center">
                                    <i className="icon icon_collapse angle las la-angle-down"></i>
                                </td>
                            </tr>

                            <tr className="child child-sub-row0102" data-filter="agency" data-child="row01">
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation opacity-0">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>
                                    <a href="#" className="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span className="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>

                                <td className="text-center">
                                    <i className="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td className="text-center">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item fw-medium" href="#">
                                                <i className="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="child child-sub-row0102" data-filter="internal" data-child="row01">
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>

                                    <a href="#" className="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span className="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>

                                <td className="text-center">
                                    <i className="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td className="text-center">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item fw-medium" href="#">
                                                <i className="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>


                            <tr className="parent" data-parent="row02">
                                <td className="number text-left pl-0">1</td>
                                <td colspan="2">

                                    <div className="floor_selected">
                                        <div className="floor text-uppercase min-width-110">B6</div>
                                        <a className="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                            Tổng số sản phẩm: 14
                                    </a>
                                    </div>

                                </td>
                                <td colspan="4"></td>

                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td className="text-center"><i className="icon icon_collapse las la-plus-circle"></i></td>
                            </tr>


                            <tr className="child child-row02" data-parent="sub-row0201" data-child="row02">
                                <td className="text-left pl-0">
                                    a
                            </td>
                                <td colspan="2">
                                    <div className="floor_selected">
                                        <div className="agency channel text-uppercase min-width-110 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a className="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                                <td colspan="4"></td>

                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_01_text sales_status_style02_01_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40 min-width-65 border-width-1">
                                        50
                                </div>
                                </td>
                                <td>
                                    <div className="sales_status_style02_02_text sales_status_style02_02_border pl-3 pr-3 font-weight-bold d-flex align-items-center justify-content-center fs-16 min-height-40  min-width-65 border-width-1">
                                        50
                                </div>
                                </td>

                                <td></td>
                                <td className="text-center">
                                    <i className="icon icon_collapse angle las la-angle-down"></i>
                                </td>
                            </tr>


                            <tr className="child child-sub-row0201" data-filter="internal" data-child="row02">
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation opacity-0">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>
                                    <a href="#" className="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span className="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>

                                <td className="text-center">
                                    <i className="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td className="text-center">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item fw-medium" href="#">
                                                <i className="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="child child-sub-row0201" data-filter="agency" data-child="row02">
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>

                                    <a href="#" className="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Nguyễn Văn A</u></a>
                                </td>
                                <td>
                                    <span className="payment_status_border_1 payment_status_1  d-inline-flex align-items-center justify-content-center min-height-40 pl-3 pr-3 width-140 w-100 fw-medium">
                                        Đã thanh toán</span>
                                </td>

                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>
                                <td>
                                    <b className="">0.1</b>
                                </td>

                                <td className="text-center">
                                    <i className="icon icon_noti las la-comments" data-toggle="modal" data-target="#salesNote"><small>1</small></i>
                                </td>
                                <td className="text-center">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots las la-ellipsis-h"></i>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item fw-medium" href="#">
                                                <i className="icon-dropdown las la-exclamation-triangle"></i>
                                            Cảnh báo
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="sales_select-dates">
                    <div className="item from d-flex align-items-center max-width-auto w-auto">
                        <div className="text fw-medium uni_text_6d30ab pr-3 mb-0">Từ</div>
                        <div className="m_datepicker max-width-130">
                            <input type="text" className="form-control js-datepicker border_color_6d30ab" placeholder="-" />
                        </div>
                    </div>
                    <div className="item to d-flex align-items-center max-width-auto w-auto">
                        <div className="text fw-medium uni_text_6d30ab pr-3 mb-0">Đến</div>
                        <div className="m_datepicker max-width-130">
                            <input type="text" className="form-control js-datepicker border_color_6d30ab" placeholder="-" />
                        </div>
                    </div>
                </div>

                <div className="sales_time-payment d-flex">
                    <div className="m_table m_table--sales m_table--fixed td-border-right max-height-100">
                        <table style="min-width: 665px;">
                            <thead>
                                <tr>
                                    <th className="pl-0">STT</th>
                                    <th>TẦNG / LÔ
                                    <i className="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>SẢN PHẨM
                                    <i className="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>CHÍNH SÁCH TT
                                    <i className="icon_sort las la-exchange-alt"></i>
                                    </th>
                                    <th>ĐỢT TT</th>
                                </tr>
                            </thead>
                            <tr>
                                <td colspan="5" className="pl-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="uni_text_6d30ab font-weight-bold text-uppercase">
                                            Tổng doanh thu của dự án
                                    </span>
                                        <div className="ml-auto min-height-40 width-110 text-white bg_color_6d30ab d-flex align-items-center justify-content-center">
                                            152.546
                                    </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>

                                <td colspan="5" className="pl-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="m_text_e94c4c font-weight-bold text-uppercase">
                                            Tổng CÔNG NỢ PHẢI THU
                                    </span>
                                        <div className="ml-auto min-height-40 width-110 text-white bg_color_e94c4c d-flex align-items-center justify-content-center">
                                            3.845
                                    </div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="parent" data-parent="row01">
                                <td className="number text-left pl-0 pr-0">
                                    <div className="d-flex align-items-center">
                                        <span>1</span>
                                        <i className="pl-3 icon icon_collapse las la-plus-circle"></i>
                                    </div>
                                </td>
                                <td colspan="4">

                                    <div className="floor_selected">
                                        <div className="floor text-uppercase min-width-80">B6</div>
                                        <a className="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                            Tổng số sản phẩm: 14
                                    </a>
                                    </div>

                                </td>
                            </tr>

                            <tr className="child child-row01" data-parent="sub-row0101" data-child="row01">
                                <td className="text-left pl-0 pr-0">
                                    <div className="d-flex align-items-center">
                                        <span>a</span>
                                        <i className="pl-3 fs-18 icon icon_collapse angle las la-angle-down"></i>
                                    </div>
                                </td>
                                <td colspan="4">
                                    <div className="floor_selected">
                                        <div className="agency channel text-uppercase min-width-80 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a className="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                            </tr>

                            <tr className="child child-sub-row0101" data-filter="agency" data-child="row01">
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation opacity-0">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>
                                    <a href="#" className="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>
                            <tr className="child child-sub-row0101" data-filter="internal" data-child="row01">
                                <td className="null"></td>
                                <td className="null"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>

                                    <a href="#" className="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>


                            <tr className="child child-row01" data-parent="sub-row0102" data-child="row01">
                                <td className="text-left pl-0 pr-0">
                                    <div className="d-flex align-items-center">
                                        <span>b</span>
                                        <i className="pl-3 fs-18 icon icon_collapse angle las la-angle-down"></i>
                                    </div>
                                </td>
                                <td colspan="4">
                                    <div className="floor_selected">
                                        <div className="agency channel text-uppercase min-width-80 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a className="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                            </tr>

                            <tr className="child child-sub-row0102" data-filter="agency" data-child="row01">
                                <td className="null"></td>
                                <td className="null"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation opacity-0">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>
                                    <a href="#" className="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>



                            <tr className="parent" data-parent="row02">
                                <td className="number text-left pl-0 pr-0">
                                    <div className="d-flex align-items-center">
                                        <span>2</span>
                                        <i className="pl-3 icon icon_collapse las la-plus-circle"></i>
                                    </div>
                                </td>
                                <td colspan="4">

                                    <div className="floor_selected">
                                        <div className="floor text-uppercase min-width-80">B6</div>
                                        <a className="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                            Tổng số sản phẩm: 14
                                    </a>
                                    </div>

                                </td>
                            </tr>

                            <tr className="child child-row02" data-parent="sub-row0201" data-child="row02">
                                <td className="text-left pl-0 pr-0">
                                    <div className="d-flex align-items-center">
                                        <span>a</span>
                                        <i className="pl-3 fs-18 icon icon_collapse angle las la-angle-down"></i>
                                    </div>
                                </td>
                                <td colspan="4">
                                    <div className="floor_selected">
                                        <div className="agency channel text-uppercase min-width-80 fw-medium uni_text_6d30ab text-center">
                                            ĐỢT 1
                                    </div>
                                        <a className="agency channel min-width-230 text-underline border-right-0 uni_text_6d30ab">
                                            Tổng số SP theo đợt: 11
                                    </a>
                                    </div>
                                </td>

                            </tr>

                            <tr className="child child-sub-row0201" data-filter="agency" data-child="row02">
                                <td className="border-bottom-none"></td>
                                <td className="border-bottom-none"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation opacity-0">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>
                                    <a href="#" className="fw-medium sales_agency_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>
                            <tr className="child child-sub-row0201" data-filter="internal" data-child="row02">
                                <td className="null"></td>
                                <td className="null"></td>
                                <td colspan="1" className="pl-0">
                                    <span className="exclamation">
                                        <i className="icon las la-exclamation-triangle"></i>
                                        <i className="text">1</i>
                                    </span>

                                    <a href="#" className="fw-medium sales_internal_text"><u>Căn hộ B2 - F.0.01</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>Chính sách A</u></a>
                                </td>
                                <td>
                                    <a href="#" className="fw-medium uni_text_000"><u>TT - 1</u></a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="m_table m_table--sales m_table--fixed table_text_center max-height-100 pb-2">
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
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                                <td className="uni_text_6d30ab fw-medium">12.512</td>
                            </tr>

                            <tr>
                                <td className="m_text_e94c4c fw-medium">0.214</td>
                                <td className="m_text_e94c4c fw-medium">0.214</td>
                                <td className="m_text_e94c4c fw-medium">0.214</td>
                                <td className="m_text_e94c4c fw-medium">0.214</td>
                                <td className="m_text_e94c4c fw-medium">0.214</td>
                                <td className="m_text_e94c4c fw-medium">-</td>
                                <td className="m_text_e94c4c fw-medium">-</td>
                                <td className="m_text_e94c4c fw-medium">-</td>
                                <td className="m_text_e94c4c fw-medium">-</td>
                                <td className="m_text_e94c4c fw-medium">-</td>
                                <td className="m_text_e94c4c fw-medium">0.214</td>
                                <td className="m_text_e94c4c fw-medium">0.214</td>
                            </tr>


                            <tr>
                                <td colspan="12"></td>
                            </tr>
                            <tr className="child child-row01" data-parent="sub-row0101" data-child="row01">
                                <td colspan="12"></td>
                            </tr>
                            <tr className="child child-sub-row0101" data-filter="agency" data-child="row01">
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 lar la-check-circle payment_status_1"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-exclamation-triangle payment_status_3"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-hourglass-end payment_status_4"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-file-alt payment_status_5"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr className="child child-sub-row0101" data-filter="internal" data-child="row01">
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


                            <tr className="child child-row01" data-parent="sub-row0102" data-child="row01">
                                <td colspan="12"></td>
                            </tr>
                            <tr className="child child-sub-row0102" data-parent="sub-row0102" data-child="row01">
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 lar la-check-circle payment_status_1"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-exclamation-triangle payment_status_3"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-hourglass-end payment_status_4"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-file-alt payment_status_5"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td colspan="12"></td>
                            </tr>


                            <tr className="child child-row02" data-parent="sub-row0201" data-child="row02">
                                <td colspan="12"></td>
                            </tr>
                            <tr className="child child-sub-row0201" data-filter="agency" data-child="row02">
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-exclamation-triangle payment_status_3"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-hourglass-end payment_status_4"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-file-alt payment_status_5"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-medium">20</span>
                                        <i className="fs-20 las la-fast-forward payment_status_2"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr className="child child-sub-row0201" data-filter="internal" data-child="row02">
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