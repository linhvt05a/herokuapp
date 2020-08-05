import React from 'react';
import ProductInfo from '../../Layout/ProductInfo';
import CardWrapper from './Layout/CardWrapper';
import CustomerInfoForm from './Layout/CustomerInfo/CustomerInfoForm';

const OrderInfo = () => {
    return (
        <div class="container-fluid">
            <ProductInfo />
            <CardWrapper currentStep={3}
                         children={<CustomerInfoForm />}
             />
        </div>
    )
}

export default OrderInfo;