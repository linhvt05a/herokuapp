import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import TopBanner from "../../components/common/TopBanner";
import HeadingFilter from '../../components/common/HeadingFilter'
import { ItemProject } from './Item/index'
import {Sliders} from '../../components/base/index'
import { Input, Select, Checkbox } from 'antd';

const Contact = (props) => {

    const data = [20, 60]
    const data1 = [10, 80]

    const [height, setHeight] = useState(120);
    useEffect(() => {
        const updateWindowDimensions = () => {
          const newHeight = document.getElementsByClassName('header')[0].clientHeight;
          setHeight(newHeight);
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions) 
    }, []);

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
        <div className="projectPage" style={{paddingTop: height}}>
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
                                        <Select className="form-control" placeholder="Tỉnh/Thành phố" onChange={handleChangeProvince}>
                                            <option selected disabled>Tỉnh/Thành phố</option>
                                            <option value="0">TPHCM</option>
                                            <option value="1">Hà Nội</option>
                                            <option value="2">Đà Nẵng</option>
                                            <option value="3">Bình Dương</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <Select className="form-control" placeholder="Quận/Huyện" onChange={handleChangeDistrict}>
                                            <option selected disabled>Quận/Huyện</option>
                                            <option value="0">TPHCM</option>
                                            <option value="1">Hà Nội</option>
                                            <option value="2">Đà Nẵng</option>
                                            <option value="3">Bình Dương</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <Select className="form-control" placeholder="Chọn tiến độ" onChange={handleChangeProgress}>
                                            <option selected disabled>Chọn tiến độ</option>
                                            <option value="0">TPHCM</option>
                                            <option value="1">Hà Nội</option>
                                            <option value="2">Đà Nẵng</option>
                                            <option value="3">Bình Dương</option>
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
                                                <Sliders value={data} displayBox="on"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6">
                                        <div className="range_item area">
                                            <label className="label">
                                                Diện tích (m2)
                                            </label>
                                            <div className="slider-wrapper">
                                                <Sliders value={data} displayBox="on"/>
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
