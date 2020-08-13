import React from 'react';
import ProductDetail from '../../Layout/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import CustomerInFoWrapper from './Layout/CustomerInfo/CustomerInFoWrapper';

const CustomerInfo = () => {
    return (
        <div className="container-fluid">
            <ProductDetail />
            <CardWrapper currentStep={1}>
                <CustomerInFoWrapper />
            </CardWrapper>
        </div>
    )
}

export default CustomerInfo;