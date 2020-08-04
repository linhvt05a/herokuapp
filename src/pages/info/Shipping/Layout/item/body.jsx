/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Footer from "./footer"
const body = props => {
    return (
        <div class="m_table--wrapper">
            <div class="m_filter pb-4">
                <div class="d-flex align-items-center justify-content-xl-between flex-xl-nowrap flex-wrap justify-content-start">
                    <ul class="m_filter--type">
                        <li class="first"><span>Lọc bởi: </span></li>
                        <li>
                            <i class="las la-square m_text"></i>
                            <span class="text-danger">Tất Cả</span>
                        </li>

                        <li>
                            <i class="las la-square m_text_a8c200"></i>
                            <span><a href="#">Chung Cư Căn Hộ</a></span>
                        </li>

                        <li>
                            <i class="las la-square m_text_f35e5e"></i>
                            <span><a href="#">Văn Phòng Cho Thuê</a></span>
                        </li>

                        <li>
                            <i class="las la-square m_text_e9c301"></i>
                            <span><a href="#">Trung Tâm Thương Mại</a></span>
                        </li>

                        <li>
                            <i class="las la-square m_text_fb9334"></i>
                            <span><a href="#">Biệt Thự Cao Cấp</a></span>
                        </li>

                    </ul>
                </div>
            </div>


            <div class="m_grid m_grid--list_project">
                <div class="row">
                    {props.data.length > 0 ? props.data.map((item, index) => {
                        return (
                            <div class="col-12 col-sm-6 col-lg-6 col-xl-4 mb-4">
                                <div class="item">
                                    <figure class="image">
                                        <img src="https://cloudapi.minerva.vn/cdn/sunnyworld-workflow-dev/a6b310648bc593f5e1d71152.jpeg" />
                                    </figure>
                                    <div class="content">
                                        <p class="type m_text_fb9334">
                                            {item.type}
                                        </p>
                                        <p class="name">
                                            <a href="#" class="link_href_6d30ab">{item.name}</a>
                                            <a class="small float-right" href="#" title="Thêm tin tức">
                                                <i class="news icon las la-newspaper">
                                                    <span class="badge badge-pill badge-danger badge-up badge-glow">14</span>
                                                </i>
                                            </a>
                                            <a class="small float-right mr-1" href="#" title="Cập Nhật">
                                                <i class="edit  icon las la-pen"></i>
                                            </a>
                                            <span class="address">{item.address}</span>
                                        </p>
                                        <ul class="details">
                                            <li>
                                                <i class="las la-user-tie"></i>
                                                <span class="title">Chủ Đầu Tư Dự Án:</span>
                                                <span class="text">{item.investor}</span>

                                            </li>
                                            <li>
                                                <i class="las la-arrows-alt"></i>
                                                <span class="title">Tổng Diện Tích: </span>
                                                <span class="text">{item.acreage}</span>
                                            </li>
                                            <li>
                                                <i class="lar la-building"></i>
                                                <span class="title">Số khu:</span>
                                                <span class="text">{item.count}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default body