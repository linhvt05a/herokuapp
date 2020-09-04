import React, { Component } from 'react';
import PolicyAdvice from '../../../../components/common/PolicyAdvice';

const BlockPolicyAdvice = (props) => {
    const { data, heading } = props;

    return (
        <>
            {
                data.length > 0 ? 
                    data.map((item, index) => {
                        return (<PolicyAdvice key={index} data={item} heading={heading} />)
                    }) 
                : <PolicyAdvice heading={heading} />
            }

        </>
    )
}
export default BlockPolicyAdvice;


