import React, { useState } from 'react';
import BlockPromotionPolicy from './BlockPromotionPolicy';
import BlockInternalUtility from './BlockInternalUtility';
import BlockBankPolicy from './BlockBankPolicy';

const TransactionRight = (props) => {
    const { data } = props;
    console.log('ffff', data);
    return (
        <>
            <BlockPromotionPolicy 
                data={data.list_promotion_policy} 
                heading='heading_policy_advice' 
            />
            <BlockBankPolicy 
                className='mt-5'
                data={data.info_banking_policy} 
                heading='heading_banking_policy' 
            />
            <BlockInternalUtility 
                className='mt-5'
                data={data.list_internal_utility} 
                heading='heading_internal_utility' 
            />
        </>
    )
}

export default TransactionRight;