import React from 'react';
import { Trans } from 'react-i18next';
import { Select } from 'antd';

const InputSelect = (props) => {
    const { className, name, value, label, datas, placeholder, onChange, isClear } = props;
    const { Option } = Select;
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
                    onChange={onChange}
                    value={isClear ? null : value}
                    placeholder={<Trans>{placeholder}</Trans>}

                    children={datas && datas.map((e, key) => {
                        return <Option className="ahihi" name={name} key={key} value={e.value}>{e.label}</Option>;
                    })} />

            </div>
        </div>
    )
}

export default InputSelect;

