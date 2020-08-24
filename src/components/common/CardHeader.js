import React, { useState } from 'react';
import { Trans } from 'react-i18next';

const CardHeader = (props) =>{
    return(
        <h3 className="main_heading">
                <span><Trans>{props.label}</Trans></span>
        </h3>
    )
}

export default CardHeader
