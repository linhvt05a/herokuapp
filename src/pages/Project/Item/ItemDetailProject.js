import React from "react";
import { Link } from "react-router-dom";

const ItemDetailProject = (props) => {

    const { data } = props

    return (
        <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
            <div className="project_page--item">
                <div className="wrap">
                    <div className="sell_status selling">
                        Đang bán
                    </div>
                    {/* <div className="sell_status will_sell">
                        Sắp bán
                    </div> */}
                    <figure className="image" style={{backgroundImage: "url(./assets/images/projectItem01.jpg)"}} />
                    <div className="text">
                        <p className="name">
                            Dự Án Royal Garden
                        </p>
                        <p className="address">
                            17 đường D2, Phường 4, Quận
                            Bình Thạnh, Tp.HCM
                        </p>
                        <div className="list-btn">
                            <Link to="/projectdetail" className="btn btn_green">
                                CHI TIẾT
                            </Link>
                            <Link to="/#" className="btn btn_white">
                                SẢN PHẨM
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailProject;
