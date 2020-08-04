/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Item from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../store/action/shipping"

const Shipping = props => {
    const dispatch = useDispatch();
    const SEARCH = value => {
        alert(`text ${value}`)
    }

    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx';
    // const { token } = props.user;

    useEffect(() => {
        dispatch(actions.LoadList({ token: token }))
    }, [])
    const dataShipping = useSelector(state => state.shipping)

    const Router = (route) => {
        localStorage.setItem("productID", route.project_id)
    }

    let dataSelect = [
        { href: "#", value: "1", label: "Mới" },
        { href: "#", value: "2", label: "Đang chờ" },
        { href: "#", value: "3", label: "Đang triển khai" },
        { href: "#", value: "4", label: "Dừng" },
        { href: "#", value: "5", label: "Hoàn thành" },
    ];
    let dataType = [
        { id: `1`, color: "m_text", name: "Tất cả" },
        { id: `2`, color: "m_text_a8c200", name: "Chung Cư Căn Hộ" },
        { id: `3`, color: "m_text_f35e5e", name: "Văn Phòng Cho Thuê" },
        { id: `4`, color: "m_text_e9c301", name: "Trung Tâm Thương Mại" },
        { id: `5`, color: "m_text_fb9334", name: "Biệt Thự Cao Cấp" },
    ]
    return (
        <div >
            {
                <div>
                    <Item.header
                        datas={dataSelect}
                        label={"Trạng Thái Dự Án"}
                        SEARCH={value => SEARCH(value)} />
                    <Item.body
                        dataType={dataType}
                        data={dataShipping}
                        Router={value => Router(value)}
                    />
                </div>}

        </div>
    )
}
export default Shipping;