
const actions = {

    LEGAL_CATEGORIES_LIST_REQUEST: 'LEGAL_CATEGORIES_LIST_REQUEST',
    LEGAL_CATEGORIES_LIST_FAILURE: 'LEGAL_CATEGORIES_LIST_FAILURE',
    LEGAL_CATEGORIES_LIST_SUCCESS: 'LEGAL_CATEGORIES_LIST_SUCCESS',

    LEGAL_LIST_REQUEST: 'LEGAL_LIST_REQUEST',
    LEGAL_LIST_FAILURE: 'LEGAL_LIST_FAILURE',
    LEGAL_LIST_SUCCESS: 'LEGAL_LIST_SUCCESS',

    LEGAL_FORM_REQUEST: 'LEGAL_FORM_REQUEST',
    LEGAL_FORM_FAILURE: 'LEGAL_FORM_FAILURE',
    LEGAL_FORM_SUCCESS: 'LEGAL_FORM_SUCCESS',

    legalCates: (params) => ({
        type: actions.LEGAL_CATEGORIES_LIST_REQUEST,
        params: params
    }),

    legalList: (params) => ({
        type: actions.LEGAL_LIST_REQUEST,
        params: params
    }),
    legalFormSupport: (params) => ({
        type: actions.LEGAL_FORM_REQUEST,
        params: params
    }),

};
export default actions;
