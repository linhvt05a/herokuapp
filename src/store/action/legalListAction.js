const legalList = 'LEGAL_';
const actions = {

    LOAD_LIST: legalList + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: legalList + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: legalList + 'LIST_SUCCESS',

    legalList: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;