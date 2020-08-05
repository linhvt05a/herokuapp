import api from '../api'

export const approve_system_services = {
    approveList 
};

function approveList(token, product_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {product_id};
    const url = api.getUrl(api.HISTORY_APPROVED, params)
    return api.handleRequest(url, requestOptions);
}