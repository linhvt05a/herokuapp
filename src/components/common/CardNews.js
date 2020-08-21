import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Trans } from "react-i18next";

const CardNews = (props) => {
    const{data} = props
    const latest_news = data.slice(0, 3)
    return(
        <div className="latest_news bg_grey">
        <div className="container container-sm container-md">
            <div className="latest_news--heading">
                <h3 className="main_heading">
                <Trans><span>LATEST NEWS</span></Trans>
                </h3>
                <Link to="/news" className="readmore">
                    <Trans><span>READ MORE</span></Trans>
                    <i className="icon fas fa-angle-double-right" />
                </Link>
            </div>
            <div className="latest_news--content js_news slick-initialized slick-slider">
                <div aria-live="polite" className="slick-list draggable">
                    <div className="slick-track" role="listbox" style={{ opacity: 1, width: 1134, left: 0}}>
                        {latest_news && latest_news.map((data)=><NewsLoop item={data} />)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

const NewsLoop = (props) =>{
    return (
            <div className="item slick-slide slick-current slick-active"  data-slick-index={0} aria-hidden="false"  tabIndex={-1}  role="option" 
                    aria-describedby="slick-slide00" style={{ width: 354, marginTop: 20 }} key={props.id}>
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
    )
}

export default CardNews