/* eslint-disable*/
import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Select } from 'antd';
import "antd/dist/antd.css";

const InputSelect = (props) => {
    const { className, optionClassName, label, datas, value, placeholder, onChange } = props;
    const { Option } = Select
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
                    placeholder={placeholder ? placeholder : "Select a option"}
                    optionFilterProp="children"
                >
                    {datas && datas.map((e, key) => {
                        return <Option key={key} value={e.value}>{e.label}</Option>;
                    })}
                </Select>

            </div>
        </div>
    )
}
export default InputSelect;

