import React from 'react';
import { Trans } from 'react-i18next';
import { convertFloatToString } from '../../../functions/Utils';
import { ItemProduct } from "./index"

const ItemProjectProduct = (props) => {
    const { showPaymentProgressModal, showPromotionModal, data } = props
    const showPaymentProgress = () => {
        showPaymentProgressModal(true)
    }

    const showPromotion = () => {
        showPromotionModal(true)
    }

    return (
        <ItemProduct show={true} {...props}>
            <div className="info-block">
                <div className="description-apartment">
                    <div className="details">
                        <p className="child mb-0 icon-description">
                            <i className="icon far fa-object-ungroup" />
                            <span className="text">{data.product_acreage} ( {data.product_acreage_unit_name} )</span>
                        </p>
                        <p className="child mb-0 icon-description">
                            <i className="icon fas fa-restroom" />
                            <span className="text">2</span>
                        </p>
                        <p className="child mb-0 icon-description">
                            <i className="icon fas fa-compass" />
                            <span className="text">ĐB</span>
                        </p>
                        <p className="child mb-0 icon-description">
                            <i className="icon fas fa-bed" />
                            <span className="text">2</span>
                        </p>
                    </div>
                    <div className="content_pay">
                        <div className="block_progress_pay">
                            <div className="cart-expenses__list">
                                <span className="cart-expenses__title text-uppercase title_gray"><Trans>cart_payment_progress</Trans></span>
                            </div>
                            <div className="title_black">Thanh toán sớm 30%</div>
                        </div>
                        <div className="icon">
                            <i className="fas fa-money-bill-wave icon-money" onClick={showPaymentProgress} />
                        </div>
                    </div>
                    <div className="content_pay">
                        <div className="block_progress_pay">
                            <div className="cart-expenses__list">
                                <span className="cart-expenses__title text-uppercase title_gray"><Trans>cart_special_offers</Trans></span>
                            </div>
                            <div className="title_black">
                                Tặng quà <span className="color_e94c4c">(quy đổi tiền)</span>
                            </div>
                        </div>
                        <div className="icon">
                            <i className="fas fa-gift icon-gift" onClick={showPromotion} />
                        </div>
                    </div>
                </div>
                <div className="cart-expenses ">
                    <div className="cart-expenses__list">
                        <span className="cart-expenses__title"><Trans>cart_real_estate_prices</Trans></span>
                        <span className="cart-expenses__value">9.586.779.409</span>
                    </div>
                    <div className="cart-expenses__list">
                        <span className="cart-expenses__title"><Trans>cart_vat</Trans></span>
                        <span className="cart-expenses__value">681.577.024</span>
                    </div>
                    <div className="cart-expenses__list">
                        <span className="cart-expenses__title"><Trans>cart_maintain_expense</Trans></span>
                        <span className="cart-expenses__value">191.735.589</span>
                    </div>
                    <div className="cart-expenses__list ">
                        <span className="cart-expenses__title"><Trans>cart_discount_amount</Trans></span>
                        <span className="cart-expenses__value color_e94c4c">247.571.950</span>
                    </div>
                </div>
            </div>
        </ItemProduct>
    )
}
export default ItemProjectProduct;
