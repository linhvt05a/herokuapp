import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";
import { Input } from 'antd';

const NewsHighlight = (props) => {
    return (
        <div className="news_highlight">
            <div className="news_highlight--heading">Phản hồi mới nhất</div>
            <div className="news_highlight--content">
                <div className="group">
                    <a href="#" className="link"></a>
                    <figure className="image">
                        <img src={IMAGE_URL + "/images/user.jpg"} />
                    </figure>
                    <div className="about ">
                        <div className="title d-flex justify-content-between align-items-center">
                            <span className="position">Phòng tư vấn</span>
                            <span className="time">
                                <i>3 giờ trước</i>
                            </span>
                        </div>
                        <div className="content">Hỏi về đợt mở bán căn hộ của dự án VTP</div>
                    </div>
                </div>
                <div className="group">
                    <a href="#" className="link"></a>
                    <figure className="image">
                        <img src={IMAGE_URL + "/images/user.jpg"} />
                    </figure>
                    <div className="about ">
                        <div className="title d-flex justify-content-between align-items-center">
                            <span className="position">Phòng tư vấn</span>
                            <span className="time">
                                <i>13/04/2020</i>
                            </span>
                        </div>
                        <div className="content">Hỏi về đợt mở bán căn hộ của dự án VTP</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsHighlight;