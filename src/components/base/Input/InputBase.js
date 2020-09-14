import React from 'react'
import { Input, Form } from 'antd';
import { Trans, useTranslation } from 'react-i18next';

const InputBase = (props) => {
    const { className, top, background, titleClassName, errors, name, value, label, addonAfter, addonBefore, placeholder, onChange, require, disabled, maxLength, style, type, unit, classNameUnit, ...attr } = props;
    const { t } = useTranslation("dsdasdasdasd");
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
                        {
                            unit ? <span class={classNameUnit ? classNameUnit : "unit"}>{unit}</span> : ""
                        }
                    </label>
                }
                <div className="input-group">
                    <Input
                        style={style ? style : { height: 48, backgroundColor: background }}
                        addonAfter={addonAfter}
                        addonBefore={addonBefore}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        type={type}
                        {...attr}
                        disabled={disabled ? disabled : undefined} />
                    <span style={{ color: 'red', fontSize: 12, marginTop: top }}>{errors}</span>
                </div>
            </div>
        </div>
    )
}



export default (InputBase);