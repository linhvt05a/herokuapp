import React from 'react';
import { Trans } from 'react-i18next';
import { CardInfoEdit } from "./index";
import { Form } from "antd"
import { getLocalStore } from '../../../functions/Utils';

const CardCustomerInfo = (props) => {
    const [form] = Form.useForm();
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
                <div className="info-buyer__change">
                    {props.data &&
                        <CardInfoEdit data={props.data} form={form} {...props} />}
                </div>
            </div>
            <div className="text-right mt-2">
                <a className="btn btn_purple text-uppercase" onClick={() => form.submit()}><Trans>button_confirm</Trans></a>
            </div>
        </div>
    )
}
export default CardCustomerInfo;
