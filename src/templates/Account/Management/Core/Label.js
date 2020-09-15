import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const Label = (props) => {
    let { icon, text } = props;
    return (
        <div className="col-12 col-sm-12 col-md-3">
            <label>
                <i className={`icon fas ${icon}`}></i>
                {text}
            </label>
        </div>
    )
}
export default Label;