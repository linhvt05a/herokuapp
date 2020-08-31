import React, { useState } from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import InputCheckbox from "../../../../components/base/Input/InputCheckbox";
import { PROJECT_SALE_GROUP } from "../../../../contant";

const ListCheckbox = (props) => {
    let { data, OnSearchProject, OnCheckbox } = props;
    // console.log(PROJECT_SALE_GROUP);
    const [state, setState] = useState({ checked: false });
    const [toggle, settoggleSearch] = useState(false);
    const [click, setClick] = useState([]);
    const checkboxOnChange = (target, index) => {
        let newData = [].concat(click);
        if (target.checked) {
            newData[index] = { id: index, status: "active" }
        }
        else { newData[index] = { id: index, status: "" } }
        if(index === 0){
            setState({...state, checked: target.checked });
            OnCheckbox(data, target.checked)
        } else {
            setClick(newData)
            OnCheckbox(newData)
        }
    }
    return (
        <div className="map_search--option">
            <div className={`search_option ${toggle ? "active" : ""}`}>
                <div className="search_option-header">
                    <div className={`search_option-toggle ${toggle ? "active" : ""}`} onClick={() => settoggleSearch(!toggle)} />
                    <p className="search_option-title">
                        <Trans>select_type_of_real_estate</Trans>
                    </p>
                </div>
                <div className="search_option-content">
                    <div className="search_option-content-inner">
                        <ul className="list-inline list-inline-sm list_checkbox_while">
                            {PROJECT_SALE_GROUP.length > 0 && PROJECT_SALE_GROUP.map((item, index) => (
                                <li key={index}>
                                    <label onChange={event => checkboxOnChange(event.target, index)} 
                                        className={`checkbox-inline checkbox-black ${click.length > 0 ? click[index] && click[index].status : null} ${state.checked ? 'active': '' }`}>
                                        <input name="checkbox-1" value={item.value === null ? "": item.value} type="checkbox" className="checkbox-custom" />
                                        <span className="checkbox-custom-dummy" /><Trans>{item.label}</Trans>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <a className="btn btn_green" onClick={OnSearchProject}>
                <Trans>search</Trans>
            </a>
        </div>
    )
}
export default ListCheckbox;