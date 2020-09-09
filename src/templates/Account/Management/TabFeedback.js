import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { ViewReplyChild, SearchFeedback, MakeQuestion, NewsHighlight,} from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabFeedback = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    const [feedback, setFeedback] = useState(false);
    return (
        <div class={`tab-pane fade ${activeTab === 4 ? "active show" : ""}`} id="tab_05" role="tabpanel" aria-labelledby="tab_05">
            <div class="row user-acc__feedback sales_collapse only">
                <div class="col-12 col-sm-12 col-md-12 col-lg-8 mb-4 mb-lg-0">
                    <div class={`card ${feedback ? "show" : "" }`}>
                        <div class="card-header">
                            <div class="heading">
                                <h2 class="question">Hỏi về đợt mở bán căn hộ ở dự án VTP</h2>
                                <div class="list_icon">
                                    <i class={`icon_flag fas fa-flag-checkered ${feedback ? "active" : ""}`}></i>
                                    <i class="icon_collapse show fas fa-plus" onClick={() => setFeedback(!feedback)}></i>
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
                                <ViewReplyChild />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <SearchFeedback />
                    <MakeQuestion />
                    <NewsHighlight />
                </div>
            </div>
        </div>
    )
}
export default TabFeedback;