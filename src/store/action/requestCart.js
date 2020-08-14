import {
  REQUEST_DATA_REQUEST,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAILURE,

  PROMOTION_LIST_REQUEST,
  PROMOTION_LIST_SUCCESS,
  PROMOTION_LIST_FAILURE,

  PROMOTION_PRODUCT_REQUEST,
  PROMOTION_PRODUCT_SUCCESS,
  PROMOTION_PRODUCT_FAILURE,

  CLEAR_DATA,
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

// promotion product
export const promotionProductRequest = (payload) => ({
  type: PROMOTION_PRODUCT_REQUEST,
  payload,
});
export const promotionProductSuccess = (payload) => ({
  type: PROMOTION_PRODUCT_SUCCESS,
  payload,
});
export const promotionProductFailure = (payload) => ({
  type: PROMOTION_PRODUCT_FAILURE,
  payload,
});

// clear data
export const clearData = () => ({
  type: CLEAR_DATA
});