import api from '../api'

export const approve_system_services = {
    approveList ,
    commentList
};

function commentList() {
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx'
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {request_id: 2};
    const url = api.getUrl(api.LIST_COMMENT, params)
    return api.handleRequest(url, requestOptions);
}

function approveList() {
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx'
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {product_id: 63};
    const url = api.getUrl(api.HISTORY_APPROVED, params)
    return api.handleRequest(url, requestOptions);
}