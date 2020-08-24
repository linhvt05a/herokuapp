import React from "react";
import {Link} from "react-router-dom";
import Block01Slider from './item/Block01Slider';

const Block01 = (props) => {    
    const block01Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="introduce_overview">
            <div className="container container-sm container-md">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
                        <div className="introduce_overview--left">
                            <Block01Slider {...block01Settings}>
                                <Block01Slider />
                            </Block01Slider>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
                        <div className="introduce_overview--right justify-content-center d-flex flex-column">
                            <h3 className="heading">
                                Thành lập từ năm 1999
                            </h3>
                            <ul className="nav" role="tablist">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        id="about-tab"
                                        data-toggle="tab"
                                        to="#about"
                                        role="tab"
                                        aria-controls="about"
                                        aria-selected="true"
                                    >
                                        VỀ CHÚNG TÔI
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        id="vision-tab"
                                        data-toggle="tab"
                                        to="#vision"
                                        role="tab"
                                        aria-controls="vision"
                                        aria-selected="false"
                                    >
                                        TẦM NHÌN
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        id="mission-tab"
                                        data-toggle="tab"
                                        to="#mission"
                                        role="tab"
                                        aria-controls="mission"
                                        aria-selected="false"
                                    >
                                        SỨ MỆNH
                                    </Link>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="about"
                                    role="tabpanel"
                                    aria-labelledby="about-tab"
                                >
                                    <p>
                                        Được thành lập Tháng 4/2017.
                                        Công ty Minerva hoạt động trong
                                        lĩnh vực mua bán, cho thuê căn
                                        hộ, Shophouse thương mại, biệt
                                        thự tại Hồ Chí Minh với các dự
                                        án tại Bình Thạnh, Quận 1, Quận
                                        2.
                                        <br />
                                        Với đội ngũ nhân sự cao cấp
                                        trong nhiều lĩnh vực, chúng tôi
                                        phát triển hệ thống phân phối
                                        bất động sản trực tuyến, cung
                                        cấp dịch vụ môi giới hoàn hảo,
                                        tạo ra một quá trình mua, bán,
                                        cho thuê
                                    </p>
                                    <p className="mb-0">
                                        Bất động sản thông minh và hiệu
                                        suất cao, dựa trên sự kết hợp
                                        giữa công nghệ hiện đại và các
                                        chuyên viên tư vấn hàng đầu..
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="vision"
                                    role="tabpanel"
                                    aria-labelledby="vision-tab"
                                >
                                    Vision Content
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="mission"
                                    role="tabpanel"
                                    aria-labelledby="mission-tab"
                                >
                                    Mission Content
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block01;

