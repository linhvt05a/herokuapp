import React from 'react';
import { Trans } from 'react-i18next';
import { Select, Form } from 'antd';
import { RULES } from '../../../contant';

const InputSelect = (props) => {
    const { className, name, value, defaultValue, label, errors, style, datas, placeholder, onChange, isClear,
        classNameGroup, trans, require, onSearch, disabled, titleClassName, classNameSelect, nameItem, noValidate } = props;
    const { Option } = Select;
    return (
        <div className={className ? className : ''}>
            <div className={classNameGroup ? classNameGroup : "form-group"}>
                {
                    label &&
                    <label className={titleClassName ? titleClassName : "fw-medium"}>
                        <Trans>{label}</Trans>
                        {
                            require ? <span className="star"> *</span> : ""
                        }
                    </label>
                }
                {
                    nameItem ?
                        <Form.Item name={nameItem} rules={noValidate ? null : RULES.text.form}>
                            <Select
                                defaultValue={defaultValue}
                                showSearch
                                onSearch={onSearch}
                                style={style ? style : { height: 48 }}
                                className={classNameSelect ? classNameSelect : "form-control"}
                                onChange={onChange}
                                filterOption={(input, option) => {
                                    return option.children.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                }
                                disabled={disabled}
                                // value={isClear ? null : value}
                                placeholder={<Trans>{placeholder}</Trans>}
                                children={datas && datas.map((e, key) => {
                                    return <Option name={name} key={key} value={e.value}>{trans ? <Trans>{e.label}</Trans> : e.label}</Option>;
                                })} />
                        </Form.Item> :
                        <Select
                            defaultValue={defaultValue}
                            showSearch
                            onSearch={onSearch}
                            style={style ? style : { height: 48 }}
                            className={classNameSelect ? classNameSelect : "form-control"}
                            onChange={onChange}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            disabled={disabled}
                            value={isClear ? null : value}
                            placeholder={<Trans>{placeholder}</Trans>}
                            children={datas && datas.map((e, key) => {
                                return <Option name={name} key={key} value={e.value}>{trans ? <Trans>{e.label}</Trans> : e.label}</Option>;
                            })} />}<br />
                <span style={{ color: 'red', fontSize: 12 }}><Trans>{errors}</Trans></span>
            </div>
        </div>
    )
}

export default InputSelect;

