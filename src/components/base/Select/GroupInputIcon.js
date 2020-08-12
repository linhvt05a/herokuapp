import React from 'react'
import { Input, Select } from 'antd';
import { Trans } from 'react-i18next';

const GroupInputIcon = (props) => {
    const { className, titleClassName, disabled, label  } = props;
    return (
        <div className={className ? className : ''}>
            <div className="form-group">
                {
                    label &&
                    <label className={titleClassName ? titleClassName : "fw-medium"}>
                        <Trans>{label}</Trans>
                    </label>
                }
                <div className="input-group">
                    <Input addonAfter= {props.symbol} defaultValue={props.des} disabled />
                </div>
            </div>
        </div>
    )

}

export default GroupInputIcon;