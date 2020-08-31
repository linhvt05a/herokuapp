import api from '../api';
import { TOKEN } from '../../../env';


export const juridicalService = {
    juridicalAdd(payload) {
        const body = {payload}
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.JURIDICAL_ADD, params);
        return api.handleRequest(url, requestOptions);
    },

    legalCates(payload) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN),
        };
        const params = {}
        const url = api.getUrl(api.LEGAL_CATEGORIES, params);
        return api.handleRequest(url, requestOptions);
    },

    legalList(payload) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN),
        };
        const params = {}
        const url = api.getUrl(api.LEGAL_LIST, params);
        return api.handleRequest(url, requestOptions);
    },
};