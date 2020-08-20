import React from "react";
import { Trans } from 'react-i18next';  
import { Link } from "react-router-dom";
import { ItemProduct } from "../Item/index";
import HeadingFilter from '../../../components/common/HeadingFilter'
import CardNoData from "../../../components/common/CardNoData";
import Slider from "react-slick";

const CardHotProduct = (props) => {

    const { headerBodyClassName, labelHeader, datas, detail, options } = props
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="project_detail--list bg_grey sales_quick">
            <div className="container container-sm container-md">
                <HeadingFilter headerBodyClassName={headerBodyClassName} labelHeader={labelHeader} options={options ? options : undefined} />
                <div className="striking_apartment--content">
                    {
                        (datas && datas.length > 0) ?
                        <div className="row">
                            {
                                datas.map((item, index) => (
                                    detail ?
                                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <ItemProduct data={item} detail />
                                    </div> :
                                    index < 6 ?
                                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <ItemProduct data={item} detail />
                                    </div> : ""
                                ))
                            }
                        </div> :
                        <CardNoData />
                    }
                    {
                        (options) &&
                        <div className="text-center text-uppercase">
                            <Link to="/" className="btn btn_purple"><Trans>see_all</Trans></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CardHotProduct;
