/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { Select } from "../../../../../components/base"
import ModalRequest from "../modal/ModalRequest"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { isProductStatus, isProductType, isProductColor, formatCurrency, translate } from "../../../../../utils/Utils"
import { CardNodata, Loading } from "../../../../../components/common";

const InfoShipping = props => {
    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    let { STATE, loading } = props;
    let { state, setState } = STATE
    const [click, setClick] = useState([]);
    const [show, setShow] = useState({
        Show_request: false,
        Show_requirements: false,
        Show_contract: false,
        Show_return: false,
        value: null
    })
    const dataCart = useSelector(state => state.cart);
    useEffect(() => {
        if (dataCart.Sell_Open_Cart.length > 0) {
            let arr = [];
            for (let i in dataCart.Sell_Open_Cart) {
                let arrPopup = []
                for (let j in dataCart.Sell_Open_Cart[i].product_list) {
                    arrPopup.push({ popup_status: false })
                }
                arr.push({ id: i, status: "", popup: arrPopup })
            }
            setClick(arr)
        }
    }, [dataCart.Sell_Open_Cart])

    const ONCLICK = (target, index) => {
        let newData = [].concat(click);
        if (target.className.indexOf('la-plus-circle') > -1) {
            newData[index] = { id: index, status: "active", popup: newData[index].popup }
            target.className = "icon icon_collapse las la-minus-circle"
        }
        else { target.className = "icon icon_collapse las la-plus-circle"; newData[index] = { id: index, status: "", popup: newData[index].popup } }
        setClick(newData)
    }

    const showPopUP = (index, i) => {
        let newData = [].concat(click);
        for (let j in newData[index].popup) {
            if (i == j) {
                newData[index].popup[j].popup_status = !newData[index].popup[j].popup_status
            }
            else {
                newData[index].popup[j].popup_status = false
            }
        }
        setClick(newData)
    }

    const renderPopUp = (value) => {
        return (
            <div className="dropdown-menu show" x-placement="top-start" style={{ position: 'absolute', transform: 'translate3d(-183px, -150px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                <a className="dropdown-item" data-toggle="modal" data-target="#createRequest" onClick={() => setShow({ ...show, Show_request: true, value: value })}>
                    <i className="icon-dropdown las la-question-circle" /><Trans>create_request</Trans></a>

                <Link to={'/perm/project/' + value.product_id}
                    className="dropdown-item"
                >
                    <i className="icon-dropdown las la-list-alt" />
                    <Trans>see_requirements</Trans>
                </Link>

                <a className="dropdown-item" onClick={() => setShow({ ...show, Show_contract: true })}>
                    <i className="icon-dropdown las la-plus-square" /><Trans>create_contract</Trans></a>
                <a className="dropdown-item" onClick={() => setShow({ ...show, Show_return: true })} >
                    <i className="icon-dropdown las la-undo" /><Trans>request_return</Trans></a>
            </div>
        )
    }
    const trParent = (data, index) => {
        return (
            <tr key={index + data.floor_or_lot_name + 1} className="parent" data-parent={`row${index}`}>
                <td className="number pl-0">{index + 1}</td>
                <td colSpan={4}>
                    <div className="floor_selected">
                        <div className="floor mi" style={{ minWidth: `70px` }}>{data.floor_or_lot_name}</div>
                        <a className="agency channel uni_text_6d30ab text-underline border-right-0" href="#">
                            {translate("total_product")}: {data.total_product}
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
        )
    }

    const trChild = (item, index) => {
        let arr = [];
        if (item) {
            arr = item.map((value, i) => {
                return <tr key={`${value.product_name} - ${i}`} className={`child child-row${index} ${click.length > 0 ? click[index] && click[index].status : null}`} >
                    <td className={i == item.length - 1 ? "pl-0" : "border-bottom-none pl-0"} colSpan={2}>
                        <a href="#" className="uni_text_e94c4c m_border_e94c4c fw-medium number_circle_top pl-3 pr-3 pt-2 pb-2" data-toggle="modal" data-target="#listProfile">
                            <u>{translate("file_rejected")}</u>
                            <small>{i}</small>
                        </a>
                    </td>
                    <td>
                        <Link to={'/perm/project/' + value.product_id}>
                            <i className="icon las la-sticky-note uni_text_e94c4c icon_total_request">{value.total_request > 0 ? <small>{value.total_request}</small> : null}</i>
                        </Link>
                        <div className="fw-medium uni_text_6d30ab name_apart">{value.product_name}</div>
                        <span className="fw-medium uni_text_000 ">{`[ ${value.architecture_type_name}  | ${value.area_m2_total} m2 ]`}</span>
                    </td>
                    <td>
                        <div
                            className={`sales_status_cart sales_status_cart_2 min-height-40 `}
                            style={{ borderColor: isProductColor(value.product_status), color: isProductColor(value.product_status) }}
                        >{translate(isProductStatus(value.product_status))}</div>
                    </td>
                    <td>
                        {translate(isProductType(value.product_type_id))}
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
                        <div className="form-group max-width-200 mb-0">
                            <input type="text" defaultValue={value.project_sale_policy_name} placeholder="-" disabled className="form-control" />
                        </div>
                    </td>
                    <td>
                        <div className="form-group max-width-200 mb-0">
                            <input type="text" defaultValue={formatCurrency(value.product_price) + value.product_price_unit_name} placeholder="-" disabled className="form-control text-right uni_text_000 " />
                        </div>
                    </td>
                    <td className="text-center">
                        <div className="d-flex justify-content-between">
                            <i className="icon icon_noti las la-comments"><small>1</small></i>
                            <div className="dropdown">
                                <a type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <i className="icon-dots las la-ellipsis-h" onClick={() => showPopUP(index, i)} />
                                </a>
                                {click[index] ? click[index].popup[i] ? click[index].popup[i].popup_status === true ?
                                    renderPopUp(value)
                                    : null : null : null}
                            </div>
                        </div>
                    </td>
                </tr>
            })
        }
        return arr
    }

    return (
        <div className="card square">
            <div className="card-body m_table--collapse">
                {loading ? <Loading /> : [<p className="mb-4 mt-4 fs-18 uni_text_6d30ab text-uppercase text-center font-weight-bold">{translate("search")}</p>,
                <div className="row mb-4 d-flex justify-content-center">
                    <Select
                        className="col-lg-3 col-md-6 col-sm-12"
                        label="choose_area"
                        placeholder="choose_area"
                        name="status"
                        isClear={state.FilterAreaStatus.value == "" ? true : false}
                        value={state.FilterAreaStatus.value} datas={state.dataArea}
                        onChange={(value) => props.onChangeArea(value)} />
                    <Select
                        className="col-lg-3 col-md-6 col-sm-12"
                        label="choose_block"
                        placeholder="choose_block"
                        name="status"
                        isClear={state.FilterBlockStatus.value == "" ? true : false}
                        value={state.FilterBlockStatus.value} datas={state.dataFilterBlock}
                        onChange={(value) => props.onChangeBlock(value)} />
                    <Select
                        className="col-lg-3 col-md-6 col-sm-12"
                        label="choose_floor"
                        placeholder="choose_floor"
                        name="status" isClear={state.FilterFloorStatus.value == "" ? true : false}
                        value={state.FilterFloorStatus.value} datas={state.dataFilterFloor}
                        onChange={(value) => props.onChangeFloor(value)} />

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="form-group">
                            <label className="invisible d-md-block d-none">button</label>
                            <button type="submit" className="min-width-button btn-uni-purple min-height-40 " onClick={() => props.onSearch()}>
                                {translate("search")}
                            </button>
                        </div>
                    </div>
                </div>,
                <div className="m_table m_table--sales min-width-100-pc">
                    <table>
                        <thead>
                            <tr>
                                <th className="pl-0">{translate("no.")}</th>
                                <th>{translate('floor')}<i className="icon_sort las la-exchange-alt" /></th>
                                <th>{translate("house")}<i className="icon_sort las la-exchange-alt" /></th>
                                <th style={{ width: '10%' }}>{translate("status")}</th>
                                <th style={{ width: '10%' }}>{translate("product_type")}</th>
                                <th style={{ width: '16%' }}>{translate("commission")}</th>
                                <th style={{ width: '20%' }}>{translate("policy_apply")}</th>
                                <th>{translate("price")}</th>
                                <th className="text-center">{translate("note")}</th>
                            </tr>
                        </thead>
                        {/* heading  */}
                        <tbody>
                            {dataCart.Sell_Open_Cart ? dataCart.Sell_Open_Cart.map((data, index) => {
                                return [trParent(data, index), trChild(data.product_list, index)]
                            }) : <CardNodata />}
                        </tbody></table>
                </div>]}
            </div>
            {show.Show_request && <ModalRequest active={show.Show_request} close={() => setShow({ ...show, Show_request: false })} value={show.value} />}
            {show.Show_contract && <div></div>}
            {show.Show_requirements && <div></div>}
            {show.Show_return && <div></div>}
        </div>

    )
}
export default React.memo(InfoShipping);