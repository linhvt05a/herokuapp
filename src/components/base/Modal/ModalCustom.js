import React, { useState } from 'react';
import { Modal } from 'antd';
import { CardPaymentProgressModal, CardPromotionModal, CardAccountModal } from '../../../templates/ShopCart/Layout'


const ModalCustom = (props) => {

    const { visible, widthModal, showPaymentProgressModal, showPromotionModal, showAccountModal, dataInput, dataOutput } = props
    const [isClearData, setClearData] = useState(false)

    const handleCancel = () => {
        setClearData(true)
        if (showPaymentProgressModal) {
            showPaymentProgressModal(false);
        } else if (showPromotionModal) {
            showPromotionModal(false)
        } else if (showAccountModal) {
            showAccountModal(false)
        }
    };

    const afterClearData = () => {
        setClearData(false)
    }

    return (
        <Modal
            visible={visible}
            onCancel={handleCancel}
            width={widthModal}>

            {
                showPaymentProgressModal &&
                <CardPaymentProgressModal onSaveClick={dataOutput} clearData={afterClearData} isClearData={isClearData} onNext={() => showPromotionModal(true)} />
            }

            {
                showPromotionModal &&
                <CardPromotionModal onSaveClick={dataOutput} clearData={afterClearData} isClearData={isClearData} onNext={() => showAccountModal(true)} />
            }

            {
                showAccountModal &&
                <CardAccountModal clearData={afterClearData} isClearData={isClearData} onNext={() => showAccountModal(false)} />
            }

        </Modal>
    )
}

export default ModalCustom;
