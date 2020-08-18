import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const FilterProject = () =>{
    return(
        <div className="searchProject">
        <div className="searchProject__title">
            Tìm kiếm dự án theo
        </div>
        <div className="form-group mt-3">
            <select defaultValue="" className="select2 js-select2 mt-3">
                <option disabled>
                    Tỉnh/Thành phố
                </option>
                <option>TPHCM</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
                <option>Bình Dương</option>
            </select>
        </div>
        <div className="form-group">
            <select defaultValue="" className="select2 js-select2 mt-3">
                <option disabled>
                    Quận/Huyện
                </option>
                <option>Quận 1</option>
                <option>Trúc Bạch</option>
                <option>Sơn Trà</option>
                <option>Tân Uyên</option>
            </select>
        </div>
        <div className="form-group">
            <select defaultValue="" className="select2 js-select2 mt-3">
                <option disabled>
                    Chọn tiến độ
                </option>
                <option>TPHCM</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
                <option>Bình Dương</option>
            </select>
        </div>
        {/*PHẠM VI GIÁ*/}
        <div className="map_search--range">
            <div className="range_item price">
                <label className="label">
                    Phạm vi giá
                    <br />
                    <i>(tỷ đồng)</i>
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
                    Diện tích
                    <i>(m2)</i>
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
        {/*TÌM KIẾM*/}
        <Link
            to="#"
            className="btn btn_green text-uppercase w-100"
        >
            tìm kiếm
        </Link>
    </div>

    )
}
export default FilterProject