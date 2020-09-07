import React from 'react';
import { Tooltip } from 'antd';
import InputCheckboxViolet from '../../../components/base/Input/InputCheckboxViolet'
import { Trans } from 'react-i18next';

const ItemProjectProduct = (props) => {

    const { showPaymentProgressModal, showPromotionModal } = props

    const showPaymentProgress = () => {
        showPaymentProgressModal(true)
    }

    const showPromotion = () => {
        showPromotionModal(true)
    }

    return (
        <div className="block-more-apartment">
            <div className="block-show-apartment">
                <div className="apartment__img-area">
                    <InputCheckboxViolet checked={props.checked} onChange={props.onChange} />
                    <figure className="block-img">
                        <i className="liked active fas fa-heart" />
                        <img src="../images/intro_project_6.jpg" className="img-fluid img" alt="Căn hộ Saigon Royal" />
                        <span className="delete"><Trans>cart_delete_product</Trans></span>
                    </figure>
                </div>
                <div className="apartment__info">
                    <div className="heading">
                        <div className="name_apartment">
                            <div className="top">
                                <a href="#" className="name fw-medium">Căn hộ B6 - F01</a>
                            </div>
                            <p className="address mb-0"><Trans>cart_listed_price</Trans> (đồng)
                                <Tooltip title="đẹp vl">
                                    <i className="noted fas fa-info-circle" />
                                </Tooltip>
                            </p>
                        </div>
                        <div className="price">
                            <div className="price__item ">
                                <div className="price__discount fw-bold color_e94c4c">
                                    2.044.474.800đ
                                </div>
                                <div className="price__origin color_e94c4c">
                                    <span className="value color_656565 text-deco">2.198.360.000đ</span> 7%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="description-apartment">
                            <div className="details">
                                <p className="child mb-0 icon-description">
                                    <i className="icon far fa-object-ungroup" />
                                    <span className="text">80 ( m<sup>2</sup> )</span>
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
                </div>
            </div>
        </div>
    )
}
export default ItemProjectProduct;
