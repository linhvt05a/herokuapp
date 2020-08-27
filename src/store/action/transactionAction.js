const actions = {

    TRANSACTION_LIST_REQUEST: name + 'TRANSACTION_LIST_REQUEST',
    TRANSACTION_LIST_FAILURE: name + 'TRANSACTION_LIST_FAILURE',
    TRANSACTION_LIST_SUCCESS: name + 'TRANSACTION_LIST_SUCCESS',

    TransactionLoadList: (params) => ({
        type: actions.TRANSACTION_LIST_REQUEST,
        params: params
    }),

};
export default actions;