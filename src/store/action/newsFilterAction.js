const newsFilter = 'PROJECT_NEWS_FILTER_';
const actions = {

    LOAD_LIST: newsFilter + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: newsFilter + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: newsFilter + 'LIST_SUCCESS',

    filterNews: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;