import React, { useEffect, useState } from "react";
import Countdown from 'react-countdown';
import Slider from "react-slick";

import { convertDateHHmm, checkBeforeTime } from '../../../functions/Utils'
import { IMAGE_URL } from '../../../contant'
import TimeLineClock from "./TimeLineClock";
import { Trans } from "react-i18next";

const ItemTimeLine = (props) => {

    const { datas } = props
    const [startIndex, setStartIndex] = useState(null);
    useEffect(() => {
        if (datas && datas.length > 0) {
            if (startIndex === null) {
                for (var i = 0; i < datas.length; i++) {
                    if (checkBeforeTime(datas[i])) {
                        setStartIndex(i)
                        break
                    }
                }
            }
        }
    }, [startIndex]);

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            setStartIndex(null)
            return <div className="time-expected"><Trans>text_timeline_finished</Trans></div>;
        } else {
            return (
                <div className="time-running">
                    <span className="time-running-item">{hours < 10 ? "0" + hours : hours}</span>
                    <span className="time-separator">:</span>
                    <span className="time-running-item">{minutes < 10 ? "0" + minutes : minutes}</span>
                    <span className="time-separator">:</span>
                    <span className="time-running-item">{seconds < 10 ? "0" + seconds : seconds}</span>
                </div>
            )
        }
    };

    const settings = {
        slidesToScroll: 1,
        slidesToShow: 5,
        infinite:false,
        nextArrow:<NextArrow />
        // centerMode:true
    }

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <i onClick={onClick} className="icon_arrow las la-angle-right"></i>
        );
    }

    return (
        (datas && datas.length > 0) &&
        <div className="sales_timeline">
            <TimeLineClock>
                <span className="hours">00</span>&nbsp;:&nbsp;
                <span className="minutes">20</span>&nbsp;:&nbsp;
                <span className="seconds">35</span>
            </TimeLineClock>
            
            <div className="sales_timeline--times mb-3">
                <Slider {...settings}>
                {
                    datas.map((item, index) => (
                        index === startIndex ?
                        <div className={`sales_timeline--time ${checkBeforeTime(item) ? 'active' : ''}`} key={index}>
                            <div className="time-main">{convertDateHHmm(item)}</div>
                            <Countdown 
                                date={item}
                                renderer={renderer} />
                        </div> :
                        checkBeforeTime(item) ?
                        <div className="sales_timeline--time" key={index}>
                            <div className="time-main">{convertDateHHmm(item)}</div>
                            <div className="time-expected"><Trans>text_timeline_upcoming</Trans></div>
                        </div> :
                        <div className="sales_timeline--time" key={index}>
                            <div className="time-main">{convertDateHHmm(item)}</div>
                            <div className="time-expected"><Trans>text_timeline_finished</Trans></div>
                        </div>
                    ))
                }
                </Slider>
            
                

            </div>
        </div>
    )
}

export default ItemTimeLine;
