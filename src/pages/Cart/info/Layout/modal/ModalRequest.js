/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import { Trans } from "react-i18next";
import { Modal } from "antd";
import { CardHeader } from "../../../../../components/common";
import { Select, InputText, InputCheckBox } from "../../../../../components/input";
const data = [
    {
        id: 1,
        type: "NGHỈ DƯỠNG",
        description: "1 đêm ở khách sạn 5 sao ở TPHCM ",
        code: "VOUCHER456",
        cost: "10.000.000",
        convert: "7.000.000",
        isCheck: false,
    },
    {
        id: 2,
        type: "KHÁCH SẠN",
        description: "1 đêm ở khách sạn 5 sao ở TPHCM ",
        code: "VOUCHER456",
        cost: "10.000.000",
        convert: "7.000.000",
        isCheck: true,
    },
    {
        id: 3,
        type: "KHÁCH SẠN",
        description: "1 đêm ở khách sạn 5 sao ở TPHCM ",
        code: "VOUCHER456",
        cost: "10.000.000",
        convert: "7.000.000",
        isCheck: true,
    },
    {
        id: 4,
        type: "KHÁCH SẠN",
        description: "1 đêm ở khách sạn 5 sao ở TPHCM  ",
        code: "VOUCHER456",
        cost: "10.000.000",
        convert: "7.000.000",
        isCheck: true,
    },
    {
        id: 5,
        type: "KHÁCH SẠN",
        description: "1 đêm ở khách sạn 5 sao ở TPHCM ",
        code: "VOUCHER456",
        cost: "10.000.000",
        convert: "7.000.000",
        isCheck: false,
    },
];
const request = [
    { value: 1, label: "Yêu cầu thay đổi chiết khấu hoa hồng cho kênh phân phối " },
    { value: 2, label: "Yêu cầu quy đổi khuyến mãi cho khách hàng" },
    { value: 3, label: "Khác" }
]
const ranger = [
    { value: 1, label: "Cao (1-3 ngày)" },
    { value: 2, label: "Trung Bình (1-5 ngày)" },
    { value: 3, label: "Thấp (1-7 ngày)" }
];
const discountInfo = [
    { value: 1, label: "Giảm trực tiếp từ 100 triệu ngay cho khách hàng mới trong mùa xuân 2021 dành cho loại hình biệt thự" },
]
const DialogSalePromotion = (props) => {
    const [state, setState] = useState({
        request_select: 0,
        ranger_status: 1
    })


    const renderDiscount = () => {
        return (
            <div>
                <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2">YÊU CẦU </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label className="fw-medium">Giá bán</label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" placeholder defaultValue="1.200.000.000" disabled />
                                <div className="input-group-append select2_currency">
                                    <select name className="form-control js-select2">
                                        <option value={1}>vnd</option>
                                        <option value={2}>usd</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label className="fw-medium">Hoa hồng thấp nhất </label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" placeholder defaultValue={3.0} disabled />
                                <div className="input-group-append">
                                    <div className="input-group-text pl-4 pr-4">%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label className="fw-medium">Hoa hồng cao nhất </label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" placeholder defaultValue={3.0} disabled />
                                <div className="input-group-append">
                                    <div className="input-group-text pl-4 pr-4">%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label className="fw-medium">Hoa hồng mặc định hiện tại </label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" placeholder defaultValue={3.0} disabled />
                                <div className="input-group-append">
                                    <div className="input-group-text pl-4 pr-4">%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label className="fw-medium m_text_e94c4c">Hoa hồng đề nghị <span className="uni_star_e94c4c">*</span> </label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" placeholder="Nhập " defaultValue />
                                <div className="input-group-append">
                                    <div className="input-group-text pl-4 pr-4">%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Select className="col-12 col-sm-6 col-lg-4" datas={ranger} value={state.ranger_status} label="Độ ưu tiên*" onChange={(value) => setState({ ...state, ranger_status: value })} />
                    <div className="form-group w-100">
                        <label className="fw-medium">Lý do  <span className="uni_star_e94c4c">*</span></label>
                        <textarea placeholder="Nhập lý do " className="form-control" id cols={30} rows={4} defaultValue={""} />
                    </div>

                    {/* <div className="col-12 col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label className="fw-medium m_text_e94c4c">Độ ưu tiên <span className="uni_star_e94c4c">*</span></label>
                            <select className="js-select2 form-control" data-placeholder="Chọn độ ưu tiên ">
                                <option value>Chọn độ ưu tiên </option>
                                <option value={1}>1</option>
                                <option value={1}>1</option>
                                <option value={1}>1</option>
                            </select>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
    const renderExchange = () => {
        return (
            <div>
                <div className="row">
                    <Select className="fw-medium col-12 col-md-8" datas={discountInfo} value={1} label="Chương trình khuyến mãi*" />
                    <Select className="col-12 col-md-4" datas={ranger} value={1} label="Độ ưu tiên*" onChange={(value) => setState({ ...state, ranger_status: value })} />
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
                            <input type="text" className="form-control" placeholder defaultValue="Đề nghị thay đổi chính sách" />
                        </div>
                    </div>
                    <Select className="col-12 col-sm-6 col-lg-4" datas={ranger} value={1} label="Độ ưu tiên*" onChange={(value) => setState({ ...state, ranger_status: value })} />
                </div>
                <div className="form-group">
                    <label className="fw-medium">Lý do  <span className="uni_star_e94c4c">*</span></label>
                    <textarea name placeholder="Nhập lý do " className="form-control" id cols={30} rows={4} defaultValue={""} />
                </div>
            </div>

        )
    }
    const renderRequest = () => {
        switch (state.request_select) {
            case 1:
                return renderDiscount();
            case 2:
                return renderExchange()
            case 3:
                return renderOther();
        }
    }

    return (
        <Modal
            visible={props.active}
            footer={null}
            width={1200}
            onCancel={() => props.close()}
        >

            <CardHeader label="YÊU CẦU HỖ TRỢ" />
            <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2">YÊU CẦU </div>
            <div className="row">
                <Select value={state.request_select} isClear={state.request_select != 0 ? false : true} className="col-12 col-md-8" label="Loại yêu cầu" datas={request} placeholder="Danh sách yêu cầu" onChange={(value) => setState({ ...state, request_select: value })} />
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


