import api from '../api'

export const approve_system_services = {
    approveList 
};

function approveList(product_id) {
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx'
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'product_id': product_id};
    const url = api.getUrl(api.HISTORY_APPROVED, params)
    return api.handleRequest(url, requestOptions);
}