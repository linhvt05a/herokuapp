import React from "react";
import { Link } from "react-router-dom";

const ItemProduct = (props) => {

    const { data, index } = props

    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="item">
                <Link to="/#" className="link" />
                <figure className="image">
                    <i className="liked fas fa-heart" />
                    <img src="./assets/images/house_highlight.jpg" />
                    <span className="type">
                        Căn hộ cho thuê
                    </span>
                </figure>
                <div className="heading">
                    <h4 className="name">
                        Căn hộ Saigon Royal
                    </h4>
                    <p className="address mb-0">
                        227 đường Nguyễn Văn Cừ, Phường
                        4, Quận 7, Tp.HCM
                    </p>
                </div>
                <div className="details">
                    <p className="child mb-0">
                        <i className="icon far fa-object-ungroup" />
                        <span className="text">
                            Diện tích : 320 ( m2 )
                        </span>
                    </p>
                    <p className="child mb-0">
                        <i className="icon fas fa-money-bill-wave" />
                        <span className="text">
                            Giá cho thuê : {" "}
                            <i className="price">
                                26 ( triệu/tháng )
                            </i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct;
