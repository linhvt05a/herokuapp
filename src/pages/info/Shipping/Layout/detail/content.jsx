import React, { useEffect, useState } from 'react';
import _ from "lodash";
import Map from "../modal/Map";
import { Select } from "antd"

const Content = props => {
    const { Option } = Select
    const [state, setState] = useState([])
    useEffect(() => {
        let arr = _.groupBy(props.data.floor_or_lot_list, (item) => (item.floor_or_lot_name))
        setState(arr)
    }, [props.data.floor_or_lot_list])
    return (
        <div class="card square h-100">
            <div class="card-body sales_list-zone">
                <div class="sales_method_filter mt-2">
                    <div class="item">
                        <div class="name">Tìm kiếm</div>
                        <div class="area">
                            <span class="label">Theo tầng</span>
                            <div class="form-group mb-0">
                                <Select
                                    defaultValue={{ value: '2' }}
                                    labelInValue
                                >
                                    <Select.Option value="1">-</Select.Option>
                                    <Select.Option value="2">B6</Select.Option>
                                    <Select.Option value="3">Căn hộ</Select.Option>
                                    <Select.Option value="4">Shop house</Select.Option>
                                </Select>
                                {/* <select name="" id="" class="form-control m_select_change js-select2" data-placeholder="-">
                                    <option value="1">-</option>
                                    <option value="2" selected>B6</option>
                                    <option value="3">Căn hộ</option>
                                    <option value="4">Shop house</option>
                                </select> */}
                            </div>
                        </div>
                        <button type="submit" class="min-width-button min-height-40 btn-uni-purple ml-md-auto ml-0 mr-5">Cập nhật</button>
                    </div>
                </div>



                <div class="zone--heading mt-4">TỔNG SỐ CÁC KHU</div>

                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#zone_01">Khu F</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#zone_02">Khu E</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#zone_03">Khu D</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#zone_04">Khu C</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#zone_05">Khu B</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#zone_06">Khu A</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="zone_01">
                        <div class="zone--wrap">
                            <div class="zone--left border-0">
                                <figure class="map">
                                    <Map data={state} />
                                </figure>
                                <div class="form-group">
                                    <Select
                                        style={{ backgroundColor: "red", borderWidth: `1px`, padding: 0 }}
                                        defaultActiveFirstOption
                                        defaultValue={{ value: '1' }}
                                        labelInValue
                                        showArrow={false}
                                    >
                                        <Select.Option value="1">Tầng B6 đến tầng B4</Select.Option>
                                        <Select.Option value="2">Tầng B6 đến tầng B1</Select.Option>
                                        <Select.Option value="3">Tầng B6 đến tầng B2</Select.Option>
                                        <Select.Option value="4">Tầng B6 đến tầng B3</Select.Option>
                                    </Select>

                                    {/* <select name="" data-placeholder="-" class="form-control m_select_change js-select2" data-chosen="1">
                                        <option value="1"></option>
                                        <option value="2" selected>Tầng B6 đến tầng B1</option>
                                        <option value="2">Tầng B6 đến tầng B2</option>
                                        <option value="2">Tầng B6 đến tầng B3</option>
                                    </select> */}
                                </div>
                                <figure class="compass"><img src="../../../../../components/images/all/compass.png" alt="" /></figure>
                                <div class="actions">
                                    <a href="#"><i class="icon las la-arrows-alt"></i></a>
                                    <a href="#"><i class="icon las la-plus"></i></a>
                                    <a href="#"><i class="icon las la-minus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default React.memo(Content);