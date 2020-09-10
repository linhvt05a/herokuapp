import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { ViewReplyChild, SearchFeedback, MakeQuestion, NewsHighlight } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabFeedback = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    const [feedback, setFeedback] = useState(false);
    return (
        <div className={`tab-pane fade ${activeTab === 4 ? "active show" : ""}`} id="tab_05" role="tabpanel" aria-labelledby="tab_05">
            <div className="row user-acc__feedback sales_collapse only">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 mb-4 mb-lg-0">
                    <div className={`card ${feedback ? "show" : "" }`}>
                        <div className="card-header">
                            <div className="heading">
                                <h2 className="question">Hỏi về đợt mở bán căn hộ ở dự án VTP</h2>
                                <div className="list_icon">
                                    <i className={`icon_flag fas fa-flag-checkered ${feedback ? "active" : ""}`}></i>
                                    <i className="icon_collapse show fas fa-plus" onClick={() => setFeedback(!feedback)}></i>
                                </div>
                            </div>
                            <div className="heading_sub">
                                <div className="heading_child">
                                    <i className="icon far fa-clock"></i>
                                    <i className="time">9:00 - 27/02/2020</i>
                                </div>
                                <div className="heading_child">
                                    <i className="icon fas fa-ad"></i>
                                    <span className="text">
                                        Mã câu:
                                        <i className="code">#0123</i>
                                    </span>
                                </div>
                                <div className="heading_child share">
                                    <i className="icon fas fa-share"></i>
                                    <i className="text">
                                        <u>Chia sẻ</u>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="collapse">
                            <div className="card-body">
                                <div className="reply__master">
                                    <div className="text">
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
                                    <div className="files">
                                        <div className="file">
                                            <figure className="file-img"><img src="./assets/images/pdf_default.png"
                                                    alt=""/></figure>
                                            <span className="file-name">
                                                file-giay-to-01.xls
                                            </span>
                                        </div>
                                        <div className="file">
                                            <figure className="file-img"><img src="./assets/images/pdf_default.png"
                                                    alt=""/></figure>
                                            <span className="file-name">
                                                file-giay-to-01.xls
                                            </span>
                                        </div>
                                    </div>
                                    <div className="images">
                                        <a className="image" href="./assets/images/project_list03.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list03.jpg" alt=""/>
                                        </a>
                                        <a className="image" href="./assets/images/project_list04.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list04.jpg" alt=""/>
                                        </a>
                                        <a className="image more" href="./assets/images/project_list05.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/project_list05.jpg" alt=""/>
                                            <span className="number">+4</span>
                                        </a>
                                        <a className="image d-none" href="./assets/images/intro_project_6.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_6.jpg" alt=""/>
                                        </a>
                                        <a className="image d-none" href="./assets/images/intro_project_BietThuQ2.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_BietThuQ2.jpg" alt=""/>
                                        </a>
                                        <a className="image d-none" href="./assets/images/intro_project_CanHoQ2.jpg"
                                            data-fancybox="roadtrip">
                                            <img src="./assets/images/intro_project_CanHoQ2.jpg" alt=""/>
                                        </a>
                                        <a className="image d-none" href="./assets/images/intro_project_CentrelPark.jpg"
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
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                    <SearchFeedback />
                    <MakeQuestion />
                    <NewsHighlight />
                </div>
            </div>
        </div>
    )
}
export default TabFeedback;