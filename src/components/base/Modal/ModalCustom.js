import React, { useState } from 'react';
import { Modal } from 'antd';
import { CardPaymentProgressModal, CardPromotionModal, CardAccountModal, CardNotificationModal } from '../../../templates/ShopCart/Layout'


const ModalCustom = (props) => {

    const { visible, widthModal, showPaymentProgressModal, showPromotionModal, showAccountModal, showNotification, dataOutput, onNext, status = false } = props
    const [isClearData, setClearData] = useState(false)
    const [show, setShow] = useState(0)
    const handleCancel = () => {
        setClearData(true)
        if (showPaymentProgressModal) {
            showPaymentProgressModal(false);
        } else if (showPromotionModal) {
            showPromotionModal(false)
        } else if (showAccountModal) {
            setShow(0)
            showAccountModal(false)
        } else if (showNotification) {
            showNotification(false)
        }
    };

    const afterClearData = () => {
        setClearData(false)
    }

    return (
        <Modal
            visible={visible}
            onCancel={handleCancel}
            style={{ maxWidth: widthModal }}>

            {
                showPaymentProgressModal &&
                <CardPaymentProgressModal onSaveClick={dataOutput} clearData={afterClearData} isClearData={isClearData} onNext={onNext} />
            }

            {
                showPromotionModal &&
                <CardPromotionModal onSaveClick={dataOutput} clearData={afterClearData} isClearData={isClearData} onNext={onNext} />
            }

            {
                showAccountModal &&
                <CardAccountModal tab={show} setTab={setShow} clearData={afterClearData} isClearData={isClearData} onNext={onNext} />
            }

            {
                showNotification &&
                <CardNotificationModal status={status} onNext={() => { return status ? null : showNotification(false) }} />
            }

        </Modal>
    )
}

export default ModalCustom;
