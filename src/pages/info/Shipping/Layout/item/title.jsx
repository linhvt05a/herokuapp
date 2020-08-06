/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import DropdownPurple from "../../../../../components/dropdown/DropdownPurple"

const header = props => {
    const [value, setValue] = useState(
        ""
    );
    return (
        <div className="d-flex justify-content-between align-items-end">
            <div className="m_heading">
                <button className="m_button no-event"><span>Dự Án</span></button>
                <DropdownPurple {...props} />
                <div className="m_search">
                    <label className="m_search--label d-none
                            d-md-block">Tên Dự Án</label>
                    <input name="project_name" id="filter-by-project-name" value={value} className="m_search--input" type="text" onChange={item => setValue(item.target.value)} />
                    <button className="m_search--button" type="button" id="search_by_name"><i className="fa fa-search" aria-hidden="true" onClick={() => props.SEARCH(value)}></i>
                    </button>
                </div>
            </div>
            <div className="dropdown m-action">
                <button style={{ height: `40px`, color: "#367be3", borderColor: "#367be3", borderWidth: `0.5px`, paddingLeft: `17px`, backgroundColor: "#FFFFFF" }} type="button" className="btn_dropdown_outline dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Hành động
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ borderColor: "#367be3", borderWidth: `0.5px`, borderRadius: 0 }}>
                    <a className="dropdown-item" href="#" style={{ color: "#367be3" }}>Thêm dự án</a>
                </div>
            </div>
        </div>
    )
}
export default header;