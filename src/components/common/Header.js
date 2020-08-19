import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Trans } from "react-i18next";
import Chat from "../common/Chat";
import FormContact from "../common/FormContact";

function Header() {
    const [show, setShowAdvisory] = useState(false);
    const [inHover, setHover] = useState(false);
    const [inHoverProfile, setHoverProfile] = useState(false);
    const [inHoverNav, setHoverNav] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
          setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    console.log('scroll', scrolling);

    return (
        <>
        <header className={`header ${scrolling == true ? "fixed" : ''}`}>
            <div className="header_border">
                <Link to="/#">
                    <img src="../assets/images/mask-group-364.png" className="mask-group-364" style={{width: "100%"}} />
                </Link>
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
                                <div className={`dropdown ${inHover ? "open": ''}`} onMouseLeave={() => setHover(false)}>
                                    <Link
                                        onMouseEnter={() => setHover(true)}
                                        to="/demo"
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                        aria-expanded={inHover}
                                    >
                                        <img
                                            src="./assets/images/lang_vn.jpg"
                                            alt="languages 1"
                                        />
                                        <i className="icon_arrow fas fa-chevron-down" />
                                    </Link>
                                    <ul className="dropdown-menu pull-right" >
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
                                ĐANG BÁN
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink activeClassName="active" className="item-link" to="/cart">
                                SẮP BÁN
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink activeClassName="active" className="item-link" to="/dddd">
                                SÀN GIAO DỊCH
                            </NavLink>
                        </li>
                        <li className={`item hasChild dropdown d-none d-md-block ${inHoverNav ? "open": ''}`} >
                            <NavLink activeClassName="active"
                                onMouseEnter={() => setHoverNav(true)}
                                className="item-link dropdown-toggle"
                                data-toggle="dropdown"
                                data-hover="dropdown"
                                to="/dddd"
                            >
                                HỔ TRỢ
                            </NavLink>
                            <ul className="header_menu--child dropdown-menu" onMouseLeave={() => setHoverNav(false)}>
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
                                <img src="../assets/images/live_stream.png" className="live_stream" />
                            </Link>
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
                        <div className={`item dropdown ${inHoverProfile ? "open": ''}`}>
                            <Link
                                onMouseEnter={() => setHoverProfile(true)}
                                to="/demo"
                                className="dropdown-toggle link"
                                data-toggle="dropdown"
                                data-hover="dropdown"
                                aria-expanded={inHoverProfile}
                            >
                                <i className="icon user fas fa-user-circle" />
                            </Link>
                            <div className="dropdown-menu" onMouseLeave={() => setHoverProfile(false)}>
                                <FormContact />
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
