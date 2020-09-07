import React, { Component } from 'react';
import {Ultilities} from '../../../components/common/HeadingPurple';

const BlockInternalUtility = (props) => {
    const { data, heading, className } = props;
    return (
        <div className={className}>
            { data && data.list_internal_utility && data.list_internal_utility.length > 0 ? <Ultilities data={data.list_internal_utility} heading={heading} /> : ''}
        </div>
    )
}
export default BlockInternalUtility;


