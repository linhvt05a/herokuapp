import React from 'react'
import { Input, Form } from 'antd';
import { Trans } from 'react-i18next';

const InputBase = (props) => {
    const { className, titleClassName,errors, name, value, label, addonAfter, addonBefore, placeholder, onChange, require, disabled, maxLength, type, ...attr } = props;
    return (
        <div className={className ? className : ''}>
            <div className="form-group">
                {
                    label &&
                    <label className={titleClassName ? titleClassName : "fw-medium"}>
                        <Trans>{label}</Trans>
                        {
                            require ? <span class="uni_star_e94c4c"> *</span> : ""
                        }
                    </label>
                }
                <div className="input-group">
                                <Input
                                style={{height: 48}}
                                    addonAfter={addonAfter}
                                    addonBefore={addonBefore}
                                    onChange={onChange}
                                    placeholder={placeholder}
                                    value={value}
                                    name={name}
                                    type={type}
                                    {...attr}
                                    disabled={disabled ? disabled : undefined} /> 
                                    <span style={{color: 'red', fontSize: 12}}>{errors}</span>
                </div>
            </div>
        </div>
    )
}



export default InputBase;