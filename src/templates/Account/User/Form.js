import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Trans } from "react-i18next";

import { Login, ForgotPass, Registry, Logout } from '../index';
import { LOCALSTORAGE_GET } from "../../../contant";


const Form = (props) => {
    const dispatch = useDispatch();
    const [tab, setTab] = useState(0);
    const [state, setState] = useState({
        loginSuccess: false
    });
    const showTap = (active) => {
        setTab(active)
    }
    const logout = () => {
        localStorage.removeItem('user');
        window.location.reload()
    }
    
    const user = LOCALSTORAGE_GET.USER;

    return (
        <>
            {/* form_register */}
            <div className={`header_register form_register ${user != null ? "d-none": ""}`}>
                <ul className="nav header_register--heading" role="tablist">
                    <li className="nav-item">
                        <a onClick={event => showTap(0)}
                            className={`nav-link ${tab == 0 ? "active": ""}`}
                            id="pills-signin-tab">
                            <Trans>login</Trans>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={event => showTap(1)}
                            className={`nav-link ${tab == 1 ? "active": ""}`}
                            id="pills-signup-tab">
                            <Trans>registry</Trans>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className={`tab-pane fade ${tab == 0 ? "show active": ""}`} id="pills-login">
                        <Login showTap={showTap} />
                    </div>
                    <div className={`tab-pane fade ${tab == 1 ? "show active": ""}`} id="pills-signup">
                        <Registry />
                    </div>
                </div>
            </div>
            {/* form_forgot */}
            <div className={`header_register form_forgot ${tab == 3 ? "": "d-none"}`}>
                <div className="header_register--heading text-uppercase text-white text-center">
                    <Trans>forfot_pass</Trans>
                </div>
                <ForgotPass />
            </div>
            {/* form_logged */}
            <Logout handleLogout={logout} user={user} />
        </>
    );
}

export default Form;
