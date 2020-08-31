import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import {  Button } from 'antd';

const EndChat = (props) => {
    const { active, setActive, set_Exit, set_Back } = props;

    return (
        <div className={`end_chat ${active ? "active" : ''}`}>
            <div className="heading">
                Bạn muốn kết thúc trò chuyện ?
                <span className="heading_sub">
                    Bạn có thực sự muốn kết thúc cuộc trò chuyện với
                    chúng tôi.
                </span>
            </div>
            <div className="list_btn">
                <Link to="/#" className="btn btn_red end_chat_all" onClick={set_Exit}>
                    KẾT THÚC
                </Link>
                <Link to="/#" className="btn btn_green end_chat_back" onClick={set_Back}>
                    QUAY LẠI
                </Link>
            </div>
        </div>
    );
}

export default EndChat;