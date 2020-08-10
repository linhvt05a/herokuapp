/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Item from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../store/action/cart";
import ListProduct from "../../../components/Card/ListProduct"

const Cart = props => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        projectStatus: "",
        dataProjectStatus: [],
        valueSearch: ""
    })
    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    // const { token } = props.user;

    useEffect(() => {
        dispatch(actions.LoadList({ token: token, value: state.valueSearch, status_id: state.projectStatus }))
        dispatch(actions.LoadProjectStatus({ token: token }))
    }, [])
    const dataCart = useSelector(state => state.cart)

    const create_Filter_Project_Status = (value, label) => {
        return { value, label }
    }
    useEffect(() => {
        let data = dataCart.Filter_Project_Area;
        let dataSelect = [];
        dataSelect.push(create_Filter_Project_Status("", "All"))
        if (data.length > 0) {
            data.map((item, index) => {
                dataSelect.push(create_Filter_Project_Status(item.id, item.name))
            })
        }
        setState({ ...state, dataProjectStatus: dataSelect })
    }, [dataCart.Filter_Project_Area])


    let dataType = [
        { id: `1`, color: "m_text_000000", name: "All" },
        { id: `2`, color: "m_text_a8c200", name: "Type Apartment" },
        { id: `3`, color: "m_text_f35e5e", name: "Type Office" },
        { id: `4`, color: "m_text_e9c301", name: "Type Shopping Mall" },
        { id: `5`, color: "m_text_fb9334", name: "Type Villa" },
        { id: `5`, color: "m_text_212529", name: "Type Supermarket" },
    ]

    const SEARCH = value => {
        setState({ ...state, valueSearch: value })
        dispatch(actions.LoadList({ token: token, search_name: value, status_id: state.projectStatus }))
    };
    const onFilter = (value) => {
        setState({ ...state, projectStatus: value })
        dispatch(actions.LoadList({ token: token, search_name: state.valueSearch, status_id: value }))
    }
    return (
        <div >
            <div>
                <Item.title
                    datas={state.dataProjectStatus}
                    label={"Product Status"}
                    SEARCH={value => SEARCH(value)}
                    onClick={value => onFilter(value)} />
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