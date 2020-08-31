import {Link} from "react-router-dom";
import React from "react";


const Block04 = (props) => {
    const { headerBodyClassName, labelHeader, datas, detail, options } = props
    return (
        <div className="project label_filter bg_grey">
            <div className="container container-sm container-md">

                <div className="label_filter--heading">
                    <h3 className="main_heading">
                        <span>Dự án sắp thực hiện</span>
                    </h3>
                    <div className="filter_select">
                        <div className="text">Lọc theo :</div>
                        <div className="form-group filter_project">
                            <select defaultValue='Tất cả'>
                                <option>Tất cả</option>
                                <option>Căn hộ</option>
                                <option>Biệt thự</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="project_list ">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-xl-4">
                            <div class="project_list--item">
                                <figure className="image" style={{backgroundImage: 'url(./assets/images/project_list01.jpg)'}}>
                                </figure>
                                <div className="heading">
                                    <div className="heading__name">Dự Án Royal Garden</div>
                                    <div className="heading__date">Đợt 1 : 02/04/2020 - 30/04/2020</div>
                                    <div className="heading__list-btn">
                                    <a href="#" className="btn btn_green">
                                        CHI TIẾT
                                    </a>
                                    <a href="#" className="btn btn_white">
                                        SẢN PHẨM
                                    </a>
                                    </div>
                                </div>
                                <div className="sell_status selling">Đang bán</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn  btn_purple">
                            XEM TẤT CẢ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block04;

