/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import { Trans } from "react-i18next";
import { Modal, Select } from "antd";
import { CardHeader } from "../../../../../components/common";
import { InputSelect, InputText, InputCheckBox } from "../../../../../components/input";
import { CUSTOMER_REQUEST_TYPE_COMMISSION, CUSTOMER_REQUEST_TYPE_PROMOTION, CUSTOMER_REQUEST_PRIORITY_HIGH,
    CUSTOMER_REQUEST_PRIORITY_MID, CUSTOMER_REQUEST_PRIORITY_LOW } from '../../../../../constant';
import { requestDataRequest, promotionListRequest } from '../../../../../store/action/requestCart';
import { useDispatch, useSelector } from "react-redux";
import Input from '../../../../../components/base/Input/Input';

const discountInfo = [
    { value: 1, label: "Giảm trực tiếp từ 100 triệu ngay cho khách hàng mới trong mùa xuân 2021 dành cho loại hình biệt thự" },
]

const { Option } = Select;
const selectOption = (
    <Select defaultValue="vnd" className="select-before">
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

const DialogSalePromotion = (props) => {
    const [state, setState] = useState({
        request_select: 0,
        ranger_status: 1
    })
    const { value } = props
    const dispatch = useDispatch();
    const token = "MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ="

    const res = useSelector(state => state.request_cart);
    const isGetRequestDataSuccess = res.requestData.success;
    const requestDataRes = isGetRequestDataSuccess ? res.requestData.detail : null;
    const isGetPromotionListSuccess = res.promotionList.success;
    const promotionListRes = isGetPromotionListSuccess ? res.promotionList.detail : null;

    useEffect(() => {
        dispatch(promotionListRequest({ token, product_id: value.product_id }));
    }, []);

    console.log("data", promotionListRes)
    const renderDiscount = () => {
        return (
            <div>
                <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2">YÊU CẦU</div>
                <div className="row">
                    <Input
                        disabled
                        className="col-12 col-sm-6 col-lg-4"
                        label="Giá bán"
                        value={value.product_price}
                        addonAfter={selectOption} />
                    <Input
                        disabled
                        className="col-12 col-sm-6 col-lg-4"
                        label="Hoa hồng thấp nhất"
                        addonBefore = {`${value.min_value_percent}%`} />
                    <Input
                        disabled
                        className="col-12 col-sm-6 col-lg-4"
                        label="Hoa hồng cao nhất"
                        addonBefore = {`${value.max_value_percent}%`} />
                    <Input
                        disabled
                        className="col-12 col-sm-6 col-lg-4"
                        label="Hoa hồng mặc định hiện tại"
                        addonBefore = {`${value.default_value_percent}%`} />
                    <Input
                        className="col-12 col-sm-6 col-lg-4"
                        titleClassName="fw-medium m_text_e94c4c"
                        label="Hoa hồng đề nghị*"
                        addonBefore = {`%`} />
                    <InputSelect
                        className="col-12 col-sm-6 col-lg-4" titleClassName="fw-medium m_text_e94c4c"
                        datas={priority} value={state.ranger_status}
                        label="Độ ưu tiên*" onChange={(value) => setState({ ...state, ranger_status: value })} />
                    <div className="form-group w-100">
                        <label className="fw-medium">Lý do<span className="uni_star_e94c4c">*</span></label>
                        <textarea placeholder="Nhập lý do" className="form-control" cols={30} rows={4} defaultValue={""} />
                    </div>
                </div>
            </div>
        )
    }

    const renderExchange = () => {
        return (
            <div>
                <div className="row">
                    <InputSelect className="fw-medium col-12 col-md-8" datas={discountInfo} value={1} label="Chương trình khuyến mãi*" />
                    <InputSelect className="col-12 col-md-4" datas={priority} value={1} label="Độ ưu tiên*" onChange={(value) => setState({ ...state, ranger_status: value })} />
                </div>
                <div className="mb-4 m_table m_table--sales table_fixed max-height-100">
                    <table style={{ minWidth: 1035 }}>
                        <thead>
                            <tr>
                                <th style={{ width: '28%' }} className="col-1 pl-0">STT</th>
                                <th style={{ width: '52%' }} className="col-1">LOẠI </th>
                                <th className="col-3 pl-0">NỘI DUNG</th>
                                <th className="col-1">MÃ</th>
                                <th className="col-2">CHI PHÍ(VND)</th>
                                <th className="col-2">QUY ĐỔI TỐI ĐA(VND)</th>
                                <th style={{ width: '50%' }} className="col-1">YÊU CẦU </th>
                            </tr>
                        </thead>
                        <tbody style={{ maxHeight: 300 }}>
                            <tr>
                                <td width="5%" className="pl-0">1</td>
                                <td colSpan={6}>
                                    <span className="bg_color_6d30ab fw-medium text-uppercase min-height-40 d-inline-flex align-items-center text-white pl-3 pr-3 pt-2 pb-2">
                                        Khuyến mãi tặng voucher
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '15.5%' }} colSpan={2} className="pl-0 border-bottom-none">
                                    <span className="voucher_type">NGHỈ DƯỠNG</span>
                                </td>
                                <td className="pl-0">
                                    <span className="uni_text_6d30ab fw-medium">1 đêm ở khách sạn 5 sao ở TPHCM </span>
                                </td>
                                <td>
                                    <span className="m_text_367be3 fw-medium">VOUCHER456</span>
                                </td>
                                <td>
                                    <div className="form-group mb-0">
                                        <input disabled type="text" defaultValue="999.999.999" className="form-control text-right" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group mb-0">
                                        <input disabled type="text" defaultValue="999.999.999" className="form-control text-right" />
                                    </div>
                                </td>
                                <td className="text-center" style={{ width: '8%' }}>
                                    <label className="checkbox-inline">
                                        <input name="checkbox-2" type="checkbox" className="checkbox-custom" defaultValue={1} />
                                        <span className="checkbox-custom-dummy" />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '15.5%' }} colSpan={2} className="pl-0" />
                                <td className="pl-0">
                                    <span className="uni_text_6d30ab fw-medium">1 đêm ở khách sạn 5 sao ở TPHCM </span>
                                </td>
                                <td>
                                    <span className="m_text_367be3 fw-medium">VOUCHER456</span>
                                </td>
                                <td>
                                    <div className="form-group mb-0">
                                        <input disabled type="text" defaultValue="999.999.999" className="form-control text-right" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group mb-0">
                                        <input disabled type="text" defaultValue="999.999.999" className="form-control text-right" />
                                    </div>
                                </td>
                                <td className="text-center" style={{ width: '8%' }}>
                                    <label className="checkbox-inline">
                                        <input name="checkbox-2" type="checkbox" className="checkbox-custom" defaultValue={1} />
                                        <span className="checkbox-custom-dummy" />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td width="5%" className="pl-0">1</td>
                                <td colSpan={6}>
                                    <span className="bg_color_6d30ab fw-medium text-uppercase min-height-40 d-inline-flex align-items-center text-white pl-3 pr-3 pt-2 pb-2">
                                        Khuyến mãi tặng hiện vật
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '15.5%' }} colSpan={2} className="pl-0 border-bottom-none">
                                    <span className="voucher_type">NGHỈ DƯỠNG</span>
                                </td>
                                <td className="pl-0">
                                    <span className="uni_text_6d30ab fw-medium">1 đêm ở khách sạn 5 sao ở TPHCM </span>
                                </td>
                                <td>
                                    <span className="m_text_367be3 fw-medium">VOUCHER456</span>
                                </td>
                                <td>
                                    <div className="form-group mb-0">
                                        <input disabled type="text" defaultValue="999.999.999" className="form-control text-right" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group mb-0">
                                        <input disabled type="text" defaultValue="999.999.999" className="form-control text-right" />
                                    </div>
                                </td>
                                <td className="text-center" style={{ width: '8%' }}>
                                    <label className="checkbox-inline">
                                        <input name="checkbox-2" type="checkbox" className="checkbox-custom" defaultValue={1} />
                                        <span className="checkbox-custom-dummy" />
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    const renderOther = () => {
        return (
            <div>
                <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2">NỘI DUNG </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-8">
                        <div className="form-group">
                            <label className="fw-medium">Nội dung <span className="uni_star_e94c4c">*</span> </label>
                            <input type="text" className="form-control" defaultValue="Đề nghị thay đổi chính sách" />
                        </div>
                    </div>
                    <InputSelect className="col-12 col-sm-6 col-lg-4" datas={priority} value={1} label="Độ ưu tiên*" onChange={(value) => setState({ ...state, ranger_status: value })} />
                </div>
                <div className="form-group">
                    <label className="fw-medium">Lý do  <span className="uni_star_e94c4c">*</span></label>
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
            visible={props.active}
            footer={null}
            width={1200}
            onCancel={() => props.close()}>
            <CardHeader label="YÊU CẦU HỖ TRỢ" />
            <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2">YÊU CẦU</div>
            <div className="row">
                <InputSelect value={state.request_select} isClear={state.request_select != 0 ? false : true} className="col-12 col-md-8" label="Loại yêu cầu" datas={request} placeholder="Danh sách yêu cầu" onChange={(value) => setState({ ...state, request_select: value })} />
                <InputText className="col-12 col-md-4" type="text" label={props.value.product_name} disabled />
            </div>
            {renderRequest()}
            <div className=" pt-0 pb-4 border-0 mt-4 text-right" >
                <button type="button" className="min-width-button min-height-40 btn-uni-exit btn-uni-exit-modal" data-dismiss="modal" aria-label="Close" onClick={props.close} style={{ marginRight: 20 }} >
                    Close
                </button>
                <button type="submit" className="min-width-button min-height-40 btn-uni-purple">
                    Cập nhật
                </button>
            </div>
        </Modal>
    )
}

export default DialogSalePromotion;


