import React, { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { Radio, Input } from 'antd'
import { translate } from '../../../functions/Utils';
import { InputCurrency, ModalCustom } from "../Layout"


const CardPromotionModal = (props) => {

    const { onSaveClick, clearData, isClearData, onNext } = props
    const [selectedData, setSelectedData] = useState(null)
    const [isShowConvert, setShowConvert] = useState(null)
    const [value, setValue] = useState(150000000)
    useEffect(() => {
        setSelectedData(null)
        setShowConvert(false)
    }, [])

    useEffect(() => {
        if (isClearData) {
            setSelectedData(null)
            clearData()
        }
    }, [isClearData])

    const onSave = () => {
        onSaveClick(selectedData);
        onNext()
    }

    const onShowConvertClick = () => {
        setShowConvert(true)
    }

    const onFormChange = (e) => {
        setSelectedData(e.target.value);
    }
    const onChange = (value) => {
        setValue(value)
    }
    return (
        <ModalCustom title="cart_special_offers" {...props}>
            <div className="modal-body m_slider save_product--modal-signin">
                <div className="form form_signInUp">
                    <div className="form-group form_forgot--info">
                        <Trans>cart_product_incentives</Trans>
                    </div>
                    <div className="list_style_02">
                        <div className="list_style_02--item">
                            {/* <div className="modal_icon_check">
                                <i className="fas fa-check" />
                            </div> */}
                            <div className="content_offers fw-medium">
                                Giảm 2% giá trị sản phẩm
                            </div>
                        </div>
                        <div className="list_style_02--item">
                            {/* <div className="modal_icon_check">
                                <i className="fas fa-check" />
                            </div> */}
                            <div className="content_offers fw-medium">
                                Tặng 1 lượng vàng 9999
                                <div className="link_change_money" style={{ display: isShowConvert ? "none" : "block" }}>
                                    <a onClick={onShowConvertClick}><Trans>cart_converted_to_money</Trans></a>
                                </div>
                                <div className="redemption_form" style={{ display: isShowConvert ? "block" : "none" }}>
                                    <div className="title color_656565"><i><Trans>cart_choose_the_form</Trans></i></div>
                                    <Radio.Group onChange={onFormChange} value={selectedData} className="check_box_redemption">
                                        <Radio className="checkbox-inline style_04" value={1}>Quà tặng</Radio>
                                        <Radio value={2} className="check_money align-items-baseline">
                                            Tiền
                                            <Input readOnly disabled={selectedData != 2 ? true : false} defaultValue="150.000.000" type="text" className="form-control modal_color_red" />
                                            {/* <InputCurrency
                                                disabled={selectedData != 2 ? true : false}
                                                value={value}
                                                onChange={onChange}
                                                type="text"
                                                readOnly={true}
                                                className="form-control modal_color_red" /> */}
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-0 text-center">
                        <a className="btn btn_green btn_signIn text-uppercase" onClick={onSave}>
                            {translate("save")}
                        </a>
                    </div>
                </div>
            </div>
        </ModalCustom>
    )
}

export default CardPromotionModal;