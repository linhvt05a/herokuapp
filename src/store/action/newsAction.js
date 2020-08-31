const newsList = 'NEWS_';
const actions = {

    LOAD_LIST: newsList + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: newsList + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: newsList + 'LIST_SUCCESS',

    LoadNewsList: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;