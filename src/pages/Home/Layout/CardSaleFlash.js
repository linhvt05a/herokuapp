import React from "react";
import { ItemHeader, ItemProduct } from "../Item/index";
import CardNoData from "../../../components/common/CardNoData";
import Slider from "react-slick";

const CardSaleFlash = (props) => {

    const { datas, banner, detail, options, readmore } = props
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="striking_apartment label_filter bg_grey">
            <div className="container container-sm container-md">
                <ItemHeader label="sale_flash" options={options ? options : undefined} readmore={readmore ? readmore : undefined} />
                {
                    banner ? <img src="/assets/images/flashsale.png" style={{width: "100%", height: "100px", marginBottom: "40px"}}></img> : ""
                }
                <div className="striking_apartment--content">
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
