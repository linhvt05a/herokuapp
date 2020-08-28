import React from 'react';
import { Modal } from 'antd';
import { translate } from '../../../utils/Utils'

const CardModal = (props) => {

    const { title, visible, showPaymentProgressModal } = props

    const handleCancel = () => {
        showPaymentProgressModal(false);
    };

    return (
        <Modal
            visible={visible}
            onCancel={handleCancel}
            width="390px"
        >
            
        </Modal>
    )
}

export default CardModal;
