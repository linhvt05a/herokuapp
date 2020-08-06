import React from 'react';
import ProductDetail from '../../Layout/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import DiscountWrapper from './Layout/DiscountOption/DiscountWrapper';

const DiscountOption = () => {
    return (
        <div class="container-fluid">
            <CardWrapper currentStep={2}
                         children={<DiscountWrapper />}
             />
        </div>
    )
}

export default DiscountOption;