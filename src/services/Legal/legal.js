import api from '../api';
import { TOKEN } from '../../functions/Utils';


export const legalService = {
    legalForm(payload) {
        const body = {payload}
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.JURIDICAL_ADD, params);
        return api.handleRequest(url, requestOptions);
    },

    legalCategories(payload) {
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

    legalFilter(payload) {
        const body = {payload}
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.LEGAL_FILTER);
        return api.handleRequest(url, requestOptions);
    },

    legalSearch(payload) {
        const body = {payload}
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.LEGAL_FILTER);
        return api.handleRequest(url, requestOptions);
    },

};