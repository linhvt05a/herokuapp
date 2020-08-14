import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { salepolicyListRequest } from '../../../../../store/action/project';
import { useDispatch, useSelector } from "react-redux";

const TabSalespolicy = (props) => {
    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    let { project_id } = props;
    const dispatch = useDispatch();
    const [click, setClick] = useState([]);
    const [clickChild, setClickChild] = useState([]);
    const salepolicyStore = useSelector(state => state.project);
    useEffect(() => {
        dispatch(salepolicyListRequest({ token: token, project_id: project_id }));
    }, []);

    const salepolicyListSuccess = salepolicyStore.salepolicyList.success;
    const salepolicyListRes = salepolicyListSuccess ? salepolicyStore.salepolicyList.detail : null;

    const showTapsParent = (target, index) => {
        let newData = [].concat(click);
        if (target.className.indexOf('la-plus-circle') > -1) {
            newData[index] = { id: index, status: "active", child: { id: "", status: "", type: ""} }
            target.className = "icon icon_collapse las la-minus-circle"
        }
        else { target.className = "icon icon_collapse las la-plus-circle"; newData[index] = { id: index, status: "" } }
        console.log(newData);
        setClick(newData)
    }
    const showTapsChild = (target, index, indexParent) => {

        let newData = [].concat(click);
        if (target.className.indexOf('la-plus-circle') > -1) {
            newData[indexParent] = { id: indexParent, status: "active", child: { id: index, status: "active" } }
            target.className = "icon icon_collapse las la-minus-circle"
        }
        else { target.className = "icon icon_collapse las la-plus-circle"; newData[indexParent] = { id: indexParent, status: "active", child: { id: index, status: "" } } }
        setClick(newData)
    }
    const showTapsChildPath = (target, indexParent, index, type_distribute) => {
        let newData = [].concat(click);
        if (target.className.indexOf('la-angle-down') > -1) {
            newData[indexParent] = { 
                id: indexParent, status: "active", child: { id: index, status: "active", type: type_distribute }
                // id: indexParent, status: "active", 
                // child: { 
                //     id: index, status: "active", 
                //     childPath:{
                //         id: index, status: "active", type: type_distribute
                //     }
                // } 
            }
            target.className = "icon icon_collapse angle las la-angle-up"
        }
        else { 
            target.className = "icon icon_collapse angle las la-angle-down"; 
            newData[indexParent] = { 
                id: indexParent, status: "active", child: { id: index, status: "active", type: "" }
                // id: indexParent, status: "active", 
                // child: { 
                //     id: index, status: "active", 
                //     childPath:{
                //         id: index, status: "active", type: ""
                //     }
                // } 
            }
        }
        setClick(newData)
        console.log('child path', target, index, indexParent, type_distribute, newData);

        
    }

    console.log('ifiifiifif', click);
    const trParent = (data, index) => {
        // console.log(`parent${index}`, data);
        return (
            <tr class="parent" data-parent={`row-${data.id}`} key={index}>
                <td class="number pl-0">{index + 1}</td>
                <td colspan="2" class="pl-0">
                    <div class="floor_selected">
                        <div class="floor text-uppercase min-width-110">{data.name}</div>
                        <a class="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                            <Trans>Total number of distribution units:</Trans> {data.total_agent_distribute + data.total_internal_distribute}
                        </a>
                    </div>
                </td>
                <td></td>
                <td></td>
                <td>{data.sell_open_date}</td>
                <td>{data.sell_end_date}</td>
                <td>
                    {data.status == 1 ?
                        <span class="d-inline-flex align-items-center justify-content-center m_text_status_1 m_border_status_1 min-height-40 pl-3 pr-3 width-110">
                            <Trans>Expect</Trans>
                        </span>
                        : data.status == 2 ?
                            <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                                <Trans>Opening</Trans>
                            </span>
                            : data.status == 3 ?
                                <span class="d-inline-flex align-items-center justify-content-center m_text_status_3 m_border_status_3 min-height-40 pl-3 pr-3 width-110">
                                    <Trans>Finished</Trans>
                                </span>
                                : ""
                    }
                </td>
                <td></td>
                <td class="text-center">
                    <i class="icon icon_collapse las la-plus-circle" onClick={event => showTapsParent(event.target, index)}></i>
                </td>
            </tr>
        )
    }

    const trChild = (data, parentId, index, status) => {
        let arr = [];
        console.log(`child${index}`, data);
        if (data) {
            arr = data.map((item, i) => {
                return [<tr className={`parent child child-row-${parentId} ${click.length > 0 ? click[index] && click[index].status : null}`} key={i}
                    data-child={`row-${parentId}`} data-parent-two={`row-${parentId}-${item.block_id}`} data-parent={`row-${parentId}-${item.block_id}`}>
                    <td class="border-bottom-none"></td>
                    <td colspan="2" class="pl-0">
                        <div class="min-height-40 block-name">
                            {item.block_name}
                        </div>
                    </td>
                    <td>
                    </td>
                    <td></td>
                    <td>{item.sell_open_date}</td>
                    <td>{item.sell_end_date}</td>
                    <td>
                        {status == 1 ?
                            <span class="d-inline-flex align-items-center justify-content-center m_text_status_1 m_border_status_1 min-height-40 pl-3 pr-3 width-110">
                                <Trans>Expect</Trans>
                            </span>
                            : status == 2 ?
                                <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                                    <Trans>Opening</Trans>
                                </span>
                                : status == 3 ?
                                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_3 m_border_status_3 min-height-40 pl-3 pr-3 width-110">
                                        <Trans>Finished</Trans>
                                    </span>
                                    : ""
                        }
                    </td>
                    <td></td>
                    <td class="text-center"><i class="icon icon_collapse las la-plus-circle" onClick={event => showTapsChild(event.target, i, index)}></i></td>
                </tr>,
                trChildPath1(item.list_policy_internal, parentId, item.block_id, item.distribution_type_internal_id, i, status, index, item.block_total_internal_distribute),
                trChildPath2(item.list_policy_agent, parentId, item.block_id, item.distribution_type_agent_id, i, status, index, item.block_total_agent_distribute)
                ]
            })
        }
        return arr;
    }

    const trChildPath1 = (data, parentId, block_id, type_id, index, status, indexParent, totaldistribute) => {
        let arr = [];
        if (data) {
            return [<tr className={`child child-row-${parentId}-${block_id} ${click[indexParent] && click[indexParent].child && click[indexParent].child.id == index ? click[indexParent].child.status : null}`}
                data-child={`row-${parentId}`} data-parent={`row-${parentId}-${block_id}-${type_id}`}>
                <td className="border-bottom-none"></td>
                <td className="border-bottom-none"></td>
                <td colspan="1" className="pl-0">
                    <div className="floor_selected sales_internal_border">
                        <div className="floor text-uppercase min-width-110 sales_internal_bg">
                            Internal
                        </div>
                        <a className="agency channel min-width-230 sales_internal_text text-underline border-right-0">
                            Total internal units: {totaldistribute}
                        </a>
                    </div>
                </td>
                <td>
                    {data.policy_internal_active_flag != null ?
                    <a href="#" className="link_href_6d30ab  font-weight-bold">
                        <u>{data.policy_internal_name}</u>
                    </a>: <span class="uni_text_6d30ab">-</span>
                    }
                </td>
                <td>
                    {
                        data.policy_internal_active_flag == true ?
                        <span className="text-green-399b54 font-weight-bold">Active</span>
                        : <span className="text-green-399b54 font-weight-bold"></span>
                    }
                </td>
                <td>{data.sell_open_date}</td>
                <td>{data.sell_end_date}</td>
                <td>
                {status == 1 ?
                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_1 m_border_status_1 min-height-40 pl-3 pr-3 width-110">
                        <Trans>Expect</Trans>
                    </span>
                : status == 2 ?
                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                        <Trans>Opening</Trans>
                    </span>
                : status == 3 ?
                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_3 m_border_status_3 min-height-40 pl-3 pr-3 width-110">
                        <Trans>Finished</Trans>
                    </span>
                    : ""
                }
                </td>
                <td>
                    <div className="list_icons">
                        <a><i className="icon icon_noti las la-comments"><small></small></i></a>
                    </div>
                </td>
                <td className="text-center">
                    {data.list_internal.length != 0 ?
                        <i class="icon icon_collapse angle las la-angle-down" onClick={event => showTapsChildPath(event.target, index, indexParent, type_id)}></i>
                    : ''
                    }
                </td>
            </tr>,
            data.list_internal.length != 0 ?
            trChildPathEnd(data.list_internal, parentId, block_id, type_id, index, status, indexParent, totaldistribute): ""]
        }
        return arr;
    }

    const trChildPath2 = (data, parentId, block_id, type_id, index, status, indexParent, totaldistribute) => {
        let arr = [];
        if (data) {
            return [<tr className={`child child-row-${parentId}-${block_id} ${click[indexParent] && click[indexParent].child && click[indexParent].child.id == index ? click[indexParent].child.status : null}`}
                    data-child={`row-${parentId}`} data-parent={`row-${parentId}-${block_id}-${type_id}`}>
                <td className="border-bottom-none"></td>
                <td className="border-bottom-none"></td>
                <td colspan="1" className="pl-0">
                    <div class="floor_selected sales_agency_border">
                        <div class="floor text-uppercase min-width-110 sales_agency_bg">
                            Agent
                        </div>
                        <a class="agency channel min-width-230 sales_agency_text text-underline border-right-0">
                            Total agent units: {totaldistribute}
                        </a>
                    </div>
                </td>
                <td>
                    {data.policy_agent_active_flag != null ?
                    <a href="#" className="link_href_6d30ab  font-weight-bold">
                        <u>{data.policy_agent_name}</u>
                    </a>: <span class="uni_text_6d30ab">-</span>
                    }
                </td>
                <td>
                    {
                        data.policy_agent_active_flag == true ?
                        <span className="text-green-399b54 font-weight-bold">Active</span>
                        : <span className="text-green-399b54 font-weight-bold"></span>
                    }
                </td>
                <td>{data.sell_open_date}</td>
                <td>{data.sell_end_date}</td>
                <td>
                {status == 1 ?
                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_1 m_border_status_1 min-height-40 pl-3 pr-3 width-110">
                        <Trans>Expect</Trans>
                    </span>
                : status == 2 ?
                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                        <Trans>Opening</Trans>
                    </span>
                : status == 3 ?
                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_3 m_border_status_3 min-height-40 pl-3 pr-3 width-110">
                        <Trans>Finished</Trans>
                    </span>
                    : ""
                }
                </td>
                <td>
                    <div className="list_icons">
                        <a><i className="icon icon_noti las la-comments"><small></small></i></a>
                    </div>
                </td>
                <td className="text-center">
                    {data.list_agent.length != 0 ?
                        <i class="icon icon_collapse angle las la-angle-down" onClick={event => showTapsChildPath(event.target, index, indexParent, type_id)}></i>
                    : ''
                    }
                </td>
            </tr>, 
            data.list_agent.length != 0 ?
            trChildPathEnd(data.list_agent, parentId, block_id, type_id, index, status, indexParent, totaldistribute): ""]
        }
        return arr;
    }
    // <tr className={`child child-row-${parentId}-${block_id}-${type_id} 
    //         ${click[i] && click[i].child && click[i].child.id == index && click[i].child.type == type_id ? click[i].child.status : null}`}
    //         data-child-two={`row-${parentId}-${block_id}`} data-child={`row-${parentId}`} ></tr>
    const trChildPathEnd = (data, parentId, block_id, type_id, index, status, indexParent, totaldistribute) => {
        let arr = [];
        
        if (data) {
            arr = data.map((item, i) => {
            return <tr class={`child child-row-${parentId}-${block_id}-${type_id} 
            ${click[indexParent] && click[indexParent].child && click[indexParent].child.id == index && click[indexParent].child.type == type_id ? click[indexParent].child.status : null}`}>
                <td class="border-bottom-none"></td>
                <td class="border-bottom-none"></td>
                <td colspan="1" class="pl-0">
                    {item.customer_name}
                </td>
                <td>
                    {item.policy_active_flag != null ?
                    <a href="#" target="_blank" class="link_href_6d30ab font-weight-bold">
                        <u>{item.policy_name}</u>
                    </a>: <span class="uni_text_6d30ab">-</span>
                    }
                </td>
                <td>   
                {
                    data.policy_active_flag == true ?
                    <span className="text-green-399b54 font-weight-bold">Active</span>
                    : <span className="text-green-399b54 font-weight-bold"></span>
                }
                </td>
                <td>{item.sell_open_date}</td>
                <td>{item.sell_end_date}</td>
                <td>
                {status == 1 ?
                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_1 m_border_status_1 min-height-40 pl-3 pr-3 width-110">
                        <Trans>Expect</Trans>
                    </span>
                : status == 2 ?
                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                        <Trans>Opening</Trans>
                    </span>
                : status == 3 ?
                    <span class="d-inline-flex align-items-center justify-content-center m_text_status_3 m_border_status_3 min-height-40 pl-3 pr-3 width-110">
                        <Trans>Finished</Trans>
                    </span>
                    : ""
                }
                </td>
                <td></td>
                <td></td>
            </tr>
            })
        }
        return arr;
    }

    return (
        <div>
            <div className="row">
                <div className="col-12" style={{ marginTop: "15px" }}>
                    <h6 className=" mb-1 uni_text_6d30ab text-uppercase">
                        <Trans>DANH SÁCH CÁC CHÍNH SÁCH BÁN HÀNG</Trans>
                    </h6>
                </div>
            </div>
            <div class="m_table m_table--sales min-width-100-pc table-height mb-0">
                <table class="table table-sticky-01">
                    <thead>
                        <tr>
                            <th className="pl-0"><Trans>STT</Trans></th>
                            <th className="pl-0"><Trans>ĐỢT</Trans></th>
                            <th className="pl-0"><Trans>KÊNH PHÂN PHỐI</Trans></th>
                            <th><Trans>CHÍNH SÁCH ÁP DỤNG</Trans></th>
                            <th><Trans>TRẠNG THÁI CS</Trans></th>
                            <th><Trans>TỪ NGÀY</Trans></th>
                            <th><Trans>ĐẾN NGÀY</Trans></th>
                            <th><Trans>TRẠNG THÁI ĐỢT</Trans></th>
                            <th><Trans>GHI CHÚ</Trans></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody style={{ maxHeight: "600px" }}>
                        {salepolicyListRes ? salepolicyListRes.map((data, index) => {
                            return [trParent(data, index), trChild(data.list_block, data.id, index, data.status)]
                        }) : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TabSalespolicy;