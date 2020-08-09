/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Input, Select } from 'antd';

import InputSelect from '../base/Select/Select';
import InputDate from '../base/DatePicker/DatePicker';
import GroupInputSelect from '../base/Select/GroupInputSelect';
import GroupInputIcon from '../base/Select/GroupInputIcon';

const selectAfter = (
    <Select defaultValue="vnd" className="select-after">
        <Select.Option value="vnd">vnd</Select.Option>
        <Select.Option value="usd">usd</Select.Option>
    </Select>
);

const storyBook = props => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">

                    
                    <InputSelect
                        className="col-4"
                        placeholder="This is placeholder!!"
                        label="Label"
                    />
                    <InputDate
                        className="col-4"
                        label="Label"
                        name="birthday"
                        value='10/10/100'
                    />
                    <GroupInputSelect
                        className="col-4"
                        label="Label"
                        value="000.000.000"
                        addonAfter={selectAfter}
                    />
                    <GroupInputIcon
                        className="col-4"
                        label="Label"
                        value="000.000.000"
                        des = "0.1" symbol="%"
                    />



                </div>
            </div>
        </div>
    )
}

export default storyBook;