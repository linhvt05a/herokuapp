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

//currentcy list
export const currentcyListRequest = (currency) => ({
  type: CURRENTCY_LIST_REQUEST,
  currency,
});
export const currentcyListSuccess = (currency) => ({
  type: CURRENTCY_LIST_SUCCESS,
  currency,
});
export const currentcyListFailure = (currency) => ({
  type: CURRENTCY_LIST_FAILURE,
  currency,
});

//currentcy detail
export const currentcyDetailRequest = (currency) => ({
  type: CURRENTCY_DETAIL_REQUEST,
  currency,
});
export const currentcyDetailSuccess = (currency) => ({
  type: CURRENTCY_DETAIL_SUCCESS,
  currency,
});
export const currentcyDetailFailure = (currency) => ({
  type: CURRENTCY_DETAIL_FAILURE,
  currency,
});

//currentcy edit
export const currentcyEditRequest = (currency) => ({
  type: CURRENTCY_EDIT_REQUEST,
  currency,
});
export const currentcyEditSuccess = (currency) => ({
  type: CURRENTCY_EDIT_SUCCESS,
  currency,
});
export const currentcyEditFailure = (currency) => ({
  type: CURRENTCY_EDIT_FAILURE,
  currency,
});

//currentcy add
export const currentcyAddRequest = (currency) => ({
  type: CURRENTCY_ADD_REQUEST,
  currency,
});
export const currentcyAddSuccess = (currency) => ({
  type: CURRENTCY_ADD_SUCCESS,
  currency,
});
export const currentcyAddFailure = (currency) => ({
  type: CURRENTCY_ADD_FAILURE,
  currency,
});