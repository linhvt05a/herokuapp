import React from "react";
import { ItemProduct, ItemTimeLine } from "../Item/index";
import HeadingFilter from '../../../components/common/HeadingFilter'
import CardNoData from "../../../components/common/CardNoData";
import Slider from "react-slick";

const CardSaleFlash = (props) => {

    const { headerBodyClassName, labelHeader, datas, banner, detail, options, readmore, timeLine } = props
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="striking_apartment label_filter bg_grey">
            <div className="container container-sm container-md">
                <HeadingFilter headerBodyClassName={headerBodyClassName} labelHeader={labelHeader} options={options ? options : undefined} readmore={readmore ? readmore : undefined} />
                {
                    banner ? <img src="/assets/images/flashsale.png" style={{width: "100%", marginBottom: "40px"}}></img> : ""
                }
                {
                    timeLine ? <ItemTimeLine /> : ""
                }
                <div className="striking_apartment--content jsSalesQuick">
                    {
                        (datas && datas.length > 0) ?
                            detail ?
                                <div className="row">
                                    {
                                        datas.map((item, index) => (
                                            <ItemProduct key={index} data={item} detail />
                                        ))
                                    }
                                </div> :
                                <Slider {...settings}>
                                    {
                                        datas.map((item, index) => (
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

export default CardSaleFlash;
