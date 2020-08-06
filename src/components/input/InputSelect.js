import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Select } from 'antd';

const InputSelect = (props) => {
        const { className, optionClassName, label, datas, value, placeholder, onChange } = props;

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
                        value={value}
                        className="form-control"
                        placeholder={placeholder}
                        onChange={onChange}>
                        {
                            datas && datas.map((item, key) => {
                                <Option className="abc" value={item.value} key={key}>{item.label}</Option>
                            })
                        }
                    </Select>
                </div>
            </div>
        )
}

export default InputSelect;

