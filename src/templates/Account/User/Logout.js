import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

const Logout = (props) => {
    let { handleLogout, user } = props;
    return (
        user && user != null ?
        <div className={`header_register form_logged ${user != null ? "": "d-none" }`} style={{ maxWidth: "360px" }}>
            <div className="header_register--heading">
                <figure className="avatar">
                    <img
                        src={user.avatar_url}
                        alt={user.full_name}
                    />
                </figure>
                <div className="info">
                    <div className="name">
                        {user.full_name}
                    </div>
                    <div className="mail">
                        {user.username}
                    </div>
                </div>
            </div>
            <div className="form_logged--action">
                <a className="action" onClick={handleLogout}>
                    <Trans>logout</Trans>
                </a>
            </div>
        </div>
        : ''
    );
};
export default Logout;