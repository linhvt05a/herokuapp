import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";
import { Input } from 'antd';

const UserFilter = (props) => {
    const { TextArea } = Input;
    return (
        <div class="reply__child">
            <div class="reply__child--list">
                <div class="child">
                    <figure class="avatar">
                        <img src={IMAGE_URL + "/images/intro_card_leader3.jpg"} alt=""/>
                    </figure>
                    <div class="box">
                        <div class="reply_name">
                            Phòng sale
                        </div>
                        <div class="reply_text">
                            Cảm ơn bạn rất nhiều,đã quan tâm đến dự án căn hộ của VTP chúng
                            tôi, hiện tại dự án đang được bán
                            tại các chi nhánh chính và đại lý liên doanh với chúng tôi. Cụ
                            thể đại lý 203 đường 2/3,phường 10,
                            quận 10, Tp.HCM
                        </div>
                        <div class="reply_social">
                            <div class="reply_item time">
                                <i class="icon far fa-clock"></i>
                                <i class="text">9:00 - 27/02/2020</i>
                            </div>
                            <div class="reply_item cmt">
                                <i class="icon fas fa-comments"></i>
                                <i class="text">Thảo luận</i>
                            </div>
                            <div class="reply_item like">
                                <i class="icon fas fa-thumbs-up"></i>
                                <i class="text">Hài lòng</i>
                            </div>
                            <div class="reply_item like active">
                                <i class="icon fas fa-thumbs-down"></i>
                                <i class="text">Không hài lòng</i>
                            </div>
                        </div>
                        <div class="child pb-0 border-bottom-0">
                            <figure class="avatar">
                                <img src={IMAGE_URL + "/images/intro_card_leader2.jpg"}alt=""/>
                            </figure>
                            <div class="box">
                                <div class="reply_name">Phòng sale</div>
                                <div class="reply_text">
                                    Cảm ơn bạn rất nhiều,đã quan tâm đến dự án căn hộ của
                                    VTP chúng tôi, hiện tại dự án đang được bán
                                    tại các chi nhánh chính và đại lý liên doanh với chúng
                                    tôi. Cụ thể đại lý 203 đường 2/3,phường 10,
                                    quận 10, Tp.HCM
                                </div>
                            </div>
                        </div>
                        <div class="reply__input">
                            <TextArea class="form-control"
                                placeholder="Nhập thêm nội dung"></TextArea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reply__input">
                <TextArea class="form-control" placeholder="Nhập thêm nội dung"></TextArea>
            </div>
        </div>
    )
}
export default UserFilter;