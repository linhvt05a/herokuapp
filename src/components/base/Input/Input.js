import React from 'react'
import { Input } from 'antd';
import { Trans } from 'react-i18next';

const InputBase = (props) => {
    const { className, name, value, label, addonAfter, addonBefore, placeholder, onChange, ...attr } = props;
    return (
        <div className={className ? className : ''}>
            <div className="form-group">
                {
                    label &&
                    <label className="fw-medium">
                        <Trans>{label}</Trans>
                    </label>
                }
                <div className="input-group">
                    <Input
                        addonAfter= {addonAfter}
                        addonBefore= {addonBefore}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        {...attr}
                    />
                </div>
                
            </div>
        </div>
    )

}

export default InputBase;