import React from "react";
import { Link } from "react-router-dom";

const ItemHomeProject = (props) => {

    const { bodyClassName, data } = props

    return (
        <div className={bodyClassName}>
            <div className="project_list--item">
                <figure className="image" style={{backgroundImage: "url(./assets/images/project_list01.jpg)"}} />
                <div className="heading">
                    <div className="heading__name">
                        Dự Án Royal Garden
                    </div>
                    <div className="heading__date">
                        Đợt 1 : 02/04/2020 - 30/04/2020
                    </div>
                    <div className="heading__list-btn">
                        <Link to="/#" className="btn btn_green">
                            CHI TIẾT
                        </Link>
                        <Link to="/#" className="btn btn_white">
                            SẢN PHẨM
                        </Link>
                    </div>
                </div>
                {/* <div className="sell_tatus selling">
                    Đang bán
                </div> */}
                <div className="sell_tatus will_sell">
                    Sắp bán
                </div>
            </div>
        </div>
    )
}

export default ItemHomeProject;
