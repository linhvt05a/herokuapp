/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Pagination from "../common/Pagination"
import { Trans } from 'react-i18next';
import ListProductDetail from "./ListProductDetail";
import ListProductTable from "./ListProductTable";
const body = props => {
    let { dataFilter, data, page, total_page, total_record } = props;
    const [state, setState] = useState(true);

    return (
        <div className="m_table--wrapper">
            <div className="m_filter pb-4">
                <div className="d-flex align-items-center justify-content-xl-between flex-xl-nowrap flex-wrap justify-content-start">
                    <ul className="m_filter--type">
                        <li className="first"><span>Lọc bởi: </span></li>
                        {dataFilter ? dataFilter.map((item, index) => {
                            return (
                                <li key={index}>
                                    <i className={`las la-square ${item.color}`}></i>
                                    <span><a href="#"><Trans>{item.name}</Trans></a></span>
                                </li>
                            )
                        }) : null}
                    </ul>
                    <ul className="m_filter--show mt-xl-0 mt-2">
                        <li className="first"><span><Trans>Displayed by</Trans></span></li>
                        <li className={state ? "active" : ""} onClick={() => setState(true)}><a><i className="la la-th"></i></a></li>
                        <li className={state ? "" : "active"} onClick={() => setState(false)}><a><i className="la la-th-list"></i></a></li>
                    </ul>
                </div>
            </div>

            {state ? <div className="m_grid m_grid--list_project">
                <div className="row">
                    {data.length > 0 ? data.map((item, index) => {
                        return <ListProductDetail item={item} index={index} key={index} />
                    }) : null}
                </div >
            </div > :
                <div className="m_table m_table--sales" style={{ maxHeight: '100%' }}>
                    <ListProductTable data={data} />
                </div>}

            <Pagination
                total_page={total_page}
                total_record={total_record}
                page={page}
                change={() => console.log("chay")}
            />
        </div >


    )
}
export default body