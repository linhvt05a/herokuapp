
import api from '../api';
import { TOKEN } from '../../../env';


export const promotionService = {
    listPromotion(payload){
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        }; 

        const params = { payload };
        const url = api.getUrl(api.EXAMPLE_LIST, params);
        console.log(url);
        return api.handleRequest(url, requestOptions);
    }
}