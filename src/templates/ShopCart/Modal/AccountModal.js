import React, { useState, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Input, Form, Button } from 'antd';
import { translate } from '../../../functions/Utils';
import { accountAction } from '../../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { Login, ForgotPass, Registry } from "../Layout"

const CardAccountModal = (props) => {
    const { clearData, isClearData, tab, setTab, onNext } = props;

    useEffect(() => {
        if (isClearData) {
            clearData()
        }
    }, [isClearData])


    const renderTitle = () => {
        switch (tab) {
            case 0:
                return translate("cart_account")
            case 1:
                return translate("registry")
            case 3:
                return translate("forfot_pass")
            default:
                return translate("cart_account")
        }
    }
    return (
        <div className="modal-content modal_special">
            <div className="modal-header">
                <h5 className="modal-title">{renderTitle()}</h5>
            </div>
            <div className="tab-content">
                <div className={`tab-pane fade ${tab == 0 ? "show active" : ""}`}>
                    <Login showTap={setTab} onNext={onNext} />
                </div>
                <div className={`tab-pane fade ${tab == 1 ? "show active" : ""}`} >
                    <Registry />
                </div>
                <div className={`tab-pane fade ${tab == 3 ? "show active" : ""}`} >
                    <ForgotPass />
                </div>
            </div>
        </div>
    )
}

export default CardAccountModal;