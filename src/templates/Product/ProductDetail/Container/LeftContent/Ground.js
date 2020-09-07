


import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import Slider from '../../component/Slider'
import CardCollapse from '../../component/CardCollapse';


const Ground = (props) => {
    const { data } = props;

    return (
        <CardCollapse title='Mặt bằng tầng và mặt bằng dự án' {...props}>
            <div className="apartment_slider no_flashsale mt-3 mb-0">
                <Slider data={data} />
            </div>
        </CardCollapse>
    )
}

export default Ground;
