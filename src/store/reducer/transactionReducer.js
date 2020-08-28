import { transactionAction, productAction } from '../action/index';

const initialState = {
    List: {},
    productTypeList: {},
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
        // case productAction.SELLING_PRODUCT_LIST_SUCCESS:
        //     return {
        //         ...state,
        //         sellingProductList: action.response,
        //         isFetching: true,
        //     };
        // case productAction.COMING_SOON_PRODUCT_LIST_SUCCESS:
        //     return {
        //         ...state,
        //         comingSoonProductList: action.response,
        //         isFetching: true,
        //     };
        case transactionAction.TRANS_PRODUCT_TYPE_SUCCESS:
            return {
                ...state,
                productTypeList: action.response,
                isFetching: true,
            };
        default:
            return state;
    }
}