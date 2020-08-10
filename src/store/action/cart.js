const name = 'CART_';
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

    // FILTER_AREA
    LOAD_FILTER_AREA: name + "LOAD_FILTER_AREA",
    LOAD_FILTER_AREA_SUCCESS: name + "LOAD_FILTER_AREA_SUCCESS",
    LOAD_FILTER_AREA_FAILURE: name + "LOAD_FILTER_AREA",

    // FILTER_BLOCK
    LOAD_FILTER_BLOCK: name + "LOAD_FILTER_BLOCK",
    LOAD_FILTER_BLOCK_SUCCESS: name + "LOAD_FILTER_BLOCK_SUCCESS",
    LOAD_FILTER_BLOCK_FAILURE: name + "LOAD_FILTER_BLOCK",

    // FILTER_PROJECT_STATUS
    LOAD_FILTER_PROJECT_STATUS: name + "LOAD_FILTER_PROJECT_STATUS",
    LOAD_FILTER_PROJECT_STATUS_SUCCESS: name + "LOAD_FILTER_PROJECT_STATUS_SUCCESS",
    LOAD_FILTER_PROJECT_STATUS_FAILURE: name + "LOAD_FILTER_PROJECT_STATUS",

    // FILTER_FLOOR
    LOAD_FILTER_FLOOR: name + "LOAD_FILTER_FLOOR",
    LOAD_FILTER_FLOOR_SUCCESS: name + "LOAD_FILTER_FLOOR_SUCCESS",
    LOAD_FILTER_FLOOR_FAILURE: name + "LOAD_FILTER_FLOOR",


    // FILTER_LIST_OPEN_SALE
    LOAD_FILTER_LIST_OPEN_SALE: name + "LOAD_FILTER_LIST_OPEN_SALE",
    LOAD_FILTER_LIST_OPEN_SALE_SUCCESS: name + "LOAD_FILTER_LIST_OPEN_SALE_SUCCESS",
    LOAD_FILTER_LIST_OPEN_SALE_FAILURE: name + "LOAD_FILTER_LIST_OPEN_SALE",


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