import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Trans } from "react-i18next";
import { Login, ForgotPass, Registry, Logout } from '../index';
import { accountAction } from "../../../store/action/index";


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
    }
    const login = useSelector(state => state.accountReducer);
    const isLoginSuccess = login.login.success;
    const respon = isLoginSuccess ? login.login.detail : null;
    const user = localStorage.getItem('user');

    return (
        <>
            {/* form_register */}
            <div className={`header_register form_register ${respon != null ? "d-none": ""}`}>
                <ul className="nav header_register--heading" role="tablist">
                    <li className="nav-item">
                        <Link 
                            onClick={event => showTap(0)}
                            className={`nav-link ${tab == 0 ? "active": ""}`}
                            id="pills-signin-tab">
                            ĐĂNG NHẬP
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            onClick={event => showTap(1)}
                            className={`nav-link ${tab == 1 ? "active": ""}`}
                            id="pills-signup-tab">
                            ĐĂNG KÝ
                        </Link>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className={`tab-pane fade ${tab == 0 ? "show active": ""}`} id="pills-login">
                        <Login showTap={showTap} success={respon} />
                    </div>
                    <div className={`tab-pane fade ${tab == 1 ? "show active": ""}`} id="pills-signup">
                        <Registry />
                    </div>
                </div>
            </div>
            {/* form_forgot */}
            <div className={`header_register form_forgot ${tab == 3 ? "": "d-none"}`}>
                <div className="header_register--heading text-uppercase text-white text-center">
                    QUÊN MẬT KHẨU
                </div>
                <ForgotPass />
            </div>
            {/* form_logged */}
            <Logout success={respon} handleLogout={logout} user={user} />
        </>
    );
}

export default Form;
