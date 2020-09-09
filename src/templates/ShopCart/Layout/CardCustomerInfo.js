import React from 'react';
import { Trans } from 'react-i18next';
import { CardInfoEdit } from "./index";
import { Form } from "antd"

const CardCustomerInfo = (props) => {
    const [form] = Form.useForm();
    let data = {
        gender: 1,
        name: "Trần Thị Thu Hoài",
        customers: 1,
        identityCardNumber: 345020630,
        nation: 1,
        city: 1,
        district: 1,
        address: "220/4 đường Cách Mạng Tháng 8",
        email: "thutran1975@gmail.com",
        phone: "0909125620"
    }
    return (
        <div className="col-12 col-sm-12 col-lg-8 main-cart__info-buyer">
            <div className="block block__01">
                <h3 className="block__heading"><Trans>cart_customer_infor</Trans></h3>
                <div className="noted noted-1"><Trans>cart_note_1</Trans></div>
                <div className="noted noted-2">
                    <Trans>cart_note_2</Trans><br /><Trans>cart_note_3</Trans>
                    <a href="#" className="link"><Trans>cart_general_information</Trans></a>
                    <Trans>cart_note_4</Trans>
                </div>
                <CardInfoEdit data={data} form={form} {...props} />
            </div>
            <div className="text-right mt-2">
                <a className="btn btn_purple text-uppercase" onClick={() => form.submit()}><Trans>button_confirm</Trans></a>
            </div>
        </div>
    )
}
export default CardCustomerInfo;
