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
    },

    getProductTypeList(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const url = api.getUrl(api.PRODUCT_TYPE);
        return api.handleRequest(url, requestOptions);
    },


    //BEGIN SERVICE LINH
    productList() {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {  };
        const url = api.getUrl(api.PRODUCT_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    
    productSignup(payload) {
        const body ={payload}
        const requestOptions = {
            method: 'POST',
            body: body,
            headers: api.getHeader(TOKEN)
        };
        console.log(body)
        const url = api.getUrl(api.PRODUCT_SIGNUP);
        return api.handleRequest(url, requestOptions);
    },
    productIncentive(){
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {  };
        const url = api.getUrl(api.PRODUCT_INCENTIVE, params);
        return api.handleRequest(url, requestOptions); 
    }
    //END SERVICE LINH
    
};


