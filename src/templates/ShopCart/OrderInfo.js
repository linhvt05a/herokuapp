import React from 'react';
import { ModalCustom, CardOrderDetail, CardBuyerInfo, CardCartSummary, CardCollapseProductList, CardBillInfomation, CardRemittanceReceipt } from "./Layout"
import { translate, getLocalStore } from '../../functions/Utils';
import { useHistory } from 'react-router-dom';

const OrderInfo = (props) => {
    let history = useHistory();
    const [visible, setVisible] = React.useState(false)
    const showNotification = (visible) => {
        setVisible(visible)
    }
    React.useEffect(() => {
        let user = getLocalStore("user")
        if (!user) {
            history.push("/");

        }
    }, [])
    const renderNote = () => {
        return (
            <ul className="list">
                <li className="list-item">
                    _ Vui lòng<b className="highlight">đặt cọc 50.000.000đ</b>theo thông tin chuyển khoản và tải lên Ủy nhiệm chi</li>
                <li className="list-item">
                    _ Sau<b className="highlight">10:30:05 - 27/02/2020</b>, nếu Minerva Online không nhận được tiền cọc và ủy nhiệm chi từ Quý khách, đơn hàng của Quý khách sẽ tự động bị hủy.</li>
            </ul>
        )
    }
    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading">
                    <span>Đơn hàng</span>
                </h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-8 main-cart__order">
                        <div className="block block__01">
                            <span className="label">
                                <i className="icon fas fa-question" />
                            </span>
                            {renderNote()}
                        </div>
                        <CardOrderDetail />
                        <CardBuyerInfo />
                        <CardBillInfomation />
                        <CardRemittanceReceipt />
                        <div className="text-center mb-4 mb-lg-0">
                            <button
                                data-toggle="modal"
                                data-target="#cartNoti"
                                className="btn_submit btn btn_red text-uppercase"
                                onClick={() => showNotification(true)}
                            > {translate("cart_deposit_product")}</button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4">
                        <CardCartSummary />
                        <CardCollapseProductList />
                    </div>
                </div>
            </div>
            <ModalCustom status={false} visible={visible} showNotification={showNotification} widthModal={`360px`} />
        </div>

    )
}
export default OrderInfo;