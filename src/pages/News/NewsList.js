import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopBanner from "../../components/common/TopBanner";
import {Categories, FilterProject} from '../News/index'
import {Paginations} from '../../components/base/index'
import RegisterModal from "./RegisterModal";


const News = () => {
        return (
            <div className="news">
                <TopBanner />
                <div className="container container-sm container-md">
                    <h3 className="main_heading" style={{marginTop: 85}}>
                        <span>Các bản tin tức</span>
                    </h3>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                        <div className="row_content">
                            <RowNews />
                            <RowNews />
                            <RowNews />
                            <RowNews />
                            <RowNews />
                        </div>
                            <Paginations total_page={20} total_record={4} page={1} />
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-right_news mb-sm-3 mb-0">
                            <Categories />
                            <FilterProject />
                        </div>
                        <button onClick={handleShow}>
                            click
                        </button>
                    </div>
                </div>
            </div>
        );
}

const RowNews = () => {
    return(
            <div className="card">
                <Link to="/" className="link"></Link>
                <div className="row ">
                    <div className="col-sm-12 col-md-5 col-xl-5 d-flex">
                        <div className="news__card--img">
                            <img alt="ccvvvv" src="./assets/images/news_card_1.jpg" />
                        </div>
                    </div>
                    <div className="col-md-7 col-xl-7">
                        <div className="news__card--content">
                            <Link className="title" to="#">
                                Công nghệ AR mới nhất hiện
                                nay sẽ được áp dụng vào ngôi
                                nhà của bạn
                            </Link>
                            <div className="times">
                                Ngày đăng : 17/02/2020
                            </div>
                            <p className="contain">
                                Chương trình khuyến mãi của
                                Serviced Residences. Miễn
                                phí 1 tháng tiền thuê áp
                                dụng cho Hợp đồng thuê từ 12
                                tháng. Tặng gói dịch vụ cơ
                                bản hàng tháng Áp dụng cho
                                Hợp đồng thuê từ 06 tháng
                                bao gồm: Internet, TH cáp,
                                điện sinh hoạt có ...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default News;
