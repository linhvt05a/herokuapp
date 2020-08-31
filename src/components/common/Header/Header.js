import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Trans } from "react-i18next";
import BannerAds from "./TopNav/BannerAds";
import NavLeft from "./TopNav/NavLeft";
import NavRight from "./TopNav/NavRight";
import Logo from "./Menu/Logo";
import MenuLeft from "./Menu/MenuLeft";
import MenuRight from "./Menu/MenuRight";

function Header() {
    const [show, setShowAdvisory] = useState(false);
    const [inHover, setHover] = useState(false);
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

    return (
        <header className={`header ${scrolling == true ? "fixed" : ''}`}>
            <div className="header_border">
                <BannerAds />
                <div className="container container-sm container-md">
                    <div className="header_top">
                        <NavLeft />
                        {/* <NavRight /> */}
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
                                            src="../images/lang_vn.jpg"
                                            alt="languages 1"
                                        />
                                        <i className="icon_arrow fas fa-chevron-down" />
                                    </Link>
                                    <ul className="dropdown-menu pull-right" >
                                        <li>
                                            <Link to="/#">
                                                <img
                                                    alt="languages 2"
                                                    src="../images/lang_en.png"
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
                                                    src="../images/lang_china.png"
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
                    <Logo />
                    <MenuLeft />
                    <MenuRight />
                </div>
            </div>
            <div className="modal-background" />
        </header>
    );
}

export default Header;
