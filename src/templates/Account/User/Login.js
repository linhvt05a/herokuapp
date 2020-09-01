import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

const Login = (props) => {
    let { showTap } = props;
    return (
        <div className="form form_signInUp">
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="form-control"
                />
            </div>
            <div className="form-group mb-0 text-center">
                <Link
                    to="/demo"
                    className="btn btn_green btn_signIn text-uppercase">
                    ĐĂNG NHẬP
                </Link>
            </div>
            <div className="form-group mb-0 text-center">
                <Link onClick={event => showTap(3)}
                    className="text-forgot forgotPassword">
                    Quên mật khẩu
                </Link>
            </div>
        </div>
    );
};
export default Login;
