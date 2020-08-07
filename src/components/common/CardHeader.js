import React from 'react';
import { Trans } from 'react-i18next';
import { DropdownPurple } from "../dropdown"

const CardHeader = props => {
    return (
        <div className={props.classHeading ? props.classHeading : "m_heading"}>

            {/* heading */}
            <button className="m_button no-event">
                <span><Trans>{props.label}</Trans>{props.labelEnd}</span>
            </button>
            {/* end heading */}

            {/*dropdown purple */}
            {
                props.dropdown ?
                    <DropdownPurple datas={props.dropdown.data} label={props.dropdown.title} />
                    : null
            }
            {/*end dropdown purple */}

        </div>
    );
}

export default CardHeader;