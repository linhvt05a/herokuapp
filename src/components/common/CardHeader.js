import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { DropdownPurple } from "../dropdown"

const CardHeader = props => {
    const [state, setState] = useState({
        valueSearch: ""
    });
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
                    <DropdownPurple datas={props.dropdown.data} label={props.dropdown.title} onClick={props.onClick} />
                    : null
            }
            {/*end dropdown purple */}


            {props.searchBox ?
                <div className="m_search">
                    <label className="m_search--label d-none  d-md-block"><Trans>{props.searchBox.title}</Trans></label>
                    <input name="project_name" id="filter-by-project-name" value={state.valueSearch} className="m_search--input" type="text" onChange={item => setState({ ...state, valueSearch: item.target.value })} />
                    <button className="m_search--button" type="button" id="search_by_name"><i className="fa fa-search" aria-hidden="true" onClick={() => props.SEARCH(state.valueSearch)}></i>
                    </button>
                </div> : null}
        </div>
    );
}

export default CardHeader;