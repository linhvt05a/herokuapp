import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

const Registry = (props) => {
    let { active } = props;
    return (
        <div className="form form_signInUp">
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Họ tên"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Mật khẩu"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Nhập lại mật khẩu"
                    className="form-control"
                />
            </div>
            <div className="form-group mb-0 text-center">
                <Link
                    to="/demo"
                    className="btn btn_green btn_signIn text-uppercase"
                >
                    <Trans>registry</Trans>
                </Link>
            </div>
        </div>
    );
};
export default Registry;