import React, { useState } from "react";
import { ItemTimeLine } from "../Item/index";
import { ItemPromotion } from "../../Promotion/Item/index";
import HeadingFilter from '../../../components/common/HeadingFilter'
import CardNoData from "../../../components/common/CardNoData";
import Slider from "react-slick";
import Pagination from '../../../components/common/Pagination'

const CardSaleFlash = (props) => {

    const { headerBodyClassName, labelHeader, datas, banner, detail, options, readmore, timeLine } = props
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const [paging, setPaging] = useState({
        totalItem: 18,
        currentPage:  2,
        totalPage: 5,
        itemOnPage: 6
    });

    return (
        <div className="project_detail--list bg_grey sales_quick">
            <div className="container container-sm container-md">
                <HeadingFilter headerBodyClassName={headerBodyClassName} labelHeader={labelHeader} options={options ? options : undefined} readmore={readmore ? readmore : undefined} link="/flashsale" />
                {
                    banner ? <img src="/assets/images/flashsale.png" style={{width: "100%", marginBottom: "40px"}}></img> : ""
                }
                {
                    timeLine ? <ItemTimeLine datas={['2020-08-20T13:20:00', '2020-08-20T14:20:00', '2020-08-20T15:00:00', '2020-08-20T15:20:00', '2020-08-20T16:20:00']} /> : ""
                }
                <div className="striking_apartment--content jsSalesQuick">
                    {
                        (datas && datas.length > 0) ?
                            detail ?
                                <div className="row">
                                    {
                                        datas.map((item, index) => (
                                            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                                <ItemPromotion data={item} detail />
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
                {
                    detail &&
                    <Pagination dataPaging={paging}/>
                }
            </div>
        </div>
    )
}

export default CardSaleFlash;
