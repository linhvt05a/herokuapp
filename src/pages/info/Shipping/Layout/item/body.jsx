/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Pagination from "../../../../../components/common/Pagination"
import { Link } from "react-router-dom"
const body = props => {
    return (
        <div className="m_table--wrapper">
            <div className="m_filter pb-4">
                <div className="d-flex align-items-center justify-content-xl-between flex-xl-nowrap flex-wrap justify-content-start">
                    <ul className="m_filter--type">
                        <li className="first"><span>Lọc bởi: </span></li>
                        {props.dataType ? props.dataType.map((item, index) => {
                            return (
                                <li key={index}>
                                    <i className={`las la-square ${item.color}`}></i>
                                    <span><a href="#">{item.name}</a></span>
                                </li>
                            )
                        }) : null}
                    </ul>
                    <ul className="m_filter--show mt-xl-0 mt-2">

                        <li className="first"><span>Display</span></li>

                        <li className=" active "><a><i className="la la-th"></i></a></li>

                        <li className=""><a><i className="la la-th-list"></i></a></li>

                    </ul>
                </div>
            </div>


            <div className="m_grid m_grid--list_project">
                <div className="row">
                    {props.data ? props.data.List ? props.data.List.map((item, index) => {

                        return (
                            <div key={index} className="col-12 col-sm-6 col-lg-6 col-xl-4 mb-4">
                                <div className="item">
                                    <figure className="image">
                                        <img src={item.avatar_url} />
                                    </figure>
                                    <div className="content">
                                        <p className={`type m_text_${item.setting_type_bg_color}`}>
                                            {item.setting_type_name}
                                        </p>
                                        <p className="name">
                                            <Link to={`/info/shipping/edit/${item.project_id}`} className="link_href_6d30ab" onClick={() => { props.Router(item) }}>{item.about}</Link>
                                            <Link className="small float-right" to={`/info/shipping/edit/${item.project_id}`} title="Thêm tin tức" onClick={() => { props.Router(item) }}>
                                                <i className="news icon las la-newspaper">
                                                    <span className="badge badge-pill badge-danger badge-up badge-glow">14</span>
                                                </i>
                                            </Link>
                                            <Link className="small float-right mr-1" to={`/info/shipping/edit/${item.project_id}`} title="Cập Nhật" onClick={() => { props.Router(item) }}>
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
                    }) : null : null}
                </div>
            </div>
            <Pagination
                total_page={3}
                total_record={5}
                page={1}
                change={() => console.log("chay")}
            />
        </div>


    )
}
export default body