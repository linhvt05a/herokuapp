import {
  PRODUCT_DETAIL_FAILURE,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_REQUEST
  
  
} from '../actionType/product';

export const productDetailRequest = (payload) => ({
  type: PRODUCT_DETAIL_REQUEST,
  payload,
});
export const productDetailSuccess = (payload) => ({
  type: PRODUCT_DETAIL_SUCCESS,
  payload,
});
export const productDetailFailure = (payload) => ({
  type: PRODUCT_DETAIL_FAILURE,
  payload,
});