import api from '../api';
import { TOKEN } from '../../../env';

export const productDetailService = {

    list(token, product_id = "", tab_include = []) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { product_id, tab_include };
        
        const url = api.getUrl(api.PRODUCT_LIST, params);
        return api.handleRequest(url, requestOptions);
    }

};
//  GET