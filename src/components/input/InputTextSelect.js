import React from 'react';
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);


const InputTextSelect = (props) =>{
    return (
        <Input addonAfter={props.addonAfter} placeholder= {props.placeholder} value = {props.value}/>
    )
}

export default InputTextSelect;
