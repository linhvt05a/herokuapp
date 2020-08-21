import React from 'react'
import { Trans } from 'react-i18next';

const InputCheckbox = (props) => {
    const [state, setState] = React.useState({
        checked: false,
    });
    const {label, checked } = props;
    const checkboxOnChange = e => {
        console.log(`checkbox = ${e.target.checked}`);
        setState({
            checked: e.target.checked,
        });
    }
    return (
        <label onChange={checkboxOnChange} className={`checkbox-inline checkbox-black ${ state.checked ? 'active' : '' }`} type="checkbox">
            <input name="checkbox-1" defaultValue={1} type="checkbox" className="checkbox-custom" />
            <span className="checkbox-custom-dummy" />{label}
        </label>
    )
}

export default InputCheckbox;