import React from 'react';
import ProductInfo from '../../Layout/ProductInfo';
import CardWrapper from './Layout/CardWrapper';
import DiscountWrapper from './Layout/DiscountOption/DiscountWrapper';

const DiscountOption = () => {
    return (
        <div class="container-fluid">
            <ProductInfo />
            <CardWrapper currentStep={2}
                         children={<DiscountWrapper />}
             />
        </div>
    )
}

export default DiscountOption;