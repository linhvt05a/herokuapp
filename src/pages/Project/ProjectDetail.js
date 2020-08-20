import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import TopBanner from "../../components/common/TopBanner";
import { Input, Select, Checkbox } from 'antd';
import TopBannerDetail from "./Item/TopBannerDetail";

const ProjectDetail = (props) => {

    const data = [20, 60]
    const data1 = [10, 80]
    const dataImg = "VAP-tt-nha-dat-tang.jpg";
    const type = 0;

    const [height, setHeight] = useState(50);
    useEffect(() => {
        const updateWindowDimensions = () => {
          const newHeight = document.getElementsByClassName('header')[0].clientHeight;
          setHeight(newHeight);
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions) 
    }, []);

    return (
        <div className="projectDetailPage" style={{paddingTop: height}}>
            <TopBannerDetail dataImg={dataImg} type={type} />
            <div class="project_detail--list bg_grey">
                <div class="container container-sm container-md">
                    <div class="striking_apartment label_filter">
                        <h2 class="main_heading"><span>Sản phẩm dự án Royal Garden </span></h2>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-lg-8">
                                <div class="striking_apartment--content">
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="item">
                                                <figure class="image">
                                                    <i class="liked active fas fa-heart"></i>
                                                    <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                                </figure>
                                                <div class="heading">
                                                    <div class="top">
                                                        <a href="#" class="name">Căn hộ B6 - F01</a>
                                                        <p class="price mb-0">3.24 tỷ</p>
                                                    </div>
                                                    <p class="address mb-0">Giá bán đã niêm yết (đồng)
                                                        <i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="right" title="Tooltip is here"></i>
                                                    </p>
                                                </div>
                                                <div class="details">
                                                    <div class="row">
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon far fa-object-ungroup"></i>
                                                                <span class="text">Diện tích : 80 ( m<sup>2</sup> )<i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="Tooltip is here"></i></span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-bed"></i>
                                                                <span class="text">
                                                                    Phòng ngủ : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-compass"></i>
                                                                <span class="text">
                                                                    Hướng : ĐB
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-restroom"></i>
                                                                <span class="text">
                                                                    Nhà vệ sinh : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="item">
                                                <figure class="image">
                                                    <i class="liked fas fa-heart"></i>
                                                    <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                                </figure>
                                                <div class="heading">
                                                    <div class="top">
                                                        <a href="#" class="name">Căn hộ B6 - F01</a>
                                                        <p class="price mb-0">3.24 tỷ</p>
                                                    </div>
                                                    <p class="address mb-0">Giá bán đã niêm yết (đồng)
                                                        <i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="right" title="Tooltip is here"></i>
                                                    </p>
                                                </div>
                                                <div class="details">
                                                    <div class="row">
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon far fa-object-ungroup"></i>
                                                                <span class="text">Diện tích : 80 ( m<sup>2</sup> )<i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="Tooltip is here"></i></span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-bed"></i>
                                                                <span class="text">
                                                                    Phòng ngủ : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-compass"></i>
                                                                <span class="text">
                                                                    Hướng : ĐB
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-restroom"></i>
                                                                <span class="text">
                                                                    Nhà vệ sinh : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="item">
                                                <figure class="image">
                                                    <i class="liked active fas fa-heart"></i>
                                                    <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                                </figure>
                                                <div class="heading">
                                                    <div class="top">
                                                        <a href="#" class="name">Căn hộ B6 - F01</a>
                                                        <p class="price mb-0">3.24 tỷ</p>
                                                    </div>
                                                    <p class="address mb-0">Giá bán đã niêm yết (đồng)
                                                        <i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="right" title="Tooltip is here"></i>
                                                    </p>
                                                </div>
                                                <div class="details">
                                                    <div class="row">
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon far fa-object-ungroup"></i>
                                                                <span class="text">Diện tích : 80 ( m<sup>2</sup> )<i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="Tooltip is here"></i></span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-bed"></i>
                                                                <span class="text">
                                                                    Phòng ngủ : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-compass"></i>
                                                                <span class="text">
                                                                    Hướng : ĐB
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-restroom"></i>
                                                                <span class="text">
                                                                    Nhà vệ sinh : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="item">
                                                <figure class="image">
                                                    <i class="liked fas fa-heart"></i>
                                                    <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal"/>
                                                </figure>
                                                <div class="heading">
                                                    <div class="top">
                                                        <a href="#" class="name">Căn hộ B6 - F01</a>
                                                        <p class="price mb-0">3.24 tỷ</p>
                                                    </div>
                                                    <p class="address mb-0">Giá bán đã niêm yết (đồng)
                                                        <i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="right" title="Tooltip is here"></i>
                                                    </p>
                                                </div>
                                                <div class="details">
                                                    <div class="row">
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon far fa-object-ungroup"></i>
                                                                <span class="text">Diện tích : 80 ( m<sup>2</sup> )<i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="Tooltip is here"></i></span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-bed"></i>
                                                                <span class="text">
                                                                    Phòng ngủ : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-compass"></i>
                                                                <span class="text">
                                                                    Hướng : ĐB
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-restroom"></i>
                                                                <span class="text">
                                                                    Nhà vệ sinh : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="item">
                                                <figure class="image">
                                                    <i class="liked fas fa-heart"></i>
                                                    <img src="./assets/images/house_highlight.jpg" alt="Căn hộ Saigon Royal" />
                                                </figure>
                                                <div class="heading">
                                                    <div class="top">
                                                        <a href="#" class="name">Căn hộ B6 - F01</a>
                                                        <p class="price mb-0">3.24 tỷ</p>
                                                    </div>
                                                    <p class="address mb-0">Giá bán đã niêm yết (đồng)
                                                        <i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="right" title="Tooltip is here"></i>
                                                    </p>
                                                </div>
                                                <div class="details">
                                                    <div class="row">
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon far fa-object-ungroup"></i>
                                                                <span class="text">Diện tích : 80 ( m<sup>2</sup> )<i class="noted fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="Tooltip is here"></i></span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-bed"></i>
                                                                <span class="text">
                                                                    Phòng ngủ : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-compass"></i>
                                                                <span class="text">
                                                                    Hướng : ĐB
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                                                            <p class="child mb-0">
                                                                <i class="icon fas fa-restroom"></i>
                                                                <span class="text">
                                                                    Nhà vệ sinh : 2
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#">Đầu</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            <i class="fas fa-angle-double-left "></i>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link active" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            <i class="fas fa-angle-double-right "></i>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">Cuối</a></li>
                                </ul>
                            </div>

                            <div class="col-12 col-sm-12 col-lg-4">
                                <div class="searchProject">
                                    <div class="searchProject__title">Tìm kiếm sản phẩm</div>
                                    <div class="form-group mt-3">
                                        <select class="select2 js-select2 mt-3">
                                            <option selected disabled>Số phòng ngủ</option>
                                            <option>TPHCM</option>
                                            <option>Hà Nội</option>
                                            <option>Đà Nẵng</option>
                                            <option>Bình Dương</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select class="select2 js-select2 mt-3">
                                            <option selected disabled>Hướng nhà</option>
                                            <option>Quận 1</option>
                                            <option>Trúc Bạch</option>
                                            <option>Sơn Trà</option>
                                            <option>Tân Uyên</option>
                                        </select>
                                    </div>
                                    <div class="map_search--range">
                                        <div class="range_item price">
                                            <label class="label">Phạm vi giá <br/> <i>(tỷ đồng)</i></label>
                                            <div class="slider-wrapper">
                                                <input class="input-range" type="text" data-slider-step="1"
                                                    data-slider-value="0, 60" data-slider-min="0" data-slider-max="100"
                                                    data-slider-range="true" data-slider-tooltip_split="true" />
                                            </div>
                                        </div>
                                        <div class="range_item area">
                                            <label class="label">Diện tích <i>(m<sup>2</sup>)</i></label>
                                            <div class="slider-wrapper">
                                                <input class="input-range" type="text" data-slider-step="1"
                                                    data-slider-value="80, 1000" data-slider-min="0"
                                                    data-slider-max="1000" data-slider-range="true"
                                                    data-slider-tooltip_split="true" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <a href="#" class="btn btn_green text-uppercase w-100">tìm kiếm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default ProjectDetail;
