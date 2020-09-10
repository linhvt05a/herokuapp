import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../../contant";
import { Input } from 'antd';

const SearchFeedback = (props) => {
    return (
        <div class="search_feedback mb-45">
            <ul>
                <label class="search_feedback--title">Tra cứu phản hồi</label>
                <li data-toggle="collapse" data-target="#collapseExample1">
                    <i class="icon_parent fas fa-angle-right mr-2"></i>
                    <span class="text">Tháng</span>
                    <ul class="child collapse" id="collapseExample1">
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 1</a>
                        </li>
                        <li class="active">
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 3</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 4</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 5</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 6</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 7</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng
                            </a>
                        </li>
                    </ul>
                </li>
                <li data-toggle="collapse" data-target="#collapseExample2">
                    <i class="icon_parent fas fa-angle-right mr-2"></i>
                    <span class="text">Qúy</span>
                    <ul class="child collapse" id="collapseExample2">
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 1</a>
                        </li>
                        <li class="active">
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 3</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 4</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 5</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 6</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 7</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng
                            </a>
                        </li>
                    </ul>
                </li>
                <li data-toggle="collapse" data-target="#collapseExample3">
                    <i class="icon_parent fas fa-angle-right mr-2"></i>
                    <span class="text">Năm</span>
                    <ul class="child collapse" id="collapseExample3">
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 1</a>
                        </li>
                        <li class="active">
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 3</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 4</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 5</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 6</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng 7</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-square-full mr-2"></i>
                                Tháng
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="search_feedback--search">
                <div class="text">Tìm kiếm</div>
                <div class="search">
                    <input type="text" class="w-100" placeholder="Nhập nội dung"/>
                    <i class="fas fa-search"></i>
                </div>

            </div>
        </div>
    )
}
export default SearchFeedback;