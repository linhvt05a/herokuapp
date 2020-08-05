import React from 'react';
import ProductInfo from '../../Layout/ProductInfo';
import CardWrapper from './Layout/CardWrapper';
import DiscountList from './Layout/DiscountOption/DiscountList';

const DiscountOption = () => {
    return (
        <div class="container-fluid">
            <ProductInfo />
            <CardWrapper currentStep={2}
                         children={<DiscountList />}
             />
        </div>
    )
}

export default DiscountOption;