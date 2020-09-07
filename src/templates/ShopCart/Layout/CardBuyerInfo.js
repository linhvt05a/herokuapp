import React from 'react';
import { CardInfoEdit } from '../Layout';
import { translate } from '../../../functions/Utils';

const CardBuyerInfo = props => {
    const [edit, setEdit] = React.useState(false)
    return (
        <div className="block block__03">
            {edit ? <CardInfoEdit /> :
                [<h3 className="block__heading d-flex flex-column flex-lg-row align-items-start	align-items-lg-center" key="1">
                    {translate("cart_buyer_infomation")}    <div className="can-edit ml-0 ml-lg-auto mt-2 mt-lg-0" onClick={() => setEdit(true)}>
                        <i className="can-edit__icon fas fa-pencil-alt" />
                        <span className="can-edit__text" >{translate("button_edit")}</span>
                    </div>
                </h3>,
                <table className="info-buyer" key="2">
                    <tbody><tr>
                        <th>
                            <div className="info-buyer__left">
                                <i className="info-buyer__icon fas fa-user-alt" />
                                <div className="info-buyer__label">
                                    {translate("cart_customer_name")} </div>
                            </div>
                        </th>
                        <td>
                            <div className="info-buyer__value">
                                Trần Thị Thu Hoài  </div>
                        </td>
                    </tr>
                        <tr>
                            <th>
                                <div className="info-buyer__left">
                                    <i className="info-buyer__icon fas fa-address-card" />
                                    <div className="info-buyer__label">
                                        {translate("cart_identity_card_number")} </div>
                                </div>
                            </th>
                            <td>
                                <div className="info-buyer__value">
                                    340320350  </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="info-buyer__left">
                                    <i className="info-buyer__icon fas fa-map-marker-alt" />
                                    <div className="info-buyer__label">
                                        {translate("cart_address")}</div>
                                </div>
                            </th>
                            <td>
                                <div className="info-buyer__value">
                                    24/3 đường Lê Hồng Phong, Phường 16, Q.3, Tp.HCM, Việt Nam   </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="info-buyer__left">
                                    <i className="info-buyer__icon fas fa-envelope" />
                                    <div className="info-buyer__label">
                                        Email</div>
                                </div>
                            </th>
                            <td>
                                <div className="info-buyer__value">
                                    dnha21068801@gmail.com </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="info-buyer__left">
                                    <i className="info-buyer__icon fas fa-phone-alt" />
                                    <div className="info-buyer__label">
                                        {translate("cart_phone_number")} </div>
                                </div>
                            </th>
                            <td>
                                <div className="info-buyer__value">  0909 789 325  </div>
                            </td>
                        </tr>
                    </tbody></table>]
            }

            {/* <CardInfoEdit /> */}
        </div>

    )
}
export default CardBuyerInfo