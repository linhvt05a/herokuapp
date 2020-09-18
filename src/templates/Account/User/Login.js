import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans, useTranslation } from "react-i18next";
import { Input, Form, Button } from 'antd';
import { accountAction } from "../../../store/action/index";
import { translate } from '../../../functions/Utils';

const Login = (props) => {
    let { showTap, success } = props;
    const [formInfo] = Form.useForm();
    const dispatch = useDispatch();
    const { t } = useTranslation()
    const [error, setError] = useState()
    let dataLogin = useSelector(state => state.accountReducer);
    let { login } = dataLogin;
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
            username: 'uyen',
            password: '1234',
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
            if (!error) {
                setError()
            }
        }
    }, [login])
    const onSubmitLogin = value => {

        // dispatch(accountAction.loadLogin({ username: "customer@minerva.vn", password: "123" }));
        dispatch(accountAction.loadLogin({ username: value.username, password: value.password, onNext: props.onNext }))
    }

    return (
        <div className="form form_signInUp">
            <Form
                form={formInfo}
                onFinish={onSubmitLogin}
                name="form-login">
                {/* {error && <span className=" color_e94c4c">{error}</span>} */}
                <Form.Item className="form-group" name="username" rules={validatorInfo.username.form}>
                    <Input placeholder="Username" type="text" className="form-control" />
                </Form.Item>
                <Form.Item className="form-group" name="password" rules={validatorInfo.password.form}>
                    <Input.Password placeholder="Password" type="password" className="form-control" style={{ padding: "0 14px" }} />
                </Form.Item>
                {error && <div className=" color_e94c4c mb-3">{error}</div>}
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
            {/* <div className="form-group mb-0 text-center">
                <a onClick={event => showTap(3)}
                    className="text-forgot forgotPassword">
                    <Trans>forfot_pass</Trans>
                </a>
            </div> */}
            <div>
                <div className="icon_star text-center">
                    <i className="fas fa-bahai" />
                </div>
                <div className="text_register_link text-center">
                    <a > Bạn chưa có tài khoản vậy hãy <span onClick={event => showTap(1)}> <br /> {translate("registry")}</span> </a>
                </div>
            </div>
            <div className="form-group mb-0 text-center">
                <a className="text-forgot" onClick={event => showTap(3)}>
                    {translate("cart_forgot_password", t)}
                </a>
            </div>
        </div >
    );
};
export default Login;
