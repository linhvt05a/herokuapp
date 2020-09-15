import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { Input, Form, Button } from 'antd';
import { accountAction } from "../../../store/action/index";

const Login = (props) => {
    let { showTap, success } = props;
    const [formInfo] = Form.useForm();
    const dispatch = useDispatch();

    const validatorInfo = {
        username: {
            form: [
                {
                    required: true,
                    message: 'Missing information require!',
                },
            ],
        },
        password: {
            form: [
                {
                    required: true,
                    message: 'Missing information require!'
                }
            ],
        },
    }

    useEffect(() => {
        formInfo.setFieldsValue({
            username: 'customer@minerva.vn',
            password: '123',
        });

    }, [])
    const onSubmitLogin = value => {
        console.log(value);
        // dispatch(accountAction.loadLogin({ username: "customer@minerva.vn", password: "123" }));
        dispatch(accountAction.loadLogin({ username: value.username, password: value.password }))


    }

    return (
        <div className="form form_signInUp">
            <Form
                form={formInfo}
                onFinish={onSubmitLogin}
                name="form-login">
                <Form.Item className="form-group" name="username" rules={validatorInfo.username.form}>
                    <Input placeholder="Username" type="text" className="form-control" />
                </Form.Item>
                <Form.Item className="form-group" name="password" rules={validatorInfo.password.form}>
                    <Input.Password placeholder="Password" type="password" className="form-control" style={{ padding: "0 14px" }} />
                </Form.Item>
                <Form.Item shouldUpdate className="text-center submit">
                    {() => {
                        return (
                            <Button className="btn btn_green btn_signIn text-uppercase" htmlType="Submit" style={{ marginBottom: "0" }}
                                disabled={
                                    formInfo.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                <Trans>login</Trans>
                            </Button>
                        )
                    }}
                </Form.Item>
            </Form>
            <div className="form-group mb-0 text-center">
                <a onClick={event => showTap(3)}
                    className="text-forgot forgotPassword">
                    <Trans>forfot_pass</Trans>
                </a>
            </div>
        </div>
    );
};
export default Login;
