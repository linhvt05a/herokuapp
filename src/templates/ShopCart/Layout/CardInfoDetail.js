import React from 'react';
import { Trans } from 'react-i18next';

const CardInfoDetail = (props) => {

    return (
        <div className="block block__01">
            <h3 className="block__heading d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
                <Trans>cart_customer_info_detail</Trans>
                <div className="can-edit ml-0 ml-lg-auto mt-2 mt-lg-0">
                    <i className="can-edit__icon fas fa-pencil-alt" />
                    <span className="can-edit__text"> <Trans>button_edit</Trans></span>
                </div>
            </h3>
            <table className="info-buyer">
                <tbody>
                    <tr>
                        <th>
                            <div className="info-buyer__left">
                                <i className="info-buyer__icon fas fa-user-alt" />
                                <div className="info-buyer__label"><Trans>cart_customer_name</Trans></div>
                            </div>
                        </th>
                        <td>
                            <div className="info-buyer__value">
                                Trần Thị Thu Hoài
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <div className="info-buyer__left">
                                <i className="info-buyer__icon fas fa-address-card" />
                                <div className="info-buyer__label"><Trans>cart_identity_card_number</Trans></div>
                            </div>
                        </th>
                        <td>
                            <div className="info-buyer__value">
                                340320350
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <div className="info-buyer__left">
                                <i className="info-buyer__icon fas fa-map-marker-alt" />
                                <div className="info-buyer__label"><Trans>cart_address</Trans></div>
                            </div>
                        </th>
                        <td>
                            <div className="info-buyer__value">
                                24/3 đường Lê Hồng Phong, Phường 16, Q.3, Tp.HCM, Việt Nam
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <div className="info-buyer__left">
                                <i className="info-buyer__icon fas fa-envelope" />
                                <div className="info-buyer__label"><Trans>cart_email</Trans></div>
                            </div>
                        </th>
                        <td>
                            <div className="info-buyer__value">
                                dnha21068801@gmail.com
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <div className="info-buyer__left">
                                <i className="info-buyer__icon fas fa-phone-alt" />
                                <div className="info-buyer__label"><Trans>cart_phone_number</Trans></div>
                            </div>
                        </th>
                        <td>
                            <div className="info-buyer__value">
                                0909 789 325
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CardInfoDetail;
