import React, { useState } from 'react';
import { Modal } from 'antd';
import { translate } from '../../../functions/Utils';


const ModalCustom = (props) => {
    const { visible, widthModal, setVisible, title } = props
    const [isClearData, setClearData] = useState(false)
    const [show, setShow] = useState(0)

    const afterClearData = () => {
        setClearData(false)
    }

    return (
        <Modal
            visible={visible}
            onCancel={() => setVisible(false)}
            style={{ maxWidth: widthModal }}>
            <div className="modal-content modal_special">
                <div className="modal-header">
                    <h5 className="modal-title">{title ? translate(title) : translate("cart_payment_policy")}</h5>
                </div>
                {props.children}
            </div>
        </Modal>
    )
}

export default ModalCustom;
