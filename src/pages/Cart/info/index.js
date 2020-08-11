/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import actionsCart from "../../../store/action/cart";
import { typeListRequest } from "../../../store/action/dashboard"
import ListProduct from "../../../components/Card/ListProduct";
import CardHeader from "../../..//components/common/CardHeader"

const Cart = props => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        projectStatus: { value: "", label: "" },
        dataProjectStatus: [],
        valueSearch: "",
        dataType: []
    })
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx';
    // const { token } = props.user;

    useEffect(() => {
        dispatch(actionsCart.LoadList({ token: token, value: state.valueSearch, status_id: state.projectStatus.value }))
        dispatch(typeListRequest({ token: token }))
        dispatch(actionsCart.LoadProjectStatus({ token: token }))
    }, [])
    const dataCart = useSelector(state => state.cart)
    const dataDashBoard = useSelector(state => state.dashboard)
    // console.log(dataCart);
    const create_Filter_Project_Status = (value, label) => {
        return { value, label }
    }
    useEffect(() => {
        let data = dataCart.Filter_Project_Status;
        let dataSelect = [];
        dataSelect.push(create_Filter_Project_Status("", "All"))
        if (data.length > 0) {
            data.map((item) => {
                dataSelect.push(create_Filter_Project_Status(item.id, item.name))
            })
            setState({ ...state, dataProjectStatus: dataSelect, projectStatus: dataSelect[0] })
        }
    }, [dataCart.Filter_Project_Status])
    const createData = (id, color, name) => {
        return { id, color, name }
    }
    useEffect(() => {
        let data = dataDashBoard.typeList.detail ? dataDashBoard.typeList.detail : [];
        let newData = []
        if (data.length > 0) {
            data.map((item, index) => {
                newData.push(createData(item.type_id, `m_text_${item.type_color}`, item.type_name))
            })
            setState({ ...state, dataType: newData })
        }
    }, [dataDashBoard.typeList])

    const onClickType = value => {
        dispatch(actionsCart.LoadList({ token: token, search_name: value, status_id: state.projectStatus.value, setting_type: value.id }))
    }
    const SEARCH = value => {
        setState({ ...state, valueSearch: value })
        dispatch(actionsCart.LoadList({ token: token, search_name: value, status_id: state.projectStatus.value }))
    };
    const onFilter = (item) => {
        setState({ ...state, projectStatus: item })
        dispatch(actionsCart.LoadList({ token: token, search_name: state.valueSearch, status_id: item.value }))
    }
    return (

        [<CardHeader
            dropdown={{ title: state.projectStatus && state.projectStatus.value == "" ? "Product Status" : state.projectStatus.label, data: state.dataProjectStatus }}
            label={"Project"}
            searchBox={{ title: "home_map_search" }}
            onSearch={value => SEARCH(value)}
            onClick={value => onFilter(value)} />
            , <ListProduct
            dataFilter={state.dataType}
            data={dataCart.List}
            page={dataCart.page}
            total_page={dataCart.total_page}
            total_record={dataCart.total_record}
            link_to={`/cart/cart_list/detail/`}
            onClickType={(value) => onClickType(value)}
        />]
    )
}
export default Cart;