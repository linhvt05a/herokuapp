/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import _ from "lodash";
import Map from "../modal/Map";
import Select from "../../../../../components/base/Select/Select";
import Image from "../modal/Image";
import { Trans } from 'react-i18next';
import { CardNodata, Loading } from "../../../../../components/common"
import { translate } from '../../../../../utils/Utils';

const Content = props => {

    const [state, setState] = useState({
        floor: [],
        Maps: [],
        Marker: 0,
        index: "0",
        zoom: 1.2,
        visiable: true,
        valueFilter: "0"
    })
    const createData = (value, label) => {
        return { value, label }
    }

    useEffect(() => {
        let arr = _.groupBy(props.data.floor_or_lot_list, (item) => (item.floor_or_lot_name))
        let newFloor = [];
        for (let i in Object.keys(arr)) {
            newFloor.push(createData(i, Object.keys(arr)[i]))
        }
        setState({ ...state, floor: newFloor, Maps: Object.values(arr), zoom: 1.2 })
    }, [props.data.floor_or_lot_list]);
    const onFloorChange = (value) => {
        if (value !== state.index) {
            setState({ ...state, index: value })
        }
    }

    return (
        <div className="card square h-100">
            <div className="card-body sales_list-zone">
                {props.loading ? <Loading /> :
                    [<div className="sales_method_filter mt-2">
                        <div className="item">
                            <div className="name">{translate("search")}</div>
                            <div className="area">
                                <span className="label">Theo tầng</span>
                                <Select classNameGroup="form-group mb-0" datas={state.floor} value={state.valueFilter} onChange={(value) => setState({ ...state, valueFilter: value })} />
                            </div>
                            <button type="submit" className="min-width-button min-height-40 btn-uni-purple ml-md-auto ml-0 mr-5" onClick={() => onFloorChange(state.valueFilter)}><Trans>search</Trans></button>
                        </div>
                    </div>,
                    <div className="zone--heading mt-4">TỔNG SỐ CÁC KHU</div>,
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className={`nav-link active`} data-toggle="tab" >{props.data.block_name}</a>
                        </li>
                        {/* {state.floor ? state.floor.map((item, index) => (
                        <li className="nav-item" key={item + index} onClick={() => setState({ ...state, index: index })}>
                            <a className={`nav-link ${index == state.index ? 'active' : null}`} data-toggle="tab" >{item}</a>
                        </li>
                    )) : null} */}
                    </ul>,
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="zone_01">
                            <div className="zone--wrap">
                                <div className="zone--left border-0">
                                    {state.Maps[state.index] ? <Map data={state.Maps[state.index]} visiable={state.visiable} zoom={state.zoom} /> : <CardNodata />}
                                    {/* <Image /> */}
                                    <figure className="compass"><img src="../../../../../components/images/all/compass.png" alt="" /></figure>
                                    <div className="actions">
                                        <a ><i className="icon las la-arrows-alt"></i></a>
                                        <a ><i className="icon las la-plus" onClick={() => setState({ ...state, zoom: state.zoom == 4 ? 4 : state.zoom + 0.2 })}></i></a>
                                        <a ><i className="icon las la-minus" onClick={() => setState({ ...state, zoom: state.zoom == 1.2 ? 1.2 : state.zoom - 0.2 })}></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>]}
            </div>
        </div >
    )
}

export default Content;