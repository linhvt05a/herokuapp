import React, { useState } from 'react';
import { Trans } from 'react-i18next';

const urlAvar = "https://cloudapi.minerva.vn/cdn/sunnyworld-sale-dev/distribution_channel/avatardbdc1e6dc2ed8b441ed120200713111318.401990.jpg"
const CardAvatar = (props) =>{
    return (
        <div className={props.className}>
            <div className="m_heading">
                {/* BUTTON TITLE : BEGIN */}
                <button type="button" className="m_button no-event">
                    <span><Trans>{props.label}</Trans></span>
                </button>
                {/* BUTTON TITLE : END */}
            </div>
            <div className="card h-100 square ">
                <div className="card-body p-0">
                <div>
                    {props.avatarUrl === "" ? 
                    <img src={urlAvar} className="w-100" />
                    :<img src={props.avatarUrl} className="w-100" />
                }
                </div>
                </div>
            </div>
        </div>
    )
}
export default CardAvatar
