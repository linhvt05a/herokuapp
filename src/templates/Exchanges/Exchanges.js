import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="top_banner--detail d-flex align-items-end" style={{ backgroundImage: 'url(./assets/images/banner_exchanges.png)' }}>
                    <div className="container container-sm container-md d-flex justify-content-center">
                        <div className="project_detail--filter column-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group icon_building">
                                        <select className="select2 js-select2">
                                            <option selected disabled> Chọn dự án</option>
                                            <option>TPHCM</option>
                                            <option>Hà Nội</option>
                                            <option>Đà Nẵng</option>
                                            <option>Bình Dương</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group icon_border">
                                        <select className="select2 js-select2">
                                            <option selected disabled> Chọn khu</option>
                                            <option>TPHCM</option>
                                            <option>Hà Nội</option>
                                            <option>Đà Nẵng</option>
                                            <option>Bình Dương</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group icon_boxes">
                                        <select className="select2 js-select2">
                                            <option selected disabled> Chọn khối/lô</option>
                                            <option>TPHCM</option>
                                            <option>Hà Nội</option>
                                            <option>Đà Nẵng</option>
                                            <option>Bình Dương</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exchanges bg_grey">
                    <div className="container container-sm container-md">
                        <h2 className="main_heading"><span>Sàn giao dịch</span></h2>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8 mb-4 mb-lg-0">
                                <div className="project_item__detail">
                                    <div className="view_horizontal">
                                        <div className="item">
                                            <i className="icon fas fa-building" />
                                            <div className="text">
                                                <span className="text-uppercase">
                                                    DỰ ÁN
                                                </span>
                                                <span className="value">Royal Garden</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <i className="icon fas fa-money-bill-wave" />
                                            <div className="text">
                                                <span className="text-uppercase">
                                                    KHU
                                                </span>
                                                <span className="value money">VALLEN</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <i className="icon fas fa-boxes" />
                                            <div className="text">
                                                <span className="text-uppercase">
                                                    KHỐI
                                                </span>
                                                <span className="value times">B</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view_vertical">
                                        <div className="item">
                                            <div className="heading">
                                                <span className="text-uppercase">
                                                    CHÍNH SÁCH BÁN HÀNG
                                                </span>
                                                <span className="value">Tiêu chuẩn</span>
                                            </div>
                                            <div className="list">
                                                <div className="list_item">
                                                    <span className="title">
                                                        Tiền cọc (đồng)
                                                    </span>
                                                    <span className="value">
                                                        100.000.000
                                                    </span>
                                                </div>
                                                <div className="list_item">
                                                    <span className="title">
                                                        Số đợt trả
                                                    </span>
                                                    <span className="value">
                                                        15
                                                    </span>
                                                </div>
                                                <div className="list_item">
                                                    <span className="title">
                                                        Tổng tiền (đồng)
                    </span>
                                                    <span className="value">
                                                        3.000.000.000
                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="heading">
                                                <span className="text-uppercase">
                                                    CHÍNH SÁCH VAY
                  </span>
                                                <span className="value">10 Ngân hàng hổ trợ</span>
                                            </div>
                                            <div className="list">
                                                <div className="list_item w-100">
                                                    <span className="title">
                                                        Tiền vay tối thiểu (đồng)
                    </span>
                                                    <span className="value">
                                                        500.000.000
                    </span>
                                                </div>
                                                <div className="list_item">
                                                    <span className="title">
                                                        Thời gian vay tối thiểu
                    </span>
                                                    <span className="value">
                                                        15 năm
                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="heading">
                                                <span className="text-uppercase">
                                                    TIỆN ÍCH
                  </span>
                                                <span className="value text-uppercase">CĂN HỘ</span>
                                            </div>
                                            <div className="list_style_02 pt-2">
                                                <div className="list_style_02--item">
                                                    Bể bơi người lớn
                  </div>
                                                <div className="list_style_02--item">
                                                    Giàn hoa, ghế nghỉ
                  </div>
                                                <div className="list_style_02--item">
                                                    Vườn thiền
                  </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exchanges_apartment">
                                    <div className="exchanges_apartment--item">
                                        <span className="stt">1</span>
                                        <div className="exchanges_apartment--heading">
                                            <div className="floor_selected">
                                                <div className="floor">B6</div>
                                                <div className="channel uni_text_6d30ab text-underline border-right-0">
                                                    Tổng số sản phẩm: 7
                  </div>
                                            </div>
                                            <div className="filter sales_status_cart_bg_03" data-status={03}>
                                                Đã bán: 6
                </div>
                                            <div className="filter sales_status_cart_bg_02" data-status={02}>
                                                Đặt cọc: 2
                </div>
                                            <div className="filter sales_status_cart_bg_05" data-status={05}>
                                                Đang bán: 2
                </div>
                                            <div className="filter sales_status_cart_bg_04" data-status={04}>
                                                Chưa bán: 0
                </div>
                                        </div>
                                        <div className="exchanges_apartment--content">
                                            <div className="exchanges_apartment--child sales_status_02">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_03">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_04">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_05">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_02">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_03">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_04">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="exchanges_apartment--item">
                                        <span className="stt">2</span>
                                        <div className="exchanges_apartment--heading">
                                            <div className="floor_selected">
                                                <div className="floor">B6</div>
                                                <div className="agency channel uni_text_6d30ab text-underline border-right-0">
                                                    Tổng số sản phẩm: 7
                  </div>
                                            </div>
                                            <div className="filter sales_status_cart_bg_03" data-status={03}>
                                                Đã bán: 6
                </div>
                                            <div className="filter sales_status_cart_bg_02" data-status={02}>
                                                Đặt cọc: 2
                </div>
                                            <div className="filter sales_status_cart_bg_05" data-status={05}>
                                                Đang bán: 2
                </div>
                                            <div className="filter sales_status_cart_bg_04" data-status={04}>
                                                Chưa bán: 0
                </div>
                                        </div>
                                        <div className="exchanges_apartment--content">
                                            <div className="exchanges_apartment--child sales_status_02">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_03">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_04">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_05">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_02">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_03">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                            <div className="exchanges_apartment--child sales_status_04">
                                                <div className="line line--1">
                                                    <div className="left"><a href="#" className="link">B6 - F.0.01</a></div>
                                                    <div className="right">2PN + 1</div>
                                                </div>
                                                <div className="line line--2">
                                                    <div className="left">125.23 m<sup>2</sup> </div>
                                                    <div className="right">2 WC</div>
                                                </div>
                                                <div className="line line--3">
                                                    <div className="left">
                                                        <span className="icon fas fa-user-clock">
                                                            <i className="number">9</i>
                                                        </span>
                                                        <span className="icon fas fa-heart">
                                                            <i className="number">9+</i>
                                                        </span>
                                                    </div>
                                                    <div className="right">ĐB</div>
                                                </div>
                                                <div className="line line--4">
                                                    <div className="left">5.5</div>
                                                    <div className="right">tỷ đồng</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-4">
                                <div className="exchanges_filter">
                                    <div className="heading">
                                        <span className="title">Sản phẩm khối B</span>
                                        <span className="icon_filter fas fa-filter" />
                                    </div>
                                    <div className="searchProject">
                                        <div className="form-group">
                                            <select className="select2 js-select2 mt-3">
                                                <option selected disabled>Số phòng ngủ</option>
                                                <option>TPHCM</option>
                                                <option>Hà Nội</option>
                                                <option>Đà Nẵng</option>
                                                <option>Bình Dương</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select className="select2 js-select2 mt-3">
                                                <option selected disabled>Hướng nhà</option>
                                                <option>Quận 1</option>
                                                <option>Trúc Bạch</option>
                                                <option>Sơn Trà</option>
                                                <option>Tân Uyên</option>
                                            </select>
                                        </div>
                                        {/*PHẠM VI GIÁ*/}
                                        <div className="map_search--range">
                                            <div className="range_item price">
                                                <label className="label">Phạm vi giá <br /> <i>(tỷ đồng)</i></label>
                                                <div className="slider-wrapper">
                                                    <input className="input-range" type="text" data-slider-step={1} data-slider-value="0, 60" data-slider-min={0} data-slider-max={100} data-slider-range="true" data-slider-tooltip_split="true" />
                                                </div>
                                            </div>
                                            <div className="range_item area">
                                                <label className="label">Diện tích <i>(m<sup>2</sup>)</i></label>
                                                <div className="slider-wrapper">
                                                    <input className="input-range" type="text" data-slider-step={1} data-slider-value="80, 1000" data-slider-min={0} data-slider-max={1000} data-slider-range="true" data-slider-tooltip_split="true" />
                                                </div>
                                            </div>
                                        </div>
                                        {/*TÌM KIẾM*/}
                                        <div className="text-center">
                                            <a href="#" className="btn btn_green text-uppercase w-100">tìm kiếm</a>
                                        </div>
                                    </div>
                                    <div className="wrap">
                                        <div className="floors active">
                                            <div className="floor">
                                                <span className="floor-name">
                                                    Tầng 1
                                                </span>
                                                <span className="floor-number">
                                                    <i className="available">5</i>/15
                                                </span>
                                            </div>
                                            <div className="aparts">
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="floors">
                                            <div className="floor">
                                                <span className="floor-name">
                                                    Tầng 2
                                                </span>
                                                <span className="floor-number">
                                                    <i className="available">5</i>/15
                                                </span>
                                            </div>
                                            <div className="aparts">
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="floors">
                                            <div className="floor">
                                                <span className="floor-name">
                                                    Tầng 3
                                                </span>
                                                <span className="floor-number">
                                                    <i className="available">5</i>/15
                                                </span>
                                            </div>
                                            <div className="aparts">
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                                <p className="apart">
                                                    <span className="apart-name">Căn B - F0.1</span>
                                                    <span className="apart-price">1.6 tỷ đồng</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {'{'}% include "./_promotion_item_tabs.twig" %{'}'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
