const hotProductList = 'HOT_PRODUCT_LIST';
const sellingProductList = 'SELLING_PRODUCT_LIST';
const comingSoonProductList = 'COMING_SOON_PRODUCT_LIST';
const productTypeList = 'PRODUCT_TYPE_LIST';
const actions = {

    HOT_PRODUCT_LIST_REQUEST: hotProductList + '_REQUEST',
    HOT_PRODUCT_LIST_FAILURE: hotProductList + '_FAILURE',
    HOT_PRODUCT_LIST_SUCCESS: hotProductList + '_SUCCESS',

    SELLING_PRODUCT_LIST_REQUEST: sellingProductList + '_REQUEST',
    SELLING_PRODUCT_LIST_FAILURE: sellingProductList + '_FAILURE',
    SELLING_PRODUCT_LIST_SUCCESS: sellingProductList + '_SUCCESS',

    COMING_SOON_PRODUCT_LIST_REQUEST: comingSoonProductList + '_REQUEST',
    COMING_SOON_PRODUCT_LIST_FAILURE: comingSoonProductList + '_FAILURE',
    COMING_SOON_PRODUCT_LIST_SUCCESS: comingSoonProductList + '_SUCCESS',

    PRODUCT_TYPE_LIST_REQUEST: productTypeList + '_REQUEST',
    PRODUCT_TYPE_LIST_FAILURE: productTypeList + '_FAILURE',
    PRODUCT_TYPE_LIST_SUCCESS: productTypeList + '_SUCCESS',

    loadHotProductList: (params) => ({
        type: actions.HOT_PRODUCT_LIST_REQUEST,
        params: params
    }),

    loadSellingProductList: (params) => ({
        type: actions.SELLING_PRODUCT_LIST_REQUEST,
        params: params
    }),

    loadComingSoonProductList: (params) => ({
        type: actions.COMING_SOON_PRODUCT_LIST_REQUEST,
        params: params
    }),

    loadProductTypeList: (params) => ({
        type: actions.PRODUCT_TYPE_LIST_REQUEST,
        params: params
    }),

};
export default actions;