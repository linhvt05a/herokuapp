import React from 'react';
import ProductInfo from '../../Layout/ProductInfo';
import CardWrapper from './Layout/CardWrapper';
import PaymentWrapper from './Layout/Payment/PaymentWrapper';

const Payment = () => {
    return (
        <div class="container-fluid">
            <ProductInfo />
            <CardWrapper currentStep={3}
                         children={<PaymentWrapper />}
             />
        </div>
    )
}

export default Payment;