import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UploadAvatar, CardFile } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabFeedback = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    return (
        <div class={`tab-pane fade ${activeTab === 4 ? "active show" : ""}`} id="tab_05" role="tabpanel" aria-labelledby="tab_05">
            <div class="row user-acc__feedback sales_collapse only">
                <div class="col-12 col-sm-12 col-md-12 col-lg-8 mb-4 mb-lg-0">
                    <div class="card show">
                        <div class="card-header">
                            <div class="heading">
                                <h2 class="question">
                                    Hỏi về đợt mở bán căn hộ ở dự án VTP
                                </h2>

                                <div class="list_icon">
                                    <i class="icon_flag active fas fa-flag-checkered"></i>
                                    <i class="icon_collapse show fas fa-plus"></i>
                                </div>
                            </div>
                            <div class="heading_sub">
                                <div class="heading_child">
                                    <i class="icon far fa-clock"></i>
                                    <i class="time">9:00 - 27/02/2020</i>
                                </div>
                                <div class="heading_child">
                                    <i class="icon fas fa-ad"></i>
                                    <span class="text">
                                        Mã câu:
                                        <i class="code">#0123</i>
                                    </span>
                                </div>
                                <div class="heading_child share">
                                    <i class="icon fas fa-share"></i>
                                    <i class="text">
                                        <u>Chia sẻ</u>
                                    </i>
                                </div>
                            </div>
                        </div>

                        <div class="collapse">
                            <div class="card-body">
                                <div class="reply__master">
                                    <div class="text">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                        tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                        farm-to-table,
                                        raw denim aesthetic synth nesciunt you probably haven't heard of them
                                        accusamus labore sustainable VHS.
                                    </div>
                                    <div class="files">
                                        <div class="file">
                                            <figure class="file-img"><img src="./assets/images/pdf_default.png"
                                                    alt=""/></figure>
                                            <span class="file-name">
                                                file-giay-to-01.xls
                                            </span>
                                        </div>
                                        <div class="file">
                                            <figure class="file-img"><img src="./assets/images/pdf_default.png"
                                                    alt=""/></figure>
                                            <span class="file-name">
                                                file-giay-to-01.xls
                                            </span>
                                        </div>
                                    </div>
                                    <div class="images">
                                        <a class="image" href="./assets/images/project_list03.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list03.jpg" alt=""/>
                                        </a>
                                        <a class="image" href="./assets/images/project_list04.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list04.jpg" alt=""/>
                                        </a>
                                        <a class="image more" href="./assets/images/project_list05.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list05.jpg" alt=""/>
                                            <span class="number">+4</span>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_6.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_6.jpg" alt=""/>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_BietThuQ2.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_BietThuQ2.jpg" alt=""/>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_CanHoQ2.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_CanHoQ2.jpg" alt=""/>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_CentrelPark.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_CentrelPark.jpg" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="reply__child">
                                    <div class="reply__child--list">
                                        <div class="child">
                                            <figure class="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt=""/>
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

                                                <div class="reply__input">
                                                    <textarea class="form-control"
                                                        placeholder="Nhập thêm nội dung"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="child">
                                            <figure class="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt=""/>
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
                                                        <img src="./assets/images/avatar_logged.jpg" alt=""/>
                                                    </figure>
                                                    <div class="box">
                                                        <div class="reply_name">
                                                            Phòng sale
                                                        </div>
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
                                                    <textarea class="form-control"
                                                        placeholder="Nhập thêm nội dung"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="child">
                                            <figure class="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt=""/>
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

                                                <div class="reply__input">
                                                    <textarea class="form-control"
                                                        placeholder="Nhập thêm nội dung"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reply__input">
                                        <textarea class="form-control" placeholder="Nhập thêm nội dung"></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div class="heading">
                                <h2 class="question">
                                    Hỏi về giấy tờ liên quan đến việc hoàn tất hồ sơ mua biệt thự của dự án khu Thảo
                                    Điền
                                </h2>

                                <div class="list_icon">
                                    <i class="icon_flag fas fa-flag-checkered"></i>
                                    <i class="icon_collapse fas fa-plus"></i>
                                </div>

                            </div>
                            <div class="heading_sub">
                                <div class="heading_child">
                                    <i class="icon far fa-clock"></i>
                                    <i class="time">9:00 - 27/02/2020</i>
                                </div>
                                <div class="heading_child">
                                    <i class="icon fas fa-ad"></i>
                                    <span class="text">
                                        Mã câu:
                                        <i class="code">#0123</i>
                                    </span>
                                </div>
                                <div class="heading_child share">
                                    <i class="icon fas fa-share"></i>
                                    <i class="text">
                                        <u>Chia sẻ</u>
                                    </i>
                                </div>
                            </div>

                        </div>

                        <div class="collapse">
                            <div class="card-body">
                                <div class="reply__master">
                                    <div class="text">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                        tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                        farm-to-table,
                                        raw denim aesthetic synth nesciunt you probably haven't heard of them
                                        accusamus labore sustainable VHS.
                                    </div>
                                    <div class="files">
                                        <div class="file">
                                            <figure class="file-img"><img src="./assets/images/pdf_default.png"
                                                    alt=""/></figure>
                                            <span class="file-name">
                                                file-giay-to-01.xls
                                            </span>
                                        </div>
                                        <div class="file">
                                            <figure class="file-img"><img src="./assets/images/pdf_default.png"
                                                    alt=""/></figure>
                                            <span class="file-name">
                                                file-giay-to-01.xls
                                            </span>
                                        </div>
                                    </div>
                                    <div class="images">
                                        <a class="image" href="./assets/images/project_list03.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list03.jpg" alt=""/>
                                        </a>
                                        <a class="image" href="./assets/images/project_list04.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list04.jpg" alt=""/>
                                        </a>
                                        <a class="image more" href="./assets/images/project_list05.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list05.jpg" alt=""/>
                                            <span class="number">+4</span>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_6.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_6.jpg" alt=""/>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_BietThuQ2.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_BietThuQ2.jpg" alt=""/>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_CanHoQ2.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_CanHoQ2.jpg" alt=""/>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_CentrelPark.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_CentrelPark.jpg" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="reply__child">
                                    <div class="reply__child--list">
                                        <div class="child">
                                            <figure class="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt=""/>
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

                                                <div class="reply__input">
                                                    <textarea class="form-control"
                                                        placeholder="Nhập thêm nội dung"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="child">
                                            <figure class="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt=""/>
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
                                                <div class="child border-bottom-0 pb-0">
                                                    <figure class="avatar">
                                                        <img src="./assets/images/avatar_logged.jpg" alt=""/>
                                                    </figure>
                                                    <div class="box">
                                                        <div class="reply_name">
                                                            Phòng sale
                                                        </div>
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
                                                    <textarea class="form-control"
                                                        placeholder="Nhập thêm nội dung"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="child">
                                            <figure class="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt=""/>
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

                                                <div class="reply__input">
                                                    <textarea class="form-control"
                                                        placeholder="Nhập thêm nội dung"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reply__input">
                                        <textarea class="form-control" placeholder="Nhập thêm nội dung"></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div class="heading">
                                <h2 class="question">
                                    Hỏi về đợt mở bán căn hộ ở dự án VTP
                                </h2>

                                <div class="list_icon">
                                    <i class="icon_flag fas fa-flag-checkered"></i>
                                    <i class="icon_collapse fas fa-plus"></i>
                                </div>

                            </div>
                            <div class="heading_sub">
                                <div class="heading_child">
                                    <i class="icon far fa-clock"></i>
                                    <i class="time">9:00 - 27/02/2020</i>
                                </div>
                                <div class="heading_child">
                                    <i class="icon fas fa-ad"></i>
                                    <span class="text">
                                        Mã câu:
                                        <i class="code">#0123</i>
                                    </span>
                                </div>
                                <div class="heading_child share">
                                    <i class="icon fas fa-share"></i>
                                    <i class="text">
                                        <u>Chia sẻ</u>
                                    </i>
                                </div>
                            </div>

                        </div>

                        <div class="collapse">
                            <div class="card-body">
                                <div class="reply__master">
                                    <div class="text">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                        tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                        farm-to-table,
                                        raw denim aesthetic synth nesciunt you probably haven't heard of them
                                        accusamus labore sustainable VHS.
                                    </div>
                                    <div class="files">
                                        <div class="file">
                                            <figure class="file-img"><img src="./assets/images/pdf_default.png"
                                                    alt=""/></figure>
                                            <span class="file-name">
                                                file-giay-to-01.xls
                                            </span>
                                        </div>
                                        <div class="file">
                                            <figure class="file-img"><img src="./assets/images/pdf_default.png"
                                                    alt=""/></figure>
                                            <span class="file-name">
                                                file-giay-to-01.xls
                                            </span>
                                        </div>
                                    </div>
                                    <div class="images">
                                        <a class="image" href="./assets/images/project_list03.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list03.jpg" alt=""/>
                                        </a>
                                        <a class="image" href="./assets/images/project_list04.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list04.jpg" alt=""/>
                                        </a>
                                        <a class="image more" href="./assets/images/project_list05.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list05.jpg" alt=""/>
                                            <span class="number">+4</span>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_6.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_6.jpg" alt=""/>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_BietThuQ2.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_BietThuQ2.jpg" alt=""/>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_CanHoQ2.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_CanHoQ2.jpg" alt=""/>
                                        </a>
                                        <a class="image d-none" href="./assets/images/intro_project_CentrelPark.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_CentrelPark.jpg" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="reply__child">
                                    <div class="reply__child--list">
                                        <div class="child">
                                            <figure class="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt=""/>
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

                                                <div class="reply__input">
                                                    <textarea class="form-control"
                                                        placeholder="Nhập thêm nội dung"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="child">
                                            <figure class="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt=""/>
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
                                                <div class="child">
                                                    <figure class="avatar">
                                                        <img src="./assets/images/avatar_logged.jpg" alt=""/>
                                                    </figure>
                                                    <div class="box">
                                                        <div class="reply_name">
                                                            Phòng sale
                                                        </div>
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
                                                    <textarea class="form-control"
                                                        placeholder="Nhập thêm nội dung"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="child">
                                            <figure class="avatar">
                                                <img src="./assets/images/avatar_logged.jpg" alt=""/>
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

                                                <div class="reply__input">
                                                    <textarea class="form-control"
                                                        placeholder="Nhập thêm nội dung"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reply__input">
                                        <textarea class="form-control" placeholder="Nhập thêm nội dung"></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {% include "./_pagination.twig" %} */}
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <div class="search_feedback mb-45">
                        <ul>
                            <label class="search_feedback--title">Tra cứu phản hồi</label>
                            <li data-toggle="collapse" data-target="#collapseExample1">
                                <i class="icon_parent fas fa-angle-right mr-2"></i>
                                <span class="text">Tháng</span>
                                <ul class="child collapse" id="collapseExample1">
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 1</a>
                                    </li>
                                    <li class="active">
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 3</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 4</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 5</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 6</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 7</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li data-toggle="collapse" data-target="#collapseExample2">
                                <i class="icon_parent fas fa-angle-right mr-2"></i>
                                <span class="text">Qúy</span>
                                <ul class="child collapse" id="collapseExample2">
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 1</a>
                                    </li>
                                    <li class="active">
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 3</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 4</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 5</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 6</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 7</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li data-toggle="collapse" data-target="#collapseExample3">
                                <i class="icon_parent fas fa-angle-right mr-2"></i>
                                <span class="text">Năm</span>
                                <ul class="child collapse" id="collapseExample3">
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 1</a>
                                    </li>
                                    <li class="active">
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 3</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 4</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 5</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 6</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng 7</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-square-full mr-2"></i>
                                            Tháng
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="search_feedback--search">
                            <div class="text">Tìm kiếm</div>
                            <div class="search">
                                <input type="text" class="w-100" placeholder="Nhập nội dung"/>
                                <i class="fas fa-search"></i>
                            </div>

                        </div>
                    </div>

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


                    <div class="news_highlight">
                        <div class="news_highlight--heading">Phản hồi mới nhất</div>
                        <div class="news_highlight--content">
                            <div class="group">
                                <a href="#" class="link"></a>
                                <figure class="image">
                                    <img src="./assets/images/user.jpg" />
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
                                    <img src="./assets/images/user.jpg" />
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

                            <div class="group">
                                <a href="#" class="link"></a>
                                <figure class="image">
                                    <img src="./assets/images/user.jpg" />
                                </figure>
                                <div class="about ">
                                    <div class="title d-flex justify-content-between align-items-center">
                                        <span class="position">Phòng marketing</span>
                                        <span class="time">
                                            <i>10/4/2020</i>
                                        </span>
                                    </div>
                                    <div class="content">Hỏi về đợt mở bán căn hộ của dự án VTP</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TabFeedback;