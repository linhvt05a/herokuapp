import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";
import { Input } from 'antd';

const SearchFeedback = (props) => {
    return (
        <div className="search_feedback mb-45">
            <ul>
                <label className="search_feedback--title">Tra cứu phản hồi</label>
                <li data-toggle="collapse" data-target="#collapseExample1">
                    <i className="icon_parent fas fa-angle-right mr-2"></i>
                    <span className="text">Tháng</span>
                    <ul className="child collapse" id="collapseExample1">
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 1</a>
                        </li>
                        <li className="active">
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 3</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 4</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 5</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 6</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 7</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng
                            </a>
                        </li>
                    </ul>
                </li>
                <li data-toggle="collapse" data-target="#collapseExample2">
                    <i className="icon_parent fas fa-angle-right mr-2"></i>
                    <span className="text">Qúy</span>
                    <ul className="child collapse" id="collapseExample2">
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 1</a>
                        </li>
                        <li className="active">
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 3</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 4</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 5</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 6</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 7</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng
                            </a>
                        </li>
                    </ul>
                </li>
                <li data-toggle="collapse" data-target="#collapseExample3">
                    <i className="icon_parent fas fa-angle-right mr-2"></i>
                    <span className="text">Năm</span>
                    <ul className="child collapse" id="collapseExample3">
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 1</a>
                        </li>
                        <li className="active">
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 3</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 4</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 5</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 6</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng 7</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-square-full mr-2"></i>
                                Tháng
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="search_feedback--search">
                <div className="text">Tìm kiếm</div>
                <div className="search">
                    <input type="text" className="w-100" placeholder="Nhập nội dung" />
                    <i className="fas fa-search"></i>
                </div>

            </div>
        </div>
    )
}
export default SearchFeedback;