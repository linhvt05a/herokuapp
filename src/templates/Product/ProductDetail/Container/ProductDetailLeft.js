import React, { Component, useState } from 'react'
import { Trans } from 'react-i18next';
import Parser from 'html-react-parser';

import CardNoData from '../../../../components/common/CardNoData'
import { Banks, Ground, Introduce, Position, ImagesFirst, Ultilities } from '../component';

const ProductDetailLeft = (props) => {
    const { data } = props;

    console.log('ProductDetailLeft', data);

    return (
        data ?
            <>
                <ImagesFirst data={data} />
                <div className="description">
                    {data.description ? Parser(data.description) : ''}
                </div>
                <Position data={data} />
                <Ground data={data} />
                <Introduce data={data} />
                <Ultilities data={data} />
                <Banks data={data} />
            </>
            : <CardNoData />
    )
}

export default React.memo(ProductDetailLeft);
