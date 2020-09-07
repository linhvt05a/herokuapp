import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemTimeLine } from "../Item/index";
import { ItemProduct } from "../../Home/Item";
import HeadingLine from '../../../components/common/HeadingLine';
import CardNoData from "../../../components/common/CardNoData";
import Slider from "react-slick";
import Pagination from '../../../components/common/Pagination';
import { LoadDataPaging } from '../../../functions/Utils';
import { productAction } from "../../../store/action/index";

const CardSaleFlash = (props) => {

    const { headerBodyClassName, labelHeader, banner, detail, options, readmore, timeLine } = props

    const product = useSelector(state => state.productReducer);
    const isGetHotProductListSuccess = product.hotProductList.success;
    const datas = isGetHotProductListSuccess ? product.hotProductList : null;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productAction.loadHotProductList({}));
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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
    };

    return (
        <div className="project_detail--list bg_grey sales_quick">
            <div className="container container-sm container-md">
                <HeadingLine headerBodyClassName={headerBodyClassName} labelHeader={labelHeader} options={options ? options : undefined} readmore={readmore ? readmore : undefined} link="/flashsale" trans />
                {
                    banner ? <img src="../images/flashsale.png" style={{width: "100%", marginBottom: "40px"}}></img> : ""
                }
                {
                    timeLine ? <ItemTimeLine datas={['2020-08-20T13:20:00', '2020-08-20T14:20:00', '2020-08-20T15:00:00', '2020-08-20T15:20:00', '2020-08-20T16:20:00']} /> : ""
                }
                <div className="striking_apartment--content jsSalesQuick">
                    {
                        (datas && datas.detail && datas.detail.list_product && datas.detail.list_product != null && datas.detail.list_product.length > 0) ?
                            detail ?
                                <div className="row">
                                    {
                                        datas.detail.list_product.map((item, index) => (
                                            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                                <ItemProduct data={item} detail />
                                            </div>
                                        ))
                                    }
                                </div> :
                                <Slider {...settings}>
                                    {
                                        datas.detail.list_product.map((item, index) => (
                                            <ItemProduct key={index} data={item} />
                                        ))
                                    }
                                </Slider> :
                                <CardNoData />
                    }
                </div>
                {
                    detail &&
                    <Pagination data={LoadDataPaging(18, 2, 5, 6)} />
                }
            </div>
        </div>
    )
}

export default CardSaleFlash;
