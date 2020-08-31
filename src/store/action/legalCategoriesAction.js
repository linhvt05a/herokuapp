
const legalCate = 'LEGAL_CATEGORIES_';
const actions = {

    LOAD_LIST: legalCate + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: legalCate + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: legalCate + 'LIST_SUCCESS',

    legalCates: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;