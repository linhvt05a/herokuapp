import React from "react";
import { Tooltip } from 'antd'

const ItemProjectDetail = (props) => {

    const { data } = props

    return (
        <div className="item">
            <figure className="image">
                <i className="liked active fas fa-heart" />
                <img src="../images/house_highlight.jpg" alt="Căn hộ Saigon Royal" />
                <div className="sell_status promotion">Giảm <br /> 7%</div>
                <img className="img_promotion" src="../images/item_promotion.png" alt="Căn hộ Saigon Royal" />
            </figure>
            <div className="heading">
                <div className="top">
                    <a href="#" className="name">Căn hộ B6 - F01</a>
                </div>
                <p className="address mb-0">Giá bán đã niêm yết (đồng)
                    <Tooltip title="ahihihihi">
                        <i className="noted fas fa-info-circle" />
                    </Tooltip>
                </p>
            </div>
            <div className="details">
                <p className="child mb-0">
                    <i className="icon far fa-object-ungroup" />
                    <span className="text">
                        80 ( m<sup>2</sup> )
                        <Tooltip title="142,490,700đ">
                            <i className="noted fas fa-info-circle" />
                        </Tooltip>
                    </span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-bed" />
                    <span className="text">
                        2
                    </span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-compass" />
                    <span className="text">
                        ĐB
                    </span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-restroom" />
                    <span className="text">
                        2
                    </span>
                </p>
            </div>
            <div className="price">
                <div className="price__label">
                    Giá niêm yết
                    <Tooltip title="Giá đỗ">
                        <i className="noted fas fa-info-circle" />
                    </Tooltip>
                </div>
                <div className="price__wrap">
                    <div className="price__item">
                        <div className="price__discount">2.044.474.800đ</div>
                        <div className="price__origin">
                            <span className="value">2.198.360.000đ </span> 7%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemProjectDetail;
