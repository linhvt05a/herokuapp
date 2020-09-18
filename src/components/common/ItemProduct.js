import React, { useState } from "react";
import { Tooltip } from 'antd';
import { Trans } from "react-i18next";
import { formatCurrency } from "../../functions/Utils";
import { IMAGE_URL, IMAGE_LOGO } from "../../contant";
import CardNoData from "./CardNoData";
import { Link } from 'react-router-dom'
import { ButtonBuyNow } from "../base";
import {getLocalStore} from '../../functions/Utils'

const ItemProduct = (props) => {
    const { data } = props
    const [active, setActive] = useState(false)
    const loginData = getLocalStore('user')
    function saveProduct(productID) {
        if(loginData && loginData !== null){
            console.log(data)
            setActive(!active)
            
        }else {
            setActive(!active)
            if (!active) {
                var favor = JSON.parse(sessionStorage.getItem('favor'));
                if (!favor) {
                    favor = [];
                }
                var index = favor.indexOf(function (favorItem) {
                    return favorItem.product_id == data.product_id;
                });
                if (index !== -1) {
    
                } else {
                    favor.push({
                        product_id: data.product_id,
                        product_total_bathroom: data.product_total_bathroom,
                        product_total_bedroom: data.product_total_bedroom,
                        product_estimate_price: data.product_estimate_price,
                        product_name: data.product_name,
                        product_acreage: data.product_acreage,
                        is_favorite: true,
                        product_avatar_url: data.product_avatar_url
                    });
                    sessionStorage.setItem('favor', JSON.stringify(favor));
                }
    
            } else {
                var favorLocal = JSON.parse(sessionStorage.getItem('favor'));
                for (var index = 0; index <= favorLocal.length; index++) {
                    if (favorLocal[index].product_id === data.product_id) {
                        favorLocal.splice(index, 1)
                        sessionStorage.setItem('favor', JSON.stringify(favorLocal))
                    }
                }
            }
        }
       

    }

    return (
            data 
                ? <div className="item">
                    <figure className="image">
                        {
                        loginData && loginData !== null ?
                            <i className={ data.product_love_flag == true || active ? " liked active fas fa-heart" : "liked fas fa-heart"} onClick={saveProduct} />
                            :
                            <i className={ active  ? " liked active fas fa-heart " : "liked fas fa-heart"} onClick={saveProduct} />
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
                            data.product_group_type_id === 1 ?
                                //housing
                                <p className="child mb-0">
                                    <i className="icon fas fa-restroom" />
                                    <span className="text">
                                        {data.product_total_bathroom ? data.product_total_bathroom : '-'}
                                    </span>
                                </p> :
                                //building
                                <p className="child mb-0">
                                    <i className=" icon fas fa-expand-arrows-alt" />
                                    <span className="text">
                                        {data.product_width ? data.product_width : '-'} x {data.product_length ? data.product_length : '-'}
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
                                    <span className="value">{data.product_real_price ? data.product_real_price : '0000000000'} </span> {data.product_discount_percent ? product_discount_percent : '-'}
                                </div>
                            </div>
                            <div className="price__item">
                                <ButtonBuyNow data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                : <CardNoData />
    )
}

export default ItemProduct;
