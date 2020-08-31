import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Trans } from 'react-i18next';
import {InputCheckbox, Sliders} from "../../components/base";
import { Select } from 'antd';

const FilterProject = (props) => {

    const { Option } = Select
    const data = [20, 60]
    const data1 = [10, 80]

    const handleChangeProvince = (value) => {
        console.log(`Province ${value}`);
    }

    const handleChangeDistrict = (value) => {
        console.log(`District ${value}`);
    }

    const handleChangeProgress = (value) => {
        console.log(`Progress ${value}`);
    }
    return (
        <div className="project_page--filter">
            <div className="container container-sm container-md">
                <div className="map_search--content" style={{ maxWidth: "100%" }}>
                    <h2 className="heading">Tìm kiếm dự án theo</h2>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4">
                            <div className="form-group">
                                <Select className="form-control" placeholder="Tỉnh/Thành phố" onChange={handleChangeProvince}>
                                    <Option selected disabled>Tỉnh/Thành phố</Option>
                                    <Option value="0">TPHCM</Option>
                                    <Option value="1">Hà Nội</Option>
                                    <Option value="2">Đà Nẵng</Option>
                                    <Option value="3">Bình Dương</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <div className="form-group">
                                <Select className="form-control" placeholder="Quận/Huyện" onChange={handleChangeDistrict}>
                                    <Option selected disabled>Quận/Huyện</Option>
                                    <Option value="0">TPHCM</Option>
                                    <Option value="1">Hà Nội</Option>
                                    <Option value="2">Đà Nẵng</Option>
                                    <Option value="3">Bình Dương</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <div className="form-group">
                                <Select className="form-control" placeholder="Chọn tiến độ" onChange={handleChangeProgress}>
                                    <Option selected disabled>Chọn tiến độ</Option>
                                    <Option value="0">TPHCM</Option>
                                    <Option value="1">Hà Nội</Option>
                                    <Option value="2">Đà Nẵng</Option>
                                    <Option value="3">Bình Dương</Option>
                                </Select>
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
                                        <Sliders value={data} displayBox="on" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="range_item area">
                                    <label className="label">
                                        Diện tích (m2)
                                    </label>
                                    <div className="slider-wrapper">
                                        <Sliders value={data} displayBox="on" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map_search--option">
                        <div className="search_option option_project">
                            <ul className="list-inline list-inline-sm">
                                <li>
                                    <InputCheckbox label="Single Villa" />
                                </li>
                                <li>
                                    <InputCheckbox label="Duplex Villa" />
                                </li>
                                <li>
                                    <InputCheckbox label="Shophouse" />
                                </li>
                                <li>
                                    <InputCheckbox label="Penthouse" />
                                </li>
                                <li>
                                    <InputCheckbox label="Apartment" />
                                </li>
                                <li>
                                    <InputCheckbox label="Duplex" />
                                </li>
                                <li>
                                    <InputCheckbox label="Studio" />
                                </li>
                                <li>
                                    <InputCheckbox label="Officetel" />
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
    )
}

export default FilterProject;
