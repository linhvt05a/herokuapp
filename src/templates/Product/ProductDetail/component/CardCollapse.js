

import React, { Component, useRef } from 'react'
import { Trans } from 'react-i18next';


const CardCollapse = (props) => {

    return (
        <div className="sales_collapse">
            <div className={`card ${props.active ? 'show' : ''}`}>
                <div className="card-header">
                    <h2 className="title">{props.title}</h2>
                    <div className="icon_action">
                        <i className="icon_collapse fas fa-plus" onClick={props.onClick} />
                    </div>
                </div>
                <div className="collapse">
                    {props.children}
                </div>
            </div>
        </div>
    )
}


export default CardCollapse;
