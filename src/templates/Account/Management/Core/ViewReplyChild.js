import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";
import { Input } from 'antd';

const ViewReplyChild = (props) => {
    const { TextArea } = Input;
    return (
        <div className="reply__child">
            <div className="reply__child--list">
                <div className="child">
                    <figure className="avatar">
                        <img src={IMAGE_URL + "/images/intro_card_leader3.jpg"} alt=""/>
                    </figure>
                    <div className="box">
                        <div className="reply_name">
                            Phòng sale
                        </div>
                        <div className="reply_text">
                            Cảm ơn bạn rất nhiều,đã quan tâm đến dự án căn hộ của VTP chúng
                            tôi, hiện tại dự án đang được bán
                            tại các chi nhánh chính và đại lý liên doanh với chúng tôi. Cụ
                            thể đại lý 203 đường 2/3,phường 10,
                            quận 10, Tp.HCM
                        </div>
                        <div className="reply_social">
                            <div className="reply_item time">
                                <i className="icon far fa-clock"></i>
                                <i className="text">9:00 - 27/02/2020</i>
                            </div>
                            <div className="reply_item cmt">
                                <i className="icon fas fa-comments"></i>
                                <i className="text">Thảo luận</i>
                            </div>
                            <div className="reply_item like">
                                <i className="icon fas fa-thumbs-up"></i>
                                <i className="text">Hài lòng</i>
                            </div>
                            <div className="reply_item like active">
                                <i className="icon fas fa-thumbs-down"></i>
                                <i className="text">Không hài lòng</i>
                            </div>
                        </div>
                        <div className="child pb-0 border-bottom-0">
                            <figure className="avatar">
                                <img src={IMAGE_URL + "/images/intro_card_leader2.jpg"}alt=""/>
                            </figure>
                            <div className="box">
                                <div className="reply_name">Phòng sale</div>
                                <div className="reply_text">
                                    Cảm ơn bạn rất nhiều,đã quan tâm đến dự án căn hộ của
                                    VTP chúng tôi, hiện tại dự án đang được bán
                                    tại các chi nhánh chính và đại lý liên doanh với chúng
                                    tôi. Cụ thể đại lý 203 đường 2/3,phường 10,
                                    quận 10, Tp.HCM
                                </div>
                            </div>
                        </div>
                        <div className="reply__input">
                            <TextArea className="form-control"
                                placeholder="Nhập thêm nội dung"></TextArea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reply__input">
                <TextArea className="form-control" placeholder="Nhập thêm nội dung"></TextArea>
            </div>
        </div>
    )
}
export default ViewReplyChild;