import React from "react";
import { Tooltip } from 'antd';
import { Trans } from "react-i18next";
import { formatCurrency } from "../../../functions/Utils";
import { IMAGE_URL } from "../../../contant";
import CardNoData from "../../../components/common/CardNoData";


const ItemProduct = (props) => {

    const { data } = props

    return (
        <div className="item">
            <figure className="image">
                <i className="liked active fas fa-heart" />

                <CardNoData />

                {/* <img src={data.product_avatar_url != "" ? data.product_avatar_url : IMAGE_URL + "/images/no_data.png"} alt={data.product_name} /> */}
                <div className="sell_status promotion"><Trans>product_off</Trans> <br /> 7%</div>
                <img className="img_promotion" src={IMAGE_URL + "/images/item_promotion.png"} alt={data.product_name} />
            </figure>
            <div className="heading">
                <div className="top">
                    <a href="#" className="name">{data.product_name}</a>
                </div>
                <p className="address mb-0"><Trans>product_the_selling_price_is_listed</Trans> ({data.product_estimate_price_unit_name})
                    <Tooltip title={data.product_estimate_price_unit_name}>
                        <i className="noted fas fa-info-circle" />
                    </Tooltip>
                </p>
            </div>
            <div className="details">
                <p className="child mb-0">
                    <i className="icon far fa-object-ungroup" />
                    <span className="text">
                        {data.product_acreage} ( {data.product_acreage_unit_name} )
                        <Tooltip title={data.product_acreage + " ( " + data.product_acreage_unit_name + " )"}>
                            <i className="noted fas fa-info-circle" />
                        </Tooltip>
                    </span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-compass" />
                    <span className="text">
                        {data.product_direction_name}
                    </span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-bed" />
                    <span className="text">
                        {data.product_total_bedroom}
                    </span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-restroom" />
                    <span className="text">
                        {data.product_total_bathroom}
                    </span>
                </p>
            </div>
            <div className="price">
                <div className="price__label">
                    <Trans>product_listed_price</Trans>
                    <Tooltip title={formatCurrency(data.product_estimate_price) + data.product_estimate_price_unit_name}>
                        <i className="noted fas fa-info-circle" />
                    </Tooltip>
                </div>
                <div className="price__wrap">
                    <div className="price__item">
                        <div className="price__discount">{formatCurrency(data.product_estimate_price) + data.product_estimate_price_unit_name}</div>
                        <div className="price__origin">
                            <span className="value">2.444.888.000đ </span> 8%
                        </div>
                    </div>
                    <div className="price__item">
                        <a href="#" className="btn btn_green"><Trans>product_buy_now</Trans></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct;
