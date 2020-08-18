import React from "react";
import { ItemHeader, ItemProduct } from "../Item/index";
import CardNoData from "../../../components/common/CardNoData";
import Slider from "react-slick";

const CardSaleFlash = (props) => {

    const { datas } = props
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="striking_apartment label_filter bg_grey">
            <div className="container container-sm container-md">
                <ItemHeader label="sale_flash" />
                <div className="striking_apartment--content">
                    <div className="row">
                        <Slider>
                            {
                                (datas && datas.length > 0) ? datas.map((item, index) => (
                                    <ItemProduct key={index} data={item} />
                                )) : <CardNoData />
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSaleFlash;
