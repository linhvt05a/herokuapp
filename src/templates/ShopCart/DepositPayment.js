import React from 'react';
import { Trans } from 'react-i18next';
import { CardCartSummary, CardCollapseProductList, CardPayments } from './Layout'

const DepositPayment = (props) => {

    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 class="main_heading">
                    <span><Trans>cart_deposit_payment</Trans></span>
                </h2>
                <div className="row">
                <div className="col-12 col-sm-12 col-lg-8 main-cart__payment mb-4">
                        <CardPayments />
                        <div class="text-right mt-2">
                            <a class="btn btn_purple text-uppercase"><Trans>button_confirm</Trans></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4">
                        <CardCartSummary />
                        <CardCollapseProductList />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DepositPayment;
