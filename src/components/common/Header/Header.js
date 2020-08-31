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
                        <NavRight />
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
