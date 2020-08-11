import api from '../api';

export const sysCartService = {
    detail,
    list,
    sellopen,
    cart,
    sellopenList,
    filterFloor,
    filterArea,
    filterBlock,
    filterProjectStatus,
    filterListOpenSale
};
//  GET
function detail(token, productId) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { 'project_id': productId };
    const url = api.getUrl(api.CART_DETAIL, params);
    return api.handleRequest(url, requestOptions);
}

function list(token, search_name = "", status_id = "") {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { "search_name": search_name, "status_id": status_id };
    const url = api.getUrl(api.CART_LIST, params);
    return api.handleRequest(url, requestOptions);
}

function sellopen(token, productId) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_id': productId };
    const url = api.getUrl(api.CART_SELL_OPEN, params);
    return api.handleRequest(url, requestOptions);
}

function cart(token, project_id, sell_open_id = '0', block_id = "", floor_or_lot_id = "") {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { sell_open_id, project_id, block_id, floor_or_lot_id };
    const url = api.getUrl(api.CART_CART, params);
    return api.handleRequest(url, requestOptions);
}

function sellopenList(token, productId, area_id, sell_open_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_id': 13, 'sell_open_id': 262, 'shopping_cart_filter': true, 'show_product_flag': false };
    const url = api.getUrl(api.CART_SELL_OPEN_LIST, params); console.log(url);
    return api.handleRequest(url, requestOptions);
}


///filter
function filterArea(token, productId, sell_open_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_id': productId, sell_open_id };
    const url = api.getUrl(api.FILTER_AREA, params); console.log(url);
    return api.handleRequest(url, requestOptions);
}

function filterBlock(token, productId, sell_open_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_id': productId, sell_open_id };
    const url = api.getUrl(api.FILTER_BLOCK, params);
    return api.handleRequest(url, requestOptions);
}

function filterProjectStatus(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {};
    const url = api.getUrl(api.FILTER_PROJECT_STATUS, params);
    return api.handleRequest(url, requestOptions);
}

function filterListOpenSale(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { project_id };
    const url = api.getUrl(api.FILTER_LIST_OPEN_SALE, params);
    return api.handleRequest(url, requestOptions);
}
function filterFloor(token, project_id, sell_open_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = { project_id, sell_open_id };
    const url = api.getUrl(api.FILTER_FLOOR, params);
    return api.handleRequest(url, requestOptions);
}