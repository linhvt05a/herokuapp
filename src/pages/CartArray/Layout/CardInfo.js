import React, { useState } from 'react';
import {CardHeader} from '../../../components/common'
import {CardChangeAvatar} from '../../../components/Card'
import { InputText, InputSelect} from '../../../components/input';
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

 const CardInfo = () => {
    const selectAfter = (
        <Select defaultValue=".com" className="select-after">
            <Option value=".com">.com</Option>
            <Option value=".jp">.jp</Option>
            <Option value=".cn">.cn</Option>
            <Option value=".org">.org</Option>
        </Select>
    );

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
                                <label className="fw-medium">Giá bán</label>
                                <div className="input-group">
                                    {/* <InputText label="Giá bán" disabled/>
                                    <div className="input-group-append select2_currency sdd">
                                        <InputSelect />
                                    </div> */}
                                    <Input className="form-control" disabled addonAfter={selectAfter} defaultValue="mysite" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <label className="fw-medium">Giá bán</label>
                                    <div className="input-group">
                                    <Input addonAfter={<SettingOutlined />} disabled defaultValue="mysite" />
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