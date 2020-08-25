import React from 'react';
import { Link } from "react-router-dom";

const Logo = (props) => {
    return (
        <Link className="header_logo" to="/">
            <img src="./assets/images/logo.jpg" alt="Minerva" />
        </Link>
    )
}
export default Logo;