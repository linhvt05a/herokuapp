
import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import { IMAGE_URL } from '../../../../contant';
import { SliderNavFor } from '../../../../components/common/Sliders'

const Slider = (props) => {
    const { data } = props;

    return (
        <>
            <ul className="image_type selectApartmentType">
                <li data-type="image" className="type_image active">
                    <i className="icon fas fa-image" />
                </li>
                <li data-type="2d" className="type_2d">2d</li>
                <li data-type="3d" className="type_3d ">3d</li>
                <li data-type="ar" className="type_ar">AR</li>
            </ul>

            <div className="wrap wrap_image active">
                <SliderNavFor data={data.image} />
            </div>
            <div className="wrap wrap_2d">
                <SliderNavFor data={data.layout.layout_2d} />
            </div>
            <div className="wrap wrap_3d">
                <SliderNavFor data={data.layout.layout_3d} />
            </div>
            <div className="wrap wrap_ar">
                <SliderNavFor data={data.layout.layout_ar} />
            </div>
        </>
    )
}

export default Slider;
