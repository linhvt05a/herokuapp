import api from '../api'

export const approve_system_services = {
    approveList ,
    commentList,
    addComment
};

function addComment(token, request_id){
    const body = {}
    console.log(body)
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

function approveList(token, product_id, request_type, request_status, priority) {
   
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {product_id: product_id, request_type: request_type, request_status: request_status, priority: priority};
    const url = api.getUrl(api.HISTORY_APPROVED, params)
    return api.handleRequest(url, requestOptions);
}