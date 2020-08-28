import React from 'react';
import { Trans } from 'react-i18next';
import { CardCartProductList, CardCartSummary } from './Layout/index'

const Cart = (props) => {

    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 class="main_heading">
                    <span><Trans>cart_product_list</Trans></span>
                </h2>
                <div className="row">
                    <CardCartProductList />
                    <CardCartSummary />
                </div>
            </div>
        </div>
    )
}
export default Cart;
