import React from 'react';
import { translate } from '../../../functions/Utils';

const CardBillInfomation = props => {
    return (
        <div className="block block__04">
            <h3 className="block__heading">{translate("cart_billing_information")}</h3>
            <div className="project_item__detail">
                <div className="view_horizontal">
                    <div className="item">
                        <i className="icon fas fa-building" />
                        <div className="text">
                            <span className="text-uppercase">
                                {translate("cart_amount_paid")} (đồng)  </span>
                            <span className="value money">50.000.000</span>
                        </div>
                    </div>
                    <div className="item">
                        <i className="icon fas fa-money-bill-wave" />
                        <div className="text">
                            <span className="text-uppercase">
                                {translate("cart_payment_method")}
                            </span>
                            <span className="value">Chuyển khoản ngân hàng</span>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="block__heading-sub">{translate("cart_deposit_transfer")}</h4>
            <table className="info-buyer">
                <tbody><tr>
                    <th>
                        <div className="info-buyer__left">
                            <i className="info-buyer__icon fas fa-building" />
                            <div className="info-buyer__label">
                                {translate("text_bank")}
                            </div>
                        </div>
                    </th>
                    <td>
                        <div className="info-buyer__value">
                            SCB - Hội sở
                  </div>
                    </td>
                </tr>
                    <tr>
                        <th>
                            <div className="info-buyer__left">
                                <i className="info-buyer__icon fas fa-address-card" />
                                <div className="info-buyer__label">
                                    {translate("cart_account_number")}
                                </div>
                            </div>
                        </th>
                        <td>
                            <div className="info-buyer__value">
                                19130848623336
                  </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <div className="info-buyer__left">
                                <i className="info-buyer__icon fas fa-user" />
                                <div className="info-buyer__label">
                                    {translate("cart_account_name")}
                                </div>
                            </div>
                        </th>
                        <td>
                            <div className="info-buyer__value">
                                Công ty đầu tư và xây dựng bất động sản Minerva
                  </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <div className="info-buyer__left">
                                <i className="info-buyer__icon fas fa-file-alt" />
                                <div className="info-buyer__label">
                                    {translate("cart_content")}
                                </div>
                            </div>
                        </th>
                        <td>
                            <div className="info-buyer__value">
                                Mua sản phẩm căn hộ của Minerva - Thu Hoài nộp cọc 000011419
                  </div>
                        </td>
                    </tr>
                </tbody></table>
        </div>

    )
}
export default CardBillInfomation;