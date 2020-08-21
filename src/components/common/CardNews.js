import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Trans } from "react-i18next";
import Slider from "react-slick";


const CardNews = (props) => {
    const{data} = props
    const latest_news = data.slice(0)
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    }
    
    return(
        <div className="latest_news bg_grey">
        <div className="container container-sm container-md">
            <div className="latest_news--heading">
                <h3 className="main_heading">
                <Trans><span>LATEST NEWS</span></Trans>
                </h3>
                <a href="/news" className="readmore">
                    <Trans><span>READ MORE</span></Trans>
                    <i className="icon fas fa-angle-double-right" />
                </a>
            </div>
            <Slider {...settings}>
                {latest_news && latest_news.map((data)=> <NewsLoop item={data} key ={data.id}/>)}
            </Slider>
            </div>
    </div>
    
    )

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style,  display: "block",backgroundColor:'gray' }}
            onClick={onClick}
        />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style, display: "block", backgroundColor:'gray'}}
            onClick={onClick}
        />
        );
    }
}


const NewsLoop = (props) =>{
    return (
        <div class="latest_news--content">
            <div className="item " style={{ width: 354, marginLeft: 10}}>
                <figure className="img">
                    <img
                        className="w-100"
                        src={props.item.image}
                        alt="Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM"
                    />
                </figure>
                <div className="box">
                    <h4 className="name">
                        <a href="#" tabIndex={0}>
                            {props.item.title}
                        </a>
                    </h4>
                    <div className="des">
                        {props.item.description}
                    </div>
                    <span className="time">
                        <i className="icon far fa-clock" />
                        {props.item.time}
                    </span>
                </div>
            </div>
        </div>
    
    )
}

export default CardNews