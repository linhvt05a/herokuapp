import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

const Logout = (props) => {
    let { success, handleLogout, user } = props;
    return (
        success && success != null ?
        <div className={`header_register form_logged ${success != null ? "": "d-none" }`} style={{ maxWidth: "360px" }}>
            <div className="header_register--heading">
                <figure className="avatar">
                    <img
                        src={success.avatar_url}
                        alt={success.full_name}
                    />
                </figure>
                <div className="info">
                    <div className="name">
                        {success.full_name}
                    </div>
                    <div className="mail">
                        {success.username}
                    </div>
                </div>
            </div>
            <div className="form_logged--action">
                <a className="action" onClick={handleLogout}>
                    Đăng xuất
                </a>
            </div>
        </div>
        : ''
    );
};
export default Logout;