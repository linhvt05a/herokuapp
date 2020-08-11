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
        index: 0,
        width: 50,
        visiable: true
    })
    useEffect(() => {
        let arr = _.groupBy(props.data.floor_or_lot_list, (item) => (item.floor_or_lot_name))
        setState({ ...state, floor: Object.keys(arr), Maps: Object.values(arr) })
    }, [props.data.floor_or_lot_list]);
    const contentDropdown = [
        { href: "#", value: "1", label: "-" },
        { href: "#", value: "2", label: "B6" },
        { href: "#", value: "3", label: "Đang triển khai" },
        { href: "#", value: "4", label: "Căn hộ" },
        { href: "#", value: "5", label: "Shop house" },
    ]
    return (
        <div class="card square h-100">
            <div class="card-body sales_list-zone">
                <div class="sales_method_filter mt-2">
                    <div class="item">
                        <div class="name">Tìm kiếm</div>
                        <div class="area">
                            <span class="label">Theo tầng</span>
                            {/*  <div class="form-group mb-0">
                                <Select
                                    defaultValue={{ value: '2' }}
                                    labelInValue
                                    className="form-control"
                                >
                                    <Option value="1">-</Option>
                                    <Option value="2">B6</Option>
                                    <Option value="3">Căn hộ</Option>
                                    <Option value="4">Shop house</Option>
                                </Select> */}
                            <Select datas={contentDropdown} />
                            {/* <select name="" id="" class="form-control m_select_change js-select2" data-placeholder="-">
                                    <option value="1">-</option>
                                    <option value="2" selected>B6</option>
                                    <option value="3">Căn hộ</option>
                                    <option value="4">Shop house</option>
                                </select> */}
                            {/* </div> */}
                        </div>
                        <button type="submit" class="min-width-button min-height-40 btn-uni-purple ml-md-auto ml-0 mr-5"><Trans>Search</Trans></button>
                    </div>
                </div>



                <div class="zone--heading mt-4">TỔNG SỐ CÁC KHU</div>

                <ul class="nav nav-tabs" role="tablist">
                    {state.floor ? state.floor.map((item, index) => (
                        <li class="nav-item" key={item + index} onClick={() => setState({ ...state, index: index })}>
                            <a class={`nav-link ${index == state.index ? 'active' : null}`} data-toggle="tab" >{item}</a>
                        </li>
                    )) : null}
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="zone_01">
                        <div class="zone--wrap">
                            <div class="zone--left border-0">
                                {/* <figure class="map"> */}
                                {/* <Map data={state.Maps[state.index]} visiable={state.visiable} /> */}
                                <Image data={state.Maps[state.index]} width={`${state.width}%`} />
                                {/* </figure> */}

                                <figure class="compass"><img src="../../../../../components/images/all/compass.png" alt="" /></figure>
                                <div class="actions">
                                    <a ><i class="icon las la-arrows-alt"></i></a>
                                    <a ><i class="icon las la-plus" onClick={() => setState({ ...state, width: state.width == 100 ? 100 : state.width + 10 })}></i></a>
                                    <a ><i class="icon las la-minus" onClick={() => setState({ ...state, width: state.width == 50 ? 50 : state.width - 10 })}></i></a>
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