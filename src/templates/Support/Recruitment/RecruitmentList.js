import React from "react";
import { Link } from "react-router-dom";

import TopBanner from "../../../components/common/Header/TopBanner";

class RecruitmentList extends React.Component {
    render() {
        return (
            <div className="newsPage news">
                {/* block over  */}
                <div className="overview">
                    <div className="container container-sm container-md">
                        <h2 className="overview_heading pb-0">
                            <span className="sub overview_heading pb-0 mt-0">
                                Chúng tôi tìm kiếm những cá nhân chia sẻ giá trị
                                của chúng tôi như một phương tiện củng cố và
                                tiếp tục triết lý thành công của công ty. Chúng
                                tôi đang tìm kiếm những người năng động, tích
                                cực chuyên về:
                            </span>
                        </h2>
                        <div className="overview_parts">
                            <div className="item">
                                <p className="icon">
                                    <i className="fas fa-money-bill-wave" />
                                </p>
                                <p className="title">Kinh doanh</p>
                            </div>
                            <div className="item">
                                <p className="icon">
                                    <i className="fas fa-wrench" />
                                </p>
                                <p className="title">Kỹ thuật</p>
                            </div>
                            <div className="item">
                                <p className="icon">
                                    <i className="fas fa-laptop-code" />
                                </p>
                                <p className="title">Công nghệ</p>
                            </div>
                            <div className="item">
                                <p className="icon">
                                    <i className="fas fa-user-cog" />
                                </p>
                                <p className="title">Công nghệ</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end block over  */}
                {/* striking apartment  */}
                <div className="recruitment label_filter bg_grey">
                    <div className="container container-sm container-md">
                        <div className="label_filter--heading">
                            <h3 className="main_heading">
                                <span>Vị trí đang tuyển</span>
                            </h3>
                            <div className="filter_select">
                                <div className="text">Lọc theo :</div>
                                <div className="form-group filter_project">
                                    <select
                                        className="js-select2"
                                        data-minimum-results-for-search="Infinity"
                                    >
                                        <option selected>Mới nhất</option>
                                        <option>Đang tuyển</option>
                                        <option>Đã tuyển</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="recruitment--content">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
                                    <div className="item">
                                        <div className="information">
                                            <Link
                                                className="position"
                                                to="./Recruitment-detail.html"
                                            >
                                                Nhân viên kinh doanh
                                            </Link>
                                            <div className="group group_sales">
                                                Nhóm kinh doanh
                                            </div>
                                            <ul className="details">
                                                <li>
                                                    <i className="icon fas fa-user-alt" />
                                                    <span className="text">
                                                        Số lượng : 1 (người)
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-map-marker-alt" />
                                                    <span className="text">
                                                        Nơi làm việc : Tp. Hồ
                                                        Chí Minh
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-clock" />
                                                    <span className="text">
                                                        Loại : toàn thời gian
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
                                    <div className="item">
                                        <div className="information">
                                            <Link
                                                className="position"
                                                to="./Recruitment-detail.html"
                                            >
                                                Nhân viên kinh doanh
                                            </Link>
                                            <div className="group group_technical ">
                                                Nhóm kỹ thuật
                                            </div>
                                            <ul className="details">
                                                <li>
                                                    <i className="icon fas fa-user-alt" />
                                                    <span className="text">
                                                        Số lượng : 1 (người)
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-map-marker-alt" />
                                                    <span className="text">
                                                        Nơi làm việc : Tp. Hồ
                                                        Chí Minh
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-clock" />
                                                    <span className="text">
                                                        Loại : toàn thời gian
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
                                    <div className="item">
                                        <div className="information">
                                            <Link
                                                className="position"
                                                to="./Recruitment-detail.html"
                                            >
                                                Nhân viên kinh doanh
                                            </Link>
                                            <div className="group group_lead">
                                                Nhóm quản lý
                                            </div>
                                            <ul className="details">
                                                <li>
                                                    <i className="icon fas fa-user-alt" />
                                                    <span className="text">
                                                        Số lượng : 1 (người)
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-map-marker-alt" />
                                                    <span className="text">
                                                        Nơi làm việc : Tp. Hồ
                                                        Chí Minh
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-clock" />
                                                    <span className="text">
                                                        Loại : toàn thời gian
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
                                    <div className="item">
                                        <div className="information">
                                            <Link
                                                className="position"
                                                to="./Recruitment-detail.html"
                                            >
                                                Nhân viên kinh doanh
                                            </Link>
                                            <div className="group group_sales">
                                                Nhóm kinh doanh
                                            </div>
                                            <ul className="details">
                                                <li>
                                                    <i className="icon fas fa-user-alt" />
                                                    <span className="text">
                                                        Số lượng : 1 (người)
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-map-marker-alt" />
                                                    <span className="text">
                                                        Nơi làm việc : Tp. Hồ
                                                        Chí Minh
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-clock" />
                                                    <span className="text">
                                                        Loại : toàn thời gian
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
                                    <div className="item">
                                        <div className="information">
                                            <Link
                                                className="position"
                                                to="./Recruitment-detail.html"
                                            >
                                                Nhân viên kinh doanh
                                            </Link>
                                            <div className="group group_sales">
                                                Nhóm kinh doanh
                                            </div>
                                            <ul className="details">
                                                <li>
                                                    <i className="icon fas fa-user-alt" />
                                                    <span className="text">
                                                        Số lượng : 1 (người)
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-map-marker-alt" />
                                                    <span className="text">
                                                        Nơi làm việc : Tp. Hồ
                                                        Chí Minh
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-clock" />
                                                    <span className="text">
                                                        Loại : toàn thời gian
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
                                    <div className="item">
                                        <div className="information">
                                            <Link
                                                className="position"
                                                to="./Recruitment-detail.html"
                                            >
                                                Nhân viên kinh doanh
                                            </Link>
                                            <div className="group group_sales">
                                                Nhóm kinh doanh
                                            </div>
                                            <ul className="details">
                                                <li>
                                                    <i className="icon fas fa-user-alt" />
                                                    <span className="text">
                                                        Số lượng : 1 (người)
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-map-marker-alt" />
                                                    <span className="text">
                                                        Nơi làm việc : Tp. Hồ
                                                        Chí Minh
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-clock" />
                                                    <span className="text">
                                                        Loại : toàn thời gian
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
                                    <div className="item">
                                        <div className="information">
                                            <Link
                                                className="position"
                                                to="./Recruitment-detail.html"
                                            >
                                                Nhân viên kinh doanh
                                            </Link>
                                            <div className="group group_sales">
                                                Nhóm kinh doanh
                                            </div>
                                            <ul className="details">
                                                <li>
                                                    <i className="icon fas fa-user-alt" />
                                                    <span className="text">
                                                        Số lượng : 1 (người)
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-map-marker-alt" />
                                                    <span className="text">
                                                        Nơi làm việc : Tp. Hồ
                                                        Chí Minh
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="icon fas fa-clock" />
                                                    <span className="text">
                                                        Loại : toàn thời gian
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*pagination*/}
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link className="page-link" to="#">
                                        Đầu
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">
                                        <i className="fas fa-angle-double-left " />
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">
                                        1
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link active" to="#">
                                        2
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">
                                        3
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">
                                        <i className="fas fa-angle-double-right " />
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">
                                        Cuối
                                    </Link>
                                </li>
                            </ul>
                            {/*end pagination*/}
                        </div>
                    </div>
                </div>
                {/* end striking apartment  */}
            </div>
        );
    }
}
export default RecruitmentList;
