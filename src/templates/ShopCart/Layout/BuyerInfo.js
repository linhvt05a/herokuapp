import React from 'react';
import { CardInfoEdit } from '../Layout';
import { translate, getLocalStore } from '../../../functions/Utils';
import { Form } from "antd"

const CardBuyerInfo = props => {
    const [edit, setEdit] = React.useState(false);
    const onClick = () => {
        setEdit(!edit)
    }
    let [form] = Form.useForm();
    const [data, setData] = React.useState()
    React.useEffect(() => {
        let newdata = getLocalStore("sale_customer_order");
        if (newdata) {
            setData(newdata)
        }
        else {
            setData({
                gender: 1,
                name: "Trần Thị Thu Hoài",
                customers: 1,
                identityCardNumber: '345020630',
                nation: 1,
                city: 1,
                district: 1,
                address: "220/4 đường Cách Mạng Tháng 8",
                email: "thutran1975@gmail.com",
                phone: "0909125620"
            })
        }
    }, [])
    return (
        <div className="block block__03">
            {edit == true ?
                <div className="info-buyer__change">
                    {data &&
                        <CardInfoEdit data={data} form={form} onNext={onClick} />}
                    <div className="text-center mt-2">
                        <a className="btn btn_purple text-uppercase" onClick={() => form.submit()}>{translate("button_update")}</a>
                    </div>
                </div> :
                [<h3 className="block__heading d-flex flex-column flex-lg-row align-items-start	align-items-lg-center" key="1">
                    {translate("cart_buyer_infomation")}    <div className="can-edit ml-0 ml-lg-auto mt-2 mt-lg-0" onClick={() => onClick()}>
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
                            <div className="info-buyer__value">{data && data.name}    </div>
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
                                <div className="info-buyer__value">{data && data.identityCardNumber}   </div>
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
                                <div className="info-buyer__value">{data && data.address}  </div>
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
                                <div className="info-buyer__value">{data && data.email}</div>
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
                                <div className="info-buyer__value">{data && data.phone} </div>
                            </td>
                        </tr>
                    </tbody></table>]
            }

            {/* <CardInfoEdit /> */}
        </div>

    )
}
export default CardBuyerInfo