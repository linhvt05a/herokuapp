import React from 'react';
import ProductDetail from './Layout/ProductDetail/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import PaymentWrapper from './Layout/Payment/PaymentWrapper';

const Payment = () => {
    return (
        <div class="container-fluid">
            <ProductDetail />
            <CardWrapper currentStep={3}
                         children={<PaymentWrapper />}
             />
        </div>
    )
}

export default Payment;