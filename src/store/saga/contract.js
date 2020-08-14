import { put, takeLatest } from "redux-saga/effects";
import { contractService } from '../../services/NewContract/services_contract';
import {
    PAYMENT_LIST_REQUEST,
    PAYMENT_LIST_SUCCESS,
    PAYMENT_LIST_FAILURE,
    POLICY_LIST_REQUEST,
    POLICY_LIST_SUCCESS,
    POLICY_LIST_FAILURE,
    POLICY_PROGRESS_LIST_REQUEST,
    POLICY_PROGRESS_LIST_SUCCESS,
    POLICY_PROGRESS_LIST_FAILURE,
} from '../actionType/contract';

export function* paymentList(payload) {
    console.log('payloadPaymentList', payload);
    const { token, productId, policyId, chosenDiscountId, initialAmount } = payload.payload;
    const product_id = productId;
    const payment_policy_id = policyId;
    const chosen_discount_id = chosenDiscountId;
    const initial_amount = initialAmount;
    try {
        const response = yield contractService.contractPayment(token, product_id, payment_policy_id, chosen_discount_id, initial_amount);
        response.success ? yield put({ type: PAYMENT_LIST_SUCCESS, response }) : yield put({ type: PAYMENT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: PAYMENT_LIST_FAILURE, err });
    }
}
export function* paymentListWatcher() {
    yield takeLatest(PAYMENT_LIST_REQUEST, paymentList);
}

export function* policyList(payload) {
    const { token, productId } = payload.payload;
    const product_id = productId;
    try {
        const response = yield contractService.policyPaymentForProduct(token, product_id);
        response.success ? yield put({ type: POLICY_LIST_SUCCESS, response }) : yield put({ type: POLICY_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: POLICY_LIST_FAILURE, err });
    }
}
export function* policyListWatcher() {
    yield takeLatest(POLICY_LIST_REQUEST, policyList);
}

export function* policyProgressList(payload) {
    const { token, productId, policyId } = payload.payload;
    const product_id = productId;
    const payment_policy_id = policyId;
    try {
        const response = yield contractService.policyPaymentProgressList(token, product_id, payment_policy_id);
        response.success ? yield put({ type: POLICY_PROGRESS_LIST_SUCCESS, response }) : yield put({ type: POLICY_PROGRESS_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: POLICY_PROGRESS_LIST_FAILURE, err });
    }
}
export function* policyProgressListWatcher() {
    yield takeLatest(POLICY_PROGRESS_LIST_REQUEST, policyProgressList);
}