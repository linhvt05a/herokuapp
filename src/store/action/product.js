import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAILURE,
} from '../actionType/project';

//currentcy Detail
export const productDetailRequest = (product) => ({
  type: PRODUCT_DETAIL_REQUEST,
  product,
});
export const productDetailSuccess = (product) => ({
  type: PRODUCT_DETAIL_SUCCESS,
  product,
});
export const productDetailFailure = (product) => ({
  type: PRODUCT_DETAIL_FAILURE,
  product,
});