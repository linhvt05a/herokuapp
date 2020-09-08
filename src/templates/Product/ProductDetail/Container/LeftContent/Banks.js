

import React, { Component, useRef } from 'react'
import { Trans } from 'react-i18next';
import Slider from 'react-slick';
import CardCollapse from '../../component/CardCollapse';


const Banks = (props) => {
    // const { data } = props;

    const data = [
        {
            img: "../images/bank02.jpg"
        },
        {
            img: "../images/bank03.jpg"
        },
        {
            img: "../images/bank04.jpg"
        },
        {
            img: "../images/bank05.jpg"
        },
        {
            img: "../images/bank06.jpg"
        },
        {
            img: "../images/bank07.jpg"
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    }

    return (
        <CardCollapse title='Ngân hàng hổ trợ liên kết' {...props}>

            Các ngân hàng đầy uy tính đã liên kết với chúng tôi trong việc cho bạn vay những khoản tiền phù hợp, để mua những sản phẩm của chúng tôi :
            <div className="bank_linked">
                <Slider {...settings}>
                    {
                        data && data.map((value, key) => {
                            return (
                                <div key={key} className="bank_linked__item">
                                    <img src={value.img} alt="bank_linked" />
                                </div>
                            )
                        })
                    }
                </Slider>

            </div>

        </CardCollapse>
    )
}

export default Banks;
