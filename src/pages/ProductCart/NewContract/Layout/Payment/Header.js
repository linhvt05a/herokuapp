import React, { useEffect, useState } from 'react';
import { Select, Input } from '../../../../../components/base';
import { useDispatch, useSelector } from "react-redux";
import { convertPolicyPayment, convertPolicyPaymentProgress } from "../../../../../utils/ConvertData";
import { policyListRequest, policyProgressListRequest, paymentListRequest } from '../../../../../store/action/contract';


const HeaderPayment = (props) => {
    const [policy, setPolicy] = useState('');
    const [discount, setDiscount] = useState('');
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx=';
    const contractStore = useSelector(state => state.contract); // get data from reducer
    const dispatch = useDispatch();
    const isPolicySuccess = contractStore.policyList.success;
    const policyList = isPolicySuccess ? convertPolicyPayment(contractStore.policyList.detail) : [];
    const isPolicyProgressSuccess = contractStore.policyProgressList.success;
    const policyProgressList = isPolicyProgressSuccess ? convertPolicyPaymentProgress(contractStore.policyProgressList.detail) : [];

    const productId = 1976;
    useEffect(() => {
        dispatch(policyListRequest({ token, productId }));
    }, []);
    const onChangePolicy = (value) => {
        setPolicy(value);
        dispatch(paymentListRequest({ token, productId, policyId: value }));
        dispatch(policyProgressListRequest({ token, productId, policyId: value }));
    }
    const onChangePolicyProgress = (value) => {
        setDiscount(value);
    }
    return (
        <div>
            <div class="d-flex align-items-center justify-content-between mb-3 mt-4">
                <div class="text-uppercase uni_text_6d30ab fw-medium fs-18">
                    THÔNG TIN THANH TOÁN
                </div>
                <table class="create-contract__table-summary">
                    <tfoot>
                        <tr>
                            <td>Giá ký HĐMB</td>
                            <td class="fs-16"><b>10.485.000.000 (vnd)</b></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="fw-medium w-auto">Chính sách <span class="uni_star_e94c4c">*</span></label>
                        <Select onChange={onChangePolicy}
                            datas={policyList}
                        />
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="fw-medium w-auto">Tiến độ thanh toán <span
                            class="uni_star_e94c4c">*</span></label>
                        <Select onChange={onChangePolicyProgress}
                            datas={policyProgressList}
                        />
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="fw-medium w-auto">Chiết khấu</label>
                        <Input addonAfter='%' disabled value={discount} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPayment;