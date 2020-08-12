import api from '../api';

export const requestCartService = {
    getRequestData,
    getPromotionList,
    getPromotionProduct
}

function getRequestData(token, request_type, product_id, value_change, priority, reason, list_promotion_detail) {
    const body = { request_type, product_id, value_change, priority, reason, list_promotion_detail }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    const url = api.getUrl(api.CART_REQUEST_DATA)
    return api.handleRequest(url, requestOptions);
}

function getPromotionList(token, product_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = {'product_id': product_id}
    const url = api.getUrl(api.CART_PROMOTION_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function getPromotionProduct(token, product_id, promotion_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = {'product_id': product_id, 'promotion_id': promotion_id}
    const url = api.getUrl(api.CART_PROMOTION_PRODUCT, params)
    return api.handleRequest(url, requestOptions);
}