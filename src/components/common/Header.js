import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Trans } from "react-i18next";
import Chat from "../common/Chat";

import bannerAds from '../../assets/images/image/mask-group-364.png'
import giftImg from '../../assets/images/icon/gift.png'

function Header() {
    const [show, setShowAdvisory] = useState(false);
    return (
        <>
        <header className="header">
            <img src={bannerAds} className="mask-group-364" style={{width: "100%"}} />
            <div className="header_border">
                <div className="container container-sm container-md">
                    <div className="header_top">
                        <div className="header_promotion">
                            <div className="text">
                                <span className="highlight">
                                    Tin khuyến mãi
                                </span>
                                : Mua căn hộ dự án VTP được giảm 5% trong
                                tháng 3. Chỉ cần nhập mã giảm giá VTP0190
                            </div>
                        </div>
                        <ul className="header_contact d-none d-md-flex">
                            <li className="chat">
                                <Link to="/#" onClick={() => setShowAdvisory(!show)}>
                                    <i className="fas fa-comments" />
                                    Tư vấn
                                </Link>
                            </li>
                            <li className="phone">
                                <Link to="/#">
                                    <i className="fas fa-phone-alt" />
                                    1900 - 123 - 456
                                </Link>
                            </li>
                            <li className="languages">
                                <div className="dropdown">
                                    <Link
                                        to="/demo"
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="./assets/images/lang_vn.jpg"
                                            alt="languages 1"
                                        />
                                        <i className="icon_arrow fas fa-chevron-down" />
                                    </Link>
                                    <ul className="dropdown-menu pull-right">
                                        <li>
                                            <Link to="/#">
                                                <img
                                                    alt="languages 2"
                                                    src="./assets/images/lang_en.png"
                                                    width={16}
                                                    height={16}
                                                />
                                                <span>English</span>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/#">
                                                <img
                                                    alt=""
                                                    src="./assets/images/lang_china.png"
                                                    width={16}
                                                    height={16}
                                                />
                                                <span>China</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container container-sm container-md">
                <div className="header_wrap">
                    <Link className="header_logo" to="/">
                        <img src="./assets/images/logo.jpg" alt="Minerva" />
                    </Link>
                    <button className="mb_toggle">
                        <span />
                    </button>
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
                            <NavLink activeClassName="active" className="item-link" to="/project"
                            >
                                DỰ ÁN ĐANG BÁN
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink activeClassName="active" className="item-link" to="/cart">
                                DỰ ÁN SẮP BÁN
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink activeClassName="active" className="item-link" to="/dddd">
                                SÀN GIAO DỊCH
                            </NavLink>
                        </li>
                        <li className="item hasChild dropdown d-none d-md-block">
                            <NavLink activeClassName="active"
                                className="item-link dropdown-toggle"
                                data-toggle="dropdown"
                                data-hover="dropdown"
                                to="/dddd"
                            >
                                HỔ TRỢ
                            </NavLink>
                            <ul className="header_menu--child dropdown-menu">
                                <li className="item-child">
                                    <NavLink activeClassName="active"
                                        className="item-child-link"
                                        to="/shopping-guide"
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
                                    {/* <Link
                                        className="item-child-link"
                                        to="/demo"
                                    >
                                        Liên hệ
                                    </Link> */}
                                    <NavLink activeClassName="active"
                                        className="item-child-link"
                                        to="/contact"
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
                            <NavLink activeClassName="active" className="item-link" to="/dddd">
                                KHUYẾN MÃI
                                <img src={giftImg} class="gift" />
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
                                    <Link
                                        to="/demo"
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="./assets/images/lang_vn.jpg"
                                            alt="languages"
                                        />
                                        <i className="icon_arrow fas fa-chevron-down" />
                                    </Link>
                                    <ul className="dropdown-menu pull-right">
                                        <li>
                                            <Link to="/#">
                                                <img
                                                    alt="vvv"
                                                    src="./assets/images/lang_en.png"
                                                    width={16}
                                                    height={16}
                                                />
                                                <span>English</span>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/#">
                                                <img
                                                    alt="vvvv"
                                                    src="./assets/images/lang_china.png"
                                                    width={16}
                                                    height={16}
                                                />
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
                                                <Link
                                                    to="/demo"
                                                    className="btn btn_green btn_signIn text-uppercase"
                                                >
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
                                                Hãy điền thông tin email của
                                                bạn để
                                                <br />
                                                chúng tôi lấy lại mật khẩu
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Email"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group mb-0 text-center">
                                                <Link
                                                    to="/demo"
                                                    className="btn btn_green btn_signIn text-uppercase mb-0"
                                                >
                                                    GỬI
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="header_actions d-none d-md-flex">
                        <div className="item">
                            <Link to="/#" className="link">
                                <span className="icon">
                                    <i className="heart far fa-heart" />
                                    <i className="number">4</i>
                                </span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/#" className="link">
                                <i className="icon cart fas fa-cart-plus" />
                            </Link>
                        </div>
                        <div className="item dropdown">
                            <Link
                                to="/demo"
                                className="dropdown-toggle link"
                                data-toggle="dropdown"
                                data-hover="dropdown"
                                aria-expanded="false"
                            >
                                <i className="icon user fas fa-user-circle" />
                            </Link>
                            <div className="dropdown-menu">
                                {/* form_register */}
                                <div className="header_register form_register">
                                    <ul
                                        className="nav header_register--heading"
                                        role="tablist"
                                    >
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                id="pills-signin-tab"
                                                data-toggle="pill"
                                                to="#pills-signin"
                                                role="tab"
                                                aria-controls="pills-signin"
                                                aria-selected="true"
                                            >
                                                ĐĂNG NHẬP
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                id="pills-signup-tab"
                                                data-toggle="pill"
                                                to="#pills-signup"
                                                role="tab"
                                                aria-controls="pills-signup"
                                                aria-selected="false"
                                            >
                                                ĐĂNG KÝ
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-signin"
                                            role="tabpanel"
                                            aria-labelledby="pills-signin-tab"
                                        >
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
                                                <div className="form-group mb-0 text-center">
                                                    <Link
                                                        to="/demo"
                                                        className="text-forgot forgotPassword"
                                                    >
                                                        Quên mật khẩu
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-signup"
                                            role="tabpanel"
                                            aria-labelledby="pills-signup-tab"
                                        >
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
                                                    <Link
                                                        to="/demo"
                                                        className="btn btn_green btn_signIn text-uppercase"
                                                    >
                                                        ĐĂNG KÝ
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* form_forgot */}
                                <div className="header_register form_forgot d-none">
                                    <div className="header_register--heading text-uppercase text-white text-center">
                                        QUÊN MẬT KHẨU
                                    </div>
                                    <div className="form form_signInUp">
                                        <div className="form-group form_forgot--info">
                                            Hãy điền thông tin email của bạn
                                            để
                                            <br />
                                            chúng tôi lấy lại mật khẩu
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Email"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group mb-0 text-center">
                                            <Link
                                                to="/demo"
                                                className="btn btn_green btn_signIn text-uppercase mb-0"
                                            >
                                                GỬI
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* form_logged */}
                                <div className="header_register form_logged d-none">
                                    <div className="header_register--heading">
                                        <figure className="avatar">
                                            <img
                                                src="./assets/images/avatar_logged.jpg"
                                                alt="Trần Thị Thu Hoài"
                                            />
                                        </figure>
                                        <div className="info">
                                            <div className="name">
                                                Trần Thị Thu Hoài
                                            </div>
                                            <div className="mail">
                                                thutran1975@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_logged--action">
                                        <Link to="/#" className="action">
                                            Đăng xuất
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-background" />
        </header>
        <Chat active={show} />
        </>
    );
}

export default Header;
