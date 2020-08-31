import {Link} from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import { Trans } from "react-i18next";


import Block05Slider  from "../Slider/block05Slider";

const Block05 = (props) => {    
    const block05Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const datasSlider = [
        { image_url:'./images/partner_logo.jpg', link:'/' },
        { image_url:'./images/partner_logo_2.jpg', link:'/' },
        { image_url:'./images/partner_logo.jpg', link:'/' },
        { image_url:'./images/partner_logo_2.jpg', link:'/' },
        { image_url:'./images/partner_logo.jpg', link:'/' },
        { image_url:'./images/partner_logo_2.jpg', link:'/' },
        { image_url:'./images/partner_logo.jpg', link:'/' },
        { image_url:'./images/partner_logo_2.jpg', link:'/' },
        { image_url:'./images/partner_logo.jpg', link:'/' },
    ]

    return (
        <div className="partner bg_grey">
            <div className="container container-sm container-md">
                <div className="partner__title text-center">
                    <Trans>introduce_partner_heading</Trans>
                </div>
                <div className="partner__slider">
                    <Slider {...block05Settings}>
                        {datasSlider.length > 0 && datasSlider.map((data, index) => {
                            return (<Block05Slider key={index} item={data} />)
                        })}
                    </Slider>

                    
                </div>
            </div>
        </div>
    )
}

export default Block05;

