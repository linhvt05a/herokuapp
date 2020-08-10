import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../store/action/cart"
import Item from "./Layout";
import CardHeader from "../../../components/common/CardHeader"
const Edit = props => {
    const [state, setState] = useState({
        areaStatus: { value: "", label: "" },
        dataArea: [],
        saleOpenStatus: { value: "", label: "" },
        dataSaleOpen: []
    })
    const dispatch = useDispatch();
    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    // const createData = (buttomName, date_from, date_to, Apartment_from = 0, Apartment_to = 0, Studio_from = 0, Studio_to = 0) => {
    //     return { buttomName, date_from, date_to, Apartment_from, Apartment_to, Studio_from, Studio_to }
    // }
    useEffect(() => {
        dispatch(actions.LoadDetail({ token: token, id: props.params.id }));
        dispatch(actions.LoadSellOpen({ token: token, id: props.params.id }));
        dispatch(actions.LoadSellOpenList({ token: token, id: props.params.id, area_id: state.areaStatus.value }));
        dispatch(actions.LoadSellOpenCart({ token: token, id: props.params.id, sell_open_id: state.saleOpenStatus.value }));
        dispatch(actions.LoadFilterFloor({ token: token, id: props.params.id, sell_open_id: state.saleOpenStatus.value }));
        dispatch(actions.LoadFilterArea({ token: token, id: props.params.id }));
        dispatch(actions.LoadFilterListOpenSale({ token: token, id: props.params.id }))

    }, [])
    const dataCart = useSelector(state => state.cart);

    const createData = (value, label) => {
        return { value, label }
    }

    useEffect(() => {
        let newData = [];
        let data = dataCart.Filter_Project_Area
        if (data.length > 0) {
            newData.push(createData("", "All"))
            data.map((item) => {
                newData.push(createData(item.area_id, item.area_name))
            })
            setState({ ...state, dataArea: newData, areaStatus: newData[0] })
        }
    }, [dataCart.Filter_Project_Area])

    useEffect(() => {
        let newData = [];
        let data = dataCart.Filter_Open_Sale
        if (data.length > 0) {
            newData.push(createData("", "All"))
            data.map((item) => {
                newData.push(createData(item.id, item.name))
            })
            setState({ ...state, dataSaleOpen: newData, saleOpenStatus: newData[0] })
        }
    }, [dataCart.Filter_Open_Sale])
    // const newData = [
    //     createData("Sell open 1", "10/06/2020", "31/10/2020", 16, 15),
    //     createData("Sell open 2", "01/07/2020", "30/08/2020", 10, 10),
    //     createData("Sell open 3", "02/10/2020", "31/10/2020", 10, 10, 2, 2),
    //     createData("Sell open 4", "02/10/2020", "31/10/2020", 0, 0, 4, 5),
    // ]

    // const ONLICK = (target) => {
    //     if (target.className.indexOf('la-plus-circle') > -1) {
    //         target.className = "icon icon_collapse las la-minus-circle"
    //     }
    //     else target.className = "icon icon_collapse las la-plus-circle"
    // }

    const onFilterArea = (value) => {
        setState({ ...state, areaStatus: value })
        dispatch(actions.LoadSellOpenList({ token: token, id: props.params.id, area_id: value.value }));
    }

    const onFilteSaleOpen = (value) => {
        setState({ ...state, saleOpenStatus: value })
        dispatch(actions.LoadSellOpenCart({ token: token, id: props.params.id, sell_open_id: value.value }));
    }

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex flex-column">
                    <CardHeader label="PROJECT INFORMATION" />
                    <Item.Detail_info data={dataCart.Detail} />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex flex-column">
                    <CardHeader label="STATISTICS OF OPEN SALE" />
                    <Item.Detail_progress data={dataCart.Detail} dataSellOpen={dataCart.Sell_Open} />
                </div>
            </div>
            <div>
                <CardHeader label="LIST OF AREAS" dropdown={{ title: state.areaStatus.value == "" ? "Tất cả khu" : state.areaStatus.label, data: state.dataArea }} onClick={(value) => onFilterArea(value)} />
                <Item.Detail_content data={dataCart.Sell_Open_Floor} />
            </div>
            <div>
                <CardHeader label="Basket details" dropdown={{ title: state.saleOpenStatus.value == "" ? "Tất cả" : state.saleOpenStatus.label, data: state.dataSaleOpen }} onClick={(value) => onFilteSaleOpen(value)} />
                <Item.Detail_InfoShipping
                    data={dataCart.Sell_Open_Cart}
                    dropdownFloor={{ value: "", data: state.dataSaleOpen }}
                    onFilterFloor={(value) => console.log(value)}
                />
            </div>
        </div>
    )
}
export default Edit;