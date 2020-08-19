import React from "react";
import { Link } from "react-router-dom";

const ItemProduct = (props) => {

    const { data, index, detail } = props

    return (
        <div className="item">
            <figure className="image">
                <i className="liked active fas fa-heart"></i>
                <img src="./assets/images/house_highlight.jpg" />
            </figure>
            <div className="heading">
                <div className="top">
                    <a href="#" className="name">Căn hộ B6 - F01</a>
                    <p className="price mb-0">3.24 tỷ</p>
                </div>
                <p className="address mb-0">Giá bán đã niêm yết (đồng)
                    <i className="noted fas fa-info-circle" title="Tooltip is here"></i>
                </p>
            </div>
            <div className="details">
                <p className="child mb-0">
                    <i className="icon far fa-object-ungroup"></i>
                    <span className="text">80 ( m<sup>2</sup> )<i className="noted fas fa-info-circle" title="Tooltip is here"></i></span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-bed"></i>
                    <span className="text">2</span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-compass"></i>
                    <span className="text">ĐB</span>
                </p>
                <p className="child mb-0">
                    <i className="icon fas fa-restroom"></i>
                    <span className="text">2</span>
                </p>
            </div>
            <div className="price">
                <div className="price__label">
                    Giá niêm yết
                    <i className="noted fas fa-info-circle" title="Tooltip is here"></i>
                </div>
                <div className="price__wrap">
                    <div className="price__item">
                        <div className="price__discount">
                            2.044.474.800đ
                        </div>
                        <div className="price__origin">
                            2.198.360.000đ <span className="percent">7%</span>
                        </div>
                    </div>
                    <div className="price__item">
                        <a href="#" className="btn btn_green">GỬI TIN NHẤN</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct;
