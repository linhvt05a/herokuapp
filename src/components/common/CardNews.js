import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Trans } from "react-i18next";
import Slider from "react-slick";
import { convertDateShow } from "../../functions/Utils";
import CardNoData from './CardNoData';


const CardNews = (props) => {
    const { data } = props
    const settings = {
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }

    return (
        <div className="latest_news bg_grey">
            <div className="container container-sm container-md">
                <div className="latest_news--heading">
                    <h3 className="main_heading">
                        <span><Trans>home_latest_news</Trans></span>
                    </h3>
                    <a href="/news" className="readmore">
                        {data && data.length > 3 ? <span><Trans>home_latest_news_read_more</Trans></span> : ""}
                        {data && data.length > 3 ? <i className="icon fas fa-angle-double-right" /> : ""}
                    </a>
                </div>
                <div className="latest_news--content">
                    {data && data.length > 0
                        ? <Slider {...settings}>
                            {data && data.map((news, index) => <NewsLoop item={news} key={index} />)}
                        </Slider>
                        : <CardNoData />
                    }
                </div>
            </div>
        </div>

    )

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", backgroundColor: 'gray' }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", backgroundColor: 'gray' }}
                onClick={onClick}
            />
        );
    }
}


const NewsLoop = (props) => {
    const { item } = props
    return (

        <div className="item">
            <figure className="img">
                <img
                    className="w-100"
                    src={item.news_avatar}
                    alt="Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM"
                />
            </figure>
            <div className="box">
                <h4 className="name">
                    <Link to={"/news/" + item.news_id} tabIndex={0}>
                        {item.news_title}
                    </Link>
                </h4>
                <div className="des">
                    {item.description}
                </div>
                <span className="time">
                    <i className="icon far fa-clock" />
                    {convertDateShow(item.from_date)}
                </span>
            </div>
        </div>
    )
}

export default CardNews