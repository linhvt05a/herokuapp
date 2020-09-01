import React, { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { Input, Select } from 'antd'

const CardPaymentProgressModal = (props) => {

    const { onSaveClick, clearData, isClearData } = props
    const [state, setState] = useState({
        paymentProgress: null,
        paymentPolicy: null
    })

    useEffect(() => {
        setState({
            paymentProgress: 1,
            paymentPolicy: 1
        })
    }, [])

    useEffect(() => {
        if (isClearData) {
            setState({
                paymentProgress: 1,
                paymentPolicy: 1
            })
            clearData()
        }
    }, [isClearData])

    const getSelectedPaymentProgressData = (value) => {
        setState({
            ...state,
            paymentProgress: value
        })
    }

    const getSelectedPaymentPolicyData = (value) => {
        setState({
            ...state,
            paymentPolicy: value
        })
    }

    const onSave = () => {
        onSaveClick(state)
    }

    return (
        <div className="modal-content modal_special">
            <div className="modal-header">
                <h5 className="modal-title"><Trans>cart_payment_progress</Trans></h5>
            </div>
            <div className="modal-body m_slider save_product--modal-signin">
                <div className="form form_signInUp">
                    <div className="form-group">
                        <label className="col-form-label fw-medium modal_label_pay "><Trans>cart_payment_policy</Trans></label>
                        <Select className="form-control" value={state.paymentPolicy} onChange={getSelectedPaymentPolicyData}>
                            <Select.Option value={1}>Chính sách thanh toán A</Select.Option>
                            <Select.Option value={2}>Chính sách thanh toán B</Select.Option>
                            <Select.Option value={3}>Chính sách thanh toán C</Select.Option>
                        </Select>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label fw-medium modal_label_pay "><Trans>cart_deposit_amount</Trans>
                        <span className="fw-normal"> (<Trans>cart_dong</Trans>)</span></label>
                        <Input disabled value="100.000.000" type="text" className="form-control modal_color_red" /> 
                    </div>
                    <div className="form-group">
                        <label className="col-form-label fw-medium modal_label_pay "><Trans>cart_payment_progress</Trans></label>
                        <Select className="form-control" value={state.paymentProgress} onChange={getSelectedPaymentProgressData}>
                            <Select.Option value={1}>Thanh toán sớm 20%</Select.Option>
                            <Select.Option value={2}>Thanh toán sớm 30%</Select.Option>
                            <Select.Option value={3}>Thanh toán sớm 40%</Select.Option>
                        </Select>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label fw-medium modal_label_pay"><Trans>cart_discount</Trans></label>
                        <div className="modal_discount_input">
                            <Input disabled value="5" type="text" className="form-control" />
                            <Input disabled value="%" type="text" className="form-control modal_txt_percent" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label fw-medium modal_label_pay"><Trans>cart_discount_amount_1</Trans>
                        <span className="fw-normal"> (<Trans>cart_dong</Trans>)</span></label>
                        <Input disabled value="150.000.000" type="text" className="form-control modal_color_red" />
                    </div>
                    <div className="form-group">
                        <label className="col-form-label fw-medium modal_label_pay"><Trans>cart_payment_amount</Trans>
                        <span className="fw-normal "> (<Trans>cart_dong</Trans>)</span></label>
                        <Input disabled value="2.850.000.000" type="text" className="form-control modal_color_red" />
                    </div>
                    <div className="form-group mb-0 text-center">
                        <a className="btn btn_green btn_signIn text-uppercase" onClick={onSave}>
                            <Trans>button_save</Trans>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPaymentProgressModal;