import React, { Component } from 'react';
import HeadingPurplePromotion from '../../../../components/common/HeadingPurple/Promotion';

const BlockPromotionPolicy = (props) => {
    const { data, heading, className } = props;
    console.log(data);
    return (
        <div className={className}>
            { data.length > 0 ? <HeadingPurplePromotion data={data} heading={heading} /> : ''}
        </div>
    )
}
export default BlockPromotionPolicy;


