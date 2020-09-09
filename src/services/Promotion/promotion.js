
import api from '../api';
import { TOKEN } from '../../functions/Utils';


export const promotionService = {
    listPromotion(payload){
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        }; 

        const params = { payload };
        const url = api.getUrl(api.PROMOTION_LIST, params);
        return api.handleRequest(url, requestOptions);
    }
}