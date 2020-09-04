const productSignup = 'PRODUCT_SIGNUP_';
const actions = {

    LOAD_LIST: productSignup + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: productSignup + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: productSignup + 'LIST_SUCCESS',

    productSignup: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;