import React, { useEffect } from 'react';
import PaymentInfo from './PaymentInfo';
import HeaderPayment from './Header';
import { useDispatch, useSelector } from "react-redux";
import { paymentListRequest } from '../../../../../store/action/contract';
import { convertPaymentContract } from '../../../../../utils/ConvertData';
import { Link } from 'react-router-dom';
import Spinner from "../../../../../components/common/Spinner";
const PaymentWrapper = (props) => {
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx=';
    const contractStore = useSelector(state => state.contract); // get data from reducer
    const isPaymentFetching = contractStore.isFetching;
    const isPaymentSuccess = contractStore.paymentList.success;
    const paymentList = isPaymentSuccess ? convertPaymentContract(contractStore.paymentList.detail.policy) : null;
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])
    return (
        <div>
            <div className='create-contract__wrap'>
                <div className='create-contract__item collapse show'>
                    <HeaderPayment {...props} />
                    {isPaymentFetching &&
                        <Spinner />
                    }
                    {isPaymentSuccess && <PaymentInfo {...props} datas={paymentList} />}
                </div>
            </div>
            <div class="sales_list_button text-right">
                <button type="button" class="min-width-button min-height-40 btn-uni-delete">Hủy</button>
                <Link to='/product_card/new_contract/discount_option'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple-outline">Quay lại</button>
                </Link>
                <Link to='/product_card/new_contract/order_info'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple createContractNext">Tiếp theo</button>
                </Link>
            </div>
        </div>
    );
}

export default PaymentWrapper;