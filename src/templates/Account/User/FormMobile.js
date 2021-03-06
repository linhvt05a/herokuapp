import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { Login, ForgotPass, Registry, Logout } from '../index';

const FormMobile = (props) => {
    let { active } = props;
    const [login, setLogin] = useState(false);
    const [registry, setRegistry] = useState(false);
    const [forgotpass, setForgotpass] = useState(false);
    return (
        <ul className={`header_menu--child mt-0 accordion ${active ? "active": ""}`}>
            <li className="register_select">
                <div onClick={() => setLogin(!login)} className={`item-child-link accordion-toggle d-flex justify-content-between align-items-center ${login ? "active" : ""}`}>
                    <Trans>login</Trans>
                    <i className="icon_plus fas fa-plus"/>
                </div>
                {/* form_register signin */}
                <div className={`header_register form_register accordion-inner ${login ? "show" : ""}`}>
                    <Login />
                </div>
            </li>
            <li className="register_select">
                <div onClick={() => setRegistry(!registry)} className={`item-child-link accordion-toggle d-flex justify-content-between align-items-center ${registry ? "active" : ""}`}>
                    <Trans>registry</Trans>
                    <i className="icon_plus fas fa-plus" />
                </div>
                {/* form_register signup*/}
                <div className={`header_register form_register accordion-inner ${registry ? "show" : ""}`}>
                    <Registry />
                </div>
            </li>
            <li className="register_select">
                <div onClick={() => setForgotpass(!forgotpass)} className={`item-child-link accordion-toggle d-flex justify-content-between align-items-center ${forgotpass ? "active" : ""}`}>
                    <Trans>forfot_pass</Trans>
                    <i className="icon_plus fas fa-plus" />
                </div>
                {/* form_forgot */}
                <div className={`header_register form_register accordion-inner ${forgotpass ? "show" : ""}`}>
                    <ForgotPass />
                </div>
            </li>
        </ul>
    );
};
export default FormMobile;
