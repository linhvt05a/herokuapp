import api from '../api'

export const approve_system_services = {
    approveList 
};

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