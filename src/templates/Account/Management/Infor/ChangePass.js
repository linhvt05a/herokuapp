import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { Input } from 'antd';

const ChangePass = (props) => {
    let { passActive, handelOnBack } = props;
    return (
        <div class={`pwd_new justify-content-start align-items-center flex-column flex-sm-row ${passActive != 0 ? "" : "d-none"}`} style={{marginTop: "15px"}}>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6">
                    <Input type="password" placeholder="Mật khẩu mới" className="form-control" />
                </div>
                <div class="col-12 col-sm-12 col-md-6">
                    <Input type="password" placeholder="Nhập lại" className="form-control" />   
                </div>
            </div>
            <div class="text_pwd text_closepwd text-nowrap" onClick={handelOnBack}>Quay lại</div>
        </div>
    )
}
export default ChangePass;