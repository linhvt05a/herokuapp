import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const CardNews = () => {
    return(
        <div className="latest_news bg_grey">
        <div className="container container-sm container-md">
            <div className="latest_news--heading">
                <h3 className="main_heading">
                    <span>Tin tức mới nhất</span>
                </h3>
                <Link to="/" className="readmore">
                    XEM THÊM
                    <i className="icon fas fa-angle-double-right" />
                </Link>
            </div>
            <div className="latest_news--content js_news slick-initialized slick-slider">
                <div aria-live="polite" className="slick-list draggable">
                    <div className="slick-track" role="listbox" style={{ opacity: 1, width: 1134, left: 0 }}>
                        <NewsLoop />
                        <NewsLoop />
                        <NewsLoop />
                        <NewsLoop />
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    
    )
}

const NewsLoop = () =>{
    return (
            <div className="item slick-slide slick-current slick-active"  data-slick-index={0} aria-hidden="false"  tabIndex={-1}  role="option" 
                    aria-describedby="slick-slide00" style={{ width: 354 }}>
                        <figure className="img">
                            <img
                                className="w-100"
                                src="./assets/images/four-brown-wooden-chairs-2635038.jpg"
                                alt="Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM"
                            />
                        </figure>
                        <div className="box">
                            <h4 className="name">
                                <a href="#" tabIndex={0}>
                                Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM
                                </a>
                            </h4>
                            <div className="des">
                                Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát
                            </div>
                            <span className="time">
                                <i className="icon far fa-clock" />
                                9:00 - 27/02/2020
                            </span>
                        </div>
            </div>
    )
}

export default CardNews