import React from "react";
import { Trans } from "react-i18next";

const ItemTimeLine = (props) => {
    return (
        <div className="sales_timeline timeline">
            <div className="sales_timeline--heading">
                <figure className="image">
                    <img src="../images/clock.png" />
                </figure>
                <span className="label"><Trans>Kết thúc trong</Trans></span>
                <p className="date_number">
                    <span className="hours">00</span>&nbsp;:&nbsp;
                    <span className="minutes">20</span>&nbsp;:&nbsp;
                    <span className="seconds">35</span>
                </p>
            </div>
        </div>
    )
}

export default ItemTimeLine;
