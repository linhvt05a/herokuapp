import React, { useEffect, useState } from "react";
import Countdown from 'react-countdown';
import { convertDateHHmm, checkBeforeTime } from '../../../functions/Utils'

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
            return <div className="time-expected">Đã kết thúc</div>;
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

    return (
        (datas && datas.length > 0) &&
        <div className="sales_timeline">
            <div className="sales_timeline--heading">
                <figure className="image">
                    <img src="../images/clock.png" />
                </figure>
                <span className="label">Kết thúc trong</span>
                <span className="date_number">2 ngày</span>
            </div>
            <div className="sales_timeline--times mb-3">
            {
                datas.map((item, index) => (
                    index === startIndex ?
                    <div className={checkBeforeTime(item) ? "sales_timeline--time active" : "sales_timeline--time"} key={index}>
                        <div className="time-main">{convertDateHHmm(item)}</div>
                        <Countdown 
                            date={item}
                            renderer={renderer} />
                    </div> :
                    checkBeforeTime(item) ?
                    <div className="sales_timeline--time" key={index}>
                        <div className="time-main">{convertDateHHmm(item)}</div>
                        <div className="time-expected">Sắp diễn ra</div>
                    </div> :
                    <div className="sales_timeline--time" key={index}>
                        <div className="time-main">{convertDateHHmm(item)}</div>
                        <div className="time-expected">Đã kết thúc</div>
                    </div>
                ))
            }
            <i className="icon_arrow las la-angle-right"></i>
            </div>
        </div>
    )
}

export default ItemTimeLine;
