const commentAdd = 'COMMENT_ADD_';
const actions = {

    LOAD_LIST: commentAdd + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: commentAdd + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: commentAdd + 'LIST_SUCCESS',

    addComment: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;