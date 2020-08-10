import React from 'react';
import { Input, Select } from 'antd';
import { Trans } from 'react-i18next';

const { Option } = Select;

const selectBefore = (
	<Select defaultValue="http://" className="select-before">
		<Option value="http://">http://</Option>
		<Option value="https://">https://</Option>
	</Select>
);


const GroupInputSelect = (props) => {

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
				<div className="input-group input-group-select">
					<Input addonAfter={props.addonAfter} placeholder={props.placeholder} value={props.value} />
				</div>
			</div>
		</div>
	)
}

export default GroupInputSelect;

