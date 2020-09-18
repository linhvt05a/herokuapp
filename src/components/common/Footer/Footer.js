import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
    Form,
    Input,
    Button,
    AutoComplete,
    message
} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { contactAddAction } from "../../../store/action"
import { translate } from '../../../functions/Utils';

const AutoCompleteOption = AutoComplete.Option;

function Footer() {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
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
                                                    Trang chủ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/introduce">
                                                    Giới thiệu
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/news">
                                                    Tin tức
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/recruitment">
                                                    Tuyển dụng
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">
                                                    Liên hệ
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-5">
                                        <ul className="style_01">
                                            <li>
                                                <Link to="/project/selling">
                                                    Danh sách dự án
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/hot-product">
                                                    Sản phẩm nổi bật
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/promotion">
                                                    Khuyến mãi
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/shopping-guide">
                                                    Hướng dẫn mua
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/legal">
                                                    Pháp lý
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
                                            119 Pasteur, Phường 6, Quận 3, TPHCM
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-4 ml-md-auto mr-md-auto mt-xl-0">
                            <div className="footer_item footer_send_mail">
                                <h2 className="label">
                                    Đăng ký nhận bản tin
                                </h2>
                                <div className="content">
                                    <p className="text_input-mail">
                                        Nhập e-mail của bạn để nhận tin tức
                                        mới nhất về Bất động sản
                                    </p>
                                    <Form
                                        className="input-group"
                                        form={form}
                                        name="registermail"
                                        onFinish={onFinish}
                                    >
                                        <Form.Item
                                            name="email"
                                            placeholder="Email của bạn"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: 'E-mail không hợp lệ, vui lòng thử lại!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập E-mail của bạn!',
                                                },
                                            ]}>
                                            <Input className="form-control" placeholder="Email của bạn" />
                                        </Form.Item>
                                        <Button className="input-group-text" type="primary" htmlType="submit">
                                            ĐĂNG KÝ
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
