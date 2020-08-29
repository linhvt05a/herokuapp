import { transactionAction, productAction } from '../action/index';

const initialState = {
    transactionList: {},
    transacProductTypeList: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case transactionAction.TRANSACTION_LIST_SUCCESS:
            return {
                ...state,
                transactionList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        case transactionAction.TRANSACTION_LIST_FAILURE:
            return {
                ...state,
                transactionList: action.err,
                isFetching: false,
            };
        case transactionAction.TRANS_PRODUCT_TYPE_SUCCESS:
            return {
                ...state,
                transacProductTypeList: action.response,
                isFetching: true,
            };
        case transactionAction.TRANS_PRODUCT_TYPE_FAILURE:
            return {
                ...state,
                transacProductTypeList: action.err,
                isFetching: false,
            };
        default:
            return state;
    }
}