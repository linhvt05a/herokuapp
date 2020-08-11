/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Select } from 'antd';

import InputSelect from '../../components/base/Select/Select';
import InputDate from '../../components/base/DatePicker/DatePicker';
import GroupInputAddOn from '../../components/base/Input/GroupInputAddOn';

const selectAfter = (
    <Select defaultValue="vnd" className="select-after">
        <Select.Option value="vnd">vnd</Select.Option>
        <Select.Option value="usd">usd</Select.Option>
    </Select>
);

const Input = props => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <InputSelect
                        className="col-4"
                        placeholder="This is placeholder!!"
                        label="Input"
                    />
                    <InputDate
                        className="col-4"
                        label="Date Picker"
                        name="birthday"
                        value='10/10/100'
                    />
                </div>
                <div className="row">
                    <GroupInputAddOn
                        className="col-4"
                        label="Input AddOn"
                        value="000.000.000"
                        addonAfter={selectAfter}
                    />
                    <GroupInputAddOn
                        className="col-4"
                        label="Input AddOn"
                        value="000.000.000"
                        addonAfter = "0.1" symbol="%"
                    />
                </div>
            </div>
        </div>
    )
}

export default Input;