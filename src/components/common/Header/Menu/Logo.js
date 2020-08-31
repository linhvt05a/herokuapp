import React from 'react';
import { Link } from "react-router-dom";
import {IMAGE_URL} from '../../../../contant'

const Logo = (props) => {
    return (
        <Link className="header_logo" to="/">
            <img src={`${IMAGE_URL}images/logo.jpg`} alt="Minerva" />
        </Link>
    )
}
export default Logo;