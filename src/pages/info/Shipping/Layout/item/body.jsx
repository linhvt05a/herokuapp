/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Pagination from "../../../../../components/common/Pagination"
import { Link } from "react-router-dom"
const body = props => {
    return (
        <div class="m_table--wrapper">
            <div class="m_filter pb-4">
                <div class="d-flex align-items-center justify-content-xl-between flex-xl-nowrap flex-wrap justify-content-start">
                    <ul class="m_filter--type">
                        <li class="first"><span>Lọc bởi: </span></li>
                        {props.dataType ? props.dataType.map((item, index) => {
                            return (
                                <li key={index}>
                                    <i class={`las la-square ${item.color}`}></i>
                                    <span><a href="#">{item.name}</a></span>
                                </li>
                            )
                        }) : null}
                    </ul>
                    <ul class="m_filter--show mt-xl-0 mt-2">

                        <li class="first"><span>Display</span></li>

                        <li class=" active "><a onclick="display_data_grid_list_project('grid');"><i class="la la-th"></i></a></li>

                        <li class=""><a onclick="display_data_grid_list_project('list');"><i class="la la-th-list"></i></a></li>

                    </ul>
                </div>
            </div>


            <div class="m_grid m_grid--list_project">
                <div class="row">
                    {props.data.List.length > 0 ? props.data.List.map((item, index) => {

                        return (
                            <div key={index} class="col-12 col-sm-6 col-lg-6 col-xl-4 mb-4">
                                <div class="item">
                                    <figure class="image">
                                        <img src={item.avatar_url} />
                                    </figure>
                                    <div class="content">
                                        <p class={`type m_text_${item.setting_type_bg_color}`}>
                                            {item.setting_type_name}
                                        </p>
                                        <p class="name">
                                            <Link to={`/info/shipping/edit/${item.project_id}`} class="link_href_6d30ab" onClick={() => { props.Router(item) }}>{item.about}</Link>
                                            <Link class="small float-right" to={`/info/shipping/edit/${item.project_id}`} title="Thêm tin tức" onClick={() => { props.Router(item) }}>
                                                <i class="news icon las la-newspaper">
                                                    <span class="badge badge-pill badge-danger badge-up badge-glow">14</span>
                                                </i>
                                            </Link>
                                            <Link class="small float-right mr-1" to={`/info/shipping/edit/${item.project_id}`} title="Cập Nhật" onClick={() => { props.Router(item) }}>
                                                {/* <i class="edit  icon las la-pen"></i> */}
                                            </Link>
                                            <span class="address">{item.address}</span>
                                        </p>
                                        <ul class="details">
                                            <li>
                                                <i class="las la-user-tie"></i>
                                                <span class="title">Chủ Đầu Tư Dự Án:</span>
                                                <span class="text">{item.investor_name}</span>

                                            </li>
                                            <li>
                                                <i class="las la-arrows-alt"></i>
                                                <span class="title">Tổng Diện Tích: </span>
                                                <span class="text">{item.project_acreage}</span>
                                            </li>
                                            <li>
                                                <i class="lar la-building"></i>
                                                <span class="title">Số khu:</span>
                                                <span class="text">{item.number_of_floor}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null}
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