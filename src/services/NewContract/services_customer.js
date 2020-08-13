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
    createContract: (token) => {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(token)
        };
        const params = {};
        const url = api.getUrl(api.CUSTOMER_CREATE_CONTRACT, params);
        return api.handleRequest(url, requestOptions);
    },
    promotionContract: (token) => {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(token)
        };
        const params = {};
        const url = api.getUrl(api.CUSTOMER_PROMOTION_CONTRACT, params);
        return api.handleRequest(url, requestOptions);
    }
};

