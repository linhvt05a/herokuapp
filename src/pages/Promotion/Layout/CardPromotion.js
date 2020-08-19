import React from "react";
import Slider from "react-slick";
import { ItemPromotion } from "../Item/index";
import CardNoData from "../../../components/common/CardNoData";
import HeadingFilter from '../../../components/common/HeadingFilter'

const CardPromotion = (props) => {

    const { headerBodyClassName, labelHeader, datas, banner, detail, options, readmore } = props
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
                <div className="striking_apartment--content">
                    {
                        (datas && datas.length > 0) ?
                            detail ?
                                <div className="row">
                                    {
                                        datas.map((item, index) => (
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">

                                            <ItemPromotion key={index} data={item} detail />
                                            </div>
                                        ))
                                    }
                                </div> :
                                <Slider {...settings}>
                                    {
                                        datas.map((item, index) => (
                                            <ItemPromotion key={index} data={item} />
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
