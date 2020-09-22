import React, { useState, useEffect } from 'react'
import Pagination from '../../components/common/Pagination'
import CardPromotion from './CardPromotion'
import { Trans } from 'react-i18next';
import { LoadDataPaging } from '../../functions/Utils';
import { useDispatch, useSelector } from "react-redux";
import { promotionAction, newsAction } from "../../store/action/index";
import { convertDateShow } from "../../functions/Utils";
import CardNoData from '../../components/common/CardNoData';
import { IMAGE_URL } from '../../contant';

const Promotion = () => {
    const promotions = useSelector(state => state.newsReducer);
    const promotionsSuccess = promotions.newsList.success
    const promotionList = promotionsSuccess ? promotions.newsList.detail : null;

    const dispatch = useDispatch();

    const promotionRecord = promotionsSuccess ? promotions.newsList : null

    const total_page = promotionRecord && promotionRecord != null ? promotionRecord.total_page : null
    const total_record = promotionRecord && promotionRecord != null ? promotionRecord.total_record : null
    const page = promotionRecord && promotionRecord != null ? promotionRecord.page : null
    const limit = 0

    useEffect(() => {
        dispatch(newsAction.LoadNewsList({ category_news_group: 4 }))
    }, []);

    const handleChangePage = (value) => {
        dispatch(newsAction.LoadNewsList({ page: value, limit: 5, category_news_group: 4 }))
    }
    return (
        <div className="promotion-page">
            <CardSaleFlash
                image_ads={`${IMAGE_URL}images/flashsale_smaller.jpg`}
                headerBodyClassName="label_filter--heading"
                labelHeader="flash_sale" readmore timeLine
            />

            <figure><img src={`${IMAGE_URL}images/promotion_ads_page.png`} className="w-100" alt="minerva" /></figure>

            <div className="overview" >
                <div className="container container-sm container-md">
                    <h2 className="overview_heading">
                        <Trans>Offers_and_promotions</Trans>
                        <span className="sub">
                            <Trans>
                                Here we provide customers with information about the program.
                                Use the newest and most attractive update when buying their property
                    </Trans>
                        </span>
                    </h2>
                    <div className="latest_news p-0 ">
                        <div className="container container-sm container-md tab-content">
                            <div className="latest_news--content tab-pane fade active show" id="home">
                                {promotionList && promotionList.length > 0 ?
                                    <div className="row">
                                        {promotionList && promotionList.map((item, index) => <RowPromotion data={item} key={index} index={item.id} />)}
                                    </div> : <CardNoData />}
                            </div>
                        </div>
                        <Pagination data={LoadDataPaging(total_record, page, total_page, limit)} onChange={handleChangePage} />
                    </div>
                </div>
            </div>



            <CardPromotion headerBodyClassName="label_filter--heading" labelHeader="hot_promotion" banner readmore />
        </div>
    )
}

const RowPromotion = (props) => {
    const { data } = props
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
            <div className="item h-100">
                <figure className="img">
                    <img className="w-100" src={data.news_avatar} />
                </figure>
                <div className="box">
                    <h4 className="name">
                        <a href="#"><Trans>{data.news_title}</Trans></a>
                    </h4>
                    <div className="des"><Trans>{data.description}</Trans></div>
                    <span className="time">
                        <i className="icon far fa-clock" />
                        <Trans>From:</Trans> {convertDateShow(data.from_date)} - <Trans>To: </Trans>{convertDateShow(data.to_date)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Promotion