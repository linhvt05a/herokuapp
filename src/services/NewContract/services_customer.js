import api from '../api';

export const customerService = {
    customer
};

function customer(token, search ) {

    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'search': search};
    const url = api.getUrl(api.CUSTOMER_LIST, params)
    return api.handleRequest(url, requestOptions);
}