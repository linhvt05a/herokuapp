import React from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const OnMapPoligon = props => {
    let { data, index } = props;
    return (
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
    )
}
export default OnMapPoligon;