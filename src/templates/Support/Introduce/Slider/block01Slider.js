import React from "react";

const Block01Slider = (props) => {
    return (
        <figure>
            <img src={props.item.image_url} alt={props.item.image_alt} />
        </figure>
    )
}

export default Block01Slider;

