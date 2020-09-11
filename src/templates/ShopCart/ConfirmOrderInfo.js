import React from 'react';
import { Trans } from 'react-i18next';
import { CardCartSummary, CardCollapseProductList, CardBuyerInfo, CardAgreementForm } from './Layout'
import { useHistory } from 'react-router-dom';
import { getLocalStore } from '../../functions/Utils';

const ConfirmOrderInfo = (props) => {
    let history = useHistory()
    const [checked, setChecked] = React.useState({
        checkedBuyer: false,
        checkedAgreement: false,
        checkedInfomations: false
    })
    React.useEffect(() => {
        let user = getLocalStore("user")
        if (!user) {
            history.push("/cart")
        }
    }, [])
    const disableConfirm = () => {
        if (checked.checkedAgreement && checked.checkedBuyer && checked.checkedInfomations) {
            return false
        }
        return true
    }
    const onNext = () => {
        history.push("/cart/deposit-payment")
    }
    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 class="main_heading">
                    <span><Trans>cart_confirm_order_info</Trans></span>
                </h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-8 main-cart__confirm">
                        <CardBuyerInfo />
                        <CardAgreementForm STATE={({ checked, setChecked })} />
                        <div class="text-right mt-2 mb-45">
                            <button
                                class="btn btn_purple text-uppercase"
                                disabled={disableConfirm()}
                                onClick={() => onNext()}
                            ><Trans>button_confirm</Trans></button>
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
export default ConfirmOrderInfo;
