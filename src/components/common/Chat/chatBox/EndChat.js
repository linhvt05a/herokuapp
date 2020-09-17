import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { Trans } from 'react-i18next';

const EndChat = (props) => {
    const { active, setActive, set_Exit, set_Back } = props;

    return (
        <div className={`end_chat ${active ? "active" : ''}`}>
            <div className="heading">
                <Trans>end_chat</Trans>
                <span className="heading_sub">
                    <Trans>title_end_chat</Trans>
                </span>
            </div>
            <div className="list_btn">
                <a className="btn btn_red end_chat_all" onClick={set_Exit}>
                    <Trans>button_end</Trans>
                </a>
                <a className="btn btn_green end_chat_back" onClick={set_Back}>
                    <Trans>button_back</Trans>
                </a>
            </div>
        </div>
    );
}

export default EndChat;