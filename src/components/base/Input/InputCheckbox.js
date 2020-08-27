import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { Checkbox } from 'antd';

const InputCheckbox = (props) => {
    const { data, listCheckbox } = props;
    const [state, setState] = useState({
        checked: false,
    });
    const [click, setClick] = useState([]);
    const checkboxOnChange = (target, index) => {
        let newData = [].concat(click);
        if (target.checked) {
            newData[index] = { id: index, status: "active" }
        }
        else { newData[index] = { id: index, status: "" } }
        if(index === 0){
            setState({...state, checked: target.checked });
            listCheckbox(data.length, target.checked)
        } else {
            setClick(newData)
            listCheckbox(newData)
        }
    }
    return (
        <ul className="list-inline list-inline-sm list_checkbox_while">
            {data.length > 0 && data.map((item, index) => (
                <li key={index}>
                    <label onChange={event => checkboxOnChange(event.target, index)} 
                        className={`checkbox-inline checkbox-black ${click.length > 0 ? click[index] && click[index].status : null} ${state.checked ? 'active': '' }`}>
                        <input name="checkbox-1" value={item.value} type="checkbox" className="checkbox-custom" />
                        <span className="checkbox-custom-dummy" /><Trans>{item.label}</Trans>
                    </label>
                </li>
            ))}
        </ul>
    )
}

export default InputCheckbox;