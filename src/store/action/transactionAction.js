const actions = {

    TRANSACTION_LIST_REQUEST: 'TRANSACTION_LIST_REQUEST',
    TRANSACTION_LIST_FAILURE: 'TRANSACTION_LIST_FAILURE',
    TRANSACTION_LIST_SUCCESS: 'TRANSACTION_LIST_SUCCESS',

    TRANS_PRODUCT_TYPE_REQUEST: 'TRANS_PRODUCT_TYPE_REQUEST',
    TRANS_PRODUCT_TYPE_FAILURE: 'TRANS_PRODUCT_TYPE_FAILURE',
    TRANS_PRODUCT_TYPE_SUCCESS: 'TRANS_PRODUCT_TYPE_SUCCESS',

    TRANS_PROJECT_NAME_REQUEST: 'TRANS_PROJECT_NAME_REQUEST',
    TRANS_PROJECT_NAME_FAILURE: 'TRANS_PROJECT_NAME_FAILURE',
    TRANS_PROJECT_NAME_SUCCESS: 'TRANS_PROJECT_NAME_SUCCESS',

    TRANS_AREA_NAME_REQUEST: 'TRANS_AREA_NAME_REQUEST',
    TRANS_AREA_NAME_FAILURE: 'TRANS_AREA_NAME_FAILURE',
    TRANS_AREA_NAME_SUCCESS: 'TRANS_AREA_NAME_SUCCESS',

    TRANS_BLOCK_NAME_REQUEST: 'TRANS_BLOCK_NAME_REQUEST',
    TRANS_BLOCK_NAME_FAILURE: 'TRANS_BLOCK_NAME_FAILURE',
    TRANS_BLOCK_NAME_SUCCESS: 'TRANS_BLOCK_NAME_SUCCESS',

    PROJECT_LIST_REQUEST: "FILTER_PROJECT_LIST_REQUEST",
    PROJECT_LIST_SUCCESS: "FILTER_PROJECT_LIST_SUCCESS",
    PROJECT_LIST_FAILURE: "FILTER_PROJECT_LIST_FAILURE",

    PROJECT_TYPE_REQUEST: "FILTER_PROJECT_TYPE_REQUEST",
    PROJECT_TYPE_SUCCESS: "FILTER_PROJECT_TYPE_SUCCESS",
    PROJECT_TYPE_FAILURE: "FILTER_PROJECT_TYPE_FAILURE",


    TransactionLoadList: (params) => ({
        type: actions.TRANSACTION_LIST_REQUEST,
        params: params
    }),

    loadTransProductTypeList: (params) => ({
        type: actions.TRANS_PRODUCT_TYPE_REQUEST,
        params: params
    }),

    transLoadProjectNameList: (params) => ({
        type: actions.TRANS_PROJECT_NAME_REQUEST,
        params: params
    }),

    transLoadAreaNameList: (params) => ({
        type: actions.TRANS_AREA_NAME_REQUEST,
        params: params
    }),

    transLoadBlockNameList: (params) => ({
        type: actions.TRANS_BLOCK_NAME_REQUEST,
        params: params
    }),
    getProjectList: (params) => ({
        type: actions.PROJECT_LIST_REQUEST,
        params
    }),
    getProjectType: (params) => ({
        type: actions.PROJECT_TYPE_REQUEST,
        params
    })

};
export default actions;