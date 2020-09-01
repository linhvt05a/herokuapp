import React, { useState, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Input, Form, Button } from 'antd';

const CardAccountModal = (props) => {

    const { clearData, isClearData } = props
    const [formInfo] = Form.useForm();
    const { t } = useTranslation()
    
    useEffect(() => {
        if (isClearData) {
            clearData()
        }
    }, [isClearData])

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
    
    formInfo.setFieldsValue({
        email: '',
        password: ''
    });

    const onSubmitInfo = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="modal-content modal_special">
            <div className="modal-header">
                <h5 className="modal-title">
                {t('cart_account')}</h5>
            </div>
           <div className="tab-content">
                <div className="tab-pane fade show active">
                    <div className="form form_signInUp">
                        <Form noValidate 
                            form={formInfo}
                            onFinish={onSubmitInfo}
                            name="form-chat-info">
                            <Form.Item className="form-group" name="email" rules={validatorInfo.email.form}>
                                <Input placeholder={validatorInfo.email.placeholder} type={validatorInfo.email.type} className="form-control" />
                            </Form.Item>
                            <Form.Item className="form-group" name="question" rules={validatorInfo.password.form}>
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
                                            {t('cart_login')}
                                        </Button>
                                    )
                                }}
                            </Form.Item>
                        </Form>
                        <div className="form-group mb-0 text-center">
                            <a className="text-forgot">
                                {t('cart_forgot_password')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardAccountModal;