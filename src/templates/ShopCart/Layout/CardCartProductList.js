import React from 'react';
import { Trans } from 'react-i18next';
import InputCheckboxViolet from '../../../components/base/Input/InputCheckboxViolet'
import { ItemProjectName, ItemProjectProduct } from '../Item/index'

const CardCartProductList = (props) => {

    const { showPaymentProgressModal, showPromotionModal } = props

    return (
        <div className="col-12 col-sm-12 col-lg-8 main-cart__order">
            <div class="block select-check fw-bold bg_white">
                <InputCheckboxViolet />
                <span class="title-project"><Trans>cart_select_all</Trans> (5 <Trans>cart_products</Trans>)</span>
                <div class="icon-trash">
                    <a href="#" class="fas fa-trash-alt"></a>
                </div>
            </div>
            <ItemProjectName />
            <div className="block bg_white apartment">
                <ItemProjectProduct showPaymentProgressModal={showPaymentProgressModal} showPromotionModal={showPromotionModal} />
                <ItemProjectProduct showPaymentProgressModal={showPaymentProgressModal} showPromotionModal={showPromotionModal} />
            </div>
        </div>
    )
}
export default CardCartProductList;
