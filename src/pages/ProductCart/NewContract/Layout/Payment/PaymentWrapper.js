import React from 'react';
import PaymentInfo from './PaymentInfo';
import HeaderPayment from './Header';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const PaymentWrapper = (props) => {
    // const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx';
    // const contractStore = useSelector(state => state.contract); // get data from reducer
    // const dispatch = useDispatch();
    // console.log('contractStore', contractStore);

    // const productId = 1790;
    // const paymentPolicyId = 188;
    // const chosenDiscountId = 0;
    // const initialAmount = 5600000000;
    // const onchangePolicy = (e) => {

    // }
    // useEffect(() => {
    //     dispatch(policyListRequest({ token, productId }));
    //     dispatch(policyProgressListRequest({ token, productId, paymentPolicyId }));
    // })
    return (
        <div>
            <div className='create-contract__wrap'>
                <div className='create-contract__item collapse show'>
                    <HeaderPayment {...props} />
                    <PaymentInfo {...props} />
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