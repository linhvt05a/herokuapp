import React from 'react';
import {CardHeader} from '../../../components/common'
import {CardChangeAvatar} from '../../../components/Card'
import { InputText} from '../../../components/input';
import {Select } from 'antd';
import GroupInputSelect from '../../../components/base/Select/GroupInputSelect';
import GroupInputIcon from '../../../components/base//Select/GroupInputIcon'
import{DISTRIBUTION_CHANNEL_AGENT, DISTRIBUTION_CHANNEL_INTERNAL} from '../../../constant'
import {formatCurrency} from '../../../utils/Utils'
const selectAfter = (
    <Select defaultValue="vnd" className="select-after">
        <Option value="vnd">vnd</Option>
        <Option value="usd">usd</Option>

    </Select>
);

 const CardInfo = (props) => {
     const{productDetail} = props
    const productPrice = formatCurrency(productDetail.product_estimate_price ? productDetail.product_estimate_price : 0 )
     return (
        <div className="row">
        <CardChangeAvatar className="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column" label="IMAGE" avatar_url ={props.productDetail?.product_avatar_url}  />
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
            <CardHeader label="THÔNG TIN SẢN PHẨM" />
            <div className="card h-100 square">
                <div className="card-body">
                    <div className="text-uppercase fw-medium fs-18">THÔNG TIN SẢN PHẨM</div>
                    <div className="row">
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Dự án" value={props.project_detail.name}  disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Khu" value={productDetail.area_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Khối " value={productDetail.block_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Đợt mở bán" value={productDetail.sell_open_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label ="Loại hình " value={productDetail.architecture_type_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Tầng / Lô" value={productDetail.floor_or_lot_name} disabled/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Sản phẩm" value={productDetail.product_name} disabled/>
                        <DistributionChanel distribute ={props.productDetail?.distribution_channel_type_id}/>
                        <InputText className="col-12 col-sm-6 col-md-6 col-lg-4" label="Tên đại lý" value={productDetail.distribution_channel_name} disabled/>  
                        <GroupInputSelect className="col-12 col-sm-6 col-md-6 col-lg-4"  addonAfter={selectAfter} value = {productPrice} label="Giá bán"  /> 
                        <GroupInputIcon className="col-12 col-sm-6 col-md-6 col-lg-4" des = "0.1"  symbol="%" label="Hoa hồng mặc định" value={productDetail.pin_commission_percent}/> 
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