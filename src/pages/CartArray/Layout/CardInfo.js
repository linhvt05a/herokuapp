import React, { useState } from 'react';
import {CardHeader} from '../../../components/common'
import {CardChangeAvatar} from '../../../components/Card'
import { InputText, InputSelect, InputTextImage, InputTextSelect} from '../../../components/input';
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import {currency} from '../../../constant'
import {} from '../../../components/Card'
 const CardInfo = () => {
     
    const selectAfter = (
        <Select defaultValue="vnd" className="select-after">
            <Option value="vnd">vnd</Option>
            <Option value="usd">usd</Option>

        </Select>
    );

     return <>
         <div className="row ">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column">
                <CardChangeAvatar />
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
                                <label className="fw-medium">Giá bán</label>
                                <div className="input-group">
                                    <InputTextSelect className="form-control"  addonAfter={selectAfter} value = "21423423423423423" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <label className="fw-medium">Hoa hồng mặc định hiện tại </label>
                                    <div className="input-group">
                                        <InputTextImage className="form-control" des = "0.1" disabled symbol="%"/>
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