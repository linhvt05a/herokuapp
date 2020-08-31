import React, { useState } from 'react';
import { Modal } from 'antd';
import { CardPaymentProgressModal, CardPromotionModal } from '../../../templates/ShopCart/Layout'


const ModalCustom = (props) => {

    const { visible, widthModal, showPaymentProgressModal, showPromotionModal, dataInput, dataOutput } = props
    const [isClearData, setClearData] = useState(false)

    const handleCancel = () => {
        setClearData(true)
        if (showPaymentProgressModal) {
            showPaymentProgressModal(false);
        } else if (showPromotionModal) {
            showPromotionModal(false)
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
                <CardPaymentProgressModal onSaveClick={dataOutput} clearData={afterClearData} isClearData={isClearData} />
            }
            
            {
                showPromotionModal &&
                <CardPromotionModal onSaveClick={dataOutput} clearData={afterClearData} isClearData={isClearData} />
            }

        </Modal>
    )
}

export default ModalCustom;
