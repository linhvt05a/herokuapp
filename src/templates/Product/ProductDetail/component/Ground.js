


import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import Slider from './Slider'
import CardCollapseGreenCircle from '../../../../components/common/CardCollapseGreenCircle';



const Ground = (props) => {
    const { data } = props;

    return (
        <CardCollapseGreenCircle title='Mặt bằng tầng và mặt bằng dự án' {...props}>
            <div className="apartment_slider no_flashsale mt-3 mb-0">
                <Slider data={data} />
            </div>
        </CardCollapseGreenCircle>
    )
}

export default Ground;
