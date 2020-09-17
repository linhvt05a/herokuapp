import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeadingFilter from '../../components/common/HeadingLine';

import FloatingRates from './FloatingRates';
import { SidebarRight } from './SidebarRight/SidebarRight';
import { AmountInformation, Banking, PaymentDetail } from './Layout';
import { useLocation, useHistory } from 'react-router-dom';

const LoanPolicy = props => {
    let history = useHistory();
    console.log(history.location, props)
    const dispatch = useDispatch();
    let [state, setState] = useState({
        onSubmit: false,
        amountBorrow: 0,//vay
        amount: 3000000000,//tong
        tenor: 1,//nam
        maxTennor: 5,
        pay: 0,//tra
        preferentialTerm: 24,//uu dai
        unitPay: 1000000,//don vi
        interestIncentives: 6.12,//la uu dai
        affterIncentives: 11.00//lai sau uu dai
    })
    React.useEffect(() => {
        let { amount, amountBorrow, unitPay } = state
        setState({ ...state, pay: amount - (amountBorrow * unitPay) })
    }, [state.amountBorrow])
    return (
        <div className="borrow bg_grey">
            <div className="container container-sm container-md">
                <HeadingFilter headerBodyClassName="borrow--heading" labelHeader="Chính sách cho vay" />
                <div className="tab-content">
                    <div className="tab-pane fade active show" id="borrow01" role="tabpanel" aria-labelledby="borrow01-tab">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8">
                                <div className="borrow__wrap">
                                    <AmountInformation data={state} setData={setState} />
                                    <Banking />
                                    <FloatingRates data={state} setData={setState} onSubmit={() => setState({ ...state, onSubmit: true })} />
                                </div>
                            </div>
                            <SidebarRight data={state} />
                        </div>
                        {state.onSubmit && <PaymentDetail data={Array.from(Array(20), (x, index) => index + 1)} />}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoanPolicy