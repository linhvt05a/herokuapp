import React from 'react';
import { Trans } from 'react-i18next';
import { Select } from 'antd';

const InputSelect = (props) => {
    const { className, name, value, label, datas, placeholder, onChange, isClear, classNameGroup, onSearch, disabled, trans } = props;
    const { Option } = Select;
    return (
        <div className={className ? className : ''}>
            <div className={classNameGroup ? classNameGroup : "form-group"}>
                {
                    label &&
                    <label className="fw-medium">
                        <Trans>{label}</Trans>
                    </label>
                }

                <Select
                    showSearch
                    onSearch={onSearch}
                    style={{ width: 200 }}
                    className="form-control"
                    onChange={onChange}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    disabled={disabled}
                    value={isClear ? null : value}
                    placeholder={<Trans>{placeholder}</Trans>}
                    children={datas && datas.map((e, key) => {
                        return <Option name={name} key={key} value={e.value}>{trans ? <Trans>{e.label}</Trans> : e.label}</Option>;
                    })} />

            </div>
        </div>
    )
}

export default InputSelect;

