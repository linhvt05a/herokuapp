import React from "react";
import {Link} from "react-router-dom";

const Block05Slider  = (props) => {    

    return (
        <Link to={props.item.link} className="partner__logo">
            <img alt='Minerva' src={ props.item.image_url } />
        </Link>
    )
}

export default Block05Slider ;

