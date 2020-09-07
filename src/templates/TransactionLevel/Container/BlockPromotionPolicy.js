import React, { Component } from 'react';
import {Promotion} from '../../../components/common/HeadingPurple';

const BlockPromotionPolicy = (props) => {
    const { data, heading, className } = props;
    return (
        <div className={className}>
            { data && data.list_promotion_policy && data.list_promotion_policy.length > 0 ? <Promotion data={data.list_promotion_policy} heading={heading} /> : ''}
        </div>
    )
}
export default BlockPromotionPolicy;


