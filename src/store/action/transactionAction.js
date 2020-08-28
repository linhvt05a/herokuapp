const TRANSLIST = 'TRANSACTION_LIST';
const TransProductType = 'TRANS_PRODUCT_TYPE';
const actions = {

    TRANSACTION_LIST_REQUEST: TRANSLIST + '_REQUEST',
    TRANSACTION_LIST_FAILURE: TRANSLIST + '_FAILURE',
    TRANSACTION_LIST_SUCCESS: TRANSLIST + '_SUCCESS',

    TRANS_PRODUCT_TYPE_REQUEST: TransProductType + '_REQUEST',
    TRANS_PRODUCT_TYPE_FAILURE: TransProductType + '_FAILURE',
    TRANS_PRODUCT_TYPE_SUCCESS: TransProductType + '_SUCCESS',

    TransactionLoadList: (params) => ({
        type: actions.TRANSACTION_LIST_REQUEST,
        params: params
    }),

    loadTransProductTypeList: (params) => ({
        type: actions.TRANS_PRODUCT_TYPE_REQUEST,
        params: params
    }),
};
export default actions;