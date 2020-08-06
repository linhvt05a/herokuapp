import React from 'react';
import { Link } from "react-router-dom"

const CartProductDetail = props => {
    let { item, index } = props;
    return (
        <div className="col-12 col-sm-6 col-lg-6 col-xl-4 mb-4">
            <div className="item">
                <figure className="image">
                    <img src={item.avatar_url} />
                </figure>
                <div className="content">
                    <p className={`type m_text_${item.setting_type_bg_color}`}>
                        {item.setting_type_name}
                    </p>
                    <p className="name">
                        <Link to={`/cart/cart_list/detail/${item.project_id}`} className="link_href_6d30ab" >{item.about}</Link>
                        <Link className="small float-right" to={`/cart/cart_list/detail/${item.project_id}`} title="Thêm tin tức" >
                            <i className="news icon las la-newspaper">
                                <span className="badge badge-pill badge-danger badge-up badge-glow">14</span>
                            </i>
                        </Link>
                        <Link className="small float-right mr-1" to={`/cart/cart_list/detail/${item.project_id}`} title="Cập Nhật" >
                            {/* <i className="edit  icon las la-pen"></i> */}
                        </Link>
                        <span className="address">{item.address}</span>
                    </p>
                    <ul className="details">
                        <li>
                            <i className="las la-user-tie"></i>
                            <span className="title">Chủ Đầu Tư Dự Án:</span>
                            <span className="text">{item.investor_name}</span>

                        </li>
                        <li>
                            <i className="las la-arrows-alt"></i>
                            <span className="title">Tổng Diện Tích: </span>
                            <span className="text">{item.project_acreage}</span>
                        </li>
                        <li>
                            <i className="lar la-building"></i>
                            <span className="title">Số khu:</span>
                            <span className="text">{item.number_of_floor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default CartProductDetail;