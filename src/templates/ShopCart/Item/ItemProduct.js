import React from 'react';
import { IMAGE_LOGO } from '../../../contant';
import InputCheckboxViolet from '../../../components/base/Input/InputCheckboxViolet'
import { convertFloatToString, translate } from '../../../functions/Utils';
import { Tooltip } from 'antd';


const ItemProduct = props => {
    let { data } = props;
    return (
        <div className="block-more-apartment">
            <div className="block-show-apartment">
                <div className="apartment__img-area">
                    <InputCheckboxViolet checked={props.checked} onChange={props.onChange} />
                    <figure className="block-img">
                        {
                            <i className={`liked${props.like ? " active" : ""} fas fa-heart`} onClick={() => props.saveToProduct(!props.like)} />
                        }
                        {
                            props.data.product_avatar_url != ""
                                ? <img className="img-fluid img" src={props.data.product_avatar_url} alt={props.data.product_name} />
                                : <img className="logo_default" src={IMAGE_LOGO} alt={props.data.product_name} />
                        }
                        {/* <i className="liked active fas fa-heart" /> */}
                        {/* <img src="../images/intro_project_6.jpg" className="img-fluid img" alt="Căn hộ Saigon Royal" /> */}
                        <span className="delete">{translate("cart_delete_product")}</span>
                    </figure>
                </div>
                <div className="apartment__info">
                    <div className="heading">
                        <div className="name_apartment">
                            <div className="top">
                                <a href="#" className="name fw-medium">{data.product_name}</a>
                            </div>
                            <p className="address mb-0">{translate("cart_listed_price")} (đồng)
                                <Tooltip title="đẹp vl">
                                    <i className="noted fas fa-info-circle" />
                                </Tooltip>
                            </p>
                        </div>
                        <div className="price">
                            <div className="price__item ">
                                <div className="price__discount fw-bold color_e94c4c">{convertFloatToString(data.product_estimate_price)}{data.product_estimate_price_unit_name}</div>
                                <div className="price__origin color_e94c4c">
                                    <span className="value color_656565 text-deco">2.198.360.000đ</span> 7%
                                </div>
                            </div>
                        </div>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default ItemProduct;