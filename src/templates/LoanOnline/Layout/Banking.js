import React from 'react';
import { SliderSimple } from "./index"

const Banking = props => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    };
    const dataImgs = [
        {
            image_url: "../images/bank02.jpg"
        },
        {
            image_url: "../images/bank03.jpg"
        },
        {
            image_url: "../images/bank04.jpg"
        },
        {
            image_url: "../images/bank05.jpg"
        },
        {
            image_url: "../images/bank06.jpg"
        },
        {
            image_url: "../images/bank07.jpg"
        }
    ];
    return (
        <div className="borrow__item">
            <div className="borrow__title text-uppercase">Chọn ngân hàng<i className="sub">  SCB ưu tiên hổ trợ mọi hình thức vay vốn</i>
            </div>
            <div className="borrow__banks borrowBanks">
                <SliderSimple dataImgs={dataImgs} settings={settings} />
            </div>
        </div>
    )
}
export default React.memo(Banking)