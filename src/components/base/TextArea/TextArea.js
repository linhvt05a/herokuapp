import React from 'react'
import { Input } from 'antd';
import { Trans } from 'react-i18next';

const { TextArea } = Input;

const TextAreaBase = (props) => {
    const { className, titleClassName, label, placeholder, onChange, require, disabled, rows, cols } = props;
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
                <TextArea
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled ? disabled : undefined}
                    cols={cols}
                    rows={rows}
                />
            </div>
        </div>
    )

}

export default TextAreaBase;