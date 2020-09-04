const hotNews = 'HOT_NEWS_';
const actions = {

    LOAD_LIST: hotNews + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: hotNews + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: hotNews + 'LIST_SUCCESS',

    hotNewsList: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;