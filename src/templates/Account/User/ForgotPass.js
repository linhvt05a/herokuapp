import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { Input, Form, Button } from 'antd';
import { accountAction } from "../../../store/action/index";

const ForgotPass = (props) => {
    let { active } = props;
    const [formInfo] = Form.useForm();
    const dispatch = useDispatch();

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
        },
    }
    useEffect(() => {
        formInfo.setFieldsValue({
            email: 'customer@minerva.vn',
        });
    }, [])

    const handleForgotPass = value => {
        console.log(value);
        dispatch(accountAction.loadForgotPassword({ email: value.email }))
    }

    const forgotPass = useSelector(state => state.accountReducer);
    const isforgotPassSuccess = forgotPass.forgotPassword.success;
    const respon = isforgotPassSuccess ? forgotPass.forgotPassword.detail : null;

    return (
        <div className="form form_signInUp">
            <div className="form-group form_forgot--info">
                <Trans>user_forgot_content</Trans>
            </div>
            <Form noValidate
                form={formInfo}
                onFinish={handleForgotPass}
                name="form-forgot-pass">
                <Form.Item className="form-group" name="email" rules={validatorInfo.email.form}>
                    <Input placeholder="Email" type="email" className="form-control" />
                </Form.Item>
                <Form.Item shouldUpdate className="form-group mb-0 text-center submit">
                    {() => {
                        return (
                            <Button className="btn btn_green btn_signIn text-uppercase mb-0" htmlType="Submit" style={{ width: "175px" }}
                                disabled={
                                    formInfo.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                <Trans>send</Trans>
                            </Button>
                        )
                    }}
                </Form.Item>
            </Form>
        </div>
    );
};
export default ForgotPass;