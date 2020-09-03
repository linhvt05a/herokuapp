
const actions = {

    LEGAL_CATEGORIES_LIST_REQUEST: 'LEGAL_CATEGORIES_LIST_REQUEST',
    LEGAL_CATEGORIES_LIST_FAILURE: 'LEGAL_CATEGORIES_LIST_FAILURE',
    LEGAL_CATEGORIES_LIST_SUCCESS: 'LEGAL_CATEGORIES_LIST_SUCCESS',

    LEGAL_LIST_REQUEST: 'LEGAL_LIST_REQUEST',
    LEGAL_LIST_FAILURE: 'LEGAL_LIST_FAILURE',
    LEGAL__LIST_SUCCESS: 'LEGAL__LIST_SUCCESS',

    legalCates: (params) => ({
        type: actions.LEGAL_CATEGORIES_LIST_REQUEST,
        params: params
    }),

    legalList: (params) => ({
        type: actions.LEGAL_LIST_REQUEST,
        params: params
    }),


};
export default actions;
