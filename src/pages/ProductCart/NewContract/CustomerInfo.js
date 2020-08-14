import React from 'react';
import ProductDetail from '../../Layout/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import CustomerInFoWrapper from './Layout/CustomerInfo/CustomerInFoWrapper';

const CustomerInfo = (props) => {
    return (
        <div className="container-fluid">
            <ProductDetail />
            <CardWrapper currentStep={1}>
                <CustomerInFoWrapper {...props}/>
            </CardWrapper>
        </div>
    )
}

export default CustomerInfo;