import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";
import { Input } from 'antd';

const NewsHighlight = (props) => {
    return (
        <div class="news_highlight">
            <div class="news_highlight--heading">Phản hồi mới nhất</div>
            <div class="news_highlight--content">
                <div class="group">
                    <a href="#" class="link"></a>
                    <figure class="image">
                        <img src={IMAGE_URL + "/images/user.jpg"} />
                    </figure>
                    <div class="about ">
                        <div class="title d-flex justify-content-between align-items-center">
                            <span class="position">Phòng tư vấn</span>
                            <span class="time">
                                <i>3 giờ trước</i>
                            </span>
                        </div>
                        <div class="content">Hỏi về đợt mở bán căn hộ của dự án VTP</div>
                    </div>
                </div>
                <div class="group">
                    <a href="#" class="link"></a>
                    <figure class="image">
                        <img src={IMAGE_URL + "/images/user.jpg"} />
                    </figure>
                    <div class="about ">
                        <div class="title d-flex justify-content-between align-items-center">
                            <span class="position">Phòng tư vấn</span>
                            <span class="time">
                                <i>13/04/2020</i>
                            </span>
                        </div>
                        <div class="content">Hỏi về đợt mở bán căn hộ của dự án VTP</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsHighlight;