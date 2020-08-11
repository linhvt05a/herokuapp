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

function approveList(token, product_id, request_type, request_status, priority,order_by_oldest) {
   
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {product_id, request_type, request_status, priority, order_by_oldest};
    const url = api.getUrl(api.HISTORY_APPROVED, params)
    return api.handleRequest(url, requestOptions);
}