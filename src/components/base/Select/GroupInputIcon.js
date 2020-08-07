import React from 'react'
import { Input, Select } from 'antd';
import { Trans } from 'react-i18next';

const GroupInputIcon = (props) => {
    const { className, name, value, label, datas, placeholder, onChange, isClear } = props;
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
                    <Input addonAfter= {props.symbol} defaultValue= {props.des} />
                </div>
                
            </div>
        </div>
    )

}

export default GroupInputIcon;