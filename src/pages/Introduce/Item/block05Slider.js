import React from "react";
import {Link} from "react-router-dom";

const Block05Slider  = (props) => {    
    const { imageLink, linkTo, alt } = props

    return (
        <Link to='' className="partner__logo">
            <img alt={ alt } src={ imageLink } />
        </Link>
    )
}

export default Block05Slider ;

