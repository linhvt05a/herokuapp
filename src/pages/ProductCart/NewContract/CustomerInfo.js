import React from 'react';
import ProductInfo from './Layout/ProductInfo';
import CardHeader from '../../../components/common/CardHeader'

const CustomerInfo = () => {
    return (
        <div class="container-fluid">
            <ProductInfo />
            <CardHeader label="Tạo hợp đồng"/>
        </div>
    )
}

export default CustomerInfo;