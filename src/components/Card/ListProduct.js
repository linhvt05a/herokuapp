import React from 'react';
import Pagination from "../common/Pagination"
import { Link } from "react-router-dom";
import ListProductDetail from "./ListProductDetail"
const body = props => {
    let { dataFilter, data } = props;
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
                    {data.length > 0 ? data.map((item, index) => {
                        return <ListProductDetail item={item} index={index} key={index} />
                    }) : null}
                </div >
            </div >
            <Pagination
                total_page={3}
                total_record={5}
                page={1}
                change={() => console.log("chay")}
            />
        </div >


    )
}
export default body