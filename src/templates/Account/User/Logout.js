import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

const Logout = (props) => {
    let { showprofile } = props;
    return (
        <div className="header_register form_logged d-none">
            <div className="header_register--heading">
                <figure className="avatar">
                    <img
                        src="../images/avatar_logged.jpg"
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
    );
};
export default Logout;