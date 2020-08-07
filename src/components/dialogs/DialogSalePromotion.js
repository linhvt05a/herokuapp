import React, { useState, useEffect } from "react";
import { Trans } from "react-i18next";
import { Modal } from "antd";
import { CardHeader } from "../common";
import { InputSelect, InputText, InputCheckBox } from "../../components/input";
import PropTypes from 'prop-types';
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
const discount = [
    { value: 1, label: "Cao (1-3 ngày)" },
    { value: 2, label: "Trung Bình (1-5 ngày)" },
    { value: 3, label: "Thấp (1-7 ngày)" }
]
const DialogSalePromotion = (props) => {
    const [state, setState] = useState({
        request_select: 0
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
                    <InputSelect className="col-12 col-sm-6 col-lg-4" datas={discount} value={1} label="Độ ưu tiên*" />
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
                <div className="form-group">
                    <label className="fw-medium">Chương trình khuyến mãi <span className="uni_star_e94c4c">*</span></label>
                    <select name className="form-control js-select2" id>
                        <option value={1}>Giảm trực tiếp từ 100 triệu ngay cho khách hàng mới trong mùa xuân 2021 dành cho loại hình biệt thự</option>
                    </select>
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
    const renderRequest = () => {
        switch (state.request_select) {
            case 1:
                return renderDiscount();
            case 2:
                return renderExchange()
            default:
                break;
        }
    }

    return (
        <Modal
            visible={props.active}
            // zIndex={0}
            footer={null}
            // closable={false}
            width={1200}

        // onCancel={() => props.close()}
        >
            {/* <div className="modal fade show" style={{ paddingRight: 15, display: "block" }}  >
                <div className="modal-dialog center" role="document" style={{ maxWidth: 1175 }} >
                    <CardHeader label="YÊU CẦU HỖ TRỢ" />
                    <div className="modal-content square">
                        <div className="modal-body">
                            <i className="text-note mb-3 mt-3 mt-lg-0">
                                Ghi chú<span className="uni_star_e94c4c">*</span>: Thông tin bắt buộc phải nhập vào
                        </i>
                            <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2">YÊU CẦU </div>
                            <div className="row"> */}
            {/* <div className="col-12 col-md-8"> */}

            {/* </div> */}
            <CardHeader label="YÊU CẦU HỖ TRỢ" />
            <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2">YÊU CẦU </div>
            <div className="row">
                <InputSelect value={state.request_select} isClear={state.request_select != 0 ? false : true} className="col-12 col-md-8" label="Loại yêu cầu" datas={request} placeholder="Danh sách yêu cầu" onChange={(value) => setState({ ...state, request_select: value })} />
                <InputText className="col-12 col-md-4" type="text" label={props.value.product_name} disabled />
            </div>
            {renderRequest()}
            {/* </div> */}
            {/* <div className="row">
                                <div className="col-12 col-md-8">
                                    <div className="form-group">
                                        <InputSelect label="Chương trình khuyến mãi" required />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="form-group">
                                        <InputSelect type="text" label="Độ ưu tiên" className="priority-input" required />
                                    </div>
                                </div>
                            </div> */}
            {/* <span style={{ fontSize: 20, color: '#6d30ab', fontWeight: 'bolder' }}>KHUYẾN MÃI TẶNG HIỆN VẬT HIỆN TẠI </span>
                            <div className="mb-4 m_table m_table--sales table_fixed max-height-100">
                                <table style={{ minWidth: 1035 }}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "28%" }} className="col-1 pl-0">STT</th>
                                            <th style={{ width: "52%" }} className="col-1">LOẠI</th>
                                            <th className="col-3 pl-0"><span style={{ marginLeft: 20 }}>NỘI DUNG</span></th>
                                            <th className="col-1" style={{ width: '30%' }}><span style={{ marginLeft: 30 }}>MÃ</span></th>
                                            <th className="col-2"><span style={{ marginLeft: 50 }}>CHI PHÍ</span></th>
                                            <th className="col-2"><span style={{ marginLeft: 20 }}>QUY ĐỔI TỐI ĐA</span></th>
                                            <th style={{ width: "50%" }} className="col-1"> YÊU CẦU</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ maxHeight: 300 }}>
                                        {data && data.map((item, index) =>
                                            <tr key={item.description + index}>
                                                <td>{index + 1}</td>
                                                <td style={{ width: "15.5%" }} colSpan={2} className="pl-0">
                                                    <span className="voucher_type">{item.type}</span>
                                                </td>
                                                <td className="pl-0" style={{ width: '25%', textAlign: 'left' }} >
                                                    <span className="uni_text_6d30ab fw-medium" style={{ marginLeft: -100 }}>{item.description} </span>
                                                </td>
                                                <td>
                                                    <span className="m_text_367be3 fw-medium" style={{ marginLeft: -150 }}>{item.code}</span>
                                                </td>
                                                <td>
                                                    <div className="form-group mb-0">
                                                        <InputText disabled type="text" value={item.cost} className="cost-input" />
                                                        <InputSelect className="currency-unit" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="form-group mb-0">
                                                        <InputText disabled type="text" className="convert-input" value={item.convert} />
                                                        <InputSelect className="currency-unit-convert" />
                                                    </div>
                                                </td>
                                                <td className="text-center" style={{ width: "8%" }}>
                                                    <InputCheckBox name="checkbox-2" type="checkbox" value={item.isCheck} />
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div> */}
            {/* <div className="form-group">
                                <label className="fw-medium">Lý do <span className="uni_star_e94c4c">*</span></label>
                                <textarea name="" placeholder="Nhập lý do " className="form-control" id="" cols="30" rows="4"></textarea>
                            </div> */}
            <div className=" pt-0 pb-4 border-0 mt-4 text-right" >
                <button type="button" className="min-width-button min-height-40 btn-uni-exit btn-uni-exit-modal" data-dismiss="modal" aria-label="Close" onClick={props.close} style={{ marginRight: 20 }} >
                    Close
                            </button>
                <button type="submit" className="min-width-button min-height-40 btn-uni-purple">
                    Cập nhật
                            </button>
            </div>
            {/* 
                        </div>
                    </div>

                </div>
            </div> */}
        </Modal>
    )
}

export default DialogSalePromotion;


