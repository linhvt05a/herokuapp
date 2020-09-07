
import React, { Component, useState, useEffect } from 'react'
import { Trans } from 'react-i18next';
import { IMAGE_URL } from '../../../../contant';
import { SliderNavFor } from '../../../../components/common/Sliders'
import CardNoData from '../../../../components/common/CardNoData';

const Slider = (props) => {
    const { data } = props;

    const [type, setType] = useState({
        typeImage: false,
        type2d: false,
        type3d: false,
        typear: false,
    });

    useEffect(() => {
        setType({
            typeImage: true
        })
    }, []);

    const onChooseSliderType = (props) => {

        if (props === 'image') {
            // console.log('image');
            setType({
                typeImage: true,
                type2d: false,
                type3d: false,
                typear: false,
            })
        }
        if (props === '2d') {
            // console.log('2d');
            setType({
                type2d: true,
                typeImage: false,
                type3d: false,
                typear: false,
            })
        }
        if (props === '3d') {
            // console.log('3d');
            setType({
                type3d: true,
                type2d: false,
                typeImage: false,
                typear: false,
            })
        }
        if (props === 'ar') {
            // console.log('ar');
            setType({
                typear: true,
                type2d: false,
                type3d: false,
                typeImage: false,
            })
        }

    }

    return (
        <>
            <ul className="image_type selectApartmentType">
                <li data-type="image" className={`type_image ${type.typeImage ? 'active' : ''}`} onClick={() => onChooseSliderType('image')}>
                    <i className="icon fas fa-image" />
                </li>
                <li data-type="2d" className={`type_2d ${type.type2d ? 'active' : ''}`} onClick={() => onChooseSliderType('2d')}>2d</li>
                <li data-type="3d" className={`type_3d ${type.type3d ? 'active' : ''}`} onClick={() => onChooseSliderType('3d')}>3d</li>
                <li data-type="ar" className={`type_ar ${type.typear ? 'active' : ''}`} onClick={() => onChooseSliderType('ar')}>AR</li>
            </ul>

            {/* image */}
            <div className={`wrap wrap_image ${type.typeImage ? 'active' : ''}`}>
                {
                    data.image && data.image.length > 0
                        ?
                        <SliderNavFor data={data.image} />
                        : <CardNoData />
                }
            </div>

            {/* 2d  */}
            <div className={`wrap wrap_2d ${type.type2d ? 'active' : ''}`}>
                {
                    data.layout.layout_2d && data.layout.layout_2d.length > 0
                        ?
                        <SliderNavFor data={data.layout.layout_2d} />
                        : <CardNoData />
                }
            </div>

            {/* 3d  */}
            <div className={`wrap wrap_3d ${type.type3d ? 'active' : ''}`}>
                {
                    data.layout.layout_3d && data.layout.layout_3d.length > 0
                        ?
                        <SliderNavFor data={data.layout.layout_3d} />
                        : <CardNoData />
                }
            </div>

            {/* ar  */}
            <div className={`wrap wrap_ar ${type.typear ? 'active' : ''}`}>
                {
                    data.layout.layout_ar && data.layout.layout_ar.length > 0
                        ? <SliderNavFor data={data.layout.layout_ar} />
                        : <CardNoData />
                }
            </div>

        </>
    )
}

export default Slider;
