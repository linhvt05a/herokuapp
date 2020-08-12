import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Modal from 'react-bootstrap/Modal'
import { CardHeader } from "../common";
import { permissions } from '../../constant';
import {Select, InputText} from '../../components/input'

const DialogPermision = (props)=> {
        return (
            <Modal size="500" animation={true} show={props.visible} className="align-modal-position">
                <CardHeader label="YÊU CẦU HỖ TRỢ" />
                <div className="modal-content square">
                    <div className="modal-body" id="content-model-permission_list">
                        <div className="row">
                            <div className="col-md-12 mb-2" style={{marginLeft: 20}}>
                                <i className="help uni_text_999999">
                                <small className="text-note">
                                    Ghi chú <span className="uni_star_e94c4c">(*)</span>: Thông tin bắt buộc phải nhập vào
                                </small>
                                </i>
                            </div>
                        </div>
                        <span className="title-popup" style={{marginLeft: 20}}>YÊU CẦU</span>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12" style={{marginLeft: 20}}>
                                <div className="form-group">
                                    <Select className="input-popup-select-require" label="Loại yêu cầu" options={[{label:'--Chọn loại yêu cầu--', value:''}]} required/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12" style={{marginLeft: 160}}>
                                <div className="form-group">
                                    <InputText className="input-popup-product" label="Sản phẩm" disabled/>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2" style={{marginRight: 8}}>
                            <div className="col-12 text-right">
                                <button type="button" className="btn-uni-cancel mr-3" onClick={props.close}>Close</button>
                                <button type="button"  className="btn-uni-purple float-right"> Update </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        
        )
}

export default DialogPermision;
