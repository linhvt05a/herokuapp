import React from 'react';
import ProductDetail from '../../Layout/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import OrderInfoWrapper from './Layout/OrderInfo/OrderInfoWrapper';

const OrderInfo = () => {
    return (
        <div class="container-fluid">
            <CardWrapper currentStep={4}
                         children={<OrderInfoWrapper />}
             />
        </div>
    )
}

export default OrderInfo;