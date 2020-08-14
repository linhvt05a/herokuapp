import api from '../api'

export const approve_system_services = {
    approveList ,
    commentList,
    addComment
};

function addComment(payload){
    const {request_id, content, token} = payload.payload
    const body = {request_id: request_id,content: content}

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    const url = api.getUrl(api.ADD_COMMENT);
    return api.handleRequest(url, requestOptions);
}

function commentList(payload) {
    const{token, request_id, page, limit} = payload.payload
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {request_id, page, limit};
    const url = api.getUrl(api.LIST_COMMENT, params)
    return api.handleRequest(url, requestOptions);
}

function approveList(payload) {
    const{token, product_id, request_type, request_status, priority, order_by_oldest} = payload.payload
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {product_id, request_type, request_status, priority,order_by_oldest};
    const url = api.getUrl(api.HISTORY_APPROVED, params)
    return api.handleRequest(url, requestOptions);
}