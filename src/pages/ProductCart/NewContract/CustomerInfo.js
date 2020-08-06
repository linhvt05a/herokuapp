import React from 'react';
import ProductDetail from '../../Layout/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import CustomerInfoForm from './Layout/CustomerInfo/CustomerInfoForm';
import { useHistory } from "react-router-dom";

const CustomerInfo = () => {
    return (
        <div className="container-fluid">
            <ProductDetail />
            <CardWrapper currentStep={1}
                         children={<CustomerInfoForm />}
             />
        </div>
    )
}

export default CustomerInfo;