import React from 'react';
import { Tooltip } from 'antd';
import { Trans } from 'react-i18next';

const CardCartSummary = (props) => {

    const { extend } = props

    return (
        <div className="cart-expenses mb-45 ">
            <div className="sales_heading">
                <span className="text"><Trans>cart_listed_amount_total</Trans> (đồng)
                    <Tooltip title="đẹp vl">
                        <i className="icon_info fas fa-info-circle" />
                    </Tooltip>
                </span>
                <span className="number">10.212.520.022</span>
            </div>
            <div className={extend ? "cart-expenses__detail listed_price" : "cart-expenses__detail"}>
                <div className="cart-expenses__list">
                    <span className="cart-expenses__title"><Trans>cart_real_estate_prices</Trans></span>
                    <span className="cart-expenses__value">9.586.779.409</span>
                </div>
                <div className="cart-expenses__list">
                    <span className="cart-expenses__title"><Trans>cart_vat</Trans> (<Trans>cart_provisional</Trans>)</span>
                    <span className="cart-expenses__value">681.577.024</span>
                </div>
                <div className="cart-expenses__list">
                    <span className="cart-expenses__title"><Trans>cart_maintain_expense</Trans> (<Trans>cart_provisional</Trans>)</span>
                    <span className="cart-expenses__value">191.735.589</span>
                </div>
                <div className="cart-expenses__list promotion">
                    <span className="cart-expenses__title"><Trans>cart_discount_amount</Trans></span>
                    <span className="cart-expenses__value">247.571.950</span>
                </div>
            </div>
            {
                extend &&
                <div className="temporary-product bg_white">
                <div className="temporary-product__title fw-bold uni-text-6d30ab">
                    <Trans>cart_product_provisional</Trans> (20)
                </div>
                <div className="temporary-product__product">
                    <div className="pd_scroll">
                        <ul>
                            <li>
                                <div className="temporary-product__list">
                                    <span className="temporary-product__department">Căn hộ B6 - F01</span>
                                    <span className="temporary-product__price fw-bold">1.333.677.000</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <a className="btn btn_purple text-uppercase"><Trans>cart_deposit_proceed</Trans></a>
                </div>
            </div>
            }
        </div>
    )
}
export default CardCartSummary;
