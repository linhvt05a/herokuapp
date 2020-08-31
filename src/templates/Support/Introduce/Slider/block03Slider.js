import React from "react";

const Block03Slider = (props) => {    
    return (
        <div className="card">
            <div className="card-image">
                <img alt={props.item.name} src={props.item.avatar_url} />
            </div>
            <div className="card_info">
                <h6 className="card_info_name">
                    { props.item.name }
                </h6>
                <i className="card_info_position">
                    { props.item.position }
                </i>
            </div>
        </div>
    )
}

export default Block03Slider;

