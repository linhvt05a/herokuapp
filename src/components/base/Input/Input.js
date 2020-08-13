import React from 'react'
import { Input } from 'antd';
import { Trans } from 'react-i18next';

const InputBase = (props) => {
    const { className, titleClassName, name, value, label, addonAfter, addonBefore, placeholder, onChange, require, disabled, type, ...attr } = props;
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
                        addonAfter= {addonAfter}
                        addonBefore= {addonBefore}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        type={type}
                        {...attr}
                        disabled={disabled ? disabled : undefined} />
                </div>
            </div>
        </div>
    )
}

export default InputBase;