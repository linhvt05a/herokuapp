import React, { useEffect, useState } from 'react';
import _ from "lodash";
import Map from "../modal/Map";
import Image from "../modal/Image"
import Select from "../../../../../components/base/Select/Select"
import { Trans } from 'react-i18next';

const Content = props => {

    const [state, setState] = useState({
        floor: [],
        Maps: [],
        Marker: 0,
        index: "0",
        zoom: 1.2,
        visiable: true
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
        <div class="card square h-100">
            <div class="card-body sales_list-zone">
                <div class="sales_method_filter mt-2">
                    <div class="item">
                        <div class="name">Tìm kiếm</div>
                        <div class="area">
                            <span class="label">Theo tầng</span>
                            <Select classNameGroup="form-group mb-0" datas={state.floor} value={state.index} onChange={(value) => onFloorChange(value)} />
                        </div>
                        <button type="submit" class="min-width-button min-height-40 btn-uni-purple ml-md-auto ml-0 mr-5"><Trans>Search</Trans></button>
                    </div>
                </div>



                <div class="zone--heading mt-4">TỔNG SỐ CÁC KHU</div>
                {console.log(props.data)}
                {/* <ul class="nav nav-tabs" role="tablist">
                    {state.floor ? state.floor.map((item, index) => (
                        <li class="nav-item" key={item + index} onClick={() => setState({ ...state, index: index })}>
                            <a class={`nav-link ${index == state.index ? 'active' : null}`} data-toggle="tab" >{item}</a>
                        </li>
                    )) : null}
                </ul> */}
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="zone_01">
                        <div class="zone--wrap">
                            <div class="zone--left border-0">
                                {/* <figure class="map"> */}
                                {/* {console.log(state.Maps)} */}
                                {state.Maps[state.index] && <Map data={state.Maps[state.index]} visiable={state.visiable} zoom={state.zoom} />}
                                {/* </figure> */}

                                <figure class="compass"><img src="../../../../../components/images/all/compass.png" alt="" /></figure>
                                <div class="actions">
                                    <a ><i class="icon las la-arrows-alt"></i></a>
                                    <a ><i class="icon las la-plus" onClick={() => setState({ ...state, zoom: state.zoom == 5 ? 5 : state.zoom + 0.2 })}></i></a>
                                    <a ><i class="icon las la-minus" onClick={() => setState({ ...state, zoom: state.zoom == 1.2 ? 1.2 : state.zoom - 0.2 })}></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default React.memo(Content);