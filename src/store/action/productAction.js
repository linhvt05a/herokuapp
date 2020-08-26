const hotProductList = 'HOT_PRODUCT_LIST';
const actions = {

    HOT_PRODUCT_LIST_REQUEST: hotProductList + '_REQUEST',
    HOT_PRODUCT_LIST_FAILURE: hotProductList + '_FAILURE',
    HOT_PRODUCT_LIST_SUCCESS: hotProductList + '_SUCCESS',

    loadHotProductList: (params) => ({
        type: actions.HOT_PRODUCT_LIST_REQUEST,
        params: params
    }),

};
export default actions;