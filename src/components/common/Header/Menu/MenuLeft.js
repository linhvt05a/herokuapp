import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Trans } from "react-i18next";
import { FormUserMobile } from '../../../../templates/Account/index';
import { IMAGE_URL } from '../../../../contant'

const MenuLeft = (props) => {
    const { active, hideMBToggle } = props;
    const [clickMenuSupport, setMenuSupport] = useState(false);
    const [clickMenuLogin, setMenuLogin] = useState(false);
    const [inHoverNav, setHoverNav] = useState(false);
    return (
        <ul className={`header_menu ${active ? 'active' : ''}`}>
            <li className="logo item d-md-none">
                <NavLink className="item-link" to="/">
                    <img
                        className="w-100"
                        src={`${IMAGE_URL}images/logo.jpg`}
                        alt="Minerva"
                    />
                </NavLink>
                <i className="icon-close" onClick={hideMBToggle} style={{ cursor: "pointer" }}>×</i>
            </li>
            <li className="item mt-3 mt-md-0">
                <NavLink exact activeClassName="active" className="item-link" to="/">
                    <Trans>header_menu_home</Trans>
                </NavLink>
            </li>
            <li className="item">
                <NavLink activeClassName="active" className="item-link" to="/project/selling"
                >
                    <Trans>header_menu_selling</Trans>
                </NavLink>
            </li>
            <li className="item">
                <NavLink activeClassName="active" className="item-link" to="/project/coming-soon">
                    <Trans>header_menu_willsell</Trans>
                </NavLink>
            </li>
            <li className="item">
                <NavLink activeClassName="active" className="item-link" to="/exchanges">
                    <Trans>header_menu_exchanges</Trans>
                </NavLink>
            </li>
            <li className={`item hasChild dropdown d-none d-md-block ${inHoverNav ? "open" : ''}`} >
                <div onMouseEnter={() => setHoverNav(true)}
                    className="item-link dropdown-toggle cursor-pointer"
                >
                    <Trans>header_menu_support</Trans>
                </div>
                <ul className="header_menu--child dropdown-menu" onMouseLeave={() => setHoverNav(false)}>
                    <li className="item-child">
                        <NavLink activeClassName="active"
                            className="item-child-link"
                            to="/shopping-guide"
                        >
                            <Trans>header_menu_buying_guide</Trans>
                        </NavLink>
                    </li>
                    <li className="item-child">
                        <NavLink activeClassName="active"
                            className="item-child-link"
                            to="/legal"
                        >
                            <Trans>header_menu_juridical</Trans>
                        </NavLink>
                    </li>
                    <li className="item-child">
                        <NavLink activeClassName="active"
                            className="item-child-link"
                            to="/news"
                        >
                            <Trans>header_menu_news</Trans>
                        </NavLink>
                    </li>
                    <li className="item-child">
                        <NavLink activeClassName="active"
                            className="item-child-link"
                            to="/contact"
                        >
                            <Trans>header_menu_contact</Trans>
                        </NavLink>
                    </li>
                    <li className="item-child">
                        <NavLink activeClassName="active"
                            className="item-child-link"
                            to="/recruitment"
                        >
                            <Trans>header_menu_recruitment</Trans>
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li className="item header_register-mb d-block d-md-none hasChild">
                <a className={`item-link ${clickMenuSupport ? "active" : ""}`} onClick={() => setMenuSupport(!clickMenuSupport)}>
                    <i className="pr-1 fas fa-user-circle" />
                    <Trans>header_menu_support</Trans>
                </a>
                <ul className={`header_menu--child accordion ${clickMenuSupport ? "active" : ""}`}>
                    <li className="item-child">
                        <Link className="item-child-link" to="/shopping-guide">
                            <Trans>header_menu_buying_guide</Trans>
                        </Link>
                    </li>
                    <li className="item-child">
                        <Link
                            className="item-child-link"
                            to="/legal"
                        >
                            <Trans>header_menu_juridical</Trans>
                        </Link>
                    </li>
                    <li className="item-child">
                        <Link
                            className="item-child-link"
                            to="/news"
                        >
                            <Trans>header_menu_news</Trans>
                        </Link>
                    </li>
                    <li className="item-child">
                        <Link
                            className="item-child-link"
                            to="/contact"
                        >
                            <Trans>header_menu_contact</Trans>
                        </Link>
                    </li>
                    
                </ul>
            </li>
            <li className="item">
                <NavLink activeClassName="active" className="item-link mr-0" to="/promotion">
                    <Trans>header_menu_promotion</Trans>
                </NavLink>
                <img src={`${IMAGE_URL}images/gift.png`} class="gift" />
            </li>
            <li className="item d-flex justify-content-between d-md-none">
                <Link to="/#" className="item-link pr-0">
                    <i className="pr-1 fas fa-comments" />
                    <Trans>header_menu_advisory</Trans>
                </Link>
                <div className="header_mb_ultilites d-flex justify-content-center align-items-center">
                    <Link to="/#" className="item-utility">
                        <i className="icon far fa-heart" />
                    </Link>
                    <Link to="/#" className="item-utility">
                        <i className="icon fas fa-cart-plus" />
                    </Link>
                    <div className="item-utility dropdown languages">
                        <button className="dropdown-toggle">
                            <img src={`${IMAGE_URL}images/lang_vi.jpg`} alt="languages" />
                            <i className="icon_arrow fas fa-chevron-down" />
                        </button>
                        <ul className="dropdown-menu pull-right">
                            <li>
                                <button className="language_link">
                                    <img src={`${IMAGE_URL}images/lang_en.jpg`} />
                                    <span>English</span>
                                </button>
                            </li>
                            <li className="active">
                                <button className="language_link">
                                    <img src={`${IMAGE_URL}images/lang_china.jpg`} />
                                    <span>China</span>
                                </button>
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
                <Link className={`item-link ${clickMenuLogin ? "active" : ""}`} onClick={() => setMenuLogin(!clickMenuLogin)} to="/demo">
                    <i className="pr-1 fas fa-user-circle" />
                    Đăng ký / Đăng nhập
                </Link>
                {document.defaultView.innerWidth <= props.MOBILE_WIDTH && <FormUserMobile active={clickMenuLogin} />}
            </li>
        </ul>
    )
}
export default MenuLeft;