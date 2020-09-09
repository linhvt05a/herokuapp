import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { CardCartProductList, CardCartSummary } from './Layout/index';
import ModalCustom from '../../components/base/Modal/ModalCustom';
import { useHistory } from "react-router-dom";

const Cart = (props) => {
    let history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [state, setState] = useState({
        paymentProgressModalVisible: false,
        promotionModalVisible: false,
        accountModalVisible: false
    });
    const [check, setCheck] = React.useState({
        allProject: false,
        allProduct: [],
    })
    const showPaymentProgressModal = (isShow) => {
        setState({
            ...state,
            paymentProgressModalVisible: isShow,
            promotionModalVisible: false,
            accountModalVisible: false
        })
    }

    const showPromotionModal = (isShow) => {
        setState({
            ...state,
            paymentProgressModalVisible: false,
            promotionModalVisible: isShow,
            accountModalVisible: false
        })
    }

    const showAccountModal = (isShow) => {
        setState({
            ...state,
            accountModalVisible: isShow,
            promotionModalVisible: false,
            paymentProgressModalVisible: false
        })
    }

    const getPaymentProgressData = (data) => {
        // setState({
        //     ...state,
        //     paymentProgressModalVisible: false
        // })
        console.log("data", data);
        // data lay duoc sau khi luu
    }

    const getPromotionData = (data) => {
        // setState({
        //     ...state,
        //     promotionModalVisible: false
        // })
        // data lay duoc sau khi luu
    }

    const getAccountData = (data) => {
        // setState({
        //     ...state,
        //     accountModalVisible: false
        // })
        // data lay duoc sau khi luu
    }

    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 class="main_heading">
                    <span><Trans>cart_product_list</Trans></span>
                </h2>
                <div className="row">
                    <CardCartProductList showPaymentProgressModal={showPaymentProgressModal} showPromotionModal={showPromotionModal} check={check} setCheck={setCheck} />
                    <div className="col-12 col-sm-12 col-lg-4">
                        <CardCartSummary extend onNext={() => history.push("/cart/customer-info")} />
                    </div>
                </div>
            </div>
            {state.paymentProgressModalVisible &&
                <ModalCustom
                    visible={state.paymentProgressModalVisible}
                    widthModal="400px"
                    showPaymentProgressModal={showPaymentProgressModal}
                    onNext={() => showPromotionModal(true)}
                    dataOutput={getPaymentProgressData} />}

            {state.promotionModalVisible &&
                <ModalCustom
                    visible={state.promotionModalVisible}
                    widthModal="400px"
                    showPromotionModal={showPromotionModal}
                    onNext={() => showPromotionModal(false)}
                    dataOutput={getPromotionData} />}
            {/* {state.accountModalVisible &&
                <ModalCustom
                    visible={state.accountModalVisible}
                    widthModal="360px"
                    showAccountModal={showAccountModal}
                    onNext={() => history.push("/cart/customer-info")}
                    dataOutput={getAccountData} />} */}

        </div>
    )
}
export default Cart;
