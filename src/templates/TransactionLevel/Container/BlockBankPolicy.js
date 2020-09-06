import React, { Component } from 'react';
import {Bank} from '../../../components/common/HeadingPurple';

const BlockBankPolicy = (props) => {
    const { data, heading, className } = props;
    return (
        <div className={className}>
            { data && data.info_banking_policy ? <Bank data={data.info_banking_policy} heading={heading} /> : ''}
        </div>
    )
}
export default BlockBankPolicy;


