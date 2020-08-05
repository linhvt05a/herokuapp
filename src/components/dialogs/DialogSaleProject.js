import React, { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import Modal from 'react-bootstrap/Modal'
import { CardHeader } from "../common";
import { permissions } from '../../constant';
import {InputSelect, InputText} from '../../components/input'
import "./Dialog.css"

const DialogSaleProject = (props) =>{
    return (
            <Modal size="500" animation={true} show={props.visible} className="align-modal-position">
            <CardHeader label="YÊU CẦU HỖ TRỢ" />
            <div className="modal-content card square">
                <div className="modal-body card-body" >
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
                                <InputSelect className="input-popup-select-require" label="Loại yêu cầu" options={[{label:'--Chọn loại yêu cầu--', value:''}]} required/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12" style={{marginLeft: 160}}>
                            <div className="form-group">
                                <InputText className="input-popup-product" label="Sản phẩm" disabled/>
                            </div>
                        </div>
                    </div>
                    <span className="title-popup" style={{marginLeft: 20}}>NỘI DUNG</span>
                    <div className="row mt-3">
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 " style={{marginLeft: 20}}>
                            <div className="form-group">
                                    <div className="input-group">
                                        <InputText type="text" disabled="disabled" label="Sale Price" className="bonus-sale-project"/>
                                        <InputSelect  className="sale-project-bonus"/>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 sale-low-est" >
                            <div className="form-group">
                                <div className="input-group">
                                    <InputText type="text" disabled="disabled" label="Hoa hồng thấp nhất" className="price-sale-project"/>
                                    <InputText placeholder = "%" className="sale-project"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 sale-highest">
                            <div className="form-group">
                                    <div className="input-group">
                                        <InputText type="text" disabled="disabled" label="Hoa hồng cao nhất" className="price-sale-project"/>
                                        <InputText placeholder = "%" className="sale-project"/>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 " style={{marginLeft: 20}}>
                            <div className="form-group">
                                    <div className="input-group">
                                        <InputText type="text" disabled="disabled" label="Hoa hồng mặc định hiện tại" className="bonus-sale-project"/>
                                        <InputText placeholder = "%" className="sale-project-bonus"/>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 " style={{marginLeft: -20}}>
                            <div className="form-group">
                                    <div className="input-group">
                                        <label style={{color:'#e94c4c'}} class="fw-medium">Hoa hồng đề nghị
                                            <span class="uni_star_e94c4c"> * </span>
                                        </label>
                                        <InputText type="text"  className="price-sale-project"/>
                                        <InputText placeholder = "%" className="sale-project-save"/>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 " style={{marginLeft: -15, }}>
                            <div className="form-group">
                            <label style={{color:'#e94c4c'}} className="fw-medium">Độ ưu tiên
                                    <span class="uni_star_e94c4c"> * </span>
                                </label>
                                <InputSelect required className="sale-priority"/>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row" style={{marginLeft: 5}}>
                        <div className="col-12">
                            <div class="form-group">
                                <label class="fw-medium">Lý do
                                    <span class="uni_star_e94c4c"> * </span>
                                </label>
                            </div>
                                <textarea  name="project_news_content" className="text-area-case"/>
                        </div>
                    </div>
                    <div className="row mt-2" style={{marginRight: 15}}>
                        <div className="col-12 text-right">
                            <button type="button" className="btn-uni-cancel mr-3" style={{marginTop: 20}} onClick={props.close}>Close</button>
                            <button type="button"  className="btn-uni-purple float-right" style={{marginTop: 20}}> Update </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default DialogSaleProject;