import React from 'react';
import { Trans } from 'react-i18next';
import { Select } from 'antd';

const InputSelect = (props) => {

    const { className, titleClassName, name, value, label, datas, placeholder, onChange, isClear, trans, require } = props;
    const { Option } = Select;

    return (
        <div className={className ? className : ''}>
            <div className="form-group">
                {
                    label &&
                    <label className={titleClassName ? titleClassName : "fw-medium"}>
                        <Trans>{label}</Trans>
                        {
                            require ? <span class="uni_star_e94c4c"> *</span> : ""
                        }
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
                        return <Option name={name} key={key} value={e.value}>{trans ? <Trans>{e.label}</Trans> : e.label}</Option>;
                    })} />
            </div>
        </div>
    )
}

export default InputSelect;

