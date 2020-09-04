const TRANSLIST = 'TRANSACTION_LIST';
const TransProjectName = 'TRANS_PROJECT_NAME';
const TransAreaName = 'TRANS_AREA_NAME';
const TransBlockName = 'TRANS_BLOCK_NAME';
const TransProductType = 'TRANS_PRODUCT_TYPE';
const actions = {

    TRANSACTION_LIST_REQUEST: TRANSLIST + '_REQUEST',
    TRANSACTION_LIST_FAILURE: TRANSLIST + '_FAILURE',
    TRANSACTION_LIST_SUCCESS: TRANSLIST + '_SUCCESS',

    TRANS_PRODUCT_TYPE_REQUEST: TransProductType + '_REQUEST',
    TRANS_PRODUCT_TYPE_FAILURE: TransProductType + '_FAILURE',
    TRANS_PRODUCT_TYPE_SUCCESS: TransProductType + '_SUCCESS',

    TRANS_PROJECT_NAME_REQUEST: TransProjectName + '_REQUEST',
    TRANS_PROJECT_NAME_FAILURE: TransProjectName + '_FAILURE',
    TRANS_PROJECT_NAME_SUCCESS: TransProjectName + '_SUCCESS',
    
    TRANS_AREA_NAME_REQUEST: TransAreaName + '_REQUEST',
    TRANS_AREA_NAME_FAILURE: TransAreaName + '_FAILURE',
    TRANS_AREA_NAME_SUCCESS: TransAreaName + '_SUCCESS',
    
    TRANS_BLOCK_NAME_REQUEST: TransBlockName + '_REQUEST',
    TRANS_BLOCK_NAME_FAILURE: TransBlockName + '_FAILURE',
    TRANS_BLOCK_NAME_SUCCESS: TransBlockName + '_SUCCESS',
    

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

    
};
export default actions;