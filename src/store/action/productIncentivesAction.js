const productIncentive = 'PRODUCT_INCENTIVE_';
const actions = {

    LOAD_LIST: productIncentive + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: productIncentive + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: productIncentive + 'LIST_SUCCESS',

    productIncentive: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;