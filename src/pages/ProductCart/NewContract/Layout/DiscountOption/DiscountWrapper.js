import React, { useEffect } from 'react';
import DiscountList from './DiscountList';
import PriceTable from './PriceTable'
import { Link } from 'react-router-dom';
import { actionsCustomer } from '../../../../../store/action';
import { useDispatch, useSelector } from "react-redux";


const DiscountWrapper = (props) => {

    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    const dispatch = useDispatch();
    const customerStore = useSelector(state => state.customer);
    useEffect(() => {
        dispatch(actionsCustomer.requestCustomerPromotionContract({ token: token, product_id: 1790 }))
    }, []);

    const promotionSuccess = customerStore.promotionContract.success;
    const promotionListRes = promotionSuccess ? customerStore.promotionContract.detail : null;
    console.log('promotionListRes', promotionListRes);

    return (
        <div>
            <div class="create-contract__item collapse show" data-step="2">
                <div class="row">
                    <DiscountList />
                    <PriceTable />
                </div>
            </div>
            <div class="sales_list_button text-right">
                <button type="button" class="min-width-button min-height-40 btn-uni-delete">Hủy</button>
                <Link to='/product_card/new_contract/customer_info'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple-outline">Quay lại</button>
                </Link>
                <Link to='/product_card/new_contract/payment'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple createContractNext">Tiếp theo</button>
                </Link>
            </div>
        </div>
    );
}

export default DiscountWrapper;