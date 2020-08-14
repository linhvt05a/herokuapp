import React from 'react';
import ProductDetail from '../../Layout/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import OrderInfoWrapper from './Layout/OrderInfo/OrderInfoWrapper';

const OrderInfo = (props) => {
    return (
        <div class="container-fluid">
            <ProductDetail />
            <CardWrapper currentStep={4}
                         children={<OrderInfoWrapper {...props} />}
             />
        </div>
    )
}

export default OrderInfo;