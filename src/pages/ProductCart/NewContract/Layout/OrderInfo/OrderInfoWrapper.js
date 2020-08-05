import React from 'react';
import OtherTable from './OtherTable';
import PaymentFileTable from './PaymentFileTable';
import SaleContractTable from './SaleContractTable';
import { Link } from 'react-router-dom';

const OrderInfoWrapper = () => {
    return (
        <div>
            <div className='create-contract__wrap'>
                <div className='create-contract__item collapse show'>
                    <div className='mt-2'>
                        <SaleContractTable />
                        <PaymentFileTable />
                        <OtherTable />
                    </div>
                </div>
            </div>
            <div class="sales_list_button text-right">
                <button type="button" class="min-width-button min-height-40 btn-uni-delete">Hủy</button>
                <Link to='/product_card/new_contract/payment'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple-outline">Quay lại</button>
                </Link>
                <Link to='/product_card/new_contract/finish'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple createContractNext">Tiếp theo</button>
                </Link>
            </div>
        </div>
    );
}

export default OrderInfoWrapper;