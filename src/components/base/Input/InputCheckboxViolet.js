import React, { useState } from 'react'

const InputCheckboxViolet = (props) => {
    const [state, setState] = useState({
        checked: false,
    });
    const { checked } = props;
    const checkboxOnChange = e => {
        setState({
            checked: e.target.checked,
        });
    }
    return (
        <label onChange={checkboxOnChange} className="check-all" type="checkbox">
            <input defaultValue={1} type="checkbox" />
            <span className="checkmark" />
        </label>
    )
}

export default InputCheckboxViolet;