/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../store/action/cart"
import Item from "./Layout";
import CardHeader from "../../../components/common/CardHeader";

const Edit = props => {
    const [state, setState] = useState({
        areaStatus: { value: "", label: "" },
        dataArea: [],
        saleOpenStatus: { value: "", label: "" },
        dataSaleOpen: [],
        FilterFloorStatus: { value: "", label: "" },
        dataFilterFloor: [],
        FilterAreaStatus: { value: "", label: "" },
        dataFilterArea: [],
        FilterBlockStatus: { value: "", label: "" },
        dataFilterBlock: []
    })
    const dispatch = useDispatch();
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx';

    useEffect(() => {
        dispatch(actions.LoadDetail({ token: token, id: props.params.id }));
        dispatch(actions.LoadSellOpen({ token: token, id: props.params.id }));
        // dispatch(actions.LoadSellOpenList({ token: token, id: props.params.id, area_id: state.areaStatus.value }));

        dispatch(actions.LoadFilterListOpenSale({ token: token, id: props.params.id }))

    }, [])
    const dataCart = useSelector(state => state.cart);
    const createData = (value, label) => {
        return { value, label }
    }

    useEffect(() => {
        let newData = [];
        let data = dataCart.Filter_Project_Area;
        if (data.length > 0) {
            data.map((item) => newData.push(createData(item.area_id, item.area_name)))
            setState({ ...state, dataArea: newData, areaStatus: newData[0] })
            dispatch(actions.LoadSellOpenList({ token: token, id: props.params.id, area_id: newData[0].value, sell_open_id: state.saleOpenStatus.value }));
        }
    }, [dataCart.Filter_Project_Area])

    useEffect(() => {
        let newData = [];
        let data = dataCart.Filter_Open_Sale;
        if (data.length > 0) {
            data.map((item) => newData.push(createData(item.id, item.name)))
            setState({ ...state, dataSaleOpen: newData, saleOpenStatus: newData[0] })
            dispatch(actions.LoadSellOpenCart({ token: token, id: props.params.id, sell_open_id: newData[0].value, block_id: state.FilterBlockStatus.value, floor_or_lot_id: state.FilterFloorStatus.value }));
            dispatch(actions.LoadFilterFloor({ token: token, id: props.params.id, sell_open_id: newData[0].value }));
            dispatch(actions.LoadFilterBlock({ token: token, id: props.params.id, sell_open_id: newData[0].value }));
            dispatch(actions.LoadSellOpenList({ token: token, id: props.params.id, area_id: state.areaStatus.value, sell_open_id: newData[0].value }));
            dispatch(actions.LoadFilterArea({ token: token, id: props.params.id, sell_open_id: newData[0].value }));
        }

    }, [dataCart.Filter_Open_Sale])

    useEffect(() => {
        let data = dataCart.Filter_Floor;
        let newData = []
        if (data.length > 0) {
            data.map((item) => newData.push(createData(item.floor_or_lot_id, item.floor_or_lot_name)))
            setState({ ...state, dataFilterFloor: newData })
        }
    }, [dataCart.Filter_Floor])

    useEffect(() => {
        let data = dataCart.Filter_Block;
        let newData = []
        if (data.length > 0) {
            data.map((item) => {
                newData.push(createData(item.block_id, item.block_name))
            })
            setState({ ...state, dataFilterBlock: newData })
        }
    }, [dataCart.Filter_Block])

    const onFilterArea = (value) => {
        setState({ ...state, areaStatus: value })
        dispatch(actions.LoadSellOpenList({ token: token, id: props.params.id, area_id: value.value }));
    }

    const onFilteSaleOpen = (value) => {
        setState({ ...state, saleOpenStatus: value })
        dispatch(actions.LoadSellOpenCart({ token: token, id: props.params.id, sell_open_id: value.value, block_id: state.FilterBlockStatus.value, floor_or_lot_id: state.FilterFloorStatus.value }));
        dispatch(actions.LoadFilterBlock({ token: token, id: props.params.id, sell_open_id: value.value, area_id: state.FilterAreaStatus.value }));
        dispatch(actions.LoadFilterFloor({ token: token, id: props.params.id, sell_open_id: value.value, area_id: state.FilterAreaStatus.value }));
        dispatch(actions.LoadFilterArea({ token: token, id: props.params.id, sell_open_id: value.value }));
    }

    const onChangeArea = (value) => {
        for (let i in state.dataArea) {
            if (state.dataArea[i].value == value) {
                setState({ ...state, FilterAreaStatus: state.dataArea[i] })
                break
            }
        }
        dispatch(actions.LoadFilterBlock({ token: token, id: props.params.id, sell_open_id: state.saleOpenStatus.value, area_id: value }));
        dispatch(actions.LoadFilterFloor({ token: token, id: props.params.id, sell_open_id: state.saleOpenStatus.value, area_id: value }));
    }
    const onChangeBlock = (value) => {

        for (let i in state.dataFilterBlock) {
            if (state.dataFilterBlock[i].value == value) {
                setState({ ...state, FilterBlockStatus: state.dataFilterBlock[i] })
            }
        }
    }
    const onChangeFloor = (value) => {
        for (let i in state.dataFilterFloor) {
            if (state.dataFilterFloor[i].value == value) {
                setState({ ...state, FilterFloorStatus: state.dataFilterFloor[i] })
            }
        }
    }
    const ONSEARCH = () => {
        dispatch(actions.LoadSellOpenCart({
            token: token,
            id: props.params.id,
            sell_open_id: state.saleOpenStatus.value,
            block_id: state.FilterBlockStatus.value,
            floor_or_lot_id: state.FilterFloorStatus.value
        }));

    }

    return (
        [<div className="row mt-3">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex flex-column">
                <CardHeader label="PROJECT INFORMATION" />
                <Item.Detail_info data={dataCart.Detail} />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex flex-column">
                <CardHeader label="STATISTICS OF OPEN SALE" />
                <Item.Detail_progress data={dataCart.Detail} dataSellOpen={dataCart.Sell_Open} />
            </div>
        </div>,
        <div>
            <CardHeader label="LIST OF AREAS" dropdown={{ title: state.areaStatus.label, data: state.dataArea }} onClick={(value) => onFilterArea(value)} />
            <Item.Detail_content data={dataCart.Sell_Open_Floor} floorData={state.dataFilterFloor} />
        </div>,
        <div>
            <CardHeader label="Basket details" dropdown={{ title: state.saleOpenStatus.value == "" ? "Tất cả" : state.saleOpenStatus.label, data: state.dataSaleOpen }} onClick={(value) => onFilteSaleOpen(value)} />
            <Item.Detail_InfoShipping
                STATE={{ state, setState }}
                onChangeArea={(value) => onChangeArea(value)}
                onChangeFloor={(value) => onChangeFloor(value)}
                onChangeBlock={(value) => onChangeBlock(value)}
                onSearch={() => ONSEARCH()}
                {...props}
            // data={dataCart.Sell_Open_Cart}
            // dropdownFloor={{ value: "", data: state.dataSaleOpen }}
            // onFilterFloor={(value) => console.log(value)}
            />
        </div>]
    )
}
export default Edit;