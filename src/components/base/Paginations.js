import React, { useState } from 'react'
import { Trans } from 'react-i18next';
import {Link} from 'react-router-dom'
import { Pagination } from 'antd'

const Paginations = (props)=> {
    const {page, total_page, total_record} = props
        const page1 = parseInt(page) - 2;
        const page2 = parseInt(page) - 1;
        const page3 = parseInt(page);
        const page4 = parseInt(page) + 1;
        const page5 = parseInt(page) + 2;

        return (
            <ul className="pagination">
        <li className="page-item">
            <Link className="page-link" to="#">
                Đầu
            </Link>
        </li>
        <li className="page-item">
            <Link className="page-link" to="#">
                <i className="fas fa-angle-double-left " />
            </Link>
        </li>
        <li className="page-item">
            <Link className="page-link" to="#">
                1
            </Link>
        </li>
        <li className="page-item">
            <Link className="page-link active" to="#">
                2
            </Link>
        </li>
        <li className="page-item">
            <Link className="page-link" to="#">
                3
            </Link>
        </li>
        <li className="page-item">
            <Link className="page-link" to="#">
                <i className="fas fa-angle-double-right " />
            </Link>
        </li>
        <li className="page-item">
            <Link className="page-link" to="#">
                Cuối
            </Link>
        </li>
    </ul>
        )
}

export default Paginations;
