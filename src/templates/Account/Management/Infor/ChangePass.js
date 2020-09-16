import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { Input } from 'antd';
import { accountAction } from "../../../../store/action/index";

const ChangePass = (props) => {
    let { showpass, handelOnBack } = props;
    const dispatch = useDispatch();

    const handleInputBlur = () => {
        // console.log('cccc');
        // dispatch(accountAction.loadChangePassword({
        //     new_password: '1234',
        //     new_password_repeat: '1234',
        //     current_password: '123'
        // }));
    };
    const change = useSelector(state => state.accountReducer);
    const changeSuccess = change.changePassword.success
    const changepass = changeSuccess ? change.changePassword.detail : null;
    // console.log(changepass);
    return (
        <div className={`pwd_new justify-content-start align-items-center flex-column flex-sm-row ${showpass === 0 ? "d-none" : "d-flex"}`} >
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4">
                    <Input type="password" placeholder="Mật khẩu cũ" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <Input type="password" placeholder="Mật khẩu mới" className="form-control password_new_input" />
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <Input type="password" placeholder="Nhập lại" className="form-control" onBlur={handleInputBlur} />
                </div>
            </div>
            <div className="text_pwd text_closepwd text-nowrap" onClick={handelOnBack}>Quay lại</div>
        </div>
    )
}
export default ChangePass;