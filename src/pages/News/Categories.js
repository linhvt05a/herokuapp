import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Categories = ()=>{
    return(
        <ul className="news_menu bg_white mb-45">
        <label className="news_menu__title">
            Chuyên mục
        </label>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                Tin tức thị trường
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                Thị trường căn hộ
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                Nhà đẹp
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                Báo cáo phân tích
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                Chuyên mục 01
            </Link>
        </li>
    </ul>
    
    )
}
export default Categories