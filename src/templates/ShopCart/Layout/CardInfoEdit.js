import React from 'react';
import { translate } from '../../../functions/Utils';
import { SelectCustom } from "../../../components/base"
import { useTranslation } from 'react-i18next';
import { NAME_GENDER } from "./index";
import { Form } from "antd"

const InfoEdit = props => {
    let { t } = useTranslation();
    let { Item } = Form;

    const onFinish = (value) => {
        localStorage.setItem("sale_customer_order", JSON.stringify(value))
        props.onNext()
    }
    return (
        <div className="info-buyer__change">
            {/* <div className="row"> */}
            <Form className="row" onFinish={onFinish} initialValues={props.data} form={props.form} >
                <div className="col-12 col-sm-6">
                    <Item name="gender">
                        <SelectCustom
                            label={<>{translate("cart_name")} <span className="star">*</span></>}
                            titleClassName="label"
                            classNameSelec="js-select2 form-control select2-hidden-accessible"
                            trans={true}
                            datas={NAME_GENDER} />
                    </Item>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">{translate("cart_customer_name")}  <span className="star">*</span>
                        </label>
                        <Item name="name">
                            <input placeholder="---" type="text" readOnly className="form-control" />
                        </Item>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <Item name="customers">
                        <SelectCustom
                            label={<>{translate("cart_customers")} <span className="star">*</span></>}
                            titleClassName="label"
                            classNameGroup="form-group"
                            classNameSelec="js-select2 form-control select2-hidden-accessible"
                            value={1}
                            datas={[{ value: 1, label: "Cá nhân" }]} />
                    </Item>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">{translate("cart_identity_card_number")}<span className="star">*</span>
                        </label>
                        <Item name="identityCardNumber">
                            <input placeholder="---" type="text" className="form-control" />
                        </Item>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <Item name="nation">
                        <SelectCustom
                            label={<>{translate("cart_nation")} <span className="star">*</span></>}
                            titleClassName="label"
                            classNameGroup="form-group"
                            classNameSelec="js-select2 form-control select2-hidden-accessible"
                            value={1}
                            datas={[{ value: 1, label: "Việt Nam" }]} />
                    </Item>
                </div>
                <div className="col-12 col-sm-6">
                    <Item name="city">
                        <SelectCustom
                            label={<>{translate("cart_province_city")} <span className="star">*</span></>}
                            titleClassName="label"
                            classNameGroup="form-group"
                            classNameSelec="js-select2 form-control select2-hidden-accessible"
                            value={1}
                            datas={[{ value: 1, label: "Hồ Chí Minh" }]} />
                    </Item>
                </div>
                <div className="col-12 col-sm-6">
                    <Item name="district">
                        <SelectCustom
                            label={<>{translate("cart_district")} <span className="star">*</span></>}
                            titleClassName="label"
                            classNameGroup="form-group"
                            classNameSelec="js-select2 form-control select2-hidden-accessible"
                            value={1}
                            datas={[{ value: 1, label: "Quân Tân Bình" }]} />
                    </Item>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">{translate("cart_address")} <span className="star">*</span>
                        </label>
                        <Item name="address">
                            <input placeholder="---" type="text" className="form-control" />
                        </Item>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">Email  <span className="star">*</span>
                        </label>
                        <Item name="email">
                            <input placeholder="---" type="text" readOnly className="form-control" />
                        </Item>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">{translate("cart_phone_number")} <span className="star">*</span>
                        </label>
                        <Item name="phone">
                            <input placeholder="---" type="text" className="form-control" />
                        </Item>
                    </div>
                </div>
            </Form>
            {/* </div> */}
            {/* <div className="text-center mt-2">
                <a className="btn btn_purple text-uppercase" onClick={() => form.submit()}>{translate("button_update")}</a>
            </div> */}
        </div>

    )
}
export default InfoEdit