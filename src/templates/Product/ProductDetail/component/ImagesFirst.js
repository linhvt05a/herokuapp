
import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import { IMAGE_URL } from '../../../../contant';
import Slider from './Slider';
import TimeLineClock from '../../../../components/common/Timeline/TimeLineClock';



const ImagesFirst = (props) => {
    const { data } = props;

    return (
        <div className="apartment_slider">
            <TimeLineClock>
                00 : 20 : 35
            </TimeLineClock>

            <ul className="icon_like_down">
                <li>
                    <i className="fas fa-download" />
                </li>
                <li>
                    <i className="liked active fas fa-heart" />
                </li>
            </ul>

            <Slider data={data} />
            
        </div>
    )
}

export default ImagesFirst;
