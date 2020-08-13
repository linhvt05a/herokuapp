import React from 'react'
import { Input } from 'antd';
import { Trans } from 'react-i18next';

const GroupInputIcon = (props) => {
    const { className, titleClassName, disabled, label, require, placeholder } = props;
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
                    <Input addonAfter= {props.symbol} placeholder={placeholder} disabled />
                </div>
            </div>
        </div>
    )

}

export default GroupInputIcon;