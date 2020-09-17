import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Input, Form } from 'antd';
import { accountAction } from "../../../../store/action/index";

const ChangePass = (props) => {
    let { showpass, handelOnBack } = props;
    const handleInputBlur = (value) => {
        console.log(value);
        // console.log('cccc');
        // dispatch(accountAction.loadChangePassword({
        // new_password: '1234',
        // new_password_repeat: '1234',
        // current_password: '123'
        // }));
    };

    const change = useSelector(state => state.accountReducer);
    const changeSuccess = change.changePassword.success
    const changepass = changeSuccess ? change.changePassword.detail : null;
    // console.log(changepass);
    return (
        <div className={`pwd_new justify-content-start align-items-center flex-column flex-sm-row ${showpass === 0 ? "d-none" : "d-flex"}`} >
            <div className="row"   >
                <div className="col-12 col-sm-12 col-md-4">
                    <Form.Item

                        // hasFeedback
                        name="current_password"
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            }]}
                    >
                        <Input.Password placeholder="Mật khẩu cũ" className="form-control" />
                    </Form.Item>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <Form.Item

                        name="new_password"
                        // hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Mật khẩu mới" className="form-control password_new_input" />
                    </Form.Item>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <Form.Item
                        name="new_password_repeat"
                        dependencies={['new_password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('new_password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}>
                        <Input.Password placeholder="Nhập lại" className="form-control" />
                    </Form.Item>
                </div>
            </div>
            <div className="text_pwd text_closepwd text-nowrap" onClick={handelOnBack} >Quay lại</div>
        </div>
    )
}
export default ChangePass;