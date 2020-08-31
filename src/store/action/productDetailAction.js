const actions = {

    PRODUCT_DETAIL_LOAD_LIST: name + 'PRODUCT_DETAIL_LOAD_LIST',
    PRODUCT_DETAIL_LIST_FAILURE: name + 'PRODUCT_DETAIL_LIST_FAILURE',
    PRODUCT_DETAIL_LIST_SUCCESS: name + 'PRODUCT_DETAIL_LIST_SUCCESS',

    ProductDetailLoadList: (params) => ({
        type: actions.PRODUCT_DETAIL_LOAD_LIST,
        params: params
    }),

};
export default actions;