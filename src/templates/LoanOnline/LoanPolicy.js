import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AmountInformation, Banking, PaymentDetail, SidebarRight, FloatingRates, HeadingLine, contactAddAction } from './Layout';
import { TOKEN } from '../../functions/Utils';

const LoanPolicy = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    let { product_id, price } = history.location.state
    let [state, setState] = useState({
        onSubmit: false,
        // amountBorrow: 0,//vay
        // amount: 0,//tong
        // tenor: 0,//nam
        // maxTennor: 0,
        // pay: 0,//tra
        // preferentialTerm: 0,//uu dai
        // unitPay: 0,//don vi
        // interestIncentives: 0,//la uu dai
        // affterIncentives: 0//lai sau uu dai
    });
    let dataLoan = useSelector(state => state.contactAddReducer)
    let { loanPolicyData, isLoadingLoan, errorLoan } = dataLoan;
    //call pai
    React.useEffect(() => {
        dispatch(contactAddAction.getLoanPolicy({ token: TOKEN, product_id: product_id }))
    }, [])
    //set data
    React.useEffect(() => {
        console.log(loanPolicyData);
        let data = loanPolicyData;
        if (data) {
            if (data.product) {
                setState({ ...state, product: data.product })
            }
        }

    }, [loanPolicyData])
    //auto tinh
    React.useEffect(() => {
        // let { amount, amountBorrow, unitPay } = state
        // setState({ ...state, pay: (amount - (amountBorrow * unitPay)) != NaN ? amount - (amountBorrow * unitPay) : 0 })
    }, [state.amountBorrow])
    return (
        <div className="borrow bg_grey">
            <div className="container container-sm container-md">
                <HeadingLine headerBodyClassName="borrow--heading" labelHeader="Chính sách cho vay" />
                <div className="tab-content">
                    <div className="tab-pane fade active show" id="borrow01" role="tabpanel" aria-labelledby="borrow01-tab">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8">
                                <div className="borrow__wrap">
                                    {console.log(state)}
                                    {state.product && <AmountInformation data={state.product} setData={setState} />}
                                    <Banking />
                                    {/* <FloatingRates data={null} setData={setState} onSubmit={() => setState({ ...state, onSubmit: true })} /> */}
                                </div>
                            </div>
                            <SidebarRight data={null} />
                        </div>
                        {state.onSubmit && <PaymentDetail data={Array.from(Array(20), (x, index) => index + 1)} />}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoanPolicy