import React, { useState } from 'react';
import {CardHeader} from '../../../components/common'
import {CardChangeAvatar} from '../../../components/Card'
import { InputText, InputSelect} from '../../../components/input';

 const CardInfo = () => {
     return <>
         <div className="row ">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column">
                <CardHeader label="HÌNH ẢNH SẢN PHẨM"/>
                    <div className="card h-100 square ">
                    <div className="card-body p-0">
                        <div id="div_image_preview">
                        <img className="w-100" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                    <CardHeader label="THÔNG TIN SẢN PHẨM" />
                <div className="card h-100 square">
                    <div className="card-body">
                        <div className="text-uppercase fw-medium fs-18">THÔNG TIN SẢN PHẨM</div>
                        <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label="Dự án" disabled/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label="Khu" disabled/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label="Khối " disabled/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label="Đợt mở bán" disabled/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label ="Loại hình " disabled/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label="Tầng / Lô" disabled/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label="Sản phẩm" disabled/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label="Kênh phân phối" disabled/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label="Tên đại lý" disabled/>   
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                            <div className="input-group">
                                <InputText label="Giá bán" disabled/>
                                <div className="input-group-append select2_currency">
                                    <InputSelect />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                            <div className="input-group mb-2">
                                <InputText label="Hoa hồng mặc định hiện tại" disabled/>
                                <div className="input-group-append">
                                    <div className="input-group-text pl-4 pr-4">%</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <InputText label="Số chính sách khuyến mãi đang có  " disabled/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     </>
 }
 export default CardInfo;