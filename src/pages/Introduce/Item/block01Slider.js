import React from "react";

const Block01Slider = (props) => {
    
    const { imageLink, alt } = props

    return (
        <figure>
            <img src={imageLink} alt={imageLink} />
        </figure>
    )
}

export default Block01Slider;

