import {
    APPROVED_LIST_FAILURE, 
    APPROVED_LIST_SUCCESS,
    APPROVED_LIST_REQUEST
} from '../actionType/approved'

const initialState = {
    approveList: {},
    isFetching: false,
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case APPROVED_LIST_FAILURE:
        return { ...state, isFetching: true, approveList: { success: false } };
      case APPROVED_LIST_SUCCESS:
        return { ...state, isFetching: false, approveList: action.response };
      case APPROVED_LIST_REQUEST:
        return { ...state, isFetching: false, approveList: { success: false, error: action.err } };
      default:
        return state;
    }
  }  