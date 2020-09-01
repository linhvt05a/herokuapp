import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

const ForgotPass = (props) => {
    let { active } = props;
    return (
        <div className="form form_signInUp">
            <div className="form-group form_forgot--info">
                Hãy điền thông tin email của bạn để
                <br />
                chúng tôi lấy lại mật khẩu
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                />
            </div>
            <div className="form-group mb-0 text-center">
                <Link
                    to="/demo"
                    className="btn btn_green btn_signIn text-uppercase mb-0"
                >
                    GỬI
                </Link>
            </div>
        </div>
    );
};
export default ForgotPass;