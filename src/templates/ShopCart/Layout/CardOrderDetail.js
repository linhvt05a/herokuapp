import React from 'react';
import { translate } from '../../../functions/Utils';

const CardOrderDetail = props => {
    return (
        <div className="block block__02">
            <h3 className="block__heading">{translate("cart_order_details")}</h3>
            <div className="order-info">
                <div className="order-info__item">
                    <span className="order-info__label ad">
                        <i className="order-info__icon fas fa-ad" />
                    </span>
                    <div className="order-info__detail">
                        <p className="order-info__title">{translate("cart_code_order")}</p>
                        <p className="order-info__text">000011419</p>
                    </div>
                </div>
                <div className="order-info__item">
                    <span className="order-info__label calendar">
                        <i className="order-info__icon fas fa-calendar-alt" />
                    </span>
                    <div className="order-info__detail">
                        <p className="order-info__title">{translate("cart_order_date")}</p>
                        <p className="order-info__text">27/02/2020</p>
                    </div>
                </div>
                <div className="order-info__item">
                    <span className="order-info__label money">
                        <i className="order-info__icon las la-money-bill-wave" />
                    </span>
                    <div className="order-info__detail">
                        <p className="order-info__title">{translate("cart_status")}</p>
                        <p className="order-info__text">Chờ thanh toán</p>
                    </div>
                </div>
            </div>
            <div className="order-info__note">
                <p className="label">{translate("cart_note")}</p>
                <textarea className="form-control" placeholder="Nội dung ghi chú của bạn" defaultValue={""} />
            </div>
        </div>
    )
}
export default CardOrderDetail;