import React from 'react';
import ProductInfo from '../../Layout/ProductInfo';
import CardWrapper from './Layout/CardWrapper';
import OrderInfoWrapper from './Layout/OrderInfo/OrderInfoWrapper';

const OrderInfo = () => {
    return (
        <div class="container-fluid">
            <ProductInfo />
            <CardWrapper currentStep={4}
                         children={<OrderInfoWrapper />}
             />
        </div>
    )
}

export default OrderInfo;