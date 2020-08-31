import React, { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { Radio, Input } from 'antd'

const CardPromotionModal = (props) => {

    const { onSaveClick, clearData, isClearData } = props
    const [selectedData, setSelectedData] = useState(null)
    const [isShowConvert, setShowConvert] = useState(null)

    useEffect(() => {
        setSelectedData(1)
        setShowConvert(false)
    }, [])

    useEffect(() => {
        if (isClearData) {
            setSelectedData(1)
            clearData()
        }
    }, [isClearData])

    const onSave = () => {
        onSaveClick(selectedData)
    }

    const onShowConvertClick = () => {
        setShowConvert(true)
    }

    return (
        <div className="modal-content modal_special">
            <div className="modal-header">
                <h5 className="modal-title"><Trans>cart_special_offers</Trans></h5>
            </div>
            <div className="modal-body m_slider save_product--modal-signin">
                <div className="form form_signInUp">
                    <div className="form-group form_forgot--info">
                        <Trans>cart_product_incentives</Trans>
                    </div>
                    <div className="form-group">
                        <div className="list_special_offers">
                            <div className="modal_icon_check">
                                <i className="fas fa-check" />
                            </div>
                            <div className="content_offers fw-medium">
                                Giảm 2% giá trị sản phẩm
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="list_special_offers">
                            <div className="modal_icon_check">
                                <i className="fas fa-check" />
                            </div>
                            <div className="content_offers fw-medium">
                                Tặng 1 lượng vàng 9999
                                <div className="link_change_money" style={{display: isShowConvert ? "none" : "block"}}>
                                    <a onClick={onShowConvertClick}><Trans>cart_converted_to_money</Trans></a>
                                </div>
                                <div className="redemption_form" style={{display: isShowConvert ? "block" : "none"}}>
                                    <div className="title color_656565"><i><Trans>cart_choose_the_form</Trans></i></div>
                                    <Radio.Group className="check_box_redemption">
                                        <Radio value={1}>Quà tặng</Radio>
                                        <Radio value={2}>
                                            Tiền
                                            <Input disabled value="150.000.000" type="text" className="form-form-control modal_color_red" />
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-0 text-center">
                        <a className="btn btn_green btn_signIn text-uppercase" onClick={onSave}>
                            <Trans>save</Trans>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPromotionModal;