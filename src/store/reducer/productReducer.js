import {
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILURE,
} from '../actionType/product';

const initialState = {
    productDetail: {},
    isFetching: false
  };

export default (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_DETAIL_FAILURE:
        return { ...state, isFetching: false, productDetail: { success: false } };
      case PRODUCT_DETAIL_SUCCESS:
        return { ...state, isFetching: false, productDetail: action.response };
      case PRODUCT_DETAIL_REQUEST:
        return { ...state, isFetching: true, productDetail: { success: false, error: action.err } };
      default:
        return state;
    }
  }