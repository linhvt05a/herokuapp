import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import FormContact from "../../FormContact";

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
                <Link className="link"
                    onMouseEnter={() => setHoverProfile(true)}
                    to="/demo"
                    aria-expanded={inHoverProfile}>
                    <i className="icon user fas fa-user-circle" />
                </Link>
                <div className="dropdown-menu" onMouseLeave={() => setHoverProfile(false)}>
                    <FormContact />
                </div>
            </div>
        </div>
    )
}
export default MenuRight;