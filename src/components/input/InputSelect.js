/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Select, Option } from 'antd';


const InputSelect = (props) => {
    const { className, optionClassName, label, datas, value, placeholder, onChange } = props;
    console.log('props', props);

    return (
        <div className={className ? className : ''}>
            <div className="form-group">
                {
                    label &&
                    <label className="fw-medium">
                        <Trans>{label}</Trans>
                    </label>
                }

                <Select
                    showSearch
                    style={{ width: 200 }}
                    className="form-control"
                    placeholder="Select a option"
                    optionFilterProp="children"
                >
                    {datas && datas.map((e, key) => {
                        return <option key={key} value={e.value}>{e.label}</option>;
                    })}
                </Select>

            </div>
        </div>
    )
}
export default InputSelect;

