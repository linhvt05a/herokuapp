import {Link} from "react-router-dom";
import React from "react";
import Block05Slider  from "./Item/Block05Slider";

const Block05 = (props) => {    
    const block05Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className="partner">
            <div className="container container-sm container-md">
                <div className="partner__title text-center">
                    Các đối tác
                </div>
                <div className="partner__slider">
                    <Block05Slider {...block05Settings}>
                        <Block05Slider />
                    </Block05Slider>
                </div>
            </div>
        </div>
    )
}

export default Block05;

