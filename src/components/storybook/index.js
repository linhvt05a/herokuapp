/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Input, Select, Collapse } from 'antd';

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

const { Panel } = Collapse;
function callback(key) {
    console.log(key);
}
const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
`;

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

                    <Collapse defaultActiveKey={['1']} onChange={callback}>
                        <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3" disabled>
                        <p>{text}</p>
                        </Panel>
                    </Collapse>
                    
                </div>
            </div>
        </div>
    )
}

export default storyBook;