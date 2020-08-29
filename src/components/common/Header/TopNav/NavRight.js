import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavRight = (props) => {
    const [inHover, setHover] = useState(false);
    const [show, setShowAdvisory] = useState(false);
    return (
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
                        aria-expanded={inHover}>
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
    )
}
export default NavRight;