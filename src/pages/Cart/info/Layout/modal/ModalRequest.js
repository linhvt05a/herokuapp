import React, { useState, useEffect } from "react";
import { withTranslation, Trans } from "react-i18next";
import { Modal, Select } from "antd";
import { CardHeader } from "../../../../../components/common";
import { mappingListToSelectList, InputText } from "../../../../../components/input";
import InputSelect from "../../../../../components/base/Select/Select";
import { CUSTOMER_REQUEST_TYPE_COMMISSION, CUSTOMER_REQUEST_TYPE_PROMOTION, CUSTOMER_REQUEST_PRIORITY_HIGH,
    CUSTOMER_REQUEST_PRIORITY_MID, CUSTOMER_REQUEST_PRIORITY_LOW } from '../../../../../constant';
import { promotionListRequest, promotionProductRequest } from '../../../../../store/action/requestCart';
import { useDispatch, useSelector } from "react-redux";
import Input from '../../../../../components/base/Input/Input';

const { Option } = Select;
const selectOption = (
    <Select defaultValue={1} className="select-before">
        <Option value={1}>vnd</Option>
        <Option value={2}>usd</Option>
    </Select>
);

const priority = [
    CUSTOMER_REQUEST_PRIORITY_HIGH,
    CUSTOMER_REQUEST_PRIORITY_MID,
    CUSTOMER_REQUEST_PRIORITY_LOW
];

const request = [
    CUSTOMER_REQUEST_TYPE_COMMISSION,
    CUSTOMER_REQUEST_TYPE_PROMOTION
]

