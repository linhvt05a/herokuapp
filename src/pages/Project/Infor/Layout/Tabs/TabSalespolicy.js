import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { salepolicyListRequest } from '../../../../../store/action/project';
import { useDispatch, useSelector } from "react-redux";

const TabSalespolicy = (props) => {
    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    let { project_id } = props;
    const dispatch = useDispatch();
    const salepolicyStore = useSelector(state => state.project);
    useEffect(() => {
        dispatch(salepolicyListRequest({ token: token, project_id: project_id }));
    }, []);

    const salepolicyListSuccess = salepolicyStore.salepolicyList.success;
    const salepolicyListRes = salepolicyListSuccess ? salepolicyStore.salepolicyList.detail : null;

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
                        {
                            salepolicyListRes != null ?
                            salepolicyListRes && salepolicyListRes.map((item, index) => (
                                <RowListSalePolicy key={index} index={index} data={item} />
                                
                                
                            ))
                            : ""
                        }

                        {/* {
                            item.list_block && item.list_block.map((item, index) => (
                                <RowListSalePolicyChild key={index} data={item} />
                            ))
                        } */}

                        {/* {
                            salepolicyListRes != null ?
                                salepolicyListRes && salepolicyListRes.map((item, index) => (
                                    <RowListSalePolicyChild key={index} data={item.list_block} />
                                ))
                            : ""
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const RowListSalePolicy = (props) => {
    const { data, index } = props;
    const [state, setActive] = useState({
        activetab1 : false,
        activetab2 : false,
    });
    const showTaps = () => {
        setActive({ ...state, activetab1: true })
    }
    console.log('ggggggg', state.activetab1);
    return (
        <tr class="parent" data-parent="row-262">
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
                <i class="icon icon_collapse las la-plus-circle" onClick={showTaps}></i>
            </td>
        </tr>
        // <tr class="child child-row-262-1871" data-child="row-262" data-parent="row-262-1871-1">
        //     <td class="border-bottom-none"></td>
        //     <td class="border-bottom-none"></td>
        //     <td colspan="1" class="pl-0">
        //         <div class="floor_selected sales_agency_border">
        //             <div class="floor text-uppercase min-width-110 sales_agency_bg">
        //                 Agent
        //             </div>
        //             <a class="agency channel min-width-230 sales_agency_text text-underline border-right-0">
        //                 Total internal units: 0
        //             </a>
        //         </div>
        //     </td>
        //     <td>
        //         <span class="uni_text_6d30ab">-</span>
        //     </td>
        //     <td></td>
        //     <td>
        //         20/07/2020
        //     </td>
        //     <td>
        //         30/07/2020
        //     </td>
        //     <td>
        //         <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
        //             Opening
        //         </span>
        //     </td>
        //     <td>
        //         <div class="list_icons">
        //             <a ref="comment" title="Note">
        //                 <i class="icon icon_noti las la-comments">
        //                     <small></small>
        //                 </i>
        //             </a>
        //         </div>
        //     </td>
        //     <td class="text-center"></td>
        // </tr>
    )
}

const RowListSalePolicyChild = (props) => {
    const { data } = props;
    const [state, setActive] = useState({
        activetab : false,
    });
    const showTaps = () => {
        setActive({ ...state, activetab: true })
    }
    console.log('ggggggg', state.activetab, data);
    return (
        data && data.map((item, index) => (
        <tr class="parent child child-row-262 active" data-child="row-262" data-parent-two="row-262-2" data-parent="row-262-2" key={index}>
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
                <span class="d-inline-flex align-items-center justify-content-center m_text_status_3 m_border_status_3 min-height-40 pl-3 pr-3 width-110">
                    Finished
                </span>
            </td>
            <td></td>
            <td class="text-center"><i class="icon icon_collapse las la-plus-circle active" onClick={showTaps}></i></td>
        </tr>
        ))
    )
}

export default TabSalespolicy;