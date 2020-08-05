import React from 'react';
import PaymentInfo from './PaymentInfo';
import CustomerInfo from './CustomerInfo';
import { Link } from 'react-router-dom';

const ContractFinish = () => {
    return(
        <div>
            <div className='create-contract__wrap'>
                <div className="create-contract__item collapse mb-5 mt-4 pl-3 pr-3 show">
                    <div className='row'>
                        <CustomerInfo />
                        <PaymentInfo />
                    </div>
                </div>
            </div>
            <div class="sales_list_button text-right">
                <button type="button" class="min-width-button min-height-40 btn-uni-delete">Hủy</button>
                <Link to='/product_card/new_contract/order_info'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple-outline">Quay lại</button>
                </Link>
                <Link to='/product_card/new_contract/finish'>
                    <button type="button" class="min-width-button min-height-40 btn-uni-purple createContractNext">Tiếp theo</button>
                </Link>
            </div>
        </div>

    );
}

export default ContractFinish;