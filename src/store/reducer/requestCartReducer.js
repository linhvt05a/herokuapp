import {
    REQUEST_DATA_REQUEST,
    REQUEST_DATA_SUCCESS,
    REQUEST_DATA_FAILURE,

    PROMOTION_LIST_REQUEST,
    PROMOTION_LIST_SUCCESS,
    PROMOTION_LIST_FAILURE
  } from '../actionType/requestCart';
  
  const initialState = {
    requestData: {},
    promotionList: {},
    isFetching: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_DATA_REQUEST:
        return { ...state, isFetching: true, requestData: { success: false } };
      case REQUEST_DATA_SUCCESS:
        return { ...state, isFetching: false, requestData: action.response };
      case REQUEST_DATA_FAILURE:
        return { ...state, isFetching: false, requestData: { success: false, error: action.err } };

      case PROMOTION_LIST_REQUEST:
        return { ...state, isFetching: true, promotionList: { success: false } };
      case PROMOTION_LIST_SUCCESS:
        return { ...state, isFetching: false, promotionList: action.response };
      case PROMOTION_LIST_FAILURE:
        return { ...state, isFetching: false, promotionList: { success: false, error: action.err } };
      default:
        return state;
    }
  }