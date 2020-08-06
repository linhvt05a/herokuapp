import React from 'react';
import ProductInfo from '../../Layout/ProductInfo';
import CardWrapper from './Layout/CardWrapper';
import ContractFinish from './Layout/Finish/ContractFinish';

const Finish = () => {
    return (
        <div class="container-fluid">
            <ProductInfo />
            <CardWrapper currentStep={5}
                         children={<ContractFinish />}
             />
        </div>
    )
}

export default Finish;