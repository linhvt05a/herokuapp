import React from "react";

const ItemTimeLine = (props) => {

    return (
        <div className="sales_timeline">
            <div className="sales_timeline--heading">
                <figure className="image">
                    <img src="/assets/images/clock.png" />
                </figure>
                <span className="label">Kết thúc trong</span>
                <span className="date_number">2 ngày</span>
            </div>
            <div className="sales_timeline--times mb-3">
                <div className="sales_timeline--time active">
                    <div className="time-main">09:00</div>
                    <div className="time-running">
                        <span className="time-running-item">00</span>
                        <span className="time-separator">:</span>
                        <span className="time-running-item">22</span>
                        <span className="time-separator">:</span>
                        <span className="time-running-item">35</span>
                    </div>
                </div>
                <div className="sales_timeline--time">
                    <div className="time-main">12:00</div>
                    <div className="time-expected">Sắp diễn ra</div>
                </div>
                <div className="sales_timeline--time">
                    <div className="time-main">13:00</div>
                    <div className="time-expected">Sắp diễn ra</div>
                </div>
                <div className="sales_timeline--time">
                    <div className="time-main">15:00</div>
                    <div className="time-expected">Sắp diễn ra</div>
                </div>
                <div className="sales_timeline--time">
                    <div className="time-main">18:00</div>
                    <div className="time-expected">Sắp diễn ra</div>
                </div>
                <i className="icon_arrow las la-angle-right"></i>
            </div>
        </div>
    )
}

export default ItemTimeLine;
