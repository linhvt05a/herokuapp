import api from '../api';
import { TOKEN, TOKEN_TEST } from '../../../env';

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
    productFavoriteList(TOKEN_TEST) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN_TEST)
        };

        const url = api.getUrl(api.PRODUCT_FAVORITE_LIST);
        return api.handleRequest(url, requestOptions);
    },

    
    productSignup(payload) {
        const {} = payload.params
        const body ={payload}
        const requestOptions = {
            method: 'POST',
            body: body,
            headers: api.getHeader(TOKEN)
        };
        const url = api.getUrl(api.PRODUCT_SIGNUP);
        return api.handleRequest(url, requestOptions);
    },
    productIncentive(project_id,area_id,block_id){
        
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { project_id :13,area_id: 1,block_id : 2};
        const url = api.getUrl(api.PRODUCT_INCENTIVE, params);
        return api.handleRequest(url, requestOptions); 
    }
    //END SERVICE LINH
    
};


