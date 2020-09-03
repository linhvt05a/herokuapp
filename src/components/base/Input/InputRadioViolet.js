import React, { useState } from 'react'
import { Trans } from 'react-i18next'

const InputRadioViolet = (props) => {
    const { label, checked } = props
    const [state, setState] = useState({
        checked: false,
    });
    const radioOnChange = e => {
        setState({
            checked: e.target.checked,
        });
    }
    return (
        <label onChange={radioOnChange} className={state.checked ? "checkbox-inline active" : "checkbox-inline"} type="radio">
            <input type="radio" className="checkbox-custom" />
            <span className="checkbox-custom-dummy" />
            <Trans>{label}</Trans>
        </label>
    )
}

export default InputRadioViolet;