import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";
import { Input } from 'antd';

const MakeQuestion = (props) => {
    return (
        <div className="make_question mb-45">
            <div className="make_question--heading">
                Đặt câu hỏi
            </div>
            <input className="make_question--title w-100" type="text" placeholder="Đặt tiêu đề"/>
            <div className="make_question--content">
                <textarea className="form-control" type="text" className="textarea"
                    placeholder="Nhập thông tin muốn hỏi"></textarea>
                <div className="files">
                    <input type="file" multiple className="file"/>
                    <input type="hidden" multiple className="file_hidden"/>
                    <span className="file-text">Đính kèm</span>
                </div>
                <div className="files_result"></div>
            </div>
            <button className="btn btn_green text-uppercase w-100">Gửi câu hỏi</button>
        </div>
    )
}
export default MakeQuestion;