const ModalRequest = (props) => {
    const [state, setState] = useState({
        request_select: 0,
        ranger_status: 1
    })
    const { value, t } = props
    const dispatch = useDispatch();
    const token = "MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ="

    const res = useSelector(state => state.request_cart);
    const isGetRequestDataSuccess = res.requestData.success;
    const requestDataRes = isGetRequestDataSuccess ? res.requestData.detail : null;
    const isGetPromotionListSuccess = res.promotionList.success;
    const promotionListRes = isGetPromotionListSuccess ? mappingListToSelectList(res.promotionList.detail, 'promotion_id', 'promotion_name') : null;
    const isGetPromotionProductSuccess = res.promotionProduct.success;
    const promotionProductRes = isGetPromotionProductSuccess ? res.promotionProduct.detail : null;

    useEffect(() => {
        dispatch(promotionListRequest({ token, product_id: value.product_id }));
    }, []);

    const onChangePromotion = (promotion_id) => {
        dispatch(promotionProductRequest({ token, product_id: value.product_id, promotion_id }));
    }

    const renderDiscount = () => {
        return (
            <div>
                <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2 text-uppercase"><Trans>content</Trans></div>
                    <div className="row">
                        <Input
                            disabled
                            className="col-12 col-sm-6 col-lg-4"
                            label="price"
                            value={value.product_price}
                            addonAfter={selectOption} />
                        <Input
                            disabled
                            className="col-12 col-sm-6 col-lg-4"
                            label="lowest_commission"
                            addonAfter="%" />
                        <Input
                            disabled
                            className="col-12 col-sm-6 col-lg-4"
                            label="highest_commission"
                            addonAfter="%" />
                        <Input
                            disabled
                            className="col-12 col-sm-6 col-lg-4"
                            label="defautl_commission"
                            addonAfter="%" />
                        <Input
                            require
                            placeholder={t("enter")}
                            className="col-12 col-sm-6 col-lg-4"
                            titleClassName="fw-medium m_text_e94c4c"
                            label="request_commission"
                            addonAfter={'%'} />
                        <InputSelect
                            require
                            className="col-12 col-sm-6 col-lg-4" titleClassName="fw-medium m_text_e94c4c"
                            datas={priority} value={state.ranger_status}
                            label="priority" onChange={(value) => setState({ ...state, ranger_status: value })} />
                    </div>
                    <div className="form-group">
                        <label className="fw-medium"><Trans>reason</Trans><span className="uni_star_e94c4c"> *</span></label>
                        <textarea placeholder={t("enter_the_reason")} className="form-control" cols={30} rows={4} />
                    </div>
            </div>
        )
    }
    
    const renderExchange = () => {
        return (
            <div>
                <div className="row">
                    <InputSelect require className="fw-medium col-12 col-md-8" datas={promotionListRes} label="promotion" onChange={(value) => onChangePromotion(value)} />
                    <InputSelect require className="col-12 col-md-4" titleClassName="fw-medium m_text_e94c4c" datas={priority} value={state.ranger_status} label="priority" onChange={(value) => setState({ ...state, ranger_status: value })} />
                </div>
                <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2 text-uppercase"><Trans>promotion_gift</Trans></div>
                <div className="mb-4 m_table m_table--sales table_fixed max-height-100">
                    <table style={{ minWidth: 1035 }}>
                        <thead>
                            <tr>
                                <th style={{ width: '28%' }} className="col-1 pl-0 text-uppercase"><Trans>no.</Trans></th>
                                <th className="col-3 pl-0 text-uppercase"><Trans>content</Trans></th>
                                <th className="col-1 text-uppercase"><Trans>code</Trans></th>
                                <th className="col-2 text-uppercase"><Trans>cost</Trans></th>
                                <th className="col-2 text-uppercase"><Trans>max_conversion</Trans></th>
                                <th style={{ width: '50%' }} className="col-1 text-uppercase"><Trans>request</Trans></th>
                            </tr>
                        </thead>
                        <tbody style={{ maxHeight: 300 }}>
                            {
                                promotionProductRes ? promotionProductRes.map((item, index) => (
                                    <tr key={index}>
                                        <td class="number pl-0">{index + 1}</td>
                                        <td className="pl-0">
                                            <span className="uni_text_6d30ab fw-medium">{item.promotion_detail_name}</span>
                                        </td>
                                        <td>
                                            <span className="m_text_367be3 fw-medium">{item.promotion_detail_code}</span>
                                        </td>
                                        <td>
                                            <div className="form-group mb-0">
                                                <Input
                                                    disabled
                                                    className="text-right"
                                                    value={item.value}
                                                    addonAfter={selectOption} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group mb-0">
                                                <Input
                                                    disabled
                                                    className="text-right"
                                                    value={item.redemption_value}
                                                    addonAfter={selectOption} />
                                            </div>
                                        </td>
                                        <td className="text-center" style={{ width: '8%' }}>
                                            <label className="checkbox-inline">
                                                <input name="checkbox-2" type="checkbox" className="checkbox-custom" />
                                                <span className="checkbox-custom-dummy" />
                                            </label>
                                        </td>
                                    </tr>
                                )) :
                            <tr>
                                <td colspan="7" align="center"><Trans>no_data</Trans></td>
                            </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div className="form-group">
                    <label className="fw-medium"><Trans>reason</Trans><span className="uni_star_e94c4c"> *</span></label>
                    <textarea placeholder={t("enter_the_reason")} className="form-control" cols={30} rows={4} />
                </div>
            </div>
        )
    }

    const renderOther = () => {
        return (
            <div>
                <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2">NỘI DUNG</div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-8">
                        <div className="form-group">
                            <label className="fw-medium">Nội dung<span className="uni_star_e94c4c">*</span> </label>
                            <input type="text" className="form-control" defaultValue="Đề nghị thay đổi chính sách" />
                        </div>
                    </div>
                    <InputSelect className="col-12 col-sm-6 col-lg-4" datas={priority} value={1} label="Độ ưu tiên*" onChange={(value) => setState({ ...state, ranger_status: value })} />
                </div>
                <div className="form-group">
                    <label className="fw-medium">Lý do<span className="uni_star_e94c4c">*</span></label>
                    <textarea placeholder="Nhập lý do " className="form-control" cols={30} rows={4} defaultValue={""} />
                </div>
            </div>
        )
    }

    const renderRequest = () => {
        switch (state.request_select) {
            case 1:
                return renderDiscount();
            case 2:
                return renderExchange();
            case 3:
                return renderOther();
        }
    }

    return (
        <Modal
            closable={false}
            visible={props.active}
            footer={null}
            width={1200}
            onCancel={() => props.close()}>
            <CardHeader label="support_request" />
            <div className="modal-content square">
                <div className="modal-body">
                    <i className="text-note mb-3 mt-3 mt-lg-0"><Trans>note</Trans><span class="uni_star_e94c4c"> (*) </span>: <Trans>request_info</Trans></i>
                    <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2 text-uppercase"><Trans>request</Trans></div>
                    <div className="row">
                        <InputSelect require trans value={state.request_select} isClear={state.request_select != 0 ? false : true} className="col-12 col-md-8" label="request_type" datas={request} placeholder="choose_request_type" onChange={(value) => setState({ ...state, request_select: value })} />
                        <InputText className="col-12 col-md-4" type="text" label={props.value.product_name} disabled />
                    </div>
                    {renderRequest()}
                    <div className=" pt-0 pb-4 border-0 mt-4 text-right" >
                        <button type="button" className="min-width-button min-height-40 btn-uni-exit btn-uni-exit-modal" onClick={props.close} style={{ marginRight: 20 }} ><Trans>close</Trans></button>
                        <button type="submit" className="min-width-button min-height-40 btn-uni-purple"><Trans>update</Trans></button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withTranslation()(ModalRequest);


