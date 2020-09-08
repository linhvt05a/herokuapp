import React from 'react';
import { Trans } from 'react-i18next';
import { CardCustomerInfo, CardCartSummary, CardCollapseProductList } from './Layout'
import { useHistory } from "react-router-dom";


const CustomerInfo = (props) => {
    let history = useHistory();

    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 class="main_heading">
                    <span><Trans>cart_customer_infor</Trans></span>
                </h2>
                <div className="row">
                    <CardCustomerInfo onNext={() => history.push("/cart/confirm-order-info")} />
                    <div className="col-12 col-sm-12 col-lg-4">
                        <CardCartSummary />
                        <CardCollapseProductList />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerInfo;
