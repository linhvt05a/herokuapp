import React from 'react'
import { Input, Form } from 'antd';
import { Trans, useTranslation } from 'react-i18next';

const InputBase = (props) => {
    const {
        className,
        top,
        background,
        titleClassName,
        errors,
        name,
        value,
        label,
        addonAfter,
        addonBefore,
        placeholder,
        onChange,
        require,
        disabled,
        style,
        type,
        unit,
        classNameUnit,
        classNameInput,
        ...attr } = props;

    const renderInput = () => {
        return (
            <div className="form-group">
                {
                    label &&
                    <label className={titleClassName ? titleClassName : "fw-medium"}>
                        <Trans>{label}</Trans>
                        {
                            require ? <span class="uni_star_e94c4c"> *</span> : ""

                        }
                        {
                            unit ? <span class={classNameUnit ? classNameUnit : "unit"}>({unit})</span> : ""
                        }
                    </label>
                }
                <div className="input-group">
                    <Input
                        className={classNameInput ? classNameInput : ""}
                        style={style ? style : { height: 48, backgroundColor: background }}
                        addonAfter={addonAfter}
                        addonBefore={addonBefore}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        type={type}
                        {...attr}
                        readOnly={props.readOnly ? props.readOnly : undefined}
                        disabled={disabled ? disabled : undefined} />
                    <span style={{ color: 'red', fontSize: 12, marginTop: top }}>{errors}</span>
                </div>
            </div>
        )
    }


    //return default
    if (className) {
        return (
            <div className={className}>
                {renderInput()}
            </div>
        )
    }
    else {
        return renderInput()
    }
    //end
}




export default (InputBase);