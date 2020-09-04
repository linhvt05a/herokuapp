const newsDetail = 'NEWS_DETAIL_';
const actions = {

    LOAD_LIST: newsDetail + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: newsDetail + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: newsDetail + 'LIST_SUCCESS',

    LoadNewsDetail: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;