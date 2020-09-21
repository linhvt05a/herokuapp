import { transactionAction, productAction } from '../action/index';

const initialState = {
    transactionList: {},
    transacProductTypeList: {},
    transacProjectNameList: {},
    transacAreaNameList: [],
    transacBlockNameList: [],
    error: false,
    projectList: [],
    projectType: [],
    isLoadingList: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case transactionAction.TRANSACTION_LIST_REQUEST:
            return {
                ...state,
                transactionList: {},
                isLoadingList: true,
                error: false
            };
        case transactionAction.TRANSACTION_LIST_SUCCESS:
            return {
                ...state,
                transactionList: action.response,
                isFetching: true,
                isLoadingList: false,
                error: false
            };
        case transactionAction.TRANSACTION_LIST_FAILURE:
            return {
                ...state,
                transactionList: action.err,
                isFetching: false,
                error: true,
                isLoadingList: false,
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
        case transactionAction.TRANS_PROJECT_NAME_SUCCESS:
            return {
                ...state,
                transacProjectNameList: action.response,
                isFetching: true,
            };
        case transactionAction.TRANS_PROJECT_NAME_FAILURE:
            return {
                ...state,
                transacProjectNameList: action.err,
                isFetching: false,
            };
        case transactionAction.TRANS_AREA_NAME_REQUEST:
            return {
                ...state,
                transacAreaNameList: [],
                transacBlockNameList: [],
            };
        case transactionAction.TRANS_AREA_NAME_SUCCESS:
            return {
                ...state,
                transacAreaNameList: action.response.detail,
                isFetching: true,
            };
        case transactionAction.TRANS_AREA_NAME_FAILURE:
            return {
                ...state,
                transacAreaNameList: action.err,
                isFetching: false,
            };
        case transactionAction.TRANS_BLOCK_NAME_REQUEST:
            return {
                ...state,
                transacBlockNameList: [],

            };
        case transactionAction.TRANS_BLOCK_NAME_SUCCESS:
            return {
                ...state,
                transacBlockNameList: action.response.detail,
                isFetching: true,
            };
        case transactionAction.TRANS_BLOCK_NAME_FAILURE:
            return {
                ...state,
                transacBlockNameList: action.err,
                isFetching: false,
            };
        case transactionAction.PROJECT_LIST_REQUEST:
            return {
                ...state,
                projectList: [],
                success: false
            }
        case transactionAction.PROJECT_LIST_SUCCESS:
            return {
                ...state,
                projectList: action.response.detail,
                success: true
            }
        case transactionAction.PROJECT_LIST_FAILURE:
            return {
                ...state,
                projectList: action.err,
                success: true,
                errorProject: true
            }
        case transactionAction.PROJECT_TYPE_REQUEST:
            return {
                ...state,
                projectType: [],
                success: false
            }
        case transactionAction.PROJECT_TYPE_SUCCESS:
            return {
                ...state,
                projectType: action.response.detail,
                success: true
            }
        case transactionAction.PROJECT_TYPE_FAILURE:
            return {
                ...state,
                projectType: action.err,
                success: true,
                errorType: true
            }
        default:
            return state;
    }
}