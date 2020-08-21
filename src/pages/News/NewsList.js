import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopBanner from "../../components/common/TopBanner";
import { Categories, FilterProject } from '../News/index'
import { Paginations } from '../../components/base/index'
import RegisterModal from "./RegisterModal";
import { Trans } from "react-i18next";

const data = { img: 'project.jpg' }
const news =
    [
        {
            id: 0,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 1,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 2,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 3,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        }
    ]
const News = () => {
    return (
        <div className="news">
            <div className="container container-sm container-md">
                <h3 className="main_heading" style={{ marginTop: 85 }}>
                    <span><Trans>NEWS</Trans></span>
                </h3>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                        <div className="row_content">
                            { news && news.map((news, index)=> <RowNews data={news} index={news.id}/>)}
                        </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-right_news mb-sm-3 mb-0">
                            <Categories />
                            <FilterProject />
                        </div>
                    </div>
                    <Paginations />
                </div>
                </div>
    );
}

const RowNews = (props) => {
    return(
            <div className="card" key={props.index}>
                <Link to="/" className="link"></Link>
                <div className="row ">
                    <div className="col-sm-12 col-md-5 col-xl-5 d-flex">
                        <div className="news__card--img">
                            <img src={props.data.image} />
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-xl-7">
                    <div className="news__card--content">
                        <Link className="title" to="#">
                            {props.data.title}
                        </Link>
                        <div className="times">
                            Ngày đăng : {props.data.time}
                        </div>
                        <p className="contain">
                            {props.data.description}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default News;
