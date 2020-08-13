import React from 'react';
import ProductDetail from '../../Layout/ProductDetail';
import CardWrapper from './Layout/CardWrapper';
import ContractFinish from './Layout/Finish/ContractFinish';

const Finish = () => {
    return (
        <div class="container-fluid">
            <ProductDetail />
            <CardWrapper currentStep={5}
                         children={<ContractFinish />}
             />
        </div>
    )
}

export default Finish;