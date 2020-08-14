import api from '../api';

export const customerService = {
    customer: (token, name) => {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(token)
        };
        const params = { name };
        const url = api.getUrl(api.CUSTOMER_LIST, params); console.log(url);
        return api.handleRequest(url, requestOptions);
    },
    createContract: (token, params) => {
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(token),
            body: params
        };
        const url = api.getUrl(api.CUSTOMER_CREATE_CONTRACT);
        return api.handleRequest(url, requestOptions);
    },
    promotionContract: (token, product_id) => {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(token)
        };
        const params = { token, product_id };
        const url = api.getUrl(api.CUSTOMER_PROMOTION_CONTRACT, params);
        return api.handleRequest(url, requestOptions);
    }
};

