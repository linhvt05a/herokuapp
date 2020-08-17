import React from "react";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
                <div className="footer_top">
                    <div className="container container-sm container-md">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-xl-4 mb-5 mb-md-4 mb-xl-0">
                                <div className="footer_item footer_menu">
                                    <h2 className="label">Menu</h2>
                                    <div className="row">
                                        <div className="col-6 col-sm-5">
                                            <ul className="style_01">
                                                <li>
                                                    {/* <Link to="/#">Trang chủ</Link> */}
                                                    <Link to="/">
                                                        Trang chủ
                                                    </Link>
                                                </li>
                                                <li>
                                                    {/* <Link to="/#">Giới thiệu</Link> */}
                                                    <Link to="/introduce">
                                                        Giới thiệu
                                                    </Link>
                                                </li>
                                                <li>
                                                    {/* <Link to="/#">Tin tức</Link> */}
                                                    <Link to="/news">
                                                        Tin tức
                                                    </Link>
                                                </li>
                                                <li>
                                                    {/* <Link to="/#">Tuyển dụng</Link> */}
                                                    <Link to="/recruitment">
                                                        Tuyển dụng
                                                    </Link>
                                                </li>
                                                <li>
                                                    {/* <Link to="/contact">
                                                        Liên hệ
                                                    </Link> */}
                                                    <Link to="/contact">
                                                        Liên hệ
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6 col-sm-5">
                                            <ul className="style_01">
                                                <li>
                                                    {/* <Link to="/#">
                                                        Danh sách dự án
                                                    </Link> */}
                                                    <Link to="/project">
                                                        Danh sách dự án
                                                    </Link>
                                                </li>
                                                <li>
                                                    {/* <Link to="/#">
                                                        Sản phẩm nổi bật
                                                    </Link> */}
                                                    <Link to="/">
                                                        Sản phẩm nổi bật
                                                    </Link>
                                                </li>
                                                <li>
                                                    {/* <Link to="/#">
                                                        Hướng dẫn mua
                                                    </Link> */}
                                                    <Link to="/shopping-guide">
                                                        Hướng dẫn mua
                                                    </Link>
                                                </li>

                                                <li>
                                                    {/* <Link to="/#">Pháp lý</Link> */}
                                                    <Link to="/juridical">
                                                        Pháp lý
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-4 footer_border-lr mb-5 mb-xl-0">
                                <div className="footer_item footer_contact">
                                    <h2 className="label">
                                        Liên hệ với chúng tôi
                                    </h2>
                                    <ul>
                                        <li className="phone">
                                            <Link to="tel:1900123456">
                                                <i className="fas fa-phone-alt" />
                                                <span className="number">
                                                    1900 - 123 - 456
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/#">
                                                <i className="fas fa-envelope" />
                                                minerval@gmail.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/#">
                                                <i className="fas fa-map-marker-alt" />
                                                119 Pasteur, phường 6, quận
                                                3,TPHCM
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-4 ml-md-auto mr-md-auto mt-xl-0">
                                <div className="footer_item footer_send_mail">
                                    <h2 className="label">
                                        Đăng ký nhận bản tin
                                    </h2>
                                    <div className="content">
                                        <p className="text_input-mail">
                                            Nhập e-mail của bạn để nhận tin tức
                                            mới nhất về Bất động sản
                                        </p>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                placeholder="Email của bạn"
                                                className="form-control"
                                            />
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    ĐĂNG KÝ
                                                </span>
                                            </div>
                                            <div className="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                        <ul className="list_social">
                                            <li>
                                                <Link to="/#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/#">
                                                    <i className="fab fa-skype" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/#">
                                                    <i className="fab fa-google-plus-g" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <span className="footer_copy-right">
                            Bản quyền của Minerva năm 2020
                        </span>
                    </div>
                </div>
           
                <ul className="footer_social">
                <li>
                    <Link to="/#" className="phone clickPhone">
                        <i className="icon fas fa-phone-alt" />
                        <i className="text">0909 123 456</i>
                    </Link>
                </li>
                <li>
                    <Link to="/#" className="chat startChatOnline">
                        <i className="icon fas fa-comments" />
                    </Link>
                </li>
                <li>
                    <Link to="/#" className="totop toTop">
                        <i className="icon fas fa-chevron-up" />
                    </Link>
                </li>
            </ul>
            
            </footer>
    );
}

export default Footer;
