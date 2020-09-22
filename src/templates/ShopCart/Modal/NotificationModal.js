import React from 'react';
import { Modal } from 'antd';

const CardNotificationModal = props => {
    let { status, onNext, onHistory, setVisible, visible, widthModal } = props
    return (
        <Modal
            visible={visible}
            onCancel={() => setVisible(false)}
            style={{ maxWidth: widthModal }}>
            <div className={`modal-content modal_special ${status ? "success" : "fail"} main-cart__modal`}>
                {status ? <div className="modal-body save_product--modal-signin">
                    <i className="icon las la-times" />
                    <div className="title"> Đặt cọc thành công
                    <span className="sub">   Sản phẩm đã đặt mua thành công. <br />  Bạn có thể vào đơn hàng để kiểm tra lại </span>
                    </div>
                    <a className="btn btn_red text-uppercase" data-dismiss="modal" onClick={onNext}>Đơn hàng</a>
                    <a className="btn  text-uppercase" data-dismiss="modal" onClick={onHistory}>NỘP HỒ SƠ VAY</a>
                </div> :
                    <div className="modal-body save_product--modal-signin">
                        <i className="icon las la-times" />
                        <div className="title"> Đặt cọc thất bại <span className="sub">  Một số thông tin của bạn đã bị sai. <br />  Bạn hãy kiểm tra lại </span>
                        </div>
                        <a className="btn btn_red text-uppercase" data-dismiss="modal" onClick={onNext}>THỬ LẠI</a>
                    </div>}
            </div>
        </Modal>

    )
}
export default CardNotificationModal;