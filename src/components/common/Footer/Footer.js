import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
    Form,
    Input,
    Button,
    AutoComplete,
    message
} from 'antd';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from "react-redux";
import { contactAddAction } from "../../../store/action"
import { translate } from '../../../functions/Utils';
import { RULES } from '../../../contant';

const AutoCompleteOption = AutoComplete.Option;

function Footer() {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { t } = useTranslation()
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    let dataStore = useSelector(state => state.contactAddReducer);
    let { messageLitter, error } = dataStore
    const onFinish = values => {
        dispatch(contactAddAction.registrationNewsletter({ email: values.email }))
    };
    useEffect(() => {
        if (messageLitter != null) {
            if (error) {
                message.warning(messageLitter)
            }
            else {
                message.success(messageLitter)
            }
        }
    }, [messageLitter])
    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="container container-sm container-md">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xl-4 mb-5 mb-md-4 mb-xl-0">
                            <div className="footer_item footer_menu">
                                <h2 className="label">Menu</h2>
                                <div className="row">
                                    <div className="col-6 col-sm-5">
                                        <ul className="style_01">
                                            <li>
                                                <Link to="/">
                                                    {translate("header_menu_home")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/introduce">
                                                    {translate("introduce_banner_title")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/news">
                                                    {translate("header_menu_news")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/recruitment">
                                                    {translate("header_menu_recruitment")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">
                                                    {translate("header_menu_contact")}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-5">
                                        <ul className="style_01">
                                            <li>
                                                <Link to="/project/selling">
                                                    {translate("project_list")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/hot-product">
                                                    {translate("product_hot_product_banner_title")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/promotion">
                                                    {translate("header_menu_promotion")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/shopping-guide">
                                                    {translate("header_menu_buying_guide")}
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/legal">
                                                    {translate("header_menu_juridical")}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-4 footer_border-lr mb-5 mb-xl-0">
                            <div className="footer_item footer_contact">
                                <h2 className="label">
                                    {translate("contact_us")}
                                </h2>
                                <ul>
                                    <li className="phone">
                                        <Link to="tel:1900123456">
                                            <i className="fas fa-phone-alt" />
                                            <span className="number">
                                                1900 - 123 - 456
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">
                                            <i className="fas fa-envelope" />
                                            info@minerva.vn
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">
                                            <i className="fas fa-map-marker-alt" />
                                            {translate("us_address")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-4 ml-md-auto mr-md-auto mt-xl-0">
                            <div className="footer_item footer_send_mail">
                                <h2 className="label">
                                    {translate("newsletter")}
                                </h2>
                                <div className="content">
                                    <p className="text_input-mail">
                                        {translate("news_note")}
                                    </p>
                                    <Form
                                        className="input-group"
                                        form={form}
                                        name="registermail"
                                        onFinish={onFinish}
                                    >
                                        <Form.Item
                                            name="email"
                                            rules={RULES.email.form}>
                                            <Input className="form-control" placeholder={translate("your_email", t)} />
                                        </Form.Item>
                                        <Button className="input-group-text" type="primary" htmlType="submit">
                                            {translate("registry")}
                                        </Button>
                                    </Form>
                                    <ul className="list_social">
                                        <li>
                                            <Link to="/#">
                                                <i className="fab fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/#">
                                                <i className="fab fa-skype" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/#">
                                                <i className="fab fa-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/#">
                                                <i className="fab fa-google-plus-g" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <span className="footer_copy-right">
                        Bản quyền của Minerva năm 2020
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
