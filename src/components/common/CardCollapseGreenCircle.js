

import React, { useState } from 'react'

const CardCollapse = (props) => {
    const [active, setActive] = useState(true);

    return (
        <div className="sales_collapse">
            <div className={`card ${active ? 'show' : ''}`}>
                <div className="card-header">
                    <h2 className="title">{props.title}</h2>
                    <div className="icon_action">
                        <i className="icon_collapse fas fa-plus" onClick={() => setActive(!active)} />
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
