import { productAction } from "../action/index";

const initialState = {
  hotProductList: {},
  sellingProductList: {},
  comingSoonProductList: {},
  productTypeList: {},
  productDetailList: {},
  productIncentive: [],
  productSignup: [],
  isFetching: false,
  productFavoriteList: {},
  productMark: {},
  isLoadingProduct: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case productAction.HOT_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        hotProductList: action.response,
        isFetching: true,
      };
    case productAction.SELLING_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        sellingProductList: {},
        isLoadingProduct: true
      };
    case productAction.SELLING_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        sellingProductList: action.response,
        isFetching: true,
        isLoadingProduct: false
      };
    case productAction.SELLING_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        sellingProductList: action.err,
        isFetching: false,
        isLoadingProduct: false
      };
    case productAction.COMING_SOON_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        comingSoonProductList: {},
        isLoadingProduct: true
      };
    case productAction.COMING_SOON_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        comingSoonProductList: action.response,
        isFetching: true,
        isLoadingProduct: false
      };
    case productAction.COMING_SOON_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        comingSoonProductList: action.err,
        isFetching: false,
        isLoadingProduct: false
      };
    case productAction.PRODUCT_TYPE_LIST_SUCCESS:
      return {
        ...state,
        productTypeList: action.response,
        isFetching: true,
      };
    case productAction.PRODUCT_DETAIL_LIST_SUCCESS:
      return {
        ...state,
        productDetailList: action.response,
        isFetching: true,
      };
    //linh add
    case productAction.PRODUCT_INCENTIVE_LIST_SUCCESS:
      return {
        ...state,
        productIncentive: action.response,
        isFetching: true,
      };

    case productAction.PRODUCT_FAVORITE_LIST_SUCCESS:
      return {
        ...state,
        productFavoriteList: action.response,
        isFetching: true,
      };

    case productAction.PRODUCT_SIGNUP_SUCCESS:
      return {
        ...state,
        productSignup: action.response,
        isFetching: true,
      };

    case productAction.PRODUCT_MARK_LIST_SUCCESS:
      return {
        ...state,
        productMark: action.response,
        isFetching: true,
      };
    // end linh add
    default:
      return state;
  }
};
