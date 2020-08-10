/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Item from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../store/action/cart";
import ListProduct from "../../../components/Card/ListProduct"

const Cart = props => {
    const dispatch = useDispatch();
    const SEARCH = value => {
        alert(`text ${value}`)
    }

    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    // const { token } = props.user;

    useEffect(() => {
        dispatch(actions.LoadList({ token: token }))
        dispatch(actions.LoadProjectStatus({ token: token }))
    }, [])
    const dataCart = useSelector(state => state.cart)
    const create_Filter_Project_Status = (value, label) => {
        return { value, label }
    }
    let dataSelect = [
        { href: "#", value: "1", label: "Mới" },
        { href: "#", value: "2", label: "Đang chờ" },
        { href: "#", value: "3", label: "Đang triển khai" },
        { href: "#", value: "4", label: "Dừng" },
        { href: "#", value: "5", label: "Hoàn thành" },
    ];
    let dataType = [
        { id: `1`, color: "m_text_000000", name: "All" },
        { id: `2`, color: "m_text_a8c200", name: "Type Apartment" },
        { id: `3`, color: "m_text_f35e5e", name: "Type Office" },
        { id: `4`, color: "m_text_e9c301", name: "Type Shopping Mall" },
        { id: `5`, color: "m_text_fb9334", name: "Type Villa" },
        { id: `5`, color: "m_text_212529", name: "Type Supermarket" },
    ]
    return (
        <div >
            <div>
                <Item.title
                    datas={dataSelect}
                    label={"Trạng Thái Dự Án"}
                    SEARCH={value => SEARCH(value)} />
                <ListProduct
                    dataFilter={dataType}
                    data={dataCart.List}
                    page={dataCart.page}
                    total_page={dataCart.total_page}
                    total_record={dataCart.total_record}
                    link_to={`/cart/cart_list/detail/`}
                />
            </div>
        </div>
    )
}
export default Cart;