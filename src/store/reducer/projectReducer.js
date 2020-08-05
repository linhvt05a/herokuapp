import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAILURE,
  PROJECT_DETAIL_REQUEST,
  PROJECT_DETAIL_SUCCESS,
  PROJECT_DETAIL_FAILURE,
  PROJECT_EDIT_REQUEST,
  PROJECT_EDIT_SUCCESS,
  PROJECT_EDIT_FAILURE,
  PROJECT_ADD_REQUEST,
  PROJECT_ADD_SUCCESS,
  PROJECT_ADD_FAILURE,
} from '../actionType/project';

const initialState = {
  projectList: {},
  projectDetail: {},
  projectEdit: {},
  projectAdd: {},
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { ...state, isFetching: true, projectList: { success: false } };
    case PROJECT_LIST_SUCCESS:
      return { ...state, isFetching: false, projectList: action.response };
    case PROJECT_LIST_FAILURE:
      return { ...state, isFetching: false, projectList: { success: false, error: action.err } };

    case PROJECT_DETAIL_REQUEST:
      return { ...state, isFetching: true, projectDetail: { success: false } };
    case PROJECT_DETAIL_SUCCESS:
      return { ...state, isFetching: false, projectDetail: action.response };
    case PROJECT_DETAIL_FAILURE:
      return { ...state, isFetching: false, projectDetail: { success: false, error: action.err } };

    case PROJECT_EDIT_REQUEST:
      return { ...state, isFetching: true, projectEdit: { success: false } };
    case PROJECT_EDIT_SUCCESS:
      return { ...state, isFetching: false, projectEdit: action.response };
    case PROJECT_EDIT_FAILURE:
      return { ...state, isFetching: false, projectEdit: { success: false, error: action.err } };

    case PROJECT_ADD_REQUEST:
      return { ...state, isFetching: true, projectAdd: { success: false } };
    case PROJECT_ADD_SUCCESS:
      return { ...state, isFetching: false, projectAdd: action.response };
    case PROJECT_ADD_FAILURE:
      return { ...state, isFetching: false, projectAdd: { success: false, error: action.err } };
    default:
      return state;
  }
}