import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { Login, ForgotPass, Registry, Logout } from '../index';

const FormMobile = (props) => {
    let { active } = props;
    return (
        <ul className={`header_menu--child mt-0 accordion ${active ? "active": ""}`}>
            <li className="register_select">
                <div className="item-child-link accordion-toggle d-flex justify-content-between align-items-center">
                    Đăng nhập
                    <i className="icon_plus fas fa-plus" />
                </div>
                {/* form_register signin */}
                <div className="header_register form_register accordion-inner">
                    <Login />
                </div>
            </li>
            <li className="register_select">
                <div className="item-child-link accordion-toggle d-flex justify-content-between align-items-center">
                    Đăng ký
                    <i className="icon_plus fas fa-plus" />
                </div>
                {/* form_register signup*/}
                <div className="header_register form_register accordion-inner">
                    <Registry />
                </div>
            </li>
            <li className="register_select">
                <div className="item-child-link accordion-toggle d-flex justify-content-between align-items-center">
                    Quên mật khẩu
                    <i className="icon_plus fas fa-plus" />
                </div>
                {/* form_forgot */}
                <div className="header_register form_forgot accordion-inner">
                    <ForgotPass />
                </div>
            </li>
        </ul>
    );
};
export default FormMobile;
