const newsCategories = 'NEWS_CATEGORIES_';
const actions = {

    LOAD_LIST: newsCategories + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: newsCategories + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: newsCategories + 'LIST_SUCCESS',

    newsCategories: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;