import React from 'react';
import ProductDetail from '../../Layout/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import PaymentWrapper from './Layout/Payment/PaymentWrapper';

const Payment = (props) => {
    return (
        <div class="container-fluid">
            <ProductDetail />
            <CardWrapper currentStep={3}
                         children={<PaymentWrapper {...props} />}
             />
        </div>
    )
}

export default Payment;