import React from 'react';
import { Link } from "react-router-dom";
import {IMAGE_URL} from '../../../../contant'

const BannerAds = (props) => {
    return (
        <Link to="/#">
            <img src={`${IMAGE_URL}images/mask-group-364.png`} className="w-100" />
        </Link>
    )
}
export default BannerAds;