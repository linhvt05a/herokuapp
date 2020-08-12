import React from 'react';
import {CardHeader} from '../../../components/common'
import {CardAvatar} from '../../../components/Card'
import { InputText} from '../../../components/input';
import { Select } from 'antd';
import GroupInputIcon from '../../../components/base/Select/GroupInputIcon'
import GroupInputSelect from '../../../components/base/Select/GroupInputSelect'
import{DISTRIBUTION_CHANNEL_AGENT, DISTRIBUTION_CHANNEL_INTERNAL} from '../../../constant'

const { Option } = Select;

const selectAfter = (
    <Select defaultValue="vnd" className="select-after">
        <Option value="vnd">vnd</Option>
        <Option value="usd">usd</Option>
    </Select>
);

 const CardInfo = (props) => {
     const {productDetail} = props
     return (
        <div className="row">
            <CardAvatar />
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
            <CardHeader label="THÔNG TIN SẢN PHẨM" />
            <div className="card h-100 square">
                <div className="card-body">
                    <div className="text-uppercase fw-medium fs-18">THÔNG TIN SẢN PHẨM</div>
                    <div className="row">
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Dự án" value={props.project_detail?.name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Khu" value={productDetail.area_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Khối " value={productDetail.block_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Đợt mở bán" value={productDetail.sell_open_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label ="Loại hình " value={productDetail.architecture_type_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Tầng / Lô" value={productDetail.floor_or_lot_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Sản phẩm" value={productDetail.product_name} disabled/>
                        <DistributionChanel distribute ={props.productDetail?.distribution_channel_type_id}/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Tên đại lý" value={productDetail.distribution_channel_name} disabled/>
                        <GroupInputIcon className="col-12 col-sm-6 col-md-6 col-lg-4"  addonAfter={selectAfter} value = {productDetail.product_estimate_price} label="Giá bán"  />
                        <GroupInputSelect className="col-12 col-sm-6 col-md-6 col-lg-4" addonBefore = {`0.1%`} label="Hoa hồng mặc định" value={productDetail.pin_commission_percent}/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Số chính sách khuyến mãi đang có" value={productDetail.total_promotion} disabled />
                    </div>
                </div>
            </div>
        </div>
    
    </div>
     )
 
 }

 const DistributionChanel = (props) =>{
     if(props.distribute === 1){
        return <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Kênh phân phối" value={DISTRIBUTION_CHANNEL_AGENT.label} disabled/>
     }else{
        return <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Kênh phân phối" value={DISTRIBUTION_CHANNEL_INTERNAL.label} disabled/>
     }

 }

 export default CardInfo;