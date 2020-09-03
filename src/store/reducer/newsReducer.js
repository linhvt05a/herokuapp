import { newsAction } from "../action";

const initialState = {
  newsList: [],
  newsCommentAdd: [],
  newsHotList: [],
  newsCategories: [],
  newsDetail: [],
  newsFilter: [],
  newsCommentList: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case newsAction.NEWS_LIST_SUCCESS:
      return {
        ...state,
        newsList: action.response,
        isFetching: true,
        isLoadingList: false,
      };
    case newsAction.NEWS_COMMENT_ADD_SUCCESS:
      return {
        ...state,
        newsCommentAdd: action.response,
        isFetching: true,
        isLoadingList: false,
      };

    case newsAction.NEWS_HOT_LIST_SUCCESS:
      return {
        ...state,
        newsHotList: action.response,
        isFetching: true,
        isLoadingList: false,
      };

    case newsAction.NEWS_CATEGORIES_SUCCESS:
      return {
        ...state,
        newsCategories: action.response,
        isFetching: true,
        isLoadingList: false,
      };

      case newsAction.NEWS_DETAIL_LIST_SUCCESS:
      return {
        ...state,
        newsDetail: action.response,
        isFetching: true,
        isLoadingList: false,
      };

      case newsAction.NEWS_FILTER_SUCCESS:
      return {
        ...state,
        newsFilter: action.response,
        isFetching: true,
        isLoadingList: false,
      };

      case newsAction.NEWS_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        newsCommentList: action.response,
        isFetching: true,
        isLoadingList: false,
      };
    default:
      return state;
  }
};
