import React, { useState } from 'react';
import BlockPolicyAdvice from './BlockPolicyAdvice';

const TransactionRight = (props) => {
    const { data } = props;

    console.log('data',data);

    return (
        <BlockPolicyAdvice data={data.list_promotion_policy} heading='heading_policy_advice' />
    )
}

export default TransactionRight;