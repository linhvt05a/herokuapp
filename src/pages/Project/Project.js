import React from "react";
import { Link } from "react-router-dom";

import TopBanner from "../../components/common/TopBanner";

class Contact extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <TopBanner />
                <div className="project_page bg_grey">
                    <div className="project_page--filter">
                        <div className="container container-sm container-md">
                            <div
                                className="map_search--content"
                                style={{ maxWidth: "100%" }}
                            >
                                <h2 className="heading">Tìm kiếm dự án theo</h2>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-4">
                                        <div className="form-group">
                                            <select defaultValue={'DEFAULT'}
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
                                            <select defaultValue={'DEFAULT'}
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
                                            <select defaultValue={'DEFAULT'}
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
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6">
                                            <div className="range_item price">
                                                <label className="label">
                                                    Phạm vi giá (tỷ đồng)
                                                </label>
                                                <div className="slider-wrapper">
                                                    <input
                                                        className="input-range"
                                                        type="text"
                                                        data-slider-step={1}
                                                        data-slider-value="0, 100"
                                                        data-slider-min={0}
                                                        data-slider-max={100}
                                                        data-slider-range="true"
                                                        data-slider-tooltip_split="true"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6">
                                            <div className="range_item area">
                                                <label className="label">
                                                    Diện tích (m2)
                                                </label>
                                                <div className="slider-wrapper">
                                                    <input
                                                        className="input-range"
                                                        type="text"
                                                        data-slider-step={1}
                                                        data-slider-value="0, 1000"
                                                        data-slider-min={0}
                                                        data-slider-max={1000}
                                                        data-slider-range="true"
                                                        data-slider-tooltip_split="true"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="map_search--option">
                                    <div className="search_option">
                                        <ul className="list-inline list-inline-sm">
                                            <li>
                                                <label
                                                    className="checkbox-inline"
                                                    type="checkbox"
                                                >
                                                    <input
                                                        name="checkbox-1"
                                                        type="checkbox"
                                                        className="checkbox-custom"
                                                    />
                                                    <span className="checkbox-custom-dummy" />
                                                    Single Villa
                                                </label>
                                            </li>
                                            <li>
                                                <label
                                                    className="checkbox-inline"
                                                    type="checkbox"
                                                >
                                                    <input
                                                        name="checkbox-2"
                                                        type="checkbox"
                                                        className="checkbox-custom"
                                                    />
                                                    <span className="checkbox-custom-dummy" />
                                                    Duplex Villa
                                                </label>
                                            </li>
                                            <li>
                                                <label
                                                    className="checkbox-inline"
                                                    type="checkbox"
                                                >
                                                    <input
                                                        name="checkbox-3"
                                                        type="checkbox"
                                                        className="checkbox-custom"
                                                    />
                                                    <span className="checkbox-custom-dummy" />
                                                    Shophouse
                                                </label>
                                            </li>
                                            <li>
                                                <label
                                                    className="checkbox-inline"
                                                    type="checkbox"
                                                >
                                                    <input
                                                        name="checkbox-4"
                                                        type="checkbox"
                                                        className="checkbox-custom"
                                                    />
                                                    <span className="checkbox-custom-dummy" />
                                                    Penthouse
                                                </label>
                                            </li>
                                            <li>
                                                <label
                                                    className="checkbox-inline"
                                                    type="checkbox"
                                                >
                                                    <input
                                                        name="checkbox-5"
                                                        type="checkbox"
                                                        className="checkbox-custom"
                                                    />
                                                    <span className="checkbox-custom-dummy" />
                                                    Apartment
                                                </label>
                                            </li>
                                            <li>
                                                <label
                                                    className="checkbox-inline"
                                                    type="checkbox"
                                                >
                                                    <input
                                                        name="checkbox-5"
                                                        type="checkbox"
                                                        className="checkbox-custom"
                                                    />
                                                    <span className="checkbox-custom-dummy" />
                                                    Duplex
                                                </label>
                                            </li>
                                            <li>
                                                <label
                                                    className="checkbox-inline"
                                                    type="checkbox"
                                                >
                                                    <input
                                                        name="checkbox-5"
                                                        type="checkbox"
                                                        className="checkbox-custom"
                                                    />
                                                    <span className="checkbox-custom-dummy" />
                                                    Studio
                                                </label>
                                            </li>
                                            <li>
                                                <label
                                                    className="checkbox-inline"
                                                    type="checkbox"
                                                >
                                                    <input
                                                        name="checkbox-5"
                                                        type="checkbox"
                                                        className="checkbox-custom"
                                                    />
                                                    <span className="checkbox-custom-dummy" />
                                                    Officetel
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to="#" className="btn btn_green">
                                        TÌM KIẾM
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project_page--list project_tab">
                        <div className="container container-sm container-md">
                            <div className="project_list--heading">
                                <h2 className="main_heading">
                                    <span>Danh sách dự án</span>
                                </h2>
                                <div className="project_list--status text-uppercase">
                                    <Link
                                        to="#"
                                        className="status working"
                                        data-to="working"
                                    >
                                        ĐANG BÁN
                                    </Link>
                                    <Link to="#" className="status done" data-to="done">
                                        SẮP BÁN
                                    </Link>
                                </div>
                            </div>
                            <div className="row project_list--content project_tab--content">
                                <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
                                    <div className="project_page--item">
                                        <div className="wrap">
                                            <div className="sell_tatus selling">
                                                Đang bán
                                            </div>
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/projectItem01.jpg)",
                                                }}
                                            />
                                            <div className="text">
                                                <p className="name">
                                                    Dự Án Royal Garden
                                                </p>
                                                <p className="address">
                                                    17 đường D2, Phường 4, Quận
                                                    Bình Thạnh, Tp.HCM
                                                </p>
                                                <div className="list-btn">
                                                    <Link
                                                        to="/"
                                                        className="btn btn_green"
                                                    >
                                                        CHI TIẾT
                                                    </Link>
                                                    <Link
                                                        to="/"
                                                        className="btn btn_white"
                                                    >
                                                        SẢN PHẨM
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
                                    <div className="project_page--item">
                                        <div className="wrap">
                                            <div className="sell_tatus selling">
                                                Đang bán
                                            </div>
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/projectItem02.jpg)",
                                                }}
                                            />
                                            <div className="text">
                                                <p className="name">
                                                    Dự Án Royal Garden
                                                </p>
                                                <p className="address">
                                                    17 đường D2, Phường 4, Quận
                                                    2, Tp.HCM
                                                </p>
                                                <div className="list-btn">
                                                    <Link
                                                        to="/"
                                                        className="btn btn_green"
                                                    >
                                                        CHI TIẾT
                                                    </Link>
                                                    <Link
                                                        to="/"
                                                        className="btn btn_white"
                                                    >
                                                        SẢN PHẨM
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
                                    <div className="project_page--item">
                                        <div className="wrap">
                                            <div className="sell_tatus selling">
                                                Đang bán
                                            </div>
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/projectItem01.jpg)",
                                                }}
                                            />
                                            <div className="text">
                                                <p className="name">
                                                    Dự Án Royal Garden
                                                </p>
                                                <p className="address">
                                                    17 đường D2, Phường 4, Quận
                                                    Bình Thạnh, Tp.HCM
                                                </p>
                                                <div className="list-btn">
                                                    <Link
                                                        to="/"
                                                        className="btn btn_green"
                                                    >
                                                        CHI TIẾT
                                                    </Link>
                                                    <Link
                                                        to="/"
                                                        className="btn btn_white"
                                                    >
                                                        SẢN PHẨM
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
                                    <div className="project_page--item">
                                        <div className="wrap">
                                            <div className="sell_tatus will_sell">
                                                Sắp bán
                                            </div>
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/projectItem02.jpg)",
                                                }}
                                            />
                                            <div className="text">
                                                <p className="name">
                                                    Dự Án Royal Garden
                                                </p>
                                                <p className="address">
                                                    17 đường D2, Phường 4, Quận
                                                    Bình Thạnh, Tp.HCM
                                                </p>
                                                <div className="list-btn">
                                                    <Link
                                                        to="/"
                                                        className="btn btn_green"
                                                    >
                                                        CHI TIẾT
                                                    </Link>
                                                    <Link
                                                        to="/"
                                                        className="btn btn_white"
                                                    >
                                                        SẢN PHẨM
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane show fade tab_working">
                                    <div className="row project_page--content">
                                        <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
                                            <div className="project_page--item">
                                                <div className="wrap">
                                                    <div className="sell_tatus selling">
                                                        Đang bán
                                                    </div>
                                                    <figure
                                                        className="image"
                                                        style={{
                                                            backgroundImage:
                                                                "url(./assets/images/projectItem01.jpg)",
                                                        }}
                                                    />
                                                    <div className="text">
                                                        <p className="name">
                                                            Dự Án Royal Garden
                                                        </p>
                                                        <p className="address">
                                                            17 đường D2, Phường
                                                            4, Quận Bình Thạnh,
                                                            Tp.HCM
                                                        </p>
                                                        <div className="list-btn">
                                                            <Link
                                                                to="/"
                                                                className="btn btn_green"
                                                            >
                                                                CHI TIẾT
                                                            </Link>
                                                            <Link
                                                                to="/"
                                                                className="btn btn_white"
                                                            >
                                                                SẢN PHẨM
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
                                            <div className="project_page--item">
                                                <div className="wrap">
                                                    <div className="sell_tatus selling">
                                                        Đang bán
                                                    </div>
                                                    <figure
                                                        className="image"
                                                        style={{
                                                            backgroundImage:
                                                                "url(./assets/images/projectItem01.jpg)",
                                                        }}
                                                    />
                                                    <div className="text">
                                                        <p className="name">
                                                            Dự Án Royal Garden
                                                        </p>
                                                        <p className="address">
                                                            17 đường D2, Phường
                                                            4, Quận Bình Thạnh,
                                                            Tp.HCM
                                                        </p>
                                                        <div className="list-btn">
                                                            <Link
                                                                to="/"
                                                                className="btn btn_green"
                                                            >
                                                                CHI TIẾT
                                                            </Link>
                                                            <Link
                                                                to="/"
                                                                className="btn btn_white"
                                                            >
                                                                SẢN PHẨM
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
                                            <div className="project_page--item">
                                                <div className="wrap">
                                                    <div className="sell_tatus selling">
                                                        Đang bán
                                                    </div>
                                                    <figure
                                                        className="image"
                                                        style={{
                                                            backgroundImage:
                                                                "url(./assets/images/projectItem01.jpg)",
                                                        }}
                                                    />
                                                    <div className="text">
                                                        <p className="name">
                                                            Dự Án Royal Garden
                                                        </p>
                                                        <p className="address">
                                                            17 đường D2, Phường
                                                            4, Quận Bình Thạnh,
                                                            Tp.HCM
                                                        </p>
                                                        <div className="list-btn">
                                                            <Link
                                                                to="/"
                                                                className="btn btn_green"
                                                            >
                                                                CHI TIẾT
                                                            </Link>
                                                            <Link
                                                                to="/"
                                                                className="btn btn_white"
                                                            >
                                                                SẢN PHẨM
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane show fade tab_done">
                                    <div className="row project_page--content">
                                        <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
                                            <div className="project_page--item">
                                                <div className="wrap">
                                                    <div className="sell_tatus will_sell">
                                                        Sắp bán
                                                    </div>
                                                    <figure
                                                        className="image"
                                                        style={{
                                                            backgroundImage:
                                                                "url(./assets/images/projectItem01.jpg)",
                                                        }}
                                                    />
                                                    <div className="text">
                                                        <p className="name">
                                                            Dự Án Royal Garden
                                                        </p>
                                                        <p className="address">
                                                            17 đường D2, Phường
                                                            4, Quận Bình Thạnh,
                                                            Tp.HCM
                                                        </p>
                                                        <div className="list-btn">
                                                            <Link
                                                                to="/"
                                                                className="btn btn_green"
                                                            >
                                                                CHI TIẾT
                                                            </Link>
                                                            <Link
                                                                to="/"
                                                                className="btn btn_white"
                                                            >
                                                                SẢN PHẨM
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link className="page-link" to="/">
                                        Đầu
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="/">
                                        <i className="fas fa-angle-double-left " />
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="/">
                                        1
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link active" to="/">
                                        2
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="/">
                                        3
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="/">
                                        <i className="fas fa-angle-double-right " />
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="/">
                                        Cuối
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;
