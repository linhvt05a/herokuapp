import {
    APPROVAL_LIST_REQUEST,
    APPROVAL_LIST_SUCCESS,
    APPROVAL_LIST_FAILURE,

    COMMENT_LIST_REQUEST,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_FAILURE
} from '../actionType/approval'

const initialState = {
    approveList: {},
    commentList: {},
    isFetching: false
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case APPROVAL_LIST_FAILURE:
        return { ...state, isFetching: false, approveList: { success: false } };
      case APPROVAL_LIST_SUCCESS:
        return { ...state, isFetching: false, approveList: action.response };
      case APPROVAL_LIST_REQUEST:
        return { ...state, isFetching: true, approveList: { success: false, error: action.err } };

        case COMMENT_LIST_FAILURE:
          return { ...state, isFetching: false, commentList: { success: false } };
        case COMMENT_LIST_SUCCESS:
          return { ...state, isFetching: false, commentList: action.response };
        case COMMENT_LIST_REQUEST:
          return { ...state, isFetching: true, commentList: { success: false, error: action.err } };
  
      default:
        return state;
    }
  }  