import React, { useEffect, useState } from 'react';
import BannerAds from "./TopNav/BannerAds";
import NavLeft from "./TopNav/NavLeft";
import NavRight from "./TopNav/NavRight";
import Logo from "./Menu/Logo";
import MenuLeft from "./Menu/MenuLeft";
import MenuRight from "./Menu/MenuRight";
import { MOBILE_WIDTH } from "../../../contant"

function Header() {
    const [show, setShowAdvisory] = useState(false);
    const [inHover, setHover] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [isMBToggle, setMBToggle] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    const hideMBToggle = () => {
        setMBToggle(false)
    }

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
                    {/* ui mobile */}
                    <button class="mb_toggle" onClick={() => setMBToggle(!isMBToggle)}>
                        <span></span>
                    </button>
                    {/* end */}
                    <MenuLeft active={isMBToggle} hideMBToggle={hideMBToggle} MOBILE_WIDTH={MOBILE_WIDTH} />
                    <MenuRight MOBILE_WIDTH={MOBILE_WIDTH} />
                </div>
            </div>
            <div className={`modal-background ${isMBToggle ? 'active' : ''}`} />
        </header>
    );
}

export default Header;
