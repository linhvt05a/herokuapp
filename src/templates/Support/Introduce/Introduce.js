import React from "react";
import { Link } from "react-router-dom";

import TopBanner from "../../../components/common/Header/TopBanner";

class Introduce extends React.Component {
    render() {
        return (
            <div className="introducePage">
                {/* introduce_overview  */}
                <div className="introduce_overview">
                    <div className="container container-sm container-md">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
                                <div className="introduce_overview--left js_introduce_overview">
                                    <div>
                                        <img
                                            src="./assets/images/in_overview01.jpg"
                                            alt="Thành lập từ năm 1999"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="./assets/images/in_overview01.jpg"
                                            alt="Thành lập từ năm 1999"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="./assets/images/in_overview01.jpg"
                                            alt="Thành lập từ năm 1999"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="./assets/images/in_overview01.jpg"
                                            alt="Thành lập từ năm 1999"
                                        />
                                    </div>
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
                {/* overview  */}
                <div className="overview bg_grey">
                    <div className="container container-sm container-md">
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
                {/*introduce*/}
                <div className="block_leadership">
                    <div className="container container_block_leadership">
                        <div className="container container-sm container-md">
                            <h3 className="main_heading">
                                <span>Ban lãnh đạo</span>
                            </h3>
                            <div className="leadership">
                                <div className="card">
                                    <div className="card-image">
                                        <img alt="Ban lãnh đạo" src="./assets/images/company.jpg" />
                                    </div>
                                    <div className="card_info">
                                        <h6 className="card_info_name">
                                            Nguyễn Văn A
                                        </h6>
                                        <i className="card_info_position">
                                            Chức vụ
                                        </i>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img alt="Chức vụ" src="./assets/images/intro_card_leader2.jpg" />
                                    </div>
                                    <div className="card_info">
                                        <h6 className="card_info_name">
                                            Võ Thị Yến
                                        </h6>
                                        <i className="card_info_position">
                                            Chức vụ
                                        </i>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img alt="vvvv" src="./assets/images/intro_card_leader3.jpg" />
                                    </div>
                                    <div className="card_info">
                                        <h6 className="card_info_name">
                                            Trần Thị Kiều
                                        </h6>
                                        <i className="card_info_position">
                                            Chức vụ
                                        </i>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img alt="vvvv" src="./assets/images/intro_card_leader4.jpg" />
                                    </div>
                                    <div className="card_info">
                                        <h6 className="card_info_name">
                                            Dương Văn
                                        </h6>
                                        <i className="card_info_position">
                                            Chức vụ
                                        </i>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img alt="vvvv" src="./assets/images/intro_card_leader2.jpg" />
                                    </div>
                                    <div className="card_info">
                                        <h6 className="card_info_name">
                                            Nguyễn Văn A
                                        </h6>
                                        <i className="card_info_position">
                                            Chức vụ
                                        </i>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img alt="vvvv" src="./assets/images/intro_card_leader1.jpg" />
                                    </div>
                                    <div className="card_info">
                                        <h6 className="card_info_name">
                                            Nguyễn Văn A
                                        </h6>
                                        <i className="card_info_position">
                                            Chức vụ
                                        </i>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img alt="vvvv" src="./assets/images/intro_card_leader3.jpg" />
                                    </div>
                                    <div className="card_info">
                                        <h6 className="card_info_name">
                                            Nguyễn Văn A
                                        </h6>
                                        <i className="card_info_position">
                                            Chức vụ
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project building*/}
                    <div className="project label_filter bg_grey">
                        <div className="container container-sm container-md">
                            <div className="label_filter--heading">
                                <h3 className="main_heading">
                                    <span>Dự án sắp thực hiện</span>
                                </h3>
                                <div className="filter_select">
                                    <div className="text">Lọc theo :</div>
                                    <div className="form-group filter_project">
                                        <select
                                            className="js-select2"
                                            data-minimum-results-for-search="Infinity"
                                        >
                                            <option selected>Tất cả</option>
                                            <option>Căn hộ</option>
                                            <option>Biệt thự</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row_project">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-xl-4">
                                        <div className="project_list--item">
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/project_list01.jpg)",
                                                }}
                                            />
                                            <Link to="/#" className="name">
                                                Central Park
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-xl-4">
                                        <div className="project_list--item">
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/project_list02.jpg)",
                                                }}
                                            />
                                            <Link to="/#" className="name">
                                                Golden River
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-xl-4">
                                        <div className="project_list--item">
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/project_list03.jpg)",
                                                }}
                                            />
                                            <Link to="/#" className="name">
                                                Biệt thự Quận 2
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-xl-4">
                                        <div className="project_list--item">
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/project_list04.jpg)",
                                                }}
                                            />
                                            <Link to="/#" className="name">
                                                Căn hộ Quận 2
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-xl-4">
                                        <div className="project_list--item">
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/project_list05.jpg)",
                                                }}
                                            />
                                            <Link to="/#" className="name">
                                                Saigon Royal
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-xl-4">
                                        <div className="project_list--item">
                                            <figure
                                                className="image"
                                                style={{
                                                    backgroundImage:
                                                        "url(./assets/images/project_list01.jpg)",
                                                }}
                                            />
                                            <Link to="/#" className="name">
                                                Sol Villas
                                            </Link>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        to="#"
                                        className="btn  btn_purple"
                                    >
                                        XEM TẤT CẢ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Partner*/}
                    <div className="partner">
                        <div className="container container-sm container-md">
                            <div className="partner__title text-center">
                                Các đối tác
                            </div>
                            <div className="partner__slider">
                                <Link to="/#" className="partner__logo">
                                    <img alt="vvvv" src="./assets/images/partner_logo_2.jpg" />
                                </Link>
                                <Link to="/#" className="partner__logo">
                                    <img alt="vvvv" src="./assets/images/partner_logo.jpg" />
                                </Link>
                                <Link to="/#" className="partner__logo">
                                    <img alt="vvvv" src="./assets/images/partner_logo_2.jpg" />
                                </Link>
                                <Link to="/#" className="partner__logo">
                                    <img alt="vvvv" src="./assets/images/partner_logo.jpg" />
                                </Link>
                                <Link to="/#" className="partner__logo">
                                    <img alt="vvvv" src="./assets/images/partner_logo_2.jpg" />
                                </Link>
                                <Link to="/#" className="partner__logo">
                                    <img alt="vvvv" src="./assets/images/partner_logo.jpg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Introduce;
