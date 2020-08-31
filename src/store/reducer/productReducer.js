import { productAction } from '../action/index';

const initialState = {
    hotProductList: {},
    sellingProductList: {},
    comingSoonProductList: {},
    productTypeList: {},
    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case productAction.HOT_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                hotProductList: action.response,
                isFetching: true,
            };
        case productAction.SELLING_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                sellingProductList: action.response,
                isFetching: true,
            };
        case productAction.COMING_SOON_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                comingSoonProductList: action.response,
                isFetching: true,
            };
        case productAction.PRODUCT_TYPE_LIST_SUCCESS:
            return {
                ...state,
                productTypeList: action.response,
                isFetching: true,
            };
        default:
            return state;
    }
}