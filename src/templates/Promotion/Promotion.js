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
    const[totalItem, setTotalItem] = useState(0)
    const[currentPage, setCurrentPage] = useState(0)
    const[totalPage, setTotalPage] = useState(0)
    const[itemOnPage, setItemOnPage] = useState(0)

    const promotion = useSelector(state => state.promotionReducer);
    const promotionListSuccess = promotion.promotionList.success
    const promotionList = promotionListSuccess ? promotion.promotionList.detail : null;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(promotionAction.loadPromotionList({}));
    }, []);

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
                        <Pagination data={LoadDataPaging(totalItem, currentPage, totalPage, itemOnPage)} />
                    </div>
                </div>
            </div>
            <CardPromotion headerBodyClassName="label_filter--heading" labelHeader="hot_promotion" datas={["a", "iu", "e", "vl", "wa", "di"]} banner readmore />
        </div>
    )
}

const RowPromotion = (props) => {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
            <div className="item h-100">
                <figure className="img">
                    <img className="w-100" src={props.data.image} />
                </figure>
                <div className="box">
                    <h4 className="name">
                        <a href="#">{props.data.title}</a>
                    </h4>
                    <div className="des">{props.data.description}</div>
                    <span className="time">
                        <i className="icon far fa-clock" />{props.data.time}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Promotion