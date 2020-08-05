const name = 'SHIPPING_';
const actions = {

    LOAD_LIST: name + 'LOAD_LIST',
    LOAD_LIST_FAILURE: name + 'LOAD_LIST_FAILURE',
    LOAD_LIST_SUCCESS: name + 'LOAD_LIST_SUCCESS',
    //** detail */
    LOAD_DETAIL: name + 'LOAD_DETAIL',
    LOAD_DETAIL_FAILURE: name + 'LOAD_DETAIL_FAILURE',
    LOAD_DETAIL_SUCCESS: name + 'LOAD_DETAIL_SUCCESS',

    //Sell open
    LOAD_SELL_OPEN: name + 'LOAD_SELL_OPEN',
    LOAD_SELL_OPEN_FAILURE: name + 'LOAD_SELL_OPEN_FAILURE',
    LOAD_SELL_OPEN_SUCCESS: name + 'LOAD_SELL_OPEN_SUCCESS',

    //Sell open List
    LOAD_SELL_OPEN_LIST: name + 'LOAD_SELL_OPEN_LIST',
    LOAD_SELL_OPEN_LIST_FAILURE: name + 'LOAD_SELL_OPEN_LIST_FAILURE',
    LOAD_SELL_OPEN_LIST_SUCCESS: name + 'LOAD_SELL_OPEN_LIST_SUCCESS',

    //Sell open cart
    LOAD_SELL_OPEN_CART: name + 'LOAD_SELL_OPEN_CART',
    LOAD_SELL_OPEN_CART_FAILURE: name + 'LOAD_SELL_OPEN_CART_FAILURE',
    LOAD_SELL_OPEN_CART_SUCCESS: name + 'LOAD_SELL_OPEN_CART_SUCCESS',


    LoadList: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),
    LoadDetail: (params) => ({
        type: actions.LOAD_DETAIL,
        params: params
    }),
    LoadSellOpen: (params) => ({
        type: actions.LOAD_SELL_OPEN,
        params: params
    }),
    LoadSellOpenList: (params) => ({
        type: actions.LOAD_SELL_OPEN_LIST,
        params: params
    }),
    LoadSellOpenCart: (params) => ({
        type: actions.LOAD_SELL_OPEN_CART,
        params: params
    }),
};
export default actions;