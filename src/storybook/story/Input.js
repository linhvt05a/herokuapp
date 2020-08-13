/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Select } from 'antd';

import Input from '../../components/base/Input/Input';

const selectAfter = (
    <Select defaultValue="vnd" className="select-after">
        <Select.Option value="vnd">vnd</Select.Option>
        <Select.Option value="usd">usd</Select.Option>
    </Select>
);

const InputStory = props => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <Input
                        className="col-4"
                        value="000.000.000"
                        label="Input AddOn After"
                    />
                </div>
                <div className="row">
                    <Input
                        className="col-4"
                        label="Input AddOn After"
                        value="000.000.000"
                        addonAfter={selectAfter}
                    />
                    <Input
                        className="col-4"
                        label="Input AddOn Before"
                        value="000.000.000"
                        addonBefore = "0.1%"
                    />
                </div>
            </div>
        </div>
    )
}

export default InputStory;