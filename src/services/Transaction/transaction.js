import api from '../api';
import { TOKEN } from '../../functions/Utils';

export const transactionService = {

    list(token, project_id, area_id, block_id, acreage_from, acreage_to, price_from, price_to, direction_id, architecture_type_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { project_id, area_id, block_id, acreage_from, acreage_to, price_from, price_to, direction_id, architecture_type_id };
        const url = api.getUrl(api.TRANSACTION_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    getProductTypeList(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const url = api.getUrl(api.PRODUCT_TYPE);
        return api.handleRequest(url, requestOptions);
    },

    getProjectNameList(token, project_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { project_id }
        const url = api.getUrl(api.PROJECT_LIST_SHORT, params);
        return api.handleRequest(url, requestOptions);
    },

    getAreaNameList(token, project_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { project_id }
        const url = api.getUrl(api.AREA_LIST_SHORT, params);
        return api.handleRequest(url, requestOptions);
    },

    getBlockNameList(token, project_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { project_id }
        const url = api.getUrl(api.BLOCK_LIST_SHORT, params);
        return api.handleRequest(url, requestOptions);
    },
};