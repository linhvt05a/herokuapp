import React, { useState, useEffect } from "react";
import { Trans } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import { CardHeader } from "../common";
import { permissions } from "../../constant";
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

const DialogSalePromotion = (props) => {
    return (
        <Modal
            show={props.active}
            onHide={() => props.onClick()}
        >
            <div className="modal fade show" style={{ paddingRight: 15, display: "block" }}  >
                <div className="modal-dialog center" role="document" style={{ maxWidth: 1175 }} >
                    <CardHeader label="YÊU CẦU HỖ TRỢ" />
                    <div className="modal-content square">
                        <div className="modal-body">
                            <i className="text-note mb-3 mt-3 mt-lg-0">
                                Ghi chú<span className="uni_star_e94c4c">*</span>: Thông tin bắt buộc phải nhập vào
                        </i>
                            <div className="uni_text_6d30ab fw-medium fs-18 mt-2 mb-2">YÊU CẦU </div>
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <div className="form-group">
                                        <InputSelect label="Loại yêu cầu" required />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="form-group">
                                        <InputText type="text" label="Sản phẩm" disabled />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
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
                            </div>
                            <span style={{ fontSize: 20, color: '#6d30ab', fontWeight: 'bolder' }}>KHUYẾN MÃI TẶNG HIỆN VẬT HIỆN TẠI </span>
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
                            </div>
                            <div className="form-group">
                                <label className="fw-medium">Lý do <span className="uni_star_e94c4c">*</span></label>
                                <textarea name="" placeholder="Nhập lý do " className="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div className=" pt-0 pb-4 border-0 mt-4 text-right" >
                                <button type="button" className="min-width-button min-height-40 btn-uni-exit btn-uni-exit-modal" data-dismiss="modal" aria-label="Close" onClick={props.onClick} style={{ marginRight: 20 }} >
                                    Close
                            </button>
                                <button type="submit" className="min-width-button min-height-40 btn-uni-purple">
                                    Cập nhật
                            </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default DialogSalePromotion;


