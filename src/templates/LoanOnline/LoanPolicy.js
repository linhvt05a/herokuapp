import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AmountInformation, Banking, PaymentDetail, SidebarRight, FloatingRates, HeadingLine, contactAddAction, Loading, CardNoData } from './Layout';
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
    const [policy, setPolicy] = useState()
    const dataLoan = useSelector(state => state.contactAddReducer)
    const { loanPolicyData, isLoadingLoan, errorLoan, policyData, isLoadingPolicy } = dataLoan;
    const createImg = (id, image_url) => {
        return { id, image_url }
    }

    //call pai
    React.useEffect(() => {
        dispatch(contactAddAction.getLoanPolicy({ token: TOKEN, product_id: product_id }))
    }, [])
    //set data
    React.useEffect(() => {
        // console.log(loanPolicyData);
        let data = loanPolicyData;
        if (data) {
            if (data.product && data.banks && data.banks.length > 0) {
                let dataBank = [];
                for (let i in data.banks) {
                    dataBank.push(createImg(data.banks[i].bank_id, data.banks[i].bank_avatar))
                }
                setState({ ...state, product: data.product, banks: dataBank })
                clearData()
            }
        }

    }, [loanPolicyData])
    //auto tinh
    React.useEffect(() => {
        if (policyData) {
            setPolicy({ ...policyData, amountBorrow: policyData.minimum_loan_limit_money, tenor: policyData.minimum_loan_period });
            clearData()
        }
        // let { amount, amountBorrow, unitPay } = state
        // setState({ ...state, pay: (amount - (amountBorrow * unitPay)) != NaN ? amount - (amountBorrow * unitPay) : 0 })
    }, [policyData])

    const clearData = () => {
        dispatch(contactAddAction.clearDataLoan())
    }
    return (
        <div className="borrow bg_grey">
            <div className="container container-sm container-md">
                <HeadingLine headerBodyClassName="borrow--heading" labelHeader="Chính sách cho vay" />
                <div className="tab-content">
                    <div className="tab-pane fade active show" id="borrow01" role="tabpanel" aria-labelledby="borrow01-tab">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8">
                                <div className="borrow__wrap">
                                    {!isLoadingLoan ? state.product ? <AmountInformation data={state.product} setData={setState} /> : <CardNoData /> : <Loading />}
                                    {!isLoadingLoan ? state.banks && <Banking dataImgs={state.banks} dispatch={dispatch} actions={contactAddAction} token={TOKEN} /> : null}
                                    {!isLoadingPolicy ? policy && <FloatingRates data={policy} setData={setPolicy} onSubmit={() => setState({ ...state, onSubmit: true })} /> : <Loading />}
                                </div>
                            </div>
                            <SidebarRight data={policy} />
                        </div>
                        {state.onSubmit && <PaymentDetail data={Array.from(Array(20), (x, index) => index + 1)} />}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoanPolicy