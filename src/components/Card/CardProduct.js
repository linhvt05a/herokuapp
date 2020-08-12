import React from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next"

const CartProductDetail = props => {
    let { data, index, link_to } = props;
    return (
        <div className="col-12 col-sm-6 col-lg-6 col-xl-4 mb-4">
            <div className="item">
                <figure className="image">
                    <img src={data.avatar_url ? data.avatar_url : "/static/images/logo_full_name.svg"} />
                </figure>
                <div className="content">
                    <p className={`type m_text_${data.setting_type_bg_color}`}>
                        {data.setting_type_name}
                    </p>
                    <p className="name">
                        <Link to={`${link_to}${data.project_id}`} className="link_href_6d30ab" >{data.project_name}</Link>
                        <Link className="small float-right" to={`${props.link_to}${data.project_id}`} title="Thêm tin tức" >
                            <i className="news icon las la-newspaper">
                                <span className="badge badge-pill badge-danger badge-up badge-glow">14</span>
                            </i>
                        </Link>
                        <Link className="small float-right mr-1" to={`${props.link_to}${data.project_id}`} title="Cập Nhật" >
                            {/* <i className="edit  icon las la-pen"></i> */}
                        </Link>
                        <span className="address">{data.address}</span>
                    </p>
                    <ul className="details">
                        <li>
                            <i className="las la-user-tie"></i>
                            <span className="title">Chủ Đầu Tư Dự Án:</span>
                            <span className="text">{data.investor_name}</span>

                        </li>
                        <li>
                            <i className="las la-arrows-alt"></i>
                            <span className="title">Tổng Diện Tích: </span>
                            {/* <Trans>{'Total Area:'}</Trans> */}
                            <span className="text">{data.project_acreage}</span>
                        </li>
                        <li>
                            <i className="lar la-building"></i>
                            <span className="title">Số khu:</span>
                            <span className="text">{data.number_of_floor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default CartProductDetail;