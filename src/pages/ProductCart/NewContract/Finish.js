import React from 'react';
import ProductInfo from '../../Layout/ProductInfo';
import CardWrapper from './Layout/CardWrapper';
import CustomerInfoForm from './Layout/CustomerInfo/CustomerInfoForm';

const Finish = () => {
    return (
        <div class="container-fluid">
            <ProductInfo />
            <CardWrapper currentStep={5}
                         children={<CustomerInfoForm />}
             />
        </div>
    )
}

export default Finish;