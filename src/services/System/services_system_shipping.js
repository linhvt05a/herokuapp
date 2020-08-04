import api from '../api';

export const sysShippingService = {
    detail,
    list
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

