import React from "react";
import { Link } from "react-router-dom";

import TopBanner from "../../components/common/TopBanner";

class News extends React.Component {
    render() {
        return (
            <div className="newsPage news">
                <div className="news_detail">
                    <div className="container container-sm container-md">
                        <h3 className="main_heading">
                            <span>Tin tức </span>
                        </h3>
                        <div className="row row_detail">
                            {/*Left Content*/}
                            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
                                <figure className="image_news">
                                    <img alt="Tin tức" src="./assets/images/news_detail_main.jpg" />
                                </figure>
                                <div className="news_detail_title pb-4">
                                    <label>Qui trình mua bán thứ cấp (f2, f3,..) căn hộ Central Park</label>
                                    <div className="news_connect">
                                        <div className="news_connect--time">
                                            <div className="title">
                                                <i className="far fa-clock" />
                                    Ngày đăng: 27/02/2020
                                </div>
                                        </div>
                                        <div className="news_connect--link">
                                            <div className="title">Liên kết:
                                    <Link to="/">
                                                    <i className="fab fa-facebook-square" />
                                                </Link>
                                                <Link to="/">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                                <Link to="/">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content_detail">
                                    <p>
                                        Việc mua bán sang nhượng căn hộ thứ cấp diễn ra rất nhiều và hoàn toàn tuân thủ đúng
                                        qui định của pháp luật vì vậy người bán và người mua cần phải biết và làm thủ tục
                                        cho đúng, đầy đủ để tránh mất thời gian.
                                        Sau khi các bên thống nhất về giá mua bán căn hộ cần làm các bước như sau:
                            </p>
                                    <h5 className="title_list">1. Thỏa thuận đặt cọc</h5>
                                    <p>
                                        - Cần chuẩn bị biên bản thoả thuận
                                <br />
                                - Kiểm tra giấy tờ HĐMB, hoá đơn chứng từ đóng tiền
                                <br />- Bên Bán: CMND, Hộ Khẩu, Đăng ký kết hôn
                            </p>
                                    <br />
                            - Bên Mua: CMND, HK
                            <p />
                                    <p>
                                        <span style={{ color: '#e94c4c' }}>* Lưu ý:</span><br />
                                + Thống nhất về giá khai công chứng để đóng thuế TNCN từ chuyển nhượng bất đông
                                sản
                                2% theo qui định.<br />
                                + Lệ phí công chứng, phí môi giới (nếu có) Bên nào chịu.
                            </p>
                                    <h5 className="title_list">2. Công chứng HĐMB</h5>
                                    <p>
                                        - Bên bán chuẩn bị:
                                <br />
                                + HĐMB (bản chính), hoá đơn chứng từ đóng tiền (BẢN CHÍNH), giấy xác nhận đóng tiền
                                của CĐT. giấy xác nhận chưa bàn giao căn hộ hoặc giấy xác nhận chưa nộp hồ sơ đăng
                                ký cấp sổ hồng.
                                <br />
                                + CMND, Hộ Khẩu, Đăng ký kết hôn (nếu độc thân thì có giấy xác nhận tình trạng hôn
                                nhân thời gian xác nhận 6 tháng, nếu là tài sản riêng thì có văn bản thoả thuận về
                                tài sản) tất cả bản chính.
                                <br />
                                - Bên Mua chuẩn bị: CMND + Hộ Khẩu
                                <br />
                                - Tuỳ thoả thuận về việc thanh toán. thường là 95% giá trị hợp đồng. 5% còn lại sẽ
                                thanh toán khi Bên Bán đóng thuế xong và đưa biên lai cho Bên Mua.
                                <br />
                                    </p>
                                    <h5 className="title_list">3. Đóng thuế TNCN</h5>
                                    <p>Bên Bán đem hồ sơ lên Chi cục thuế Bình Thạnh điền vào form kê khai nộp thuế TNCN.
                                Hồ sơ sẽ được xử lý 5 ngày.<br />
                                        <span style={{ color: '#e94c4c' }}>* Lưu ý:</span>
                                        <i className="content_note">
                                            Photo giấy tờ
                                            HĐMB Công Chứng, HĐMB
                                            CĐT, Hoá đơn chứng từ và xác nhận đóng
                                tiền.</i>
                                    </p>
                                    <h5 className="title_list">4. Chủ Đầu tư xác nhận</h5>
                            Bên Mua mang giấy tờ kèm theo biên lai đóng thuế TNCN, HĐMB Công chứng lên CĐT
                            Vinhomes để xác nhận chuyển nhượng. Hoàn tất hợp đồng mua bán.
                            </div>
                                <div className="comment flex-column align-items-start">
                                    <div className="comment_title mb-2">BÌNH LUẬN</div>
                                    <textarea placeholder="Ý kiến của bạn" className="form-control comment_form" defaultValue={""} />
                                </div>
                                <Link to="#" className="btn btn_purple btn_send">Gửi</Link>
                                <div className="comment onSignIn">
                                    <div className="comment_title">BÌNH LUẬN</div>
                                    <div className="comment_number">Có
                                <span className="text_e94c4c">3</span>
                                bình luận</div>
                                </div>
                                <div className="reply__child">
                                    <div className="reply__child--list">
                                        <div className="child">
                                            <figure className="avatar">
                                                <img alt="vvvv" src="./assets/images/avatar_logged.jpg" />
                                            </figure>
                                            <div className="box">
                                                <div className="reply_name">
                                                    Phòng sale
                                    </div>
                                                <div className="reply_text">
                                                    Cảm ơn bạn rất nhiều,đã quan tâm đến dự án căn hộ của VTP chúng tôi, hiện tại dự án đang được bán
                                                    tại các chi nhánh chính và đại lý liên doanh với chúng tôi. Cụ thể đại lý 203 đường 2/3,phường 10,
                                                    quận 10, Tp.HCM
                                    </div>
                                                <div className="reply_social">
                                                    <div className="reply_item time">
                                                        <i className="icon far fa-clock" />
                                                        <i className="text">9:00 - 27/02/2020</i>
                                                    </div>
                                                    <div className="reply_item cmt">
                                                        <i className="icon fas fa-comments" />
                                                        <i className="text">Thảo luận</i>
                                                    </div>
                                                    <div className="reply_item like active">
                                                        <i className="icon fas fa-thumbs-up" />
                                                        <i className="text">11</i>
                                                    </div>
                                                </div>
                                                <div className="reply__input">
                                                    <textarea placeholder="Nhập thêm nội dung" defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="child">
                                            <figure className="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt="vvvv" />
                                            </figure>
                                            <div className="box">
                                                <div className="reply_name">
                                                    Phòng sale
                                    </div>
                                                <div className="reply_text">
                                                    Cảm ơn bạn rất nhiều,đã quan tâm đến dự án căn hộ của VTP chúng tôi, hiện tại dự án đang được bán
                                                    tại các chi nhánh chính và đại lý liên doanh với chúng tôi. Cụ thể đại lý 203 đường 2/3,phường 10,
                                                    quận 10, Tp.HCM
                                    </div>
                                                <div className="reply_social">
                                                    <div className="reply_item time">
                                                        <i className="icon far fa-clock" />
                                                        <i className="text">9:00 - 27/02/2020</i>
                                                    </div>
                                                    <div className="reply_item cmt">
                                                        <i className="icon fas fa-comments" />
                                                        <i className="text">Thảo luận</i>
                                                    </div>
                                                    <div className="reply_item like">
                                                        <i className="icon fas fa-thumbs-up" />
                                                        <i className="text">22</i>
                                                    </div>
                                                </div>
                                                {/* child  */}
                                                <div className="child">
                                                    <figure className="avatar">
                                                        <img src="./assets/images/avatar_logged.jpg" alt="vvvv" />
                                                    </figure>
                                                    <div className="box pb-0 border-bottom-0">
                                                        <div className="reply_name">
                                                            Phòng sale
                                        </div>
                                                        <div className="reply_text">
                                                            Cảm ơn bạn rất nhiều,đã quan tâm đến dự án căn hộ của VTP chúng tôi, hiện tại dự án đang được bán
                                                            tại các chi nhánh chính và đại lý liên doanh với chúng tôi. Cụ thể đại lý 203 đường 2/3,phường 10,
                                                            quận 10, Tp.HCM
                                        </div>
                                                    </div>
                                                </div>
                                                {/* end child  */}
                                            </div>
                                        </div>
                                        <div className="child admin">
                                            <figure className="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt="vvvv" />
                                            </figure>
                                            <div className="box border-bottom-0">
                                                <div className="reply_name">
                                                    Phòng sale
                                    </div>
                                                <textarea className="form-control" placeholder="Ý kiến của bạn" defaultValue={""} />
                                                <Link to="#" className="btn btn_purple btn_send">Gửi</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Right Content*/}
                            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4 mb-sm-3">
                                <div className="col-right_news">
                                    <div className="row">
                                        {/*Menu*/}
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" id="menu">
                                            <div className="card">
                                                <ul className="news_menu bg_grey">
                                                    <label className="news_menu__title">Chuyên mục</label>
                                                    <li>
                                                        <Link to="/">
                                                            <i className="fas fa-angle-right mr-2" />
                                        Tin tức thị trường
                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <i className="fas fa-angle-right mr-2" />
                                        Thị trường căn hộ
                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <i className="fas fa-angle-right mr-2" />
                                        Nhà đẹp
                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <i className="fas fa-angle-right mr-2" />
                                        Báo cáo phân tích
                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <i className="fas fa-angle-right mr-2" />
                                        Chuyên mục 01
                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*Hot News*/}
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 " id="hotnews">
                                            <div className="card hot_news bg_grey ">
                                                <div className="card_title">Tin tức nổi bật</div>
                                                <div className="js_hot_news">
                                                    <div>
                                                        <div className="item ">
                                                            <div className="image">
                                                                <img alt="vvvv" src="./assets/images/hotnews_1.jpg" />
                                                            </div>
                                                            <div className="title">
                                                                <Link className="name" to="#">
                                                                    Năm 2020 - Năm của thị trường bất động sản các tỉnh
                                            </Link>
                                                                <div className="time">Ngày đăng : 02/03/2020</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="item ">
                                                            <div className="image">
                                                                <img alt="vvvv" src="./assets/images/hotnews_1.jpg" />
                                                            </div>
                                                            <div className="title">
                                                                <Link className="name" to="#">
                                                                    Năm 2020 - Năm của thị trường bất động sản các tỉnh
                                            </Link>
                                                                <div className="time">Ngày đăng : 02/03/2020</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="item ">
                                                            <div className="image">
                                                                <img alt="vvvv" src="./assets/images/hotnews_1.jpg" />
                                                            </div>
                                                            <div className="title">
                                                                <Link className="name" to="#">
                                                                    Năm 2020 - Năm của thị trường bất động sản các tỉnh
                                            </Link>
                                                                <div className="time">Ngày đăng : 02/03/2020</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="item ">
                                                            <div className="image">
                                                                <img alt="vvvv" src="./assets/images/hotnews_1.jpg" />
                                                            </div>
                                                            <div className="title">
                                                                <Link className="name" to="#">
                                                                    Năm 2020 - Năm của thị trường bất động sản các tỉnh
                                            </Link>
                                                                <div className="time">Ngày đăng : 02/03/2020</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Search project*/}
                                        <div className="col-sm-12 col-md-12 col-xl-12" id="searchproject">
                                            <div className="searchProject">
                                                <div className="searchProject__title">Tìm kiếm sản phẩm</div>
                                                <div className="form-group mt-3">
                                                    <select className="select2 js-select2 mt-3">
                                                        <option selected disabled>Số phòng ngủ</option>
                                                        <option>TPHCM</option>
                                                        <option>Hà Nội</option>
                                                        <option>Đà Nẵng</option>
                                                        <option>Bình Dương</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <select className="select2 js-select2 mt-3">
                                                        <option selected disabled>Hướng nhà</option>
                                                        <option>Quận 1</option>
                                                        <option>Trúc Bạch</option>
                                                        <option>Sơn Trà</option>
                                                        <option>Tân Uyên</option>
                                                    </select>
                                                </div>
                                                {/*PHẠM VI GIÁ*/}
                                                <div className="map_search--range">
                                                    <div className="range_item price">
                                                        <label className="label">Phạm vi giá
                                        <br />
                                                            <i>(tỷ đồng)</i>
                                                        </label>
                                                        <div className="slider-wrapper">
                                                            <input className="input-range" type="text" data-slider-step={1} data-slider-value="0, 60" data-slider-min={0} data-slider-max={100} data-slider-range="true" data-slider-tooltip_split="true" />
                                                        </div>
                                                    </div>
                                                    <div className="range_item area">
                                                        <label className="label">Diện tích
                                        <i>(m<sup>2</sup>)</i>
                                                        </label>
                                                        <div className="slider-wrapper">
                                                            <input className="input-range" type="text" data-slider-step={1} data-slider-value="80, 1000" data-slider-min={0} data-slider-max={1000} data-slider-range="true" data-slider-tooltip_split="true" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*TÌM KIẾM*/}
                                                <div className="text-center">
                                                    <Link to="#" className="btn btn_green text-uppercase w-100">tìm kiếm</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

            </div>
        );
    }
}
export default News;
