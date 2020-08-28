import { transactionAction } from '../action/index';

const initialState = {
    List: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case transactionAction.TRANSACTION_LIST_SUCCESS:
            return {
                ...state,
                List: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        case transactionAction.TRANSACTION_LIST_FAILURE:
            return {
                ...state,
                List: action.err,
                isFetching: false,
            };
        default:
            return state;
    }
}