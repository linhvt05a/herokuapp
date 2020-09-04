const commentList = 'COMMENT_LIST_';
const actions = {

    LOAD_LIST: commentList + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: commentList + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: commentList + 'LIST_SUCCESS',

    commentList: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;