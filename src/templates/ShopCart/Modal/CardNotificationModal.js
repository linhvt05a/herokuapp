import React from 'react';

const CardNotificationModal = props => {
    let { status, onNext } = props
    return (
        <div className={`modal-content modal_special ${status ? "success" : "fail"} main-cart__modal`}>
            {status ? <div className="modal-body save_product--modal-signin">
                <i className="icon las la-times" />
                <div className="title"> Đặt cọc thành công
                    <span className="sub">   Sản phẩm đã đặt mua thành công. <br />  Bạn có thể vào đơn hàng để kiểm tra lại </span>
                </div>
                <a className="btn btn_red text-uppercase" data-dismiss="modal" onClick={onNext}>Đơn hàng</a>
            </div> :
                <div className="modal-body save_product--modal-signin">
                    <i className="icon las la-times" />
                    <div className="title"> Đặt cọc thất bại
                <span className="sub">  Một số thông tin của bạn đã bị sai. <br />  Bạn hãy kiểm tra lại </span>
                    </div>
                    <a className="btn btn_red text-uppercase" data-dismiss="modal" onClick={onNext}>THỬ LẠI</a>
                </div>}

        </div>

    )
}
export default CardNotificationModal;