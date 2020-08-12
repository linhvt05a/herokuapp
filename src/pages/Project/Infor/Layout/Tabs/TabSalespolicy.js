import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { salepolicyListRequest } from '../../../../../store/action/project';
import { useDispatch, useSelector } from "react-redux";

const TabSalespolicy = (props) => {
    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    let { project_id } = props;
    const dispatch = useDispatch();
    const [click, setClick] = useState([]);
    const salepolicyStore = useSelector(state => state.project);
    useEffect(() => {
        dispatch(salepolicyListRequest({ token: token, project_id: project_id }));
    }, []);

    const salepolicyListSuccess = salepolicyStore.salepolicyList.success;
    const salepolicyListRes = salepolicyListSuccess ? salepolicyStore.salepolicyList.detail : null;

    const showTapsParent = (target, index) => {
        let newData = [].concat(click);
        if (target.className.indexOf('la-plus-circle') > -1) {
            newData[index] = { id: index, status: "active" }
            target.className = "icon icon_collapse las la-minus-circle"
        }
        else { target.className = "icon icon_collapse las la-plus-circle"; newData[index] = { id: index, status: "" } }
        setClick(newData)
    }
    const showTapsChild = (target, index) => {
        let newData = [].concat(click);
        if (target.className.indexOf('la-plus-circle') > -1) {
            newData[index] = { id: index, status: "active" }
            target.className = "icon icon_collapse las la-minus-circle"
        }
        else { target.className = "icon icon_collapse las la-plus-circle"; newData[index] = { id: index, status: "" } }
        setClick(newData)
    }
    const trParent = (data, index) => {
        console.log('parent', data);
        return (
            <tr class="parent" data-parent={`row${index}`} key={index}>
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
                    {   data.status == 1 ? 
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

    const trChild = (data, index, status) => {
        let arr = [];
        console.log('child', data);
        if (data) {
            arr = data.map((item, i) => {
                return [<tr className={`child child-row${index} ${click.length > 0 ? click[index] && click[index].status : null}`} key={i}>
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
                    {   status == 1 ? 
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
                <td class="text-center"><i class="icon icon_collapse las la-plus-circle" onClick={event => showTapsChild(event.target, i)}></i></td>
            </tr>, trChildPath1(item.list_policy_agent, i, status), trChildPath2(item.list_policy_internal, i, status)]
            })
        }
        return arr;
    }

    const trChildPath1 = (data, index, status) => {
        let arr = [];
        console.log('path child 1', data);
        if (data) {
            return <tr className="child active">
                <td className="border-bottom-none"></td>
                <td className="border-bottom-none"></td>
                <td colspan="1" className="pl-0">
                    <div className="floor_selected sales_internal_border">
                        <div className="floor text-uppercase min-width-110 sales_internal_bg">
                            Internal
                        </div>
                        <a className="agency channel min-width-230 sales_internal_text text-underline border-right-0">
                            Total internal units: 0
                        </a>
                    </div>
                </td>
                <td>
                    <a href="#" className="link_href_6d30ab  font-weight-bold">
                        <u> Giang giang</u>
                    </a>
                </td>
                <td>   
                    <span className="text-green-399b54 font-weight-bold">Active</span>
                </td>
                <td>
                    20/07/2020
                </td>
                <td>
                    30/07/2020
                </td>
                <td>
                <span className="d-inline-flex align-items-center justify-content-center m_text_status_3 m_border_status_3 min-height-40 pl-3 pr-3 width-110">
                    Finished
                </span>
                </td>
                <td>
                    <div className="list_icons">
                        <a><i className="icon icon_noti las la-comments"><small></small></i></a>
                    </div>
                </td>
                <td className="text-center">
                </td>
            </tr>
        }
        return arr;
    }

    const trChildPath2 = (data, index, status) => {
        let arr = [];
        console.log('path child 2', data);
        if (data) {
            return <tr className="child active">
                <td className="border-bottom-none"></td>
                <td className="border-bottom-none"></td>
                <td colspan="1" className="pl-0">
                    <div className="floor_selected sales_internal_border">
                        <div className="floor text-uppercase min-width-110 sales_internal_bg">
                            Internal
                        </div>
                        <a className="agency channel min-width-230 sales_internal_text text-underline border-right-0">
                            Total internal units: 0
                        </a>
                    </div>
                </td>
                <td>
                    <a href="#" className="link_href_6d30ab  font-weight-bold">
                        <u>hahaha</u>
                    </a>
                </td>
                <td>   
                    <span className="text-green-399b54 font-weight-bold">Active</span>
                </td>
                <td>
                    20/07/2020
                </td>
                <td>
                    30/07/2020
                </td>
                <td>
                <span className="d-inline-flex align-items-center justify-content-center m_text_status_3 m_border_status_3 min-height-40 pl-3 pr-3 width-110">
                    Finished
                </span>
                </td>
                <td>
                    <div className="list_icons">
                        <a><i className="icon icon_noti las la-comments"><small></small></i></a>
                    </div>
                </td>
                <td className="text-center">
                </td>
            </tr>
        }
        return arr;
    }

    return (
        <div>
            <div className="row">
                <div className="col-12" style={{marginTop: "15px"}}>
                    <h6 className=" mb-1 uni_text_6d30ab text-uppercase">
                        <Trans>DANH SÁCH CÁC CHÍNH SÁCH BÁN HÀNG</Trans>
                    </h6>
                </div>
            </div>
            <div className="m_table m_table--sales min-width-100-pc sales_house-selected">
                <table>
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
                    <tbody style={{maxHeight: "400px"}}>
                        {salepolicyListRes ? salepolicyListRes.map((data, index) => {
                            return [trParent(data, index), trChild(data.list_block, index, data.status)]
                            // return [trParent(data, index), trChild(data.list_block, index, data.status)]
                            // data.list_block ? data.list_block.map((childdata, childindex) => {
                            //     return [trParent(data, index), trChild(data.list_block, index, data.status), trChildPath(childdata.list_policy_agent, childindex)]
                            // }) : null
                        }) : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TabSalespolicy;