const visitorAdd = 'VISITOR_';
const actions = {

    LOAD_LIST: visitorAdd + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: visitorAdd + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: visitorAdd + 'LIST_SUCCESS',

    visitorAdd: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;