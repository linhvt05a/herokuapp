import React, { useState } from 'react'
import { Trans } from 'react-i18next'

const InputCheckboxWhite = (props) => {
    const { label, checked } = props
    const [state, setState] = useState({
        checked: true,
    });
    const checkboxOnChange = e => {
        setState({
            checked: e.target.checked,
        });
    }
    return (
        <label onChange={checkboxOnChange} className={state.checked ? "checkbox-inline active" : "checkbox-inline"} type="checkbox">
            <input defaultValue={1} type="checkbox" className="checkbox-custom" />
            <span className="checkbox-custom-dummy" />
            <Trans>{label}</Trans>
        </label>
    )
}

export default InputCheckboxWhite;