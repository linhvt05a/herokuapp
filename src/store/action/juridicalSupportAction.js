const juridicalSupport = 'JURIDICAL_SUPPORT_';
const actions = {
    LOAD_LIST: juridicalSupport + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: juridicalSupport + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: juridicalSupport + 'LIST_SUCCESS',

    juridicalSupport: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;