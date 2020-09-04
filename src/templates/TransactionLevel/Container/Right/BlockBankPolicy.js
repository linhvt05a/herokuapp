import React, { Component } from 'react';
import HeadingPurpleBank from '../../../../components/common/HeadingPurple/Bank';

const BlockBankPolicy = (props) => {
    const { data, heading, className } = props;
    console.log(1111,data);
    return (
        <div className={className}>
            <HeadingPurpleBank className={className} data={data} heading={heading} />
        </div>
    )
}
export default BlockBankPolicy;


