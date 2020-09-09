import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";
import { Input } from 'antd';

const MakeQuestion = (props) => {
    return (
        <div class="make_question mb-45">
            <div class="make_question--heading">
                Đặt câu hỏi
            </div>
            <input class="make_question--title w-100" type="text" placeholder="Đặt tiêu đề"/>
            <div class="make_question--content">
                <textarea class="form-control" type="text" class="textarea"
                    placeholder="Nhập thông tin muốn hỏi"></textarea>
                <div class="files">
                    <input type="file" multiple class="file"/>
                    <input type="hidden" multiple class="file_hidden"/>
                    <span class="file-text">Đính kèm</span>
                </div>
                <div class="files_result"></div>
            </div>
            <button class="btn btn_green text-uppercase w-100">Gửi câu hỏi</button>
        </div>
    )
}
export default MakeQuestion;