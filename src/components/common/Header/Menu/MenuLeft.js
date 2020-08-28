import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const MenuLeft = (props) => {
    const [inHoverNav, setHoverNav] = useState(false);
    return (
        <ul className="header_menu">
            <li className="logo item d-md-none">
                <NavLink className="item-link" to="/">
                    <img
                        className="w-100"
                        src="./assets/images/logo.jpg"
                        alt="Minerva"
                    />
                </NavLink>
                <i className="icon-close">×</i>
            </li>
            <li className="item mt-3 mt-md-0">
                <NavLink exact activeClassName="active" className="item-link" to="/">
                    TRANG CHỦ
                </NavLink>
            </li>
            <li className="item">
                <NavLink activeClassName="active" className="item-link" to="/project/selling"
                >
                    ĐANG BÁN
                </NavLink>
            </li>
            <li className="item">
                <NavLink activeClassName="active" className="item-link" to="/project/coming_soon">
                    SẮP BÁN
                </NavLink>
            </li>
            <li className="item">
                <NavLink activeClassName="active" className="item-link" to="/transactionLevel">
                    SÀN GIAO DỊCH
                </NavLink>
            </li>
            <li className={`item hasChild dropdown d-none d-md-block ${inHoverNav ? "open": ''}`} >
                <NavLink activeClassName="active"
                    onMouseEnter={() => setHoverNav(true)}
                    className="item-link dropdown-toggle"
                    to="/support"
                >
                    HỔ TRỢ
                </NavLink>
                <ul className="header_menu--child dropdown-menu" onMouseLeave={() => setHoverNav(false)}>
                    <li className="item-child">
                        <NavLink activeClassName="active"
                            className="item-child-link"
                            to="/shoppingGuide"
                        >
                            Hướng dẫn mua
                        </NavLink>
                    </li>
                    <li className="item-child">
                        <NavLink activeClassName="active"
                            className="item-child-link"
                            to="/juridical"
                        >
                            Pháp lý
                        </NavLink>
                    </li>
                    <li className="item-child">
                        <NavLink activeClassName="active"
                            className="item-child-link"
                            to="/news"
                        >
                            Tin tức
                        </NavLink>
                    </li>
                    <li className="item-child">
                        <NavLink activeClassName="active"
                            className="item-child-link"
                            to="/productList"
                        >
                            Liên hệ
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li className="item header_register-mb d-block d-md-none hasChild">
                <Link className="item-link" to="/demo">
                    <i className="pr-1 fas fa-user-circle" />
                    HỔ TRỢ
                </Link>
                <ul className="header_menu--child accordion">
                    <li className="item-child">
                        <Link
                            className="item-child-link"
                            to="/demo"
                        >
                            Hướng dẫn mua
                        </Link>
                    </li>
                    <li className="item-child">
                        <Link
                            className="item-child-link"
                            to="/demo"
                        >
                            Pháp lý
                        </Link>
                    </li>
                    <li className="item-child">
                        <Link
                            className="item-child-link"
                            to="/demo"
                        >
                            Tin tức
                        </Link>
                    </li>
                    <li className="item-child">
                        <Link
                            className="item-child-link"
                            to="/demo"
                        >
                            Liên hệ
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="item">
                <NavLink activeClassName="active" className="item-link" to="/promotion">
                    KHUYẾN MÃI
                    <img src="../assets/images/gift.png" class="gift" />
                </NavLink>
            </li>
            <li className="item d-flex justify-content-between d-md-none">
                <Link to="/#" className="item-link pr-0">
                    <i className="pr-1 fas fa-comments" />
                    Tư vấn
                </Link>
                <div className="header_mb_ultilites d-flex justify-content-center align-items-center">
                    <Link to="/#" className="item-utility">
                        <i className="icon far fa-heart" />
                    </Link>
                    <Link to="/#" className="item-utility">
                        <i className="icon fas fa-cart-plus" />
                    </Link>
                    <div className="item-utility dropdown languages">
                        <Link to="/demo">
                            <img src="./assets/images/lang_vn.jpg" alt="languages" />
                            <i className="icon_arrow fas fa-chevron-down" />
                        </Link>
                        <ul className="dropdown-menu pull-right">
                            <li>
                                <Link to="/#">
                                    <img src="./assets/images/lang_en.png" width={16} height={16} />
                                    <span>English</span>
                                </Link>
                            </li>
                            <li className="active">
                                <Link to="/#">
                                    <img src="./assets/images/lang_china.png" width={16} height={16} />
                                    <span>China</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="item d-block d-md-none">
                <Link to="/#" className="item-link phone">
                    <i className="pr-1 fas fa-phone-alt" />
                    1900 - 123 - 456
                </Link>
            </li>
            <li className="item header_register-mb d-block d-md-none hasChild">
                <Link className="item-link" to="/demo">
                    <i className="pr-1 fas fa-user-circle" />
                    Đăng ký / Đăng nhập
                </Link>
                <ul className="header_menu--child mt-0 accordion">
                    <li className="register_select">
                        <div className="item-child-link accordion-toggle d-flex justify-content-between align-items-center">
                            Đăng nhập
                            <i className="icon_plus fas fa-plus" />
                        </div>
                        {/* form_register signin */}
                        <div className="header_register form_register accordion-inner">
                            <div className="form form_signInUp">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mb-0 text-center">
                                    <Link
                                        to="/demo"
                                        className="btn btn_green btn_signIn text-uppercase"
                                    >
                                        ĐĂNG NHẬP
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="register_select">
                        <div className="item-child-link accordion-toggle d-flex justify-content-between align-items-center">
                            Đăng ký
                            <i className="icon_plus fas fa-plus" />
                        </div>
                        {/* form_register signup*/}
                        <div className="header_register form_register accordion-inner">
                            <div className="form form_signInUp">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Họ tên"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mb-0 text-center">
                                    <Link to="/demo" className="btn btn_green btn_signIn text-uppercase">
                                        ĐĂNG KÝ
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="register_select">
                        <div className="item-child-link accordion-toggle d-flex justify-content-between align-items-center">
                            Quên mật khẩu
                            <i className="icon_plus fas fa-plus" />
                        </div>
                        {/* form_forgot */}
                        <div className="header_register form_forgot accordion-inner">
                            <div className="form form_signInUp">
                                <div className="form-group form_forgot--info">
                                    Hãy điền thông tin email của bạn để
                                    <br />
                                    chúng tôi lấy lại mật khẩu
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Email" className="form-control"/>
                                </div>
                                <div className="form-group mb-0 text-center">
                                    <Link to="/demo" className="btn btn_green btn_signIn text-uppercase mb-0">GỬI</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    )
}
export default MenuLeft;