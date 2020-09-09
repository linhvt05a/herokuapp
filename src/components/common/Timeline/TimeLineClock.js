import React from "react";
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../contant";

const TimeLineClock = (props) => {
    return (
        <div className="sales_timeline--heading">
            <figure className="image">
                <img src={`${IMAGE_URL}images/clock.png`} />
            </figure>
            <span className="label"><Trans>text_timeline_the_end</Trans></span>
            <p className="date_number mb-0">
                {props.children}
            </p>
        </div>
    )
}

export default TimeLineClock;
