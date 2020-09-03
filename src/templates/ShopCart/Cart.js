import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { CardCartProductList, CardCartSummary } from './Layout/index'
import ModalCustom from '../../components/base/Modal/ModalCustom'

const Cart = (props) => {

    const [state, setState] = useState({
        paymentProgressModalVisible: false,
        promotionModalVisible: false,
        accountModalVisible: false
    });

    const showPaymentProgressModal = (isShow) => {
        setState({
            ...state,
            paymentProgressModalVisible: isShow
        })
    }

    const showPromotionModal = (isShow) => {
        setState({
            ...state,
            promotionModalVisible: isShow
        })
    }

    const showAccountModal = (isShow) => {
        setState({
            ...state,
            accountModalVisible: isShow
        })
    }

    const getPaymentProgressData = (data) => {
        setState({
            ...state,
            paymentProgressModalVisible: false
        })
        console.log("data", data);
        // data lay duoc sau khi luu
    }

    const getPromotionData = (data) => {
        setState({
            ...state,
            promotionModalVisible: false
        })
        // data lay duoc sau khi luu
    }

    const getAccountData = (data) => {
        setState({
            ...state,
            accountModalVisible: false
        })
        // data lay duoc sau khi luu
    }

    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 class="main_heading">
                    <span><Trans>cart_product_list</Trans></span>
                </h2>
                <div className="row">
                    <CardCartProductList showPaymentProgressModal={showPaymentProgressModal} showPromotionModal={showPromotionModal} />
                    <div className="col-12 col-sm-12 col-lg-4">
                        <CardCartSummary extend />
                    </div>
                </div>
            </div>
            <ModalCustom visible={state.paymentProgressModalVisible} widthModal="400px" showPaymentProgressModal={showPaymentProgressModal} dataOutput={getPaymentProgressData} />
            <ModalCustom visible={state.promotionModalVisible} widthModal="400px" showPromotionModal={showPromotionModal} dataOutput={getPromotionData} />
            <ModalCustom visible={state.accountModalVisible} widthModal="360px" showAccountModal={showAccountModal} dataOutput={getAccountData} />
        </div>
    )
}
export default Cart;
