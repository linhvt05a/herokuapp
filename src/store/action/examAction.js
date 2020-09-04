const name = 'CART_';
const actions = {

    LOAD_LIST: name + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: name + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: name + 'LIST_SUCCESS',

    LoadList: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;