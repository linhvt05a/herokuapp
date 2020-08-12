import React, {memo}  from 'react';
import { Trans } from 'react-i18next';
import { InputText } from '../../../../components/input';

const CardInfo = (props) => {
    return (
        <div className="card square">
            <div className="card-body">
                <div className="row">
                    <InputText className="col-sm-6 col-md-6 col-lg-6" submitted={props.submitted} isEmpty required="true" value={props.data.name} label="Name" name="name" type="text" onChange={props.handleChange} />
                    <InputText className="col-sm-6 col-md-6 col-lg-6" submitted={props.submitted} isEmpty required="true" value={props.data.code} label="Code" name="code" type="text" onChange={props.handleChange} />
                </div>
                <div className="row">
                    <div className="col-12 text-right">
                        <button type="button" className=" btn-uni-cancel mr-3" onClick={props.onCancle}><Trans>Cancel</Trans></button>
                        <button type="submit" className="btn-uni-purple" aria-haspopup="true" onClick={
                            props.onSave}><Trans>Save</Trans></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(CardInfo)