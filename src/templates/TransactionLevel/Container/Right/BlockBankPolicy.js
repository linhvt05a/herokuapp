import React, { Component } from 'react';
import HeadingPurpleBank from '../../../../components/common/HeadingPurple/Bank';

const BlockBankPolicy = (props) => {
    const { data, heading, className } = props;
    return (
        <div className={className}>
            <HeadingPurpleBank data={data} heading={heading} />
        </div>
    )
}
export default BlockBankPolicy;


