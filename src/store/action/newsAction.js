
const actions = {
    NEWS_LIST_REQUEST: 'NEWS_LIST_REQUEST',
    NEWS_LIST_FAILURE: 'NEWS_LIST_FAILURE',
    NEWS_LIST_SUCCESS: 'NEWS_LIST_SUCCESS',

    NEWS_COMMENT_ADD_REQUEST: 'NEWS_COMMENT_ADD_REQUEST',
    NEWS_COMMENT_ADD_FAILURE: 'NEWS_COMMENT_ADD_FAILURE',
    NEWS_COMMENT_ADD_SUCCESS: 'NEWS_COMMENT_ADD_SUCCESS',

    NEWS_HOT_LIST_REQUEST: 'NEWS_HOT_LIST_REQUEST',
    NEWS_HOT_LIST_FAILURE: 'NEWS_HOT_LIST_FAILURE',
    NEWS_HOT_LIST_SUCCESS: 'NEWS_HOT_LIST_SUCCESS',

    NEWS_CATEGORIES_REQUEST: 'NEWS_CATEGORIES_REQUEST',
    NEWS_CATEGORIES_FAILURE: 'NEWS_CATEGORIES_FAILURE',
    NEWS_CATEGORIES_SUCCESS: 'NEWS_CATEGORIES_SUCCESS',

    
    NEWS_COMMENT_LIST_REQUEST: 'NEWS_COMMENT_LIST_REQUEST',
    NEWS_COMMENT_LIST_FAILURE: 'NEWS_COMMENT_LIST_FAILURE',
    NEWS_COMMENT_LIST_SUCCESS: 'NEWS_COMMENT_LIST_SUCCESS',

    NEWS_DETAIL_LIST_REQUEST: 'NEWS_DETAIL_LIST_REQUEST',
    NEWS_DETAIL_LIST_FAILURE: 'NEWS_DETAIL_LIST_FAILURE',
    NEWS_DETAIL_LIST_SUCCESS: 'NEWS_DETAIL_LIST_SUCCESS',

    NEWS_FILTER_REQUEST: 'NEWS_FILTER_REQUEST',
    NEWS_FILTER_FAILURE: 'NEWS_FILTER_FAILURE',
    NEWS_FILTER_SUCCESS: 'NEWS_FILTER_SUCCESS',

    LoadNewsList: (params) => ({
        type: actions.NEWS_LIST_REQUEST,
        params: params
    }),
   
    addComment: (params) => ({
        type: actions.NEWS_COMMENT_ADD_REQUEST,
        params: params
    }),

    hotNewsList: (params) => ({
        type: actions.NEWS_HOT_LIST_REQUEST,
        params: params
    }),

    newsCategories: (params) => ({
        type: actions.NEWS_CATEGORIES_REQUEST,
        params: params
    }),

    commentList: (params) => ({
        type: actions.NEWS_COMMENT_LIST_REQUEST,
        params: params
    }),

    LoadNewsDetail: (params) => ({
        type: actions.NEWS_DETAIL_LIST_REQUEST,
        params: params
    }),

    filterNews: (params) => ({
        type: actions.NEWS_FILTER_REQUEST,
        params: params
    }),
};

export default actions;