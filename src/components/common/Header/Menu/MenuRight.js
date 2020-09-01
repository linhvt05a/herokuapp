import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FormUser } from "../../../../templates/Account/index";

const MenuRight = (props) => {
    const [inHoverProfile, setHoverProfile] = useState(false);
    return (
        <div className="header_actions d-none d-md-flex">
            <div className="item">
                <Link to="/#" className="link">
                    <img src="../images/live_stream.png" className="live_stream" />
                </Link>
                <Link to="/#" className="link">
                    <span className="icon">
                        <i className="heart far fa-heart" />
                        <i className="number">4</i>
                    </span>
                </Link>
            </div>
            <div className="item">
                <Link to="/cart" className="link">
                    <i className="icon cart fas fa-cart-plus" />
                </Link>
            </div>
            <div className={`item dropdown ${inHoverProfile ? "open": ''}`}>
                <Link to="/demo" className="link"
                    onMouseEnter={() => setHoverProfile(true)}
                    aria-expanded={inHoverProfile}>
                    <i className="icon user fas fa-user-circle" />
                </Link>
                <div className="dropdown-menu" onMouseLeave={() => setHoverProfile(false)}>
                    <FormUser />
                </div>
            </div>
        </div>
    )
}
export default MenuRight;