import React from "react";
import { Link } from "react-router-dom";
import TopBanner from "../../components/common/TopBanner";
import HeadingFilter from '../../components/common/HeadingFilter'
import { ItemDetailProject } from './Item/index'

const Contact = (props) => {

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
                        <HeadingFilter headerBodyClassName="project_list--heading" labelHeader="project_list" status />
                        <div className="row project_list--content project_tab--content">
                            <ItemDetailProject />
                            <ItemDetailProject />
                            <ItemDetailProject />
                            <ItemDetailProject />
                            <ItemDetailProject />
                            <ItemDetailProject />
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
    )
}
export default Contact;
