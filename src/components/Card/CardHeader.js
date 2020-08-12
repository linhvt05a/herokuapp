import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { DropdownPurple } from "../base/Dropdown"

const CardHeader = props => {
    const [state, setState] = useState({
        valueSearch: ""
    });

    let { onSearch, classHeading, label, labelEnd, dropdown, searchBox, onClick } = props;

    return (
        <div className={classHeading ? classHeading : "m_heading"}>

            {/* heading */}
            <button className="m_button no-event">
                <span><Trans>{label}</Trans>{labelEnd}</span>
            </button>
            {/* end heading */}

            {/*dropdown purple */}
            {
                dropdown ?
                    <DropdownPurple datas={dropdown.data} label={dropdown.title} onClick={onClick} />
                    : null
            }
            {/*end dropdown purple */}


            {searchBox ?
                <div className="m_search">
                    <label className="m_search--label d-none  d-md-block"><Trans>{searchBox.title}</Trans></label>
                    <input name="project_name" id="filter-by-project-name" value={state.valueSearch} className="m_search--input" type="text" onChange={item => setState({ ...state, valueSearch: item.target.value })} />
                    <button className="m_search--button" type="button" id="search_by_name" onClick={() => onSearch(state.valueSearch)}><i className="fa fa-search" aria-hidden="true" ></i>
                    </button>
                </div> : null}
        </div>
    );
}

export default CardHeader;