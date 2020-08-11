import {
  REQUEST_DATA_REQUEST,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAILURE,

  PROMOTION_LIST_REQUEST,
  PROMOTION_LIST_SUCCESS,
  PROMOTION_LIST_FAILURE
} from '../actionType/requestCart';
  
// request data
export const requestDataRequest = (payload) => ({
  type: REQUEST_DATA_REQUEST,
  payload,
});
export const requestDataSuccess = (payload) => ({
  type: REQUEST_DATA_SUCCESS,
  payload,
});
export const requestDataFailure = (payload) => ({
  type: REQUEST_DATA_FAILURE,
  payload,
});

// promotion list
export const promotionListRequest = (payload) => ({
  type: PROMOTION_LIST_REQUEST,
  payload,
});
export const promotionListSuccess = (payload) => ({
  type: PROMOTION_LIST_SUCCESS,
  payload,
});
export const promotionListFailure = (payload) => ({
  type: PROMOTION_LIST_FAILURE,
  payload,
});