import React from 'react';
import ProductDetail from '../../Layout/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import DiscountWrapper from './Layout/DiscountOption/DiscountWrapper';

const DiscountOption = (props) => {
    return (
        <div class="container-fluid">
            <ProductDetail />
            <CardWrapper currentStep={2}
                         children={<DiscountWrapper {...props}/>}
             />
        </div>
    )
}

export default DiscountOption;