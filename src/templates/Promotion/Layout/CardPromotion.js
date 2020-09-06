import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { ItemProduct } from "../../Home/Item";
import CardNoData from "../../../components/common/CardNoData";
import HeadingLine from '../../../components/common/HeadingLine';
import { productAction } from "../../../store/action";

const CardPromotion = (props) => {

    const { headerBodyClassName, labelHeader, banner, detail, options, readmore } = props

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
                <HeadingLine headerBodyClassName={headerBodyClassName} labelHeader={labelHeader} options={options ? options : undefined} readmore={readmore ? readmore : undefined} />
                {
                    banner ? <img src="../images/sale_banner.png" style={{width: "100%", marginBottom: "40px"}}></img> : ""
                }
                <div className="striking_apartment--content">
                    {
                        (datas && datas.detail && datas.detail.list_product && datas.detail.list_product != null && datas.detail.list_product.length > 0) ?
                            detail ?
                                <div className="row">
                                    {
                                        datas.detail.list_product.map((item, index) => (
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                                <ItemProduct key={index} data={item} detail />
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
            </div>
        </div>
    )
}

export default CardPromotion;
