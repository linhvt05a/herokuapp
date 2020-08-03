import {
  CURRENTCY_LIST_REQUEST,
  CURRENTCY_LIST_SUCCESS,
  CURRENTCY_LIST_FAILURE,
  CURRENTCY_DETAIL_REQUEST,
  CURRENTCY_DETAIL_SUCCESS,
  CURRENTCY_DETAIL_FAILURE,
  CURRENTCY_EDIT_REQUEST,
  CURRENTCY_EDIT_SUCCESS,
  CURRENTCY_EDIT_FAILURE,
  CURRENTCY_ADD_REQUEST,
  CURRENTCY_ADD_SUCCESS,
  CURRENTCY_ADD_FAILURE,
} from '../actionType/currency';

const initialState = {
  currentcyList: {},
  currentcyDetail: {},
  currentcyEdit: {},
  currentcyAdd: {},
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENTCY_LIST_REQUEST:
      return { ...state, isFetching: true, currentcyList: { success: false } };
    case CURRENTCY_LIST_SUCCESS:
      return { ...state, isFetching: false, currentcyList: action.response };
    case CURRENTCY_LIST_FAILURE:
      return { ...state, isFetching: false, currentcyList: { success: false, error: action.err } };

    case CURRENTCY_DETAIL_REQUEST:
      return { ...state, isFetching: true, currentcyDetail: { success: false } };
    case CURRENTCY_DETAIL_SUCCESS:
      return { ...state, isFetching: false, currentcyDetail: action.response };
    case CURRENTCY_DETAIL_FAILURE:
      return { ...state, isFetching: false, currentcyDetail: { success: false, error: action.err } };

    case CURRENTCY_EDIT_REQUEST:
      return { ...state, isFetching: true, currentcyEdit: { success: false } };
    case CURRENTCY_EDIT_SUCCESS:
      return { ...state, isFetching: false, currentcyEdit: action.response };
    case CURRENTCY_EDIT_FAILURE:
      return { ...state, isFetching: false, currentcyEdit: { success: false, error: action.err } };

    case CURRENTCY_ADD_REQUEST:
      return { ...state, isFetching: true, currentcyAdd: { success: false } };
    case CURRENTCY_ADD_SUCCESS:
      return { ...state, isFetching: false, currentcyAdd: action.response };
    case CURRENTCY_ADD_FAILURE:
      return { ...state, isFetching: false, currentcyAdd: { success: false, error: action.err } };
    default:
      return state;
  }
}