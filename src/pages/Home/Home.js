import React from "react";
import { Link } from "react-router-dom";
import { CardSaleFlash, CardNews } from "./Layout/index";

const Home = (props) => {

    return (
        <div className="homePage">
            {/* block map  */}
            <div className="map">
                <div className="map_origin">
                    <figure>
                        <img
                            className="w-100"
                            src="./assets/images/map.jpg"
                            alt="Bạn muốn tìm dự án bất động sản của Minerva"
                        />
                    </figure>
                    <div className="map_origin--content">
                        <h1 className="heading text-center">
                            Bạn muốn tìm dự án bất động sản của Minerva
                        </h1>
                        <div className="list_button d-flex justify-content-center">
                            <Link
                                to="/#"
                                className="btn btn_white map_to"
                                data-maptab="map_my-place"
                            >
                                VỊ TRÍ CỦA BẠN
                            </Link>
                            <Link
                                to="/#"
                                className="btn btn_green map_to"
                                data-maptab="map_search"
                            >
                                TÌM KIẾM
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="map_my-place map_tab">
                    <figure>
                        <img
                            className="w-100"
                            src="./assets/images/map_my_place.jpg"
                            alt="Bạn muốn tìm dự án bất động sản của Minerva"
                        />
                    </figure>
                </div>
                <div className="map_search map_tab">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-xl-6 p-0 bg_image d-flex justify-content-center flex-column">
                                <div className="map_search--content_home">
                                    <h2 className="heading">
                                        Tìm kiếm dự án theo{" "}
                                    </h2>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4">
                                            <div className="form-group">
                                                <select
                                                    defaultValue={"DEFAULT"}
                                                    className="js-select2 form-control"
                                                    name="state"
                                                >
                                                    <option
                                                        disabled
                                                        value="AL"
                                                    >
                                                        Tỉnh/Thành phố
                                                    </option>
                                                    <option value="WY">
                                                        Wyoming
                                                    </option>
                                                    <option value="WY">
                                                        Wyoming
                                                    </option>
                                                    <option value="WY">
                                                        Wyoming
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4">
                                            <div className="form-group">
                                                <select
                                                    defaultValue={"DEFAULT"}
                                                    className="js-select2 form-control"
                                                    name="state"
                                                >
                                                    <option
                                                        disabled
                                                        value="AL"
                                                    >
                                                        Quận/Huyện
                                                    </option>
                                                    <option value="WY">
                                                        Wyoming
                                                    </option>
                                                    <option value="WY">
                                                        Wyoming
                                                    </option>
                                                    <option value="WY">
                                                        Wyoming
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4">
                                            <div className="form-group">
                                                <select
                                                    defaultValue={"DEFAULT"}
                                                    className="js-select2 form-control"
                                                    name="state"
                                                >
                                                    <option
                                                        disabled
                                                        value="AL"
                                                    >
                                                        Chọn tiến độ
                                                    </option>
                                                    <option value="WY">
                                                        Wyoming
                                                    </option>
                                                    <option value="WY">
                                                        Wyoming
                                                    </option>
                                                    <option value="WY">
                                                        Wyoming
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="map_search--range">
                                        <div className="range_item price">
                                            <label className="label">
                                                Phạm vi giá (tỷ đồng)
                                            </label>
                                            <div className="slider-wrapper">
                                                <input
                                                    className="input-range"
                                                    type="text"
                                                    data-slider-step={1}
                                                    data-slider-value="0, 60"
                                                    data-slider-min={0}
                                                    data-slider-max={100}
                                                    data-slider-range="true"
                                                    data-slider-tooltip_split="true"
                                                />
                                            </div>
                                        </div>
                                        <div className="range_item area">
                                            <label className="label">
                                                Diện tích (m2)
                                            </label>
                                            <div className="slider-wrapper">
                                                <input
                                                    className="input-range"
                                                    type="text"
                                                    data-slider-step={1}
                                                    data-slider-value="80, 1000"
                                                    data-slider-min={0}
                                                    data-slider-max={1000}
                                                    data-slider-range="true"
                                                    data-slider-tooltip_split="true"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="map_search--option">
                                        <div className="search_option">
                                            <div
                                                className="search_option-header"
                                                data-multitoggle="#search_option"
                                            >
                                                <div className="search_option-toggle" />
                                                <p className="search_option-title">
                                                    Lựa chọn loại hình bất
                                                    động sản
                                                </p>
                                            </div>
                                            <div className="search_option-content">
                                                <div className="search_option-content-inner">
                                                    <ul className="list-inline list-inline-sm">
                                                        <li>
                                                            <label
                                                                className="checkbox-inline"
                                                                type="checkbox"
                                                            >
                                                                <input
                                                                    name="checkbox-1"
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                    type="checkbox"
                                                                    className="checkbox-custom"
                                                                />
                                                                <span className="checkbox-custom-dummy" />
                                                                Chung cư căn
                                                                hộ
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label
                                                                className="checkbox-inline"
                                                                type="checkbox"
                                                            >
                                                                <input
                                                                    name="checkbox-2"
                                                                    defaultValue={
                                                                        2
                                                                    }
                                                                    type="checkbox"
                                                                    className="checkbox-custom"
                                                                />
                                                                <span className="checkbox-custom-dummy" />
                                                                Biệt thự cao
                                                                cập
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label
                                                                className="checkbox-inline"
                                                                type="checkbox"
                                                            >
                                                                <input
                                                                    name="checkbox-3"
                                                                    defaultValue={
                                                                        3
                                                                    }
                                                                    type="checkbox"
                                                                    className="checkbox-custom"
                                                                />
                                                                <span className="checkbox-custom-dummy" />
                                                                Văn phòng
                                                                cho thuê
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label
                                                                className="checkbox-inline"
                                                                type="checkbox"
                                                            >
                                                                <input
                                                                    name="checkbox-4"
                                                                    defaultValue={
                                                                        4
                                                                    }
                                                                    type="checkbox"
                                                                    className="checkbox-custom"
                                                                />
                                                                <span className="checkbox-custom-dummy" />
                                                                Siêu thị
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label
                                                                className="checkbox-inline"
                                                                type="checkbox"
                                                            >
                                                                <input
                                                                    name="checkbox-5"
                                                                    defaultValue={
                                                                        5
                                                                    }
                                                                    type="checkbox"
                                                                    className="checkbox-custom"
                                                                />
                                                                <span className="checkbox-custom-dummy" />
                                                                Trung tâm
                                                                thương mại
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            to="/#"
                                            className="btn btn_green"
                                        >
                                            TÌM KIẾM
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-xl-6 p-0">
                                <figure
                                    className="has_bg"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/images/map_search.jpg)",
                                    }}
                                ></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end block map  */}
            <CardSaleFlash datas={["a", "iu", "e", "vl", "wa", "di"]} />
            {/* block over  */}
            <div className="overview">
                <div className="container container-sm container-md">
                    <h2 className="overview_heading">
                        Tổng quan Minerva
                        <span className="sub">
                            Minerva phát triển các mảng bất động sản có áp
                            dụng các công nghệ thông minh hiện nay. Giúp mọi
                            người có cuộc sống thoải mái và tiện nghi với
                            công nghệ.
                        </span>
                    </h2>
                    <div className="overview_services">
                        <div className="item">
                            <p className="number">1</p>
                            <p className="title">Bất động sản</p>
                            <p className="text">
                                Xây dựng các công trình bất động sản chất
                                lượng, đạt chuẩn cao cấp và đáp ứng yêu cầu
                                của bạn
                            </p>
                        </div>
                        <div className="item">
                            <p className="number">2</p>
                            <p className="title">Công nghệ thông minh</p>
                            <p className="text">
                                Áp dụng công nghệ thông minh vào ngôi nhà mơ
                                ước của bạn. Giúp bạn có được cuộc sống
                                thoải mái và đầy tiện nghi
                            </p>
                        </div>
                        <div className="item">
                            <p className="number">3</p>
                            <p className="title">Nâng cấp công nghệ</p>
                            <p className="text">
                                Bảo trì, cập nhật và nâng cấp công nghệ
                                thông minh của người dùng theo mọi thời điểm
                                công nghệ mới nhất
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end block over  */}
            {/* project_list  */}
            <div className="project_list project_tab">
                <div className="container container-sm container-md">
                    <div className="project_list--heading">
                        <h2 className="main_heading">
                            <span>Danh sách dự án</span>
                        </h2>
                        <div className="project_list--status text-uppercase">
                            <Link
                                to="/#"
                                className="status working"
                                data-to="working"
                            >
                                ĐANG BÁN
                            </Link>
                            <Link
                                to="/#"
                                className="status done"
                                data-to="done"
                            >
                                SẮP BÁN
                            </Link>
                        </div>
                    </div>
                    <div className="row project_list--content project_tab--content">
                        <div className="col col-12 col-sm-6 col-md-7 col-xl-7">
                            <div className="project_list--item">
                                <figure
                                    className="image"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/images/project_list01.jpg)",
                                    }}
                                ></figure>
                                <div className="heading">
                                    <div className="heading__name">
                                        Dự Án Royal Garden
                                    </div>
                                    <div className="heading__date">
                                        Đợt 1 : 02/04/2020 - 30/04/2020
                                    </div>
                                    <div className="heading__list-btn">
                                        <Link
                                            to="/#"
                                            className="btn btn_green"
                                        >
                                            CHI TIẾT
                                        </Link>
                                        <Link
                                            to="/#"
                                            className="btn btn_white"
                                        >
                                            SẢN PHẨM
                                        </Link>
                                    </div>
                                </div>
                                <div className="sell_tatus selling">
                                    Đang bán
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-5 col-xl-5">
                            <div className="project_list--item">
                                <figure
                                    className="image"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/images/project_list02.jpg)",
                                    }}
                                ></figure>
                                <div className="heading">
                                    <div className="heading__name">
                                        Dự Án Royal Garden
                                    </div>
                                    <div className="heading__date">
                                        Đợt 1 : 02/04/2020 - 30/04/2020
                                    </div>
                                    <div className="heading__list-btn">
                                        <Link
                                            to="/#"
                                            className="btn btn_green"
                                        >
                                            CHI TIẾT
                                        </Link>
                                        <Link
                                            to="/#"
                                            className="btn btn_white"
                                        >
                                            SẢN PHẨM
                                        </Link>
                                    </div>
                                </div>
                                <div className="sell_tatus will_sell">
                                    Sắp bán
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-xl-4">
                            <div className="project_list--item">
                                <figure
                                    className="image"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/images/project_list03.jpg)",
                                    }}
                                ></figure>
                                <div className="heading">
                                    <div className="heading__name">
                                        Dự Án Royal Garden
                                    </div>
                                    <div className="heading__date">
                                        Đợt 1 : 02/04/2020 - 30/04/2020
                                    </div>
                                    <div className="heading__list-btn">
                                        <Link
                                            to="/#"
                                            className="btn btn_green"
                                        >
                                            CHI TIẾT
                                        </Link>
                                        <Link
                                            to="/#"
                                            className="btn btn_white"
                                        >
                                            SẢN PHẨM
                                        </Link>
                                    </div>
                                </div>
                                <div className="sell_tatus will_sell">
                                    Sắp bán
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-xl-4">
                            <div className="project_list--item">
                                <figure
                                    className="image"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/images/project_list04.jpg)",
                                    }}
                                ></figure>
                                <div className="heading">
                                    <div className="heading__name">
                                        Dự Án Royal Garden
                                    </div>
                                    <div className="heading__date">
                                        Đợt 1 : 02/04/2020 - 30/04/2020
                                    </div>
                                    <div className="heading__list-btn">
                                        <Link
                                            to="/#"
                                            className="btn btn_green"
                                        >
                                            CHI TIẾT
                                        </Link>
                                        <Link
                                            to="/#"
                                            className="btn btn_white"
                                        >
                                            SẢN PHẨM
                                        </Link>
                                    </div>
                                </div>
                                <div className="sell_tatus will_sell">
                                    Sắp bán
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-xl-4">
                            <div className="project_list--item">
                                <figure
                                    className="image"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/images/project_list05.jpg)",
                                    }}
                                ></figure>
                                <div className="heading">
                                    <div className="heading__name">
                                        Dự Án Royal Garden
                                    </div>
                                    <div className="heading__date">
                                        Đợt 1 : 02/04/2020 - 30/04/2020
                                    </div>
                                    <div className="heading__list-btn">
                                        <Link
                                            to="/#"
                                            className="btn btn_green"
                                        >
                                            CHI TIẾT
                                        </Link>
                                        <Link
                                            to="/#"
                                            className="btn btn_white"
                                        >
                                            SẢN PHẨM
                                        </Link>
                                    </div>
                                </div>
                                <div className="sell_tatus will_sell">
                                    Sắp bán
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6">
                            <div className="project_list--item">
                                <figure
                                    className="image"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/images/project_list06.jpg)",
                                    }}
                                ></figure>
                                <div className="heading">
                                    <div className="heading__name">
                                        Dự Án Royal Garden
                                    </div>
                                    <div className="heading__date">
                                        Đợt 1 : 02/04/2020 - 30/04/2020
                                    </div>
                                    <div className="heading__list-btn">
                                        <Link
                                            to="/#"
                                            className="btn btn_green"
                                        >
                                            CHI TIẾT
                                        </Link>
                                        <Link  
                                            to="/#"
                                            className="btn btn_white"
                                        >
                                            SẢN PHẨM
                                        </Link>
                                    </div>
                                </div>
                                <div className="sell_tatus will_sell">
                                    Sắp bán
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6">
                            <div className="project_list--item">
                                <figure
                                    className="image"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/images/project_list07.jpg)",
                                    }}
                                ></figure>
                                <div className="heading">
                                    <div className="heading__name">
                                        Dự Án Royal Garden
                                    </div>
                                    <div className="heading__date">
                                        Đợt 1 : 02/04/2020 - 30/04/2020
                                    </div>
                                    <div className="heading__list-btn">
                                        <Link
                                            to="/#"
                                            className="btn btn_green"
                                        >
                                            CHI TIẾT
                                        </Link>
                                        <Link
                                            to="/#"
                                            className="btn btn_white"
                                        >
                                            SẢN PHẨM
                                        </Link>
                                    </div>
                                </div>
                                <div className="sell_tatus will_sell">
                                    Sắp bán
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane show fade tab_working">
                            <div className="row">
                                <div className="col col-6 col-sm-6 col-md-7 col-xl-7">
                                    <div className="project_list--item">
                                        <figure
                                            className="image"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/images/project_list01.jpg)",
                                            }}
                                        />
                                        <div className="heading">
                                            <div className="heading__name">
                                                Dự Án Royal Garden
                                            </div>
                                            <div className="heading__date">
                                                Đợt 1 : 02/04/2020 -
                                                30/04/2020
                                            </div>
                                            <div className="heading__list-btn">
                                                <Link
                                                    to="/#"
                                                    className="btn btn_green"
                                                >
                                                    CHI TIẾT
                                                </Link>
                                                <Link
                                                    to="/#"
                                                    className="btn btn_white"
                                                >
                                                    SẢN PHẨM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sell_tatus selling">
                                            Đang bán
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-6 col-sm-6 col-md-5 col-xl-5">
                                    <div className="project_list--item">
                                        <figure
                                            className="image"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/images/project_list02.jpg)",
                                            }}
                                        />
                                        <div className="heading">
                                            <div className="heading__name">
                                                Dự Án Royal Garden
                                            </div>
                                            <div className="heading__date">
                                                Đợt 1 : 02/04/2020 -
                                                30/04/2020
                                            </div>
                                            <div className="heading__list-btn">
                                                <Link
                                                    to="/#"
                                                    className="btn btn_green"
                                                >
                                                    CHI TIẾT
                                                </Link>
                                                <Link
                                                    to="/#"
                                                    className="btn btn_white"
                                                >
                                                    SẢN PHẨM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sell_tatus selling">
                                            Đang bán
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-4 col-md-4 col-xl-4">
                                    <div className="project_list--item">
                                        <figure
                                            className="image"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/images/project_list03.jpg)",
                                            }}
                                        />
                                        <div className="heading">
                                            <div className="heading__name">
                                                Dự Án Royal Garden
                                            </div>
                                            <div className="heading__date">
                                                Đợt 1 : 02/04/2020 -
                                                30/04/2020
                                            </div>
                                            <div className="heading__list-btn">
                                                <Link
                                                    to="/#"
                                                    className="btn btn_green"
                                                >
                                                    CHI TIẾT
                                                </Link>
                                                <Link
                                                    to="/#"
                                                    className="btn btn_white"
                                                >
                                                    SẢN PHẨM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sell_tatus selling">
                                            Đang bán
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane show fade tab_done">
                            <div className="row">
                                <div className="col col-12 col-sm-4 col-md-4 col-xl-4">
                                    <div className="project_list--item">
                                        <figure
                                            className="image"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/images/project_list04.jpg)",
                                            }}
                                        />
                                        <div className="heading">
                                            <div className="heading__name">
                                                Dự Án Royal Garden
                                            </div>
                                            <div className="heading__date">
                                                Đợt 1 : 02/04/2020 -
                                                30/04/2020
                                            </div>
                                            <div className="heading__list-btn">
                                                <Link
                                                    to="/#"
                                                    className="btn btn_green"
                                                >
                                                    CHI TIẾT
                                                </Link>
                                                <Link
                                                    to="/#"
                                                    className="btn btn_white"
                                                >
                                                    SẢN PHẨM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sell_tatus will_sell">
                                            Sắp bán
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-4 col-md-4 col-xl-4">
                                    <div className="project_list--item">
                                        <figure
                                            className="image"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/images/project_list05.jpg)",
                                            }}
                                        />
                                        <div className="heading">
                                            <div className="heading__name">
                                                Dự Án Royal Garden
                                            </div>
                                            <div className="heading__date">
                                                Đợt 1 : 02/04/2020 -
                                                30/04/2020
                                            </div>
                                            <div className="heading__list-btn">
                                                <Link
                                                    to="/#"
                                                    className="btn btn_green"
                                                >
                                                    CHI TIẾT
                                                </Link>
                                                <Link
                                                    to="/#"
                                                    className="btn btn_white"
                                                >
                                                    SẢN PHẨM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sell_tatus will_sell">
                                            Sắp bán
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-6 col-sm-6 col-md-6 col-xl-6">
                                    <div className="project_list--item">
                                        <figure
                                            className="image"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/images/project_list06.jpg)",
                                            }}
                                        />
                                        <div className="heading">
                                            <div className="heading__name">
                                                Dự Án Royal Garden
                                            </div>
                                            <div className="heading__date">
                                                Đợt 1 : 02/04/2020 -
                                                30/04/2020
                                            </div>
                                            <div className="heading__list-btn">
                                                <Link
                                                    to="/#"
                                                    className="btn btn_green"
                                                >
                                                    CHI TIẾT
                                                </Link>
                                                <Link
                                                    to="/#"
                                                    className="btn btn_white"
                                                >
                                                    SẢN PHẨM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sell_tatus will_sell">
                                            Sắp bán
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-6 col-sm-6 col-md-6 col-xl-6">
                                    <div className="project_list--item">
                                        <figure
                                            className="image"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/images/project_list07.jpg)",
                                            }}
                                        />
                                        <div className="heading">
                                            <div className="heading__name">
                                                Dự Án Royal Garden
                                            </div>
                                            <div className="heading__date">
                                                Đợt 1 : 02/04/2020 -
                                                30/04/2020
                                            </div>
                                            <div className="heading__list-btn">
                                                <Link
                                                    to="/#"
                                                    className="btn btn_green"
                                                >
                                                    CHI TIẾT
                                                </Link>
                                                <Link
                                                    to="/#"
                                                    className="btn btn_white"
                                                >
                                                    SẢN PHẨM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sell_tatus will_sell">
                                            Sắp bán
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-uppercase mt-3">
                        <Link
                            to="/#"
                            className="btn btn_purple ml-auto mr-auto"
                        >
                            XEm TẤt CẢ
                        </Link>
                    </div>
                </div>
            </div>
            {/* end project_list  */}
            {/* contact  */}
            <div className="container container-sm container-md">
                <div className="contact">
                    <div className="contact--left">
                        <div className="icon_phone">
                            <i className=" fas fa-phone-alt" />
                        </div>
                        <div className="text">
                            Liên hệ và tư vấn qua số điện thoại
                        </div>
                        <div className="phone">1900 - 123 -456</div>
                    </div>
                    <div className="contact--right">
                        <form>
                            <label className="label">Tư vấn miễn phí</label>
                            <div className="row">
                                <div className="col-12 col-sm-6 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Họ tên"
                                    />
                                </div>
                                <div className="col-12 col-sm-6 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="col-12 form-group">
                                    <textarea
                                        placeholder="Nội dung"
                                        className="form-control"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </form>
                        <div className="contact--footer">
                            <Link to="/" className="btn btn_green">
                                GỬI TIN NHẤN
                            </Link>
                            <span className="noti">
                                Cảm ơn, hẹn gặp lại trong hộp thư đến của
                                bạn!
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* end contact  */}
            {/* striking apartment  */}
            <div className="striking_apartment label_filter bg_grey">
                <div className="container container-sm container-md">
                    <div className=" label_filter--heading">
                        <h3 className="main_heading">
                            <span>Căn hộ nổi bật nhất</span>
                        </h3>
                        <div className="filter_select">
                            <div className="text">Lọc theo :</div>
                            <div className="form-group filter_project">
                                <select
                                    defaultValue={"DEFAULT"}
                                    className="js-select2"
                                    data-minimum-results-for-search="Infinity"
                                >
                                    <option>Tất cả</option>
                                    <option>Căn hộ</option>
                                    <option>Biệt thự</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="striking_apartment--content">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="item">
                                    <Link to="/#" className="link" />
                                    <figure className="image">
                                        <i className="liked active fas fa-heart" />
                                        <img
                                            src="./assets/images/house_highlight.jpg"
                                            alt="Căn hộ Saigon Royal"
                                        />
                                        <span className="type">
                                            Căn hộ cho thuê
                                        </span>
                                    </figure>
                                    <div className="heading">
                                        <h4 className="name">
                                            Căn hộ Saigon Royal
                                        </h4>
                                        <p className="address mb-0">
                                            227 đường Nguyễn Văn Cừ, Phường
                                            4, Quận 7, Tp.HCM
                                        </p>
                                    </div>
                                    <div className="details">
                                        <p className="child mb-0">
                                            <i className="icon far fa-object-ungroup" />
                                            <span className="text">
                                                Diện tích : 320 ( m2 )
                                            </span>
                                        </p>
                                        <p className="child mb-0">
                                            <i className="icon fas fa-money-bill-wave" />
                                            <span className="text">
                                                Giá cho thuê :{" "}
                                                <i className="price">
                                                    26 ( triệu/tháng )
                                                </i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="item">
                                    <Link to="/" className="link" />
                                    <figure className="image">
                                        <i className="liked fas fa-heart" />
                                        <img
                                            src="./assets/images/house_highlight.jpg"
                                            alt="Căn hộ Saigon Royal"
                                        />
                                        <span className="type">
                                            Căn hộ cho thuê
                                        </span>
                                    </figure>
                                    <div className="heading">
                                        <h4 className="name">
                                            Căn hộ Saigon Royal
                                        </h4>
                                        <p className="address mb-0">
                                            227 đường Nguyễn Văn Cừ, Phường
                                            4, Quận 7, Tp.HCM
                                        </p>
                                    </div>
                                    <div className="details">
                                        <p className="child mb-0">
                                            <i className="icon far fa-object-ungroup" />
                                            <span className="text">
                                                Diện tích : 320 ( m2 )
                                            </span>
                                        </p>
                                        <p className="child mb-0">
                                            <i className="icon fas fa-money-bill-wave" />
                                            <span className="text">
                                                Giá cho thuê :{" "}
                                                <i className="price">
                                                    26 ( triệu/tháng )
                                                </i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="item">
                                    <Link to="/" className="link" />
                                    <figure className="image">
                                        <i className="liked fas fa-heart" />
                                        <img
                                            src="./assets/images/house_highlight.jpg"
                                            alt="Căn hộ Saigon Royal"
                                        />
                                        <span className="type">
                                            Căn hộ cho thuê
                                        </span>
                                    </figure>
                                    <div className="heading">
                                        <h4 className="name">
                                            Căn hộ Saigon Royal
                                        </h4>
                                        <p className="address mb-0">
                                            227 đường Nguyễn Văn Cừ, Phường
                                            4, Quận 7, Tp.HCM
                                        </p>
                                    </div>
                                    <div className="details">
                                        <p className="child mb-0">
                                            <i className="icon far fa-object-ungroup" />
                                            <span className="text">
                                                Diện tích : 320 ( m2 )
                                            </span>
                                        </p>
                                        <p className="child mb-0">
                                            <i className="icon fas fa-money-bill-wave" />
                                            <span className="text">
                                                Giá cho thuê :{" "}
                                                <i className="price">
                                                    26 ( triệu/tháng )
                                                </i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="item">
                                    <Link to="/" className="link" />
                                    <figure className="image">
                                        <i className="liked fas fa-heart" />
                                        <img
                                            src="./assets/images/house_highlight.jpg"
                                            alt="Căn hộ Saigon Royal"
                                        />
                                        <span className="type">
                                            Căn hộ cho thuê
                                        </span>
                                    </figure>
                                    <div className="heading">
                                        <h4 className="name">
                                            Căn hộ Saigon Royal
                                        </h4>
                                        <p className="address mb-0">
                                            227 đường Nguyễn Văn Cừ, Phường
                                            4, Quận 7, Tp.HCM
                                        </p>
                                    </div>
                                    <div className="details">
                                        <p className="child mb-0">
                                            <i className="icon far fa-object-ungroup" />
                                            <span className="text">
                                                Diện tích : 320 ( m2 )
                                            </span>
                                        </p>
                                        <p className="child mb-0">
                                            <i className="icon fas fa-money-bill-wave" />
                                            <span className="text">
                                                Giá cho thuê :{" "}
                                                <i className="price">
                                                    26 ( triệu/tháng )
                                                </i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="item">
                                    <Link to="/" className="link" />
                                    <figure className="image">
                                        <i className="liked fas fa-heart" />
                                        <img
                                            src="./assets/images/house_highlight.jpg"
                                            alt="Căn hộ Saigon Royal"
                                        />
                                        <span className="type">
                                            Căn hộ cho thuê
                                        </span>
                                    </figure>
                                    <div className="heading">
                                        <h4 className="name">
                                            Căn hộ Saigon Royal
                                        </h4>
                                        <p className="address mb-0">
                                            227 đường Nguyễn Văn Cừ, Phường
                                            4, Quận 7, Tp.HCM
                                        </p>
                                    </div>
                                    <div className="details">
                                        <p className="child mb-0">
                                            <i className="icon far fa-object-ungroup" />
                                            <span className="text">
                                                Diện tích : 320 ( m2 )
                                            </span>
                                        </p>
                                        <p className="child mb-0">
                                            <i className="icon fas fa-money-bill-wave" />
                                            <span className="text">
                                                Giá cho thuê :{" "}
                                                <i className="price">
                                                    26 ( triệu/tháng )
                                                </i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center text-uppercase">
                            <Link to="/" className="btn btn_purple">
                                XEM TẤT CẢ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* end striking apartment  */}
            {/* app_managerment  */}
            <div className="app_managerment">
                <div className="container container-sm container-md">
                    <h3 className="main_heading">
                        <span>Ứng dụng quản lý</span>
                    </h3>
                    <div className="app_managerment--content">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="app_managerment--left">
                                    <h4 className="title text-uppercase">
                                        APP real ESTATE
                                    </h4>
                                    <h5 className="sub-title">
                                        Ứng dụng quản lý của chúng tôi với
                                        các tính năng nổi bật về việc quản
                                        lý các thông tin bất động sản và kèm
                                        theo điều khiển các thiết bị thông
                                        minh trong nhà như :
                                    </h5>
                                    <ul className="features">
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="stores">
                                        <div className="item">
                                            <Link
                                                to="/#"
                                                className="heading"
                                            >
                                                <i className="icon fab fa-google-play" />
                                                <p className="text">
                                                    <span className="top">
                                                        Tải ứng dụng từ
                                                    </span>
                                                    <span className="bottom">
                                                        PLAY STORE
                                                    </span>
                                                </p>
                                            </Link>
                                            <figure className="qr_code">
                                                <img
                                                    src="./assets/images/qr_code.jpg"
                                                    alt="PLAY STORE"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <Link
                                                to="/#"
                                                className="heading"
                                            >
                                                <i className="icon fab fa-apple" />
                                                <p className="text">
                                                    <span className="top">
                                                        Đã có sẳn trên
                                                    </span>
                                                    <span className="bottom">
                                                        APP STORE
                                                    </span>
                                                </p>
                                            </Link>
                                            <figure className="qr_code">
                                                <img
                                                    src="./assets/images/qr_code.jpg"
                                                    alt="PLAY STORE"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex align-items-end">
                                <figure className="app_managerment--right">
                                    <img
                                        className="w-100"
                                        src="./assets/images/icon_phone.png"
                                        alt="Ứng dụng quản lý"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end app_managerment  */}
            
            {/* Latest news  */}
                <CardNews />
            {/* End Latest news  */}
        </div>
    )
}

export default Home;
