import React from 'react';
import { Input } from 'antd';
import { Trans } from 'react-i18next';

const GroupInputSelect = (props) => {

	const { className, disabled, label } = props;
	
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
					<Input addonAfter={props.addonAfter} placeholder={props.placeholder} value={props.value} disabled={disabled ? disabled : undefined} />
				</div>
			</div>
		</div>
	)
}

export default GroupInputSelect;

