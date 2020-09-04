const productList = 'PRODUCT_LIST_';
const actions = {

    LOAD_LIST: productList + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: productList + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: productList + 'LIST_SUCCESS',

    productList: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;