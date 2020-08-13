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
    customerList: { success:false },
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

        default:
            return state;
    }
}