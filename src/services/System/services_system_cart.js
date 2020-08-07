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
    filterProjectStatus
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

function list(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {};
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

function cart(token, project_id, sell_open_id = '1') {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'sell_open_id': sell_open_id, 'project_id': project_id };
    const url = api.getUrl(api.CART_CART, params);
    return api.handleRequest(url, requestOptions);
}

function sellopenList(token, productId) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_id': productId };
    const url = api.getUrl(api.CART_SELL_OPEN_LIST, params);
    return api.handleRequest(url, requestOptions);
}



function filterArea(token, productId) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_id': productId };
    const url = api.getUrl(api.FILTER_AREA, params);
    return api.handleRequest(url, requestOptions);
}

function filterBlock(token, productId) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_id': productId };
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


// POST
function filterFloor(token, project_id, block_id) {
    const body = {
        "block_id": block_id
    }
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
        body: body
    };

    const params = { 'project_id': project_id };
    const url = api.getUrl(api.FILTER_FLOOR, params);
    return api.handleRequest(url, requestOptions);
}