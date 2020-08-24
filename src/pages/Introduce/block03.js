import {Link} from "react-router-dom";
import React from "react";
import Block03Slider from './item/Block03Slider';

const Block03 = (props) => {    
    const block03Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className="block_leadership">
            <div className="container container_block_leadership">
                <div className="container container-sm container-md">
                    <h3 className="main_heading">
                        <span>Ban lãnh đạo</span>
                    </h3>
                    <div className="leadership">
                        <Block03Slider {...block03Settings}>
                            <Block03Slider />
                        </Block03Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block03;

