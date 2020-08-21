import React from "react";
import { Link } from "react-router-dom";

import TopBanner from "../../components/common/TopBanner";

class RecruitmentDetail extends React.Component {
    render() {
        return (
            <div className="newsPage news">
                <div className="recruitment--detail">
                    <div className="container container-sm container-md">
                        <h3 className="main_heading">
                            <span>Nhân viên kinh doanh</span>
                        </h3>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <div className="content">
                                    <div className="content--title">
                                        <i className="fas fa-asterisk" />
                                        Số lượng
                                    </div>
                                    <div className="content--text">
                                        <ul>
                                            <li>
                                                <i className="fas fa-minus" />
                                                <b>15</b>
                                                nhân viên kinh doanh
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                <b>5</b>
                                                nhân viên marketing
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content--title">
                                        <i className="fas fa-asterisk" />
                                        Địa điểm
                                    </div>
                                    <div className="content--text">
                                        <ul>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Dự án Central Park, 208 Nguyễn
                                                Hữu Cảnh, Quận Bình Thạnh,
                                                Tp.HCM
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content--title">
                                        <i className="fas fa-asterisk" />
                                        THỜI GIAN LÀM VIỆC
                                    </div>
                                    <div className="content--text">
                                        <ul>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Từ
                                                <b>thứ 2</b>
                                                đến
                                                <b>thứ 6</b>, giờ làm :
                                                8:30-17:30
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                <b>Thứ 7</b>
                                                nữa buỗi, giờ làm 8:30-12:30
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content--title">
                                        <i className="fas fa-asterisk" />
                                        MÔ TẢ CÔNG VIỆC
                                    </div>
                                    <div className="content--text">
                                        <ul>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Tìm kiếm, khai thác khách hàng
                                                có nhu cầu về bất động sản.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Cập nhật thông tin thị trường
                                                bất động sản, nhanh chóng nắm
                                                bắt nhu cầu của khách hàng
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Chăm sóc khách hàng theo chương
                                                trình của công ty.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Nắm bắt hiểu rõ các quy trình,
                                                quy định nghiệp vụ bán hàng của
                                                công ty.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Phối hợp Phòng Marketing thực
                                                hiện các chương trình sự kiện
                                                quảng bá của Công ty.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Cung cấp, tư vấn đầy đủ chính
                                                xác thông tin sản phẩm đáp ứng
                                                nhu cầu khách hàng nhằm hoàn
                                                thành chỉ tiêu được giao.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content--title">
                                        <i className="fas fa-asterisk" />
                                        yêu cầu chuyên môn
                                    </div>
                                    <div className="content--text">
                                        <ul>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Ứng viên thuộc các chuyên ngành
                                                Bất động sản, QTKD, tài chính,
                                                marketing…là một lợi thế.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Đam mê ngành kinh doanh, yêu
                                                thích ngành Bất động sản, đặc
                                                biệt là Bất động sản.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Trung thực, tự tin, nhanh nhẹn,
                                                năng động, chăm chỉ, có mong
                                                muốn được gắn bó lâu dài.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Kỹ năng giao tiếp, ứng xử tốt;
                                                tư duy dịch vụ, tinh thần học
                                                hỏi cao.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Có vốn ngoại ngữ: Anh, Trung,
                                                Hàn,… là một lợi thế.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Trung thực, có trách nhiệm, có
                                                mong muốn gắn bó lâu dài.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content--title">
                                        <i className="fas fa-asterisk" />
                                        ghi chú
                                    </div>
                                    <div className="content--text">
                                        <ul>
                                            Ngoài thu nhập hấp dẫn từ BĐS, các
                                            bạn còn được huấn luyện bởi Ban Lãnh
                                            Đạo công ty và các chuyên gia có
                                            nhiều năm kinh nghiệm trong ngành
                                            bất động sản:
                                            <li>
                                                <i className="fas fa-minus" />
                                                Kỹ năng giao tiếp
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Kỹ năng thương lượng/đàm phán
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Kỹ năng phối hợp làm việc đội
                                                nhóm, kỹ năng tự tin thuyết
                                                trình trước nhiều người.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Cập nhật kiến thức thị trường
                                                Bất động sản.
                                            </li>
                                            <li>
                                                <i className="fas fa-minus" />
                                                Chính sách Marketing chuyên
                                                nghiệp phủ rộng thị trường
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-md-12 col-lg-4 col-xl-4">
                                <div className="options bg_grey mb-45">
                                    <ul className="options__menu">
                                        <label className="options__menu-title">
                                            Các ngành nghề
                                        </label>
                                        <li className="options__menu-item">
                                            <Link to="#">
                                                <i className="icon fas fa-angle-right mr-2" />
                                                Kinh doanh
                                            </Link>
                                        </li>
                                        <li className="options__menu-item">
                                            <Link to="#">
                                                <i className="icon fas fa-angle-right mr-2" />
                                                Kỹ thuật
                                            </Link>
                                        </li>
                                        <li className="options__menu-item">
                                            <Link to="#">
                                                <i className="icon fas fa-angle-right mr-2" />
                                                Công nghệ
                                            </Link>
                                        </li>
                                        <li className="options__menu-item">
                                            <Link to="#">
                                                <i className="icon fas fa-angle-right mr-2" />
                                                Quản lý
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="options__search">
                                        <div className="text">Tìm kiếm</div>
                                        <i className="icon fas fa-search" />
                                        <div className="search form-group">
                                            <input
                                                type="text"
                                                className="w-100 form-control"
                                                placeholder="Nhập vị trí ứng tuyển"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="benefit">
                                    <div className="benefit--employee">
                                        <div className="text">
                                            Phúc lợi nhân viên
                                        </div>
                                        <ul>
                                            <li>
                                                <p className="icon">
                                                    <i className="fas fa-address-book" />
                                                </p>
                                                <p>
                                                    Bảo hiểm và nhiều lợi ích
                                                    chăm sóc sức khỏe hơn
                                                </p>
                                            </li>
                                            <li>
                                                <p className="icon">
                                                    <i className="fas fa-money-bill-wave" />
                                                </p>
                                                <p>
                                                    Thưởng lương thứ 13, thưởng
                                                    hiệu suất, thưởng ngày lễ
                                                    Việt Nam
                                                </p>
                                            </li>
                                            <li>
                                                <p className="icon">
                                                    <i className="fas fa-camera-retro" />
                                                </p>
                                                <p>
                                                    Du lịch và nghỉ dưỡng hàng
                                                    năm theo chế độ của công ty
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RecruitmentDetail;
