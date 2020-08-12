import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { Modal, Button } from 'antd';
import { bankingListRequest } from '../../../../../store/action/project';
import { useDispatch, useSelector } from "react-redux";

const TabBanking = (props) => {
    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    let { project_id } = props;
    const dispatch = useDispatch();
    const bankingStore = useSelector(state => state.project);
    useEffect(() => {
        dispatch(bankingListRequest({ token: token, project_id: project_id }));
    }, []);

    const bankingListSuccess = bankingStore.bankingList.success;
    const bankingListRes = bankingListSuccess ? bankingStore.bankingList.detail : null;

    return (
        <div>
            {/* <div class="row mt-2 mb-2 pl-3">
                <div class="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                    <div class="form-group mb-0">
                        <label class="fw-medium">Banking name
                            <span class="uni_star_e94c4c">*</span>
                        </label>
                        <select name="bank_name" class="form-control m_select_change js-select2" data-placeholder="Choose banking name" tabindex="-1" aria-hidden="true" data-select2-id="2818">
                            <option value="" data-select2-id="2820"></option>
                            <option value="51">short_name - banking 1</option>
                            <option value="52">short_name - banking 1</option>
                            <option value="58">short_name - banking 1</option>
                            <option value="39">short_name - banking 1</option>
                            <option value="59">short_name - banking 1</option>
                            <option value="60">short_name - banking 1</option>
                            <option value="22">short_name - banking 1</option>
                            <option value="47">ARB - AGRIBANK (Test)</option>
                            <option value="62">short_name - banking 1</option>
                            <option value="64">short_name - banking 1</option>
                            <option value="65">short_name - banking 1</option>
                            <option value="66">short_name - banking 1</option>
                            <option value="68">short_name - banking 1</option>
                            <option value="69">short_name - banking 1</option>
                            <option value="1">short_name - banking 1</option>
                        </select>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12  align-items-end">
                    <button type="button" id="btn-add-bank" class="btn-uni-purple min-height-40" data-href="/backend/project/add_project_bank/" style={{marginTop: "27px"}}>Add</button>
                </div>
            </div> */}

            <div className="row">
                <div className="col-12" style={{marginTop: "15px"}}>
                    <h6 className=" mb-1 uni_text_6d30ab text-uppercase">
                        <Trans>DANH SÁCH NGÂN HÀNG</Trans>
                    </h6>
                </div>
            </div>
            <div class="m_table m_table--sales min-width-100-pc table-height mb-0">
                <table class="table table-sticky-01">
                    <thead>
                        <tr>
                            <th class="pl-0 col-1" style={{width: "5%"}}><Trans>STT</Trans></th>
                            <th class="col-3" style={{width: "25%"}}><Trans>NGÂN HÀNG</Trans></th>
                            <th class="col-2" style={{width: "20%"}}><Trans>TÊN VIẾT TẮT</Trans></th>
                            <th class="col-2" style={{width: "20%"}}><Trans>ĐỢT MỞ BÁN</Trans></th>
                            <th class="col-3" style={{width: "25%"}}><Trans>TRỤ SỞ</Trans></th>
                            <th class="col-1 text-center" style={{width: "5%"}}>
                                <i class="icon las la-cog"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{maxHeight: "400px"}}>
                        {
                            bankingListRes != null ?
                            <RowListBanking data={bankingListRes.banking_project} />
                            : ""
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const RowListBanking = (props) => {
    const { data } = props;
    return (
        data && data.map((item, index) => (
        <tr key={index}>
            <td class="pl-0 col-1" style={{width: "5%"}}>{index + 1}</td>
            <td class="col-3" style={{width: "25%"}}>
                <span class="fw-medium">{item.banking_project_name}
                </span>
            </td>
            <td class="col-2" style={{width: "20%"}}>{item.short_name}</td>
            <ModalListSellOpen data={item.sell_opens} />
            <td class="col-3" style={{width: "25%"}}>{item.bank_full_address}</td>
            <td class="text-center col-1" style={{width: "5%"}}></td>
        </tr>
        ))
    )
}

const ModalListSellOpen = (props) => {
    const { data } = props;
    const [state, setState] = useState({
        visible: false
    });
    const onClickShowModel = () => {
        setState({ ...state, visible: true })
    }
    const closePopup = () => {
        setState({ ...state, visible: false })
    }
    return (
        <td class="col-2" style={{width: "20%"}}>
            <a class="link_href_6d30ab fw-medium" onClick={onClickShowModel}>
                Sell open list [{data.length}]
            </a>
            <Modal 
                visible={state.visible}
                width={700}
                footer={null}
                >
                <div className="m_heading">
                    <button className="m_button no-event"><span><Trans>DANH SÁCH ĐỢT MỞ BÁN</Trans></span></button>
                </div>
                <div className="modal-content square">
                    <div class="modal-body">
                        <div class="m_table m_table--sales min-width-100-pc table_fixed mb-0">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }} className="col-1 pl-0"><Trans>STT</Trans></th>
                                        <th style={{ width: '35%' }} className="col-3 pl-0"><Trans>ĐỢT MỞ BÁN</Trans></th>
                                        <th style={{ width: '30%' }} className="col-3"><Trans>TỪ NGÀY</Trans></th>
                                        <th style={{ width: '30%' }} className="col-3"><Trans>ĐẾN NGÀY</Trans></th>
                                    </tr>
                                </thead>
                                <tbody id="listInternal" style={{ maxHeight: '400px' }}>
                                    {
                                        data && data.map((item, index) => (
                                            <tr key={index}>
                                                <td style={{ width: '10%' }} className="pl-0 col-1">{index + 1}</td>
                                                <td style={{ width: '35%' }} className="col-3">{item.sell_open_name}</td>
                                                <td style={{ width: '30%' }} className="col-3">{item.sell_open_from_date}</td>
                                                <td style={{ width: '30%' }} className="col-3">{item.sell_open_to_date}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer pt-0 pb-4 border-0 mr-3">
                        <button type="button" class="min-width-button min-height-40 btn-uni-exit btn-uni-exit-modal" data-dismiss="modal" aria-label="Close" onClick={closePopup}>Close</button>
                    </div>
                </div>
            </Modal>
        </td>
    )
}

export default TabBanking;