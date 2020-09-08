import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { Input } from 'antd';

const ChangePass = (props) => {
    let { showpass, handelOnBack } = props;
    return (
        <div class={`pwd_new justify-content-start align-items-center flex-column flex-sm-row ${showpass === 0 ? "d-none" : "d-flex"}`} >
            <div class="row">
            <div class="col-12 col-sm-12 col-md-4">
                    <Input type="password" placeholder="Mật khẩu cũ" className="form-control" />
                </div>
                <div class="col-12 col-sm-12 col-md-4">
                    <Input type="password" placeholder="Mật khẩu mới" className="form-control password_new_input" />
                </div>
                <div class="col-12 col-sm-12 col-md-4">
                    <Input type="password" placeholder="Nhập lại" className="form-control" />   
                </div>
            </div>
            <div class="text_pwd text_closepwd text-nowrap" onClick={handelOnBack}>Quay lại</div>
        </div>
    )
}
export default ChangePass;