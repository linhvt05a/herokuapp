import React, { useState, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Input, Form, Button } from 'antd';
import { translate } from '../../../functions/Utils';
import { accountAction } from '../../../store/action';
import { useDispatch, useSelector } from 'react-redux';

const CardAccountModal = (props) => {
    const { clearData, isClearData, onNext } = props;
    const dispatch = useDispatch()
    const [formInfo] = Form.useForm();
    const { t } = useTranslation()
    const [error, setError] = useState()
    useEffect(() => {
        if (isClearData) {
            clearData()
        }
    }, [isClearData])
    let dataLogin = useSelector(state => state.accountReducer);
    let { login } = dataLogin;
    const validatorInfo = {
        email: {
            form: [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Missing information require!',
                },
            ],
            type: 'email',
            placeholder: t("cart_email"),
        },
        password: {
            form: [
                {
                    required: true,
                    message: 'Missing information require!'
                }
            ],
            type: 'password',
            placeholder: t("cart_password"),
        },
    }

    useEffect(() => {
        formInfo.setFieldsValue({
            email: 'customer@minerva.vn',
            password: '123'
        });
    }, [])
    useEffect(() => {
        if (login.success == false) {
            if (login.error) {
                setError(login.error)
            }
            else {
                setError()
            }
        }
        else {
            if (login.length > 0) {
                onNext()
                setError()
            }
        }
    }, [login])
    const onSubmitInfo = (values) => {
        console.log('Success:', values);
        dispatch(accountAction.loadLogin({ username: values.email, password: values.password }))
        // onNext()
    };

    return (
        <div className="modal-content modal_special">
            <div className="modal-header">
                <h5 className="modal-title">{translate("cart_account")}</h5>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade show active">
                    <div className="form form_signInUp">
                        <Form noValidate
                            form={formInfo}
                            onFinish={onSubmitInfo}
                            name="form-chat-info">
                            {error && <span className=" color_e94c4c">{error}</span>}
                            <Form.Item className="form-group" name="email" rules={validatorInfo.email.form}>
                                <Input placeholder={validatorInfo.email.placeholder} type={validatorInfo.email.type} className="form-control" />
                            </Form.Item>
                            <Form.Item className="form-group" name="password" rules={validatorInfo.password.form}>
                                <Input placeholder={validatorInfo.password.placeholder} type={validatorInfo.password.type} className="form-control" />
                            </Form.Item>
                            <Form.Item shouldUpdate className="text-center submit">
                                {() => {
                                    return (
                                        <Button className="btn btn_green" htmlType="Submit"
                                            disabled={
                                                formInfo.getFieldsError().filter(({ errors }) => errors.length).length
                                            }
                                        >
                                            {translate("cart_login")}
                                        </Button>
                                    )
                                }}
                            </Form.Item>
                        </Form>
                        <div>
                            <div className="icon_star text-center">
                                <i className="fas fa-bahai" />
                            </div>
                            <div className="text_register_link text-center">
                                <a href="#"> Bạn chưa có tài khoản vậy hãy <span> <br /> {translate("registry")}</span> </a>
                            </div>
                        </div>
                        <div className="form-group mb-0 text-center">
                            <a className="text-forgot">
                                {translate("cart_forgot_password", t)}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardAccountModal;