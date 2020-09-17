import React from 'react';
import { Trans } from 'react-i18next';
import { InputCheckboxWhite } from '../../../components/base'

const CardAgreementForm = (props) => {
    let { checked, setChecked } = props.STATE
    return (
        <div className="block block__02">
            <h3 className="block__heading">
                <Trans>cart_deposit_agreement_form</Trans>
                <span className="noted"><Trans>cart_note_5</Trans></span>
            </h3>
            <div className="contract">
                <div className="contract__image">
                    <figure className="contract__img">
                        <img src="../images/hopdong.png" />
                    </figure>
                    <span className="contract__icons">
                        <i className="icon fas fa-download" />
                        <i className="icon fas fa-expand-arrows-alt" />
                    </span>
                </div>
                <div className="contract__rules">
                    <InputCheckboxWhite label="cart_note_6" checked={checked.checkedBuyer} onChange={check => setChecked({ ...checked, checkedBuyer: check })} />
                    <InputCheckboxWhite label="cart_note_7" checked={checked.checkedAgreement} onChange={check => setChecked({ ...checked, checkedAgreement: check })} />
                    <InputCheckboxWhite label="cart_note_8" checked={checked.checkedInfomations} onChange={check => setChecked({ ...checked, checkedInfomations: check })} />
                </div>
            </div>
        </div>
    )
}

export default CardAgreementForm;
