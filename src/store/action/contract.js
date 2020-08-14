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

export const paymentListRequest = (payload) => ({
    type: PAYMENT_LIST_REQUEST,
    payload,
});
export const paymentListSuccess = (payload) => ({
    type: PAYMENT_LIST_SUCCESS,
    payload,
});
export const paymentListFailure = (payload) => ({
    type: PAYMENT_LIST_FAILURE,
    payload,
});

export const policyListRequest = (payload) => ({
    type: POLICY_LIST_REQUEST,
    payload,
});
export const policyListSuccess = (payload) => ({
    type: POLICY_LIST_SUCCESS,
    payload,
});
export const policyListFailure = (payload) => ({
    type: POLICY_LIST_FAILURE,
    payload,
});

export const policyProgressListRequest = (payload) => ({
    type: POLICY_PROGRESS_LIST_REQUEST,
    payload,
});
export const policyProgressListSuccess = (payload) => ({
    type: POLICY_PROGRESS_LIST_SUCCESS,
    payload,
});
export const policyProgressListFailure = (payload) => ({
    type: POLICY_PROGRESS_LIST_FAILURE,
    payload,
});