/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import InputSelect from '../../../../../components/input/InputSelect';
import { product_type_id, product_status } from "../../../../../constant";
import { Trans } from 'react-i18next';

const InfoShipping = props => {
    // console.log(props.data);
    const [click, setClick] = useState([]);
    useEffect(() => {
        if (props.data.floor_or_lot_list) {
            let arr = []
            for (let i in props.data.floor_or_lot_list) {
                arr.push({ id: i, status: "" })
            }
            setClick(arr)
        }
    }, [props.data.floor_or_lot_list])
    const ONCLICK = (target, index) => {
        let newData = [].concat(click);
        if (target.className.indexOf('la-plus-circle') > -1) {
            newData[index] = { id: index, status: "active" }
            target.className = "icon icon_collapse las la-minus-circle"
        }
        else { target.className = "icon icon_collapse las la-plus-circle"; newData[index] = { id: index, status: "" } }
        setClick(newData)
    }
    const ProductStatus = (value) => {
        for (let i in product_status) {
            if (product_status[i].id == value) {
                return product_status[i].name
            }
        }
    }
    const ProductType = (value) => {
        for (let i in product_type_id) {
            if (product_type_id[i].id == value)
                return product_type_id[i].name;

        }
    }
    return (
        <div className="card square">
            <div className="card-body m_table--collapse">
                <p className="mb-4 mt-4 fs-18 uni_text_6d30ab text-uppercase text-center font-weight-bold">TÌM KIẾM </p>
                <div className="row mb-4 d-flex justify-content-center">
                    <div className="col-lg-6 col-xl-3">
                        <div className="form-group mb-2">
                            <label className="fw-medium">Choose area</label>
                            <select name="area" className="form-control m_select_change js-select2" data-placeholder="Choose area">
                                <option value>Choose area</option>
                                <option value={1} selected="selected">The Evolution test v2</option>
                                <option value={7}>The Elite</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">
                        <div className="form-group mb-2">
                            <label className="fw-medium">Choose block</label>
                            <select name="block" id="block_id" className="form-control m_select_change js-select2" data-placeholder="Choose block">
                                <option value>Choose block</option>
                                <option value={2} selected="selected">A1 (QC  TEST)</option>
                                <option value={8}>B</option>
                                <option value={16}>C</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">
                        <div className="form-group mb-2">
                            <label className="fw-medium">Choose floor or lot</label>
                            <select name="fl_or_l_id" id="floor_or_lot" className="form-control m_select_change js-select2" data-placeholder="Choose floor or lot">
                                <option value data-select2-id={49083}>Choose floor or lot</option>
                                <option value={0}>All</option><option value={3}>Tầng trệt</option>
                                <option value={30}>Tầng 2</option><option value={31}>Tầng 3</option>
                                <option value={32}>Tầng 3A</option><option value={33}>Tầng 5</option>
                                <option value={34}>Tầng 6</option><option value={35}>Tầng 7</option>
                                <option value={36}>Tầng 8</option><option value={37}>Tầng 9</option>
                                <option value={38}>Tầng 10</option>
                                <option value={39}>Tầng 11</option><option value={40}>Tầng 12</option>
                                <option value={41}>Tầng 12A</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-2 align-items-end d-flex mt-3 mt-xl-0  mb-2">
                        <button type="submit" className="min-width-button btn-uni-purple min-height-40 ">
                            Search
        </button>
                    </div>
                </div>
                <div className="m_table m_table--sales min-width-100-pc">
                    <table>
                        <thead>
                            <tr>
                                <th className="pl-0">STT</th>
                                <th>TẦNG<i className="icon_sort las la-exchange-alt" /></th>
                                <th>CĂN HỘ<i className="icon_sort las la-exchange-alt" /></th>
                                <th style={{ width: '10%' }}>TRẠNG THÁI </th>
                                <th style={{ width: '10%' }}>LOẠI SẢN PHẨM</th>
                                <th style={{ width: '16%' }}>HOA HỒNG</th>
                                <th style={{ width: '20%' }}>CHÍNH SÁCH ÁP DỤNG</th>
                                <th>GIÁ BÁN</th>
                                <th className="text-center">GHI CHÚ</th>
                            </tr>
                        </thead>
                        {/* heading  */}
                        <tbody>

                            {props.data.floor_or_lot_list ? props.data.floor_or_lot_list.map((data, index) => {
                                return (
                                    <>
                                        <tr className="parent" data-parent={`row${index}`}>
                                            <td className="number pl-0">{index + 1}</td>
                                            <td colSpan={4}>
                                                <div className="floor_selected">
                                                    <div className="floor mi" style={{ minWidth: `70px` }}>{data.floor_or_lot_name}</div>
                                                    <a className="agency channel uni_text_6d30ab text-underline border-right-0" href="#">
                                                        Tổng số sản phẩm: {data.total_product}
                                                    </a>
                                                </div>
                                            </td>
                                            <td colSpan={3}>
                                                <div className="input-group min-max heading">
                                                    <input className="min form-control" placeholder="Nhập số" defaultValue="min" />
                                                    <i className="icon las la-long-arrow-alt-right" />
                                                    <input className="max form-control" placeholder="Nhập số" defaultValue="max" />
                                                    <div className="input-group-text">%</div>
                                                </div>
                                            </td>
                                            <td className="text-right"><i className="icon icon_collapse las la-plus-circle" onClick={event => ONCLICK(event.target, index)} /></td>
                                        </tr>
                                        {console.log(data)}
                                        <tr className={`child child-row${index} ${click.length > 0 ? click[index].status : null}`} >
                                            {data.product_list.map((item) => {
                                                return (<>
                                                    <td className="border-bottom-none pl-0" colSpan={2}>
                                                        <a href="#" className="uni_text_e94c4c m_border_e94c4c fw-medium number_circle_top pl-3 pr-3 pt-2 pb-2" data-toggle="modal" data-target="#listProfile">
                                                            <u>Hồ sơ bị từ chối</u>
                                                            <small>1</small>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <i className="icon las la-sticky-note uni_text_e94c4c icon_total_request"><small>{item.total_request}</small></i>
                                                        <div className="fw-medium uni_text_6d30ab name_apart">{item.product_name}</div>
                                                        <span className="fw-medium uni_text_000 ">[ - | 120.0 m2 ]</span>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className={`sales_status_cart${item.product_status} sales_status_cart_2 min-height-40`}
                                                        ><Trans>{ProductStatus(item.product_status)}</Trans></div>
                                                    </td>
                                                    <td>
                                                        {ProductType(item.product_type_id)}
                                                    </td>
                                                    <td>
                                                        <div className="input-group min-max">
                                                            <input disabled className="min form-control" placeholder="Nhập số" defaultValue="-" />
                                                            <i className="icon">-</i>
                                                            <input disabled className="max form-control" placeholder="Nhập số" defaultValue="-" />
                                                            <div className="input-group-text">%</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group max-width-200">
                                                            <input type="text" defaultValue={item.project_sale_policy_name} placeholder="-" disabled className="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group max-width-200">
                                                            <input type="text" defaultValue={item.product_price} placeholder="-" disabled className="form-control text-right uni_text_000 " />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-between">
                                                            <i className="icon icon_noti las la-comments"><small>1</small></i>
                                                            <div className="dropdown">
                                                                <a type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                                    <i className="icon-dots las la-ellipsis-h" />
                                                                </a>
                                                                <div className="dropdown-menu" x-placement="top-start" style={{ position: 'absolute', transform: 'translate3d(-183px, -43px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                                                    <a className="dropdown-item" data-toggle="modal" data-target="#createRequest" href="#">
                                                                        <i className="icon-dropdown las la-question-circle" />
Tạo yêu cầu
</a>
                                                                    <a className="dropdown-item" href="#">
                                                                        <i className="icon-dropdown las la-list-alt" />
Xem các yêu cầu
</a>
                                                                    <a className="dropdown-item" href="#">
                                                                        <i className="icon-dropdown las la-plus-square" />
Tạo hợp đồng
</a>
                                                                    <a className="dropdown-item" href="#">
                                                                        <i className="icon-dropdown las la-undo" />
Yêu cầu trả lại
</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </>)
                                            })}
                                        </tr>
                                    </>
                                )
                            }) : null}


                        </tbody></table>
                </div>
            </div>
        </div>

    )
}
export default InfoShipping;