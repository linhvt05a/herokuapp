import React from "react";

const Block03Slider = (props) => {    
    const { imageLink, name, position } = props
    return (
        <div className="card">
            <div className="card-image">
                <img alt="Ban lãnh đạo" src={imageLink} />
            </div>
            <div className="card_info">
                <h6 className="card_info_name">
                    { name }
                </h6>
                <i className="card_info_position">
                    { position }
                </i>
            </div>
        </div>
    )
}

export default Block03Slider;

