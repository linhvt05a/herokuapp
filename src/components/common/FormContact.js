import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Trans } from "react-i18next";

function FormContact(props) {
    const [tab, setTab] = useState(0);
    const showTap = (active) => {
        setTab(active)
    }
    return (
        <>
            {/* form_register */}
            <div className="header_register form_register">
                <ul
                    className="nav header_register--heading"
                    role="tablist">
                    <li className="nav-item">
                        <Link 
                            onClick={event => showTap(0)}
                            className={`nav-link ${tab == 0 ? "active": ""}`}
                            id="pills-signin-tab"
                            data-toggle="pill"
                            to="#pills-signin"
                            role="tab"
                            aria-controls="pills-signin"
                            aria-selected="true">
                            ĐĂNG NHẬP
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            onClick={event => showTap(1)}
                            className={`nav-link ${tab == 1 ? "active": ""}`}
                            id="pills-signup-tab"
                            data-toggle="pill"
                            to="#pills-signup"
                            role="tab"
                            aria-controls="pills-signup"
                            aria-selected="false">
                            ĐĂNG KÝ
                        </Link>
                    </li>
                </ul>
                <div className="tab-content">
                    <div
                        className={`tab-pane fade ${tab == 0 ? "show active": ""}`}
                        id="pills-signin"
                        role="tabpanel"
                        aria-labelledby="pills-signin-tab">
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
                                <Link
                                    onClick={event => showTap(3)}
                                    to="/demo"
                                    className="text-forgot forgotPassword">
                                    Quên mật khẩu
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`tab-pane fade ${tab == 1 ? "show active": ""}`}
                        id="pills-signup"
                        role="tabpanel"
                        aria-labelledby="pills-signup-tab">
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
                                    type="password"
                                    placeholder="Mật khẩu"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Nhập lại mật khẩu"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-0 text-center">
                                <Link
                                    to="/demo"
                                    className="btn btn_green btn_signIn text-uppercase"
                                >
                                    ĐĂNG KÝ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* form_forgot */}
            <div className={`header_register form_forgot ${tab == 3 ? "": "d-none"}`}>
                <div className="header_register--heading text-uppercase text-white text-center">
                    QUÊN MẬT KHẨU
                </div>
                <div className="form form_signInUp">
                    <div className="form-group form_forgot--info">
                        Hãy điền thông tin email của bạn
                        để
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
            </div>
            {/* form_logged */}
            <div className="header_register form_logged d-none">
                <div className="header_register--heading">
                    <figure className="avatar">
                        <img
                            src="./assets/images/avatar_logged.jpg"
                            alt="Trần Thị Thu Hoài"
                        />
                    </figure>
                    <div className="info">
                        <div className="name">
                            Trần Thị Thu Hoài
                        </div>
                        <div className="mail">
                            thutran1975@gmail.com
                        </div>
                    </div>
                </div>
                <div className="form_logged--action">
                    <Link to="/#" className="action">
                        Đăng xuất
                    </Link>
                </div>
            </div>
        </>
    );
}

export default FormContact;
