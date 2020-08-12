const name = 'CART_';
const actions = {

    LOAD_LIST: name + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: name + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: name + 'LIST_SUCCESS',
    //** Detail */
    LOAD_DETAIL: name + 'DETAIL',
    LOAD_DETAIL_FAILURE: name + 'DETAIL_FAILURE',
    LOAD_DETAIL_SUCCESS: name + 'DETAIL_SUCCESS',

    //Sell open
    LOAD_SELL_OPEN: name + 'SELL_OPEN',
    LOAD_SELL_OPEN_FAILURE: name + 'SELL_OPEN_FAILURE',
    LOAD_SELL_OPEN_SUCCESS: name + 'SELL_OPEN_SUCCESS',

    //Sell open List
    LOAD_SELL_OPEN_LIST: name + 'SELL_OPEN_LIST',
    LOAD_SELL_OPEN_LIST_FAILURE: name + 'SELL_OPEN_LIST_FAILURE',
    LOAD_SELL_OPEN_LIST_SUCCESS: name + 'SELL_OPEN_LIST_SUCCESS',

    //Sell open cart
    LOAD_SELL_OPEN_CART: name + 'SELL_OPEN_CART',
    LOAD_SELL_OPEN_CART_FAILURE: name + 'SELL_OPEN_CART_FAILURE',
    LOAD_SELL_OPEN_CART_SUCCESS: name + 'SELL_OPEN_CART_SUCCESS',

    // FILTER_AREA
    LOAD_FILTER_AREA: name + "FILTER_AREA",
    LOAD_FILTER_AREA_SUCCESS: name + "FILTER_AREA_SUCCESS",
    LOAD_FILTER_AREA_FAILURE: name + "FILTER_AREA_FAILURE",

    // FILTER_BLOCK
    LOAD_FILTER_BLOCK: name + "FILTER_BLOCK",
    LOAD_FILTER_BLOCK_SUCCESS: name + "FILTER_BLOCK_SUCCESS",
    LOAD_FILTER_BLOCK_FAILURE: name + "FILTER_BLOCK_FAILURE",

    // FILTER_PROJECT_STATUS
    LOAD_FILTER_PROJECT_STATUS: name + "FILTER_PROJECT_STATUS",
    LOAD_FILTER_PROJECT_STATUS_SUCCESS: name + "FILTER_PROJECT_STATUS_SUCCESS",
    LOAD_FILTER_PROJECT_STATUS_FAILURE: name + "FILTER_PROJECT_STATUS_FAILURE",

    // FILTER_FLOOR
    LOAD_FILTER_FLOOR: name + "FILTER_FLOOR",
    LOAD_FILTER_FLOOR_SUCCESS: name + "FILTER_FLOOR_SUCCESS",
    LOAD_FILTER_FLOOR_FAILURE: name + "FILTER_FLOOR_FAILURE",


    // FILTER_LIST_OPEN_SALE
    LOAD_FILTER_LIST_OPEN_SALE: name + "FILTER_LIST_OPEN_SALE",
    LOAD_FILTER_LIST_OPEN_SALE_SUCCESS: name + "FILTER_LIST_OPEN_SALE_SUCCESS",
    LOAD_FILTER_LIST_OPEN_SALE_FAILURE: name + "FILTER_LIST_OPEN_SALE_FAILURE",


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
    LoadFilterArea: (params) => ({
        type: actions.LOAD_FILTER_AREA,
        params: params
    }),
    LoadFilterBlock: (params) => ({
        type: actions.LOAD_FILTER_BLOCK,
        params: params
    }),
    LoadProjectStatus: (params) => ({
        type: actions.LOAD_FILTER_PROJECT_STATUS,
        params: params
    }),
    LoadFilterFloor: (params) => ({
        type: actions.LOAD_FILTER_FLOOR,
        params: params
    }),
    LoadFilterListOpenSale: (params) => ({
        type: actions.LOAD_FILTER_LIST_OPEN_SALE,
        params: params
    }),
};
export default actions;