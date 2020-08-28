import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { CardCartProductList, CardCartSummary } from './Layout/index'
import CardModal from '../../components/base/Modal/Modal'

const Cart = (props) => {

    const [state, setState] = useState({
        paymentProgressModalVisible: false
    });

    const showPaymentProgressModal = (isShow) => {
        setState({
            paymentProgressModalVisible: isShow
        })
    }

    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 class="main_heading">
                    <span><Trans>cart_product_list</Trans></span>
                </h2>
                <div className="row">
                    <CardCartProductList showPaymentProgressModal={showPaymentProgressModal} />
                    <CardCartSummary />
                </div>
            </div>
            <CardModal title="cart_payment_progress" visible={state.paymentProgressModalVisible} showPaymentProgressModal={showPaymentProgressModal} />
        </div>
    )
}
export default Cart;
