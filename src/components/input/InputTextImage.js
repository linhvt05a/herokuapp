import React from 'react'
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { withTranslation, Trans } from 'react-i18next';
import "antd/dist/antd.css";

const InputTextImage = (props) => {
    return (
            <Input addonAfter= {props.symbol} defaultValue= {props.des} />
    )

}

export default InputTextImage;