import api from '../api';

export const sysShippingService = {
    detail,
    list,
    sellopen,
    cart,
    sellopenList
};

function detail(token, productId) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { 'project_id': productId };
    const url = api.getUrl(api.SHIPPING_DETAIL, params);
    return api.handleRequest(url, requestOptions);
}

function list(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {};
    const url = api.getUrl(api.SHIPPING_LIST, params);
    return api.handleRequest(url, requestOptions);
}

function sellopen(token, productId) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_id': productId };
    const url = api.getUrl(api.SHIPPING_SELL_OPEN, params);
    return api.handleRequest(url, requestOptions);
}

function cart(token, project_id, sell_open_id = 1) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'sell_open_id': sell_open_id, 'project_id': project_id };
    const url = api.getUrl(api.SHIPPING_CART, params);
    return api.handleRequest(url, requestOptions);
}

function sellopenList(token, productId) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_id': productId };
    const url = api.getUrl(api.SHIPPING_SELL_OPEN_LIST, params);
    return api.handleRequest(url, requestOptions);
}
