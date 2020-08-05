import React from 'react';
import ProductInfo from '../../Layout/ProductInfo';
import CardWrapper from './Layout/CardWrapper';
import CustomerInfoForm from './Layout/CustomerInfo/CustomerInfoForm';

const CustomerInfo = () => {
    return (
        <div className="container-fluid">
            <ProductInfo />
            <CardWrapper currentStep={1}
                         children={<CustomerInfoForm />}
             />
        </div>
    )
}

export default CustomerInfo;