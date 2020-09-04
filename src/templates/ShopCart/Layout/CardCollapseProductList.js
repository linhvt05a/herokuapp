import React from 'react';
import { Trans } from 'react-i18next';

const CardCollapseProductList = (props) => {

    return (
        <div className="cart-product">
            <div className="cart-product__heading"><Trans>cart_product_list</Trans> (20)</div>
            <div className="cart-product__content">
                <div className="cart-product__name">
                    Dự án Royal Garden
                </div>
                <div className="cart-product__item">
                    <figure className="cart-product__image">
                        <img src="../images/avatar_logged.jpg" alt="avatar_logged" />
                        <span className="delete"><Trans>button_delete</Trans></span>
                    </figure>
                    <div className="cart-product__wrap">
                        <a href="#" className="apart_name">Căn hộ B6 - F01</a>
                        <div className="apart_noted">Giá bán đã niêm yết (đồng)</div>
                        <div className="apart_price">1.333.677.000</div>
                        <div className="apart_utiliti">
                            <span className="uti">
                                <i className="icon far fa-object-ungroup" />
                                80
                            </span>
                            <span className="uti">
                                <i className="icon fas fa-compass" />
                                DB
                            </span>
                            <span className="uti">
                                <i className="icon fas fa-bed" />
                                2
                            </span>
                            <span className="uti">
                                <i className="icon fas fa-restroom" />
                                2
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardCollapseProductList;
