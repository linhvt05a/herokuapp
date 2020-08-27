const actions = {

    PRODUCT_LOAD_LIST: name + 'PRODUCT_LOAD_LIST',
    PRODUCT_LIST_FAILURE: name + 'PRODUCT_LIST_FAILURE',
    PRODUCT_LIST_SUCCESS: name + 'PRODUCT_LIST_SUCCESS',

    ProductLoadList: (params) => ({
        type: actions.PRODUCT_LOAD_LIST,
        params: params
    }),

};
export default actions;