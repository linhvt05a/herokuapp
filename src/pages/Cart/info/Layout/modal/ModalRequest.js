import React, { useState, useEffect } from "react";
import { withTranslation, Trans } from "react-i18next";
import { Modal, Select, Checkbox } from "antd";
import { CardHeader } from "../../../../../components/common";
import { mappingListToSelectList, InputText } from "../../../../../components/input";
import CustomSelect from "../../../../../components/base/Select/Select";
import CustomInput from '../../../../../components/base/Input/Input';
import CustomTextArea from '../../../../../components/base/TextArea/TextArea';
import { CUSTOMER_REQUEST_TYPE_COMMISSION, CUSTOMER_REQUEST_TYPE_PROMOTION, CUSTOMER_REQUEST_PRIORITY_HIGH,
    CUSTOMER_REQUEST_PRIORITY_MID, CUSTOMER_REQUEST_PRIORITY_LOW } from '../../../../../constant';
import { promotionListRequest, promotionProductRequest, requestDataRequest, clearData } from '../../../../../store/action/requestCart';
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from '../../../../../utils/Utils'

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
        request_type: 0,
        value_change: null,
        priority: null,
        reason: "",
        listChangeData: [],
        indexRequestList: []
    })
    const { value, t, showToast } = props;
    const dispatch = useDispatch();
    const token = "MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ="

    const res = useSelector(state => state.request_cart);
    const isGetRequestDataSuccess = res.requestData.success;
    const isGetPromotionListSuccess = res.promotionList.success;
    const promotionListRes = isGetPromotionListSuccess ? mappingListToSelectList(res.promotionList.detail, 'promotion_id', 'promotion_name') : null;
    const isGetPromotionProductSuccess = res.promotionProduct.success;
    const promotionProductRes = isGetPromotionProductSuccess ? res.promotionProduct.detail : null;
    
    useEffect(() => {
        dispatch(promotionListRequest({ token, product_id: value.product_id }));
    }, []);

    useEffect(() => {
        var list = []
        var indexList = []
        if (promotionProductRes && promotionProductRes.length > 0) {
            for (var i = 0; i < promotionProductRes.length; i++) {
                list.push({
                    promotion_detail_id: promotionProductRes[i].promotion_detail_id,
                    values_change: promotionProductRes[i].redemption_value
                })
                indexList.push(false)
            }
        }
        setState({...state, listChangeData: list, indexRequestList: indexList });
    }, [promotionProductRes]);

    useEffect(() => {
        if (isGetRequestDataSuccess) {
            dispatch(clearData())
            setState({
                request_type: 0,
                value_change: null,
                priority: null,
                reason: "",
                listChangeData: [],
                indexRequestList: []
            });
            showToast('success', t("update_successful"));
            props.close();
        }
    }, [isGetRequestDataSuccess]);

    const onChangePromotion = (promotion_id) => {
        dispatch(promotionProductRequest({ token, product_id: value.product_id, promotion_id }));
    }

    const onUpdateData = () => {
        if (state.request_type === 1) {
            dispatch(requestDataRequest({ token, request_type: state.request_type, product_id: value.product_id,
                value_change: parseInt(state.value_change), priority: state.priority, reason: state.reason }));
        } else if (state.request_type === 2) {
            var list_promotion_detail = []
            if (state.indexRequestList && state.indexRequestList.length > 0) {
                for (var i = 0; i < state.indexRequestList.length; i++) {
                    if(state.indexRequestList[i] === true) {
                        list_promotion_detail.push(state.listChangeData[i])
                    }
                }
            }
            if (list_promotion_detail.length > 0) {
                dispatch(requestDataRequest({ token, request_type: state.request_type, product_id: value.product_id,
                    list_promotion_detail: list_promotion_detail, priority: state.priority, reason: state.reason }));
            }
        } else {
            return
        }
    }
    
    const onChangePromotionData = (index, value) => {
        var list = state.listChangeData
        var model = list.find((item, position) => position === index)
        if (model) {
            model.values_change = parseFloat(value)
        }
        setState({...state, listChangeData: list})
    }

    const onChangeCheckData = (index) => {
        var list = state.indexRequestList
        if (list[index] != undefined) {
            list[index] = !list[index]
        }
        setState({...state, indexRequestList: list})
    }

    const renderDiscount = () => {
        return (
            <div>
                <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2 text-uppercase"><Trans>content</Trans></div>
                    <div className="row">
                        <CustomInput
                            disabled
                            className="col-12 col-sm-6 col-lg-4"
                            label="price"
                            value={formatCurrency(value.product_price)}
                            addonAfter={selectOption} />
                        <CustomInput
                            disabled
                            className="col-12 col-sm-6 col-lg-4"
                            label="lowest_commission"
                            addonAfter="%" />
                        <CustomInput
                            disabled
                            className="col-12 col-sm-6 col-lg-4"
                            label="highest_commission"
                            addonAfter="%" />
                        <CustomInput
                            disabled
                            className="col-12 col-sm-6 col-lg-4"
                            label="defautl_commission"
                            addonAfter="%" />
                        <CustomInput
                            require
                            onChange={(value) => setState({ ...state, value_change: value.target.value })}
                            type="number"
                            placeholder={t("enter")}
                            className="col-12 col-sm-6 col-lg-4"
                            titleClassName="fw-medium m_text_e94c4c"
                            label="request_commission"
                            addonAfter={'%'} />
                        <CustomSelect
                            require
                            trans
                            placeholder="choose_the_priority"
                            className="col-12 col-sm-6 col-lg-4" titleClassName="fw-medium m_text_e94c4c"
                            datas={priority}
                            label="priority" onChange={(value) => setState({ ...state, priority: value })} />
                    </div>
                    <div className="form-group">
                        <CustomTextArea
                            require
                            onChange={(value) => setState({ ...state, reason: value.target.value })}
                            placeholder={t("enter_the_reason")}
                            label="reason"
                            cols={30}
                            rows={4} />
                    </div>
            </div>
        )
    }
    
    const renderExchange = () => {
        return (
            <div>
                <div className="row">
                    <CustomSelect require className="fw-medium col-12 col-md-8" placeholder="choose_the_promotion" datas={promotionListRes} label="promotion" onChange={(value) => onChangePromotion(value)} />
                    <CustomSelect require trans className="col-12 col-md-4" placeholder="choose_the_priority" titleClassName="fw-medium m_text_e94c4c" datas={priority} label="priority" onChange={(value) => setState({ ...state, priority: value })} />
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
                                                <CustomInput
                                                    disabled
                                                    className="text-right"
                                                    value={item.value}
                                                    addonAfter={selectOption} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group mb-0">
                                                <CustomInput
                                                    className="text-right"
                                                    type="number"
                                                    name="redemption_value"
                                                    onChange={(value) => onChangePromotionData(index, value.target.value)}
                                                    defaultValue={item.redemption_value}
                                                    addonAfter={selectOption} />
                                            </div>
                                        </td>
                                        <td className="text-center" style={{ width: '8%' }}>
                                            <Checkbox onChange={() => onChangeCheckData(index)} />
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
                    <CustomTextArea
                        require
                        placeholder={t("enter_the_reason")}
                        onChange={(value) => setState({ ...state, reason: value.target.value })}
                        label="reason"
                        cols={30}
                        rows={4} />
                </div>
            </div>
        )
    }

    const renderRequest = () => {
        switch (state.request_type) {
            case 1:
                return renderDiscount();
            case 2:
                return renderExchange();
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
                        <CustomSelect require trans value={state.request_type} isClear={state.request_type != 0 ? false : true} className="col-12 col-md-8"
                            label="request_type" datas={request} placeholder="choose_request_type"
                            onChange={(value) => setState({ ...state, request_type: value, priority: null })} />
                        <InputText className="col-12 col-md-4" type="text" label={props.value.product_name} disabled />
                    </div>
                    {renderRequest()}
                    <div className=" pt-0 pb-4 border-0 mt-4 text-right" >
                        <button type="button" className="min-width-button min-height-40 btn-uni-exit btn-uni-exit-modal" onClick={props.close} style={{ marginRight: 20 }} ><Trans>close</Trans></button>
                        <button type="submit" className="min-width-button min-height-40 btn-uni-purple" onClick={onUpdateData}><Trans>update</Trans></button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withTranslation()(ModalRequest);
