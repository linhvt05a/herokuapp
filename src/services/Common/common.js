import api from '../api';
import { TOKEN } from '../../../env';

export const commonService = {

    provinceList(token, lang) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { lang };
        const url = api.getUrl(api.PROVINCE_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    districtList(token, province_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { province_id };
        const url = api.getUrl(api.DISTRICT_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    wardList(token, district_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { district_id };
        const url = api.getUrl(api.WARD_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    statusList(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { };
        const url = api.getUrl(api.STATUS_LIST, params);
        return api.handleRequest(url, requestOptions);
    },
    minmaxList(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { };
        const url = api.getUrl(api.MINMAX_LIST, params);
        return api.handleRequest(url, requestOptions);
    }
};