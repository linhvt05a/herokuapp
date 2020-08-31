import {Link} from "react-router-dom";
import React from "react";
import Slider from "react-slick";

import Block03Slider from '../Slider/block03Slider';

const Block03 = (props) => {    
    const block03Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
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
        {
            avatar_url:'./images/intro_card_leader1.jpg',
            name:'Nguyen Van A',
            position:'Director A',
        },
        {
            avatar_url:'./images/intro_card_leader2.jpg',
            name:'Nguyen Van B',
            position:'Director B',
        },
        {
            avatar_url:'./images/intro_card_leader3.jpg',
            name:'Nguyen Van C',
            position:'Director C',
        },
        {
            avatar_url:'./images/intro_card_leader4.jpg',
            name:'Nguyen Van D',
            position:'Director D',
        },
        {
            avatar_url:'./images/intro_card_leader1.jpg',
            name:'Nguyen Van A',
            position:'Director A',
        },
        {
            avatar_url:'./images/intro_card_leader2.jpg',
            name:'Nguyen Van B',
            position:'Director B',
        }
    ]

    return (
        <div className="block_leadership">
            <div className="container container_block_leadership">
                <div className="container container-sm container-md">
                    <h3 className="main_heading">
                        <span>Ban lãnh đạo</span>
                    </h3>
                    <div className="leadership">
                        <Slider {...block03Settings}>
                            {datasSlider.length > 0 && datasSlider.map((data, index) => {
                                return (<Block03Slider key={index} item={data} />)
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block03;

