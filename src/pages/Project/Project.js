import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import TopBanner from "../../components/common/TopBanner";
import HeadingFilter from '../../components/common/HeadingFilter'
import { ItemProject } from './Item/index'
import {Sliders} from '../../components/base/index'
import { Input, Select, Checkbox } from 'antd';
import Pagination from '../../components/common/Pagination';


const Contact = (props) => {

    const { Option } = Select
    const data = [20, 60]
    const data1 = [10, 80]

    const [paging, setPaging] = useState({
        totalItem: 18,
        currentPage:  2,
        totalPage: 5,
        itemOnPage: 6
    });

    const handleChangeProvince = (value) => {
        console.log(`Province ${value}`);
    }

    const handleChangeDistrict = (value) => {
        console.log(`District ${value}`);
    }

    const handleChangeProgress = (value) => {
        console.log(`Progress ${value}`);
    }

    const checkboxOnChange = e => {
        console.log(`checkbox = ${e.target.checked}`);
    }
    return (
        <div className="projectPage">
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
                                            <Checkbox onChange={checkboxOnChange}>Single Villa</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox onChange={checkboxOnChange}>Duplex Villa</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox onChange={checkboxOnChange}>Shophouse</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox onChange={checkboxOnChange}>Penthouse</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox onChange={checkboxOnChange}>Apartment</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox onChange={checkboxOnChange}>Duplex</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox onChange={checkboxOnChange}>Studio</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox onChange={checkboxOnChange}>Officetel</Checkbox>
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
                            <ItemProject />
                            <ItemProject />
                            <ItemProject />
                            <ItemProject />
                            <ItemProject />
                            <ItemProject />
                        </div>
                        <ul className="pagination">
                            <Pagination dataPaging={paging}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
