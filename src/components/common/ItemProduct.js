import React, { useState } from "react";
import { Tooltip } from 'antd';
import { Trans } from "react-i18next";
import { formatCurrency } from "../../functions/Utils";
import { IMAGE_URL, IMAGE_LOGO } from "../../contant";
import CardNoData from "./CardNoData";
import { Link } from 'react-router-dom'
import { ButtonBuyNow } from "../base";


const ItemProduct = (props) => {
    const { data} = props
    const [active, setActive] = useState(false)
    const[favorites, setFavorites] = useState([])
    function saveProduct(favID){
       setActive(!active)
       if(!active){
       
       }
    }

    return (
        <div className="item">
            <figure className="image">
                {
                    <i className={`liked fas fa-heart ${active || data.product_love_flag ? " active": ""}`} onClick={()=>saveProduct(data.product_id)}/>
                }
                {
                    data.product_avatar_url != ""
                        ? <img src={data.product_avatar_url} alt={data.product_name} />
                        : <img className="logo_default" src={IMAGE_LOGO} alt={data.product_name} />
                }
                <div className="sell_status promotion"><Trans>product_off</Trans> <br /> %</div>
                <img className="img_promotion" src={IMAGE_URL + "/images/item_promotion.png"} alt={data.product_name} />
            </figure>
            <div className="heading">
                <div className="top">
                    <Link to={"/product/" + data.product_id} className="name">{data.product_name}</Link>
                </div>
                <p className="address mb-0">{data.product_address}</p>
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
                        {data.product_direction_name ? data.product_direction_name : '-'}
                    </span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-bed" />
                    <span className="text">
                        {data.product_total_bedroom ? data.product_total_bedroom : '-'}
                    </span>
                </p>
                {
                    data.project_group_type === 1 ?
                        <p className="child mb-0">
                            <i className="icon fas fa-restroom" />
                            <span className="text">
                                {data.product_total_bathroom ? data.product_total_bathroom : '-'}
                            </span>
                        </p> :
                        <p className="child mb-0">
                            <i className=" icon fas fa-expand-arrows-alt" />
                            <span className="text">
                                {data.product_total_bathroom ? data.product_total_bathroom : '-'}
                            </span>
                        </p>
                }
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
                        <ButtonBuyNow data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct;
