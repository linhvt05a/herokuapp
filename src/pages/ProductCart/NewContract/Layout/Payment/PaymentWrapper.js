import React from 'react';
import PaymentInfo from './PaymentInfo';
import HeaderPayment from './Header';
import { Link } from 'react-router-dom';
const PaymentWrapper = (props) => {
    return (
        <div>
            <div className='create-contract__wrap'>
                <div className='create-contract__item collapse show'>
                    <HeaderPayment />
                    <PaymentInfo />
                </div>
            </div>
            <div class="sales_list_button text-right">
                <button type="button" class="min-width-button min-height-40 btn-uni-delete">Hủy</button>
                <Link to='/product_card/new_contract/discount_option'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple-outline">Quay lại</button>
                </Link>
                <Link to='/product_card/new_contract/finish'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple createContractNext">Tiếp theo</button>
                </Link>
            </div>
        </div>
    );
}

export default PaymentWrapper;