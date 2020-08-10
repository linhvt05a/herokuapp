import React, { useState } from 'react';
import {CardHeader} from '../../../components/common'
import {CardChangeAvatar} from '../../../components/Card'
import { InputText, InputSelect, InputTextImage, InputTextSelect} from '../../../components/input';
import { Input, Select, Divider } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import {currency} from '../../../constant'
import {} from '../../../components/Card';
import { GroupInputSelect } from '../../../components/base/Select/GroupInputSelect';
import { GroupInputIcon } from '../../../components/base/Select/GroupInputIcon';
 const CardInfo = () => {
     
    const selectAfter = (
        <Select defaultValue="vnd" className="select-after">
            <Option value="vnd">vnd</Option>
            <Option value="usd">usd</Option>

        </Select>
    );

     return <>
         <div className="row">
                <CardChangeAvatar className="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column" />

                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                    <CardHeader label="THÔNG TIN SẢN PHẨM" />
                    <div className="card h-100 square">
                        <div className="card-body">
                            <div className="text-uppercase fw-medium fs-18">THÔNG TIN SẢN PHẨM</div>
                            <div className="row">
                            
                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Dự án" disabled/>

                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Khu" disabled/>

                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Khối " disabled/>

                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Đợt mở bán" disabled/>

                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label ="Loại hình " disabled/>
                                    
                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Tầng / Lô" disabled/>

                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Sản phẩm" disabled/>

                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Kênh phân phối" disabled/>

                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Tên đại lý" disabled/>  

                                <GroupInputSelect className="col-12 col-sm-6 col-md-6 col-lg-4"  addonAfter={selectAfter} value = "21423423423423423" /> 

                                <GroupInputIcon className="col-12 col-sm-6 col-md-6 col-lg-4" des = "0.1" disabled symbol="%"/> 

                                <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Số chính sách khuyến mãi đang có  " disabled/>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>

     </>
 }
 export default CardInfo;