import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Trans } from 'react-i18next';

import { CardCartProductList, CardCartSummary } from './Layout/index';
// import ModalCustom from '../../components/base/Modal/ModalCustom';
import { CardPaymentProgressModal, CardPromotionModal } from "./Layout"
import { getLocalStore } from '../../functions/Utils';


const Cart = (props) => {
    let history = useHistory();
    const [state, setState] = useState({
        paymentProgressModalVisible: false,
        promotionModalVisible: false,
        accountModalVisible: false,
        cart: {},
        onSubmit: false
    });
    const [check, setCheck] = React.useState({
        allProject: false,
        allProduct: [],
    })
    React.useEffect(() => {
        let cart = getLocalStore("buy_now_cart");
        if (cart) {
            setState({ ...state, cart: cart })
        }

    }, [])
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
    const onSubmit = () => {
        for (let i in check.allProduct) {
            for (let j in check.allProduct[i].product) {
                if (check.allProduct[i].product[j].checked) {
                    setState({ ...state, onSubmit: true })
                }
            }
        }
    }
    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading">
                    <span><Trans>cart_product_list</Trans></span>
                </h2>
                <div className="row">
                    <CardCartProductList
                        status={history.location.state}
                        showPaymentProgressModal={showPaymentProgressModal}
                        showPromotionModal={showPromotionModal}
                        check={check}
                        setCheck={setCheck}
                        datas={state.cart}
                        onSubmit={onSubmit} />
                    {state.onSubmit &&
                        <div className="col-12 col-sm-12 col-lg-4">
                            <CardCartSummary loanStatus={true} extend onNext={() => history.location.state ? history.push("/loan-online") : history.push("/cart/customer-info")} />
                        </div>}
                </div>
            </div>
            <CardPaymentProgressModal
                visible={state.paymentProgressModalVisible}
                widthModal="400px"
                setVisible={showPaymentProgressModal}
                onNext={() => showPromotionModal(true)}
                onSaveClick={getPaymentProgressData} />
            <CardPromotionModal
                visible={state.promotionModalVisible}
                widthModal="400px"
                setVisible={showPromotionModal}
                onNext={() => showPromotionModal(false)}
                onSaveClick={getPromotionData} />


        </div>
    )
}
export default Cart;
