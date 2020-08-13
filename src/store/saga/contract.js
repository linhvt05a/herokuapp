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
    const token = payload.payload.token;
    const search = payload.payload.search;
    try {
        const response = yield contractService.contractPayment(token, search);
        response.success ? yield put({ type: PAYMENT_LIST_SUCCESS, response }) : yield put({ type: PAYMENT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: PAYMENT_LIST_FAILURE, err });
    }
}
export function* paymentListWatcher() {
    yield takeLatest(PAYMENT_LIST_REQUEST, paymentList);
}

export function* policyList(payload) {
    const token = payload.payload.token;
    const search = payload.payload.search;
    try {
        const response = yield contractService.policyPaymentForProduct(token, search);
        response.success ? yield put({ type: POLICY_LIST_SUCCESS, response }) : yield put({ type: POLICY_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: POLICY_LIST_FAILURE, err });
    }
}
export function* policyListWatcher() {
    yield takeLatest(POLICY_LIST_REQUEST, policyList);
}

export function* policyProgressList(payload) {
    const token = payload.payload.token;
    const search = payload.payload.search;
    try {
        const response = yield contractService.policyPaymentForProduct(token, search);
        response.success ? yield put({ type: POLICY_PROGRESS_LIST_SUCCESS, response }) : yield put({ type: POLICY_PROGRESS_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: POLICY_PROGRESS_LIST_FAILURE, err });
    }
}
export function* policyProgressListWatcher() {
    yield takeLatest(POLICY_PROGRESS_LIST_REQUEST, policyProgressList);
}