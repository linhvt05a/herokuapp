import React, { Component } from 'react';
import HeadingPurpleUltilities from '../../../../components/common/HeadingPurple/Ultilities';

const BlockInternalUtility = (props) => {
    const { data, heading, className } = props;
    return (
        <div className={className}>
            { data.length > 0 ? <HeadingPurpleUltilities data={data} heading={heading} /> : ''}
        </div>
    )
}
export default BlockInternalUtility;


