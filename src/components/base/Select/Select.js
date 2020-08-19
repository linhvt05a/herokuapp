import React from 'react';
import { Trans } from 'react-i18next';
import { Select, Form } from 'antd';

const InputSelect = (props) => {
    const { className, name, value, label, datas, placeholder, onChange, isClear, classNameGroup, trans, require, onSearch, disabled, titleClassName } = props;
    const { Option } = Select;
    const message = "Missing information"
    return (
        <div className={className ? className : ''}>
            <div className={classNameGroup ? classNameGroup : "form-group"}>
                {
                    label &&
                    <label className={titleClassName ? titleClassName : "fw-medium"}>
                        <Trans>{label}</Trans>
                        {
                            require ? <span class="uni_star_e94c4c"> *</span> : ""
                        }
                    </label>
                }
                <Form>
                    <Form.Item name={name} rules={[{ required: true, message: message }]}>
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
                    </Form.Item>
                </Form>
                
                

            </div>
        </div>
    )
}

export default InputSelect;

