import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { Modal, Button } from 'antd';
import { bankingListRequest } from '../../../../../store/action/project';
import { useDispatch, useSelector } from "react-redux";
import Moment from 'moment';

const formatDate = "DD-MM-YYYY";
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
            {data.length != 0 ? 
                <a class="link_href_6d30ab fw-medium" onClick={onClickShowModel}>
                    Danh sách đợt [{data.length}]
                </a>:"-"
            }
            <Modal
                closable={false}
                visible={state.visible}
                footer={null}
                width={700}
                onCancel={() => props.close()}>
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
                                                <td style={{ width: '30%' }} className="col-3">{Moment(item.sell_open_from_date).format(formatDate)}</td>
                                                <td style={{ width: '30%' }} className="col-3">{Moment(item.sell_open_to_date).format(formatDate)}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer pt-0 pb-4 border-0">
                        <button type="button" class="min-width-button min-height-40 btn-uni-exit btn-uni-exit-modal" data-dismiss="modal" aria-label="Close" onClick={closePopup}>Close</button>
                    </div>
                </div>
            </Modal>
        </td>
    )
}

export default TabBanking;