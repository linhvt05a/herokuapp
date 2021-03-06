import api from '../api';
import { TOKEN } from '../../functions/Utils';

export const productService = {

    hotProductList(token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
        acreage_from, acreage_to, price_from, price_to, direction_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {
            page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
            acreage_from, acreage_to, price_from, price_to, direction_id
        };
        const url = api.getUrl(api.HOT_PRODUCT_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    getSellingProductList(token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
        acreage_from, acreage_to, price_from, price_to, direction_id, architecture_type_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {
            page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
            acreage_from, acreage_to, price_from, price_to, direction_id, architecture_type_id
        };
        const url = api.getUrl(api.SELLING_PRODUCT_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    getComingSoonProductList(token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
        acreage_from, acreage_to, price_from, price_to, direction_id, architecture_type_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {
            page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
            acreage_from, acreage_to, price_from, price_to, direction_id, architecture_type_id
        };
        const url = api.getUrl(api.COMING_SOON_PRODUCT_LIST, params);
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

    productDetailList(token, product_id = "", tab_include = []) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { product_id, tab_include };

        const url = api.getUrl(api.PRODUCT_DETAIL_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    //BEGIN SERVICE LINH
    productFavoriteList() {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const url = api.getUrl(api.PRODUCT_FAVORITE_LIST);
        return api.handleRequest(url, requestOptions);
    },


    productSignup(payload) {
        const { } = payload.params
        const body = { payload }
        const requestOptions = {
            method: 'POST',
            body: body,
            headers: api.getHeader(TOKEN)
        };
        const url = api.getUrl(api.PRODUCT_SIGNUP);
        return api.handleRequest(url, requestOptions);
    },
    productIncentive(project_id, area_id, block_id) {

        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { project_id: 13, area_id: 1, block_id: 2 };
        const url = api.getUrl(api.PRODUCT_INCENTIVE, params);
        return api.handleRequest(url, requestOptions);
    },

    productMark(payload) {
        // console.log(payload)
        const { postData } = payload.params
        const body = { list_product: postData }
        console.log(body)
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };


        const url = api.getUrl(api.PRODUCT_MARKER);
        return api.handleRequest(url, requestOptions);
    }
    //END SERVICE LINH

};


