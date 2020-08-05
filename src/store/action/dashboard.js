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
    STATUS_LIST_FAILURE
} from '../actionType/dashboard';
  
// region list
export const regionListRequest = (payload) => ({
  type: REGION_LIST_REQUEST,
  payload,
});
export const regionListSuccess = (payload) => ({
  type: REGION_LIST_SUCCESS,
  payload,
});
export const regionListFailure = (payload) => ({
  type: REGION_LIST_FAILURE,
  payload,
});

// province list
export const provinceListRequest = (payload) => ({
  type: PROVINCE_LIST_REQUEST,
  payload,
});
export const provinceListSuccess = (payload) => ({
  type: PROVINCE_LIST_SUCCESS,
  payload,
});
export const provinceListFailure = (payload) => ({
  type: PROVINCE_LIST_FAILURE,
  payload,
});

// type list
export const typeListRequest = (payload) => ({
  type: TYPE_LIST_REQUEST,
  payload,
});
export const typeListSuccess = (payload) => ({
  type: TYPE_LIST_SUCCESS,
  payload,
});
export const typeListFailure = (payload) => ({
  type: TYPE_LIST_FAILURE,
  payload,
});

// status list
export const statusListRequest = (payload) => ({
  type: STATUS_LIST_REQUEST,
  payload,
});
export const statusListSuccess = (payload) => ({
  type: STATUS_LIST_SUCCESS,
  payload,
});
export const statusListFailure = (payload) => ({
  type: STATUS_LIST_FAILURE,
  payload,
});