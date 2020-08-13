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

const initialState = {
    paymentList: {},
    policyList : {},
    policyProgressList: {},
    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PAYMENT_LIST_REQUEST:
            return { ...state, isFetching: true, customerList: { success: false } };
        case PAYMENT_LIST_SUCCESS:
            return { ...state, isFetching: false, customerList: action.response };
        case PAYMENT_LIST_FAILURE:
            return { ...state, isFetching: false, customerList: { success: false, error: action.error } };

        case POLICY_LIST_REQUEST:
            return { ...state, isFetching: true, policyList: { success: false } };
        case POLICY_LIST_SUCCESS:
            return { ...state, isFetching: false, policyList: action.response };
        case POLICY_LIST_FAILURE:
            return { ...state, isFetching: false, policyList: { success: false, error: action.error } };

        case POLICY_PROGRESS_LIST_REQUEST:
            return { ...state, isFetching: true, policyProgressList: { success: false } };
        case POLICY_PROGRESS_LIST_SUCCESS:
            return { ...state, isFetching: false, policyProgressList: action.response };
        case POLICY_PROGRESS_LIST_FAILURE:
            return { ...state, isFetching: false, policyProgressList: { success: false, error: action.error } };

        default:
            return state;
    }
}