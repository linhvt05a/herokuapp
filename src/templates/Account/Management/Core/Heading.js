import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const Heading = (props) => {
    let { title, content } = props;
    return (
        <div className="heading">
            {title}
            <span className="sub">
                {content}
            </span>
        </div>
    )
}
export default Heading;