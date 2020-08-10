import React from 'react';
import { Trans } from 'react-i18next';

const TabSalespolicy = () => {
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
                        <tr class="parent" data-parent="row-262">
                            <td class="number pl-0">1</td>
                            <td colspan="2" class="pl-0">
                                <div class="floor_selected">
                                    <div class="floor text-uppercase min-width-110">Sell open 1</div>
                                    <a class="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                        Total number of distribution units: 1
                                    </a>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                                20/07/2020
                            </td>
                            <td>
                                30/07/2020
                            </td>
                            <td>
                                <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                                    Opening
                                </span>
                            </td>
                            <td></td>
                            <td class="text-center">
                                <i class="icon icon_collapse las la-plus-circle"></i>
                            </td>
                        </tr>
                    {/* <tr class="parent child child-row-262" data-child="row-262" data-parent-two="row-262-1871" data-parent="row-262-1871">
                        <td class="border-bottom-none"></td>
                        <td colspan="2" class="pl-0">
                            <div class="min-height-40 block-name">
                                Diamon
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            20/07/2020
                        </td>
                        <td>
                            30/07/2020
                        </td>
                        <td>
                            <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                                Opening
                            </span>
                        </td>
                        <td></td>
                        <td class="text-center">
                            <i class="icon icon_collapse las la-plus-circle"></i>
                        </td>
                    </tr> */}
                    {/* nội bộ */}
                    {/* <tr class="child child-row-262-1871" data-child="row-262" data-parent="row-262-1871-2">
                        <td class="border-bottom-none"></td>
                        <td class="border-bottom-none"></td>
                        <td colspan="1" class="pl-0">
                            <div class="floor_selected sales_internal_border">
                                <div class="floor text-uppercase min-width-110 sales_internal_bg">
                                    Internal
                                </div>
                                <a class="agency channel min-width-230 sales_internal_text text-underline border-right-0">
                                    Total internal units: 0
                                </a>
                            </div>
                        </td>
                        <td>
                            <span class="uni_text_6d30ab">-</span>
                        </td>
                        <td></td>
                        <td>
                            20/07/2020
                        </td>
                        <td>
                            30/07/2020
                        </td>
                        <td>
                            <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                                Opening
                            </span>
                        </td>
                        <td>
                            <div class="list_icons">
                                <a ref="comment" title="Note">
                                    <i class="icon icon_noti las la-comments">
                                        <small></small>
                                    </i>
                                </a>
                            </div>
                        </td>
                        <td class="text-center"></td>
                    </tr> */}
                    {/* nội bộ -- child
                    dai ly */}
                    {/* <tr class="child child-row-262-1871" data-child="row-262" data-parent="row-262-1871-1">
                        <td class="border-bottom-none"></td>
                        <td class="border-bottom-none"></td>
                        <td colspan="1" class="pl-0">
                            <div class="floor_selected sales_agency_border">
                                <div class="floor text-uppercase min-width-110 sales_agency_bg">
                                    Agent
                                </div>
                                <a class="agency channel min-width-230 sales_agency_text text-underline border-right-0">
                                    Total internal units: 0
                                </a>
                            </div>
                        </td>
                        <td>
                            <span class="uni_text_6d30ab">-</span>
                        </td>
                        <td></td>
                        <td>
                            20/07/2020
                        </td>
                        <td>
                            30/07/2020
                        </td>
                        <td>
                            <span class="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                                Opening
                            </span>
                        </td>
                        <td>
                            <div class="list_icons">
                                <a ref="comment" title="Note">
                                    <i class="icon icon_noti las la-comments">
                                        <small></small>
                                    </i>
                                </a>
                            </div>
                        </td>
                        <td class="text-center"></td>
                    </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TabSalespolicy;