import React, { useState, useEffect} from 'react'
import TopBanner from "../../components/common/Header/TopBanner";
import Pagination from '../../components/common/Pagination'
import { CardPromotion } from './Layout/index'
import { CardSaleFlash } from '../Home/Layout/index'
import { Trans } from 'react-i18next';
import { LoadDataPaging } from '../../functions/Utils';
import { useDispatch, useSelector } from "react-redux";
import { promotionAction } from "../../store/action/index";

const Promotion = () => {
    const promotion = useSelector(state => state.promotionReducer);
    const promotionListSuccess = promotion.promotionList.success
    const promotionList = promotionListSuccess ? promotion.promotionList.detail : null;
    const dispatch = useDispatch();

    const promotionRecord = promotionListSuccess ? promotion.promotionList: null
    const total_page = promotionRecord && promotionRecord != null ? promotionRecord.total_page : null
    const total_record = promotionRecord && promotionRecord != null ? promotionRecord.total_record: null
    const page = promotionRecord && promotionRecord != null ? promotionRecord.page: null
    const limit = 0

    useEffect(() => {
        dispatch(promotionAction.loadPromotionList({}));
    }, []);

const handleChangePage = (value) =>{
    dispatch(promotionAction.loadPromotionList({page:value, limit: limit}))
}
    return (
        <div className="homePage">
            <CardSaleFlash headerBodyClassName="label_filter--heading" labelHeader="flash_sale" datas={["a", "iu", "e", "vl", "wa", "di"]} banner readmore timeLine />
            <div className="overview" >
                <div className="container container-sm container-md">
                    <h2 className="overview_heading">
                        <Trans>Offers and promotions</Trans>
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
                                <div className="row">
                                    {promotionList && promotionList.map((item, index)=><RowPromotion data ={item} key={index} index={item.id}/>)}     
                                </div>
                            </div>
                        </div>
                        <Pagination data={LoadDataPaging(total_record, page, total_page, limit)} onChange = {handleChangePage}/>
                    </div>
                </div>
            </div>
            <CardPromotion headerBodyClassName="label_filter--heading" labelHeader="hot_promotion" datas={["a", "iu", "e", "vl", "wa", "di"]} banner readmore />
        </div>
    )
}

const RowPromotion = (props) => {
    const{data} = props
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
            <div className="item h-100">
                <figure className="img">
                    <img className="w-100" src={data.image} />
                </figure>
                <div className="box">
                    <h4 className="name">
                        <a href="#"><Trans>{data.name}</Trans></a>
                    </h4>
                    <div className="des"><Trans>{data.des}</Trans></div>
                    <span className="time">
                        <i className="icon far fa-clock" />
                            <Trans>From:</Trans> {data.timeFrom} - <Trans>To: </Trans>{data.timeTo}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Promotion