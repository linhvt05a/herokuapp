import {
    REGION_LIST_REQUEST,
    REGION_LIST_SUCCESS,
    REGION_LIST_FAILURE,

    PROVINCE_LIST_REQUEST,
    PROVINCE_LIST_SUCCESS,
    PROVINCE_LIST_FAILURE,

    TYPE_LIST_REQUEST,
    TYPE_LIST_SUCCESS,
    TYPE_LIST_FAILURE,

    STATUS_LIST_REQUEST,
    STATUS_LIST_SUCCESS,
    STATUS_LIST_FAILURE,

    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAILURE,

    DATA_TOTAL_REQUEST,
    DATA_TOTAL_SUCCESS,
    DATA_TOTAL_FAILURE
  } from '../actionType/dashboard';
  
  const initialState = {
    regionList: {},
    provinceList: {},
    typeList: {},
    statusList: {},
    projectList: {success: false},
    dataTotal: {},
    isFetching: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case REGION_LIST_REQUEST:
        return { ...state, isFetching: true, regionList: { success: false } };
      case REGION_LIST_SUCCESS:
        return { ...state, isFetching: false, regionList: action.response };
      case REGION_LIST_FAILURE:
        return { ...state, isFetching: false, regionList: { success: false, error: action.err } };

      case PROVINCE_LIST_REQUEST:
        return { ...state, isFetching: true, provinceList: { success: false } };
      case PROVINCE_LIST_SUCCESS:
        return { ...state, isFetching: false, provinceList: action.response };
      case PROVINCE_LIST_FAILURE:
        return { ...state, isFetching: false, provinceList: { success: false, error: action.err } };

      case TYPE_LIST_REQUEST:
        return { ...state, isFetching: true, typeList: { success: false } };
      case TYPE_LIST_SUCCESS:
        return { ...state, isFetching: false, typeList: action.response };
      case TYPE_LIST_FAILURE:
        return { ...state, isFetching: false, typeList: { success: false, error: action.err } };

      case STATUS_LIST_REQUEST:
        return { ...state, isFetching: true, statusList: { success: false } };
      case STATUS_LIST_SUCCESS:
        return { ...state, isFetching: false, statusList: action.response };
      case STATUS_LIST_FAILURE:
        return { ...state, isFetching: false, statusList: { success: false, error: action.err } };

      case PROJECT_LIST_REQUEST:
        return { ...state, isFetching: true, projectList: { success: false } };
      case PROJECT_LIST_SUCCESS:
        return { ...state, isFetching: false, projectList: action.response };
      case PROJECT_LIST_FAILURE:
        return { ...state, isFetching: false, projectList: { success: false, error: action.err } };

      case DATA_TOTAL_REQUEST:
        return { ...state, isFetching: true, dataTotal: { success: false } };
      case DATA_TOTAL_SUCCESS:
        return { ...state, isFetching: false, dataTotal: action.response };
      case DATA_TOTAL_FAILURE:
        return { ...state, isFetching: false, dataTotal: { success: false, error: action.err } };
      default:
        return state;
    }
  }