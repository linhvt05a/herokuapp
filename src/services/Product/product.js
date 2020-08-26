import api from '../api';
import { TOKEN } from '../../../env';

export const productService = {

    hotProductList(token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
        acreage_from, acreage_to, price_from, price_to, direction_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
            acreage_from, acreage_to, price_from, price_to, direction_id };
        const url = api.getUrl(api.HOT_PRODUCT_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    getSellingProductList(token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
        acreage_from, acreage_to, price_from, price_to, direction_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
            acreage_from, acreage_to, price_from, price_to, direction_id };
        const url = api.getUrl(api.SELLING_PRODUCT_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    getComingSoonProductList(token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
        acreage_from, acreage_to, price_from, price_to, direction_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
            acreage_from, acreage_to, price_from, price_to, direction_id };
        const url = api.getUrl(api.COMING_SOON_PRODUCT_LIST, params);
        return api.handleRequest(url, requestOptions);
    }
};


