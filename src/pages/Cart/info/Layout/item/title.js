/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import DropdownPurple from "../../../../../components/dropdown/DropdownPurple"
import { Trans } from 'react-i18next';

const header = props => {
    const [value, setValue] = useState(
        ""
    );
    return (
        <div className="d-flex justify-content-between align-items-end">
            <div className="m_heading">
                <button className="m_button no-event"><span><Trans>Project</Trans></span></button>
                <DropdownPurple {...props} />
                <div className="m_search">
                    <label className="m_search--label d-none
                            d-md-block"><Trans>home_map_search</Trans></label>
                    <input name="project_name" id="filter-by-project-name" value={value} className="m_search--input" type="text" onChange={item => setValue(item.target.value)} />
                    <button className="m_search--button" type="button" id="search_by_name"><i className="fa fa-search" aria-hidden="true" onClick={() => props.SEARCH(value)}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default header;