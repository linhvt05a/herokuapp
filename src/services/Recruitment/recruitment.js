import api from '../api';
import { TOKEN } from '../../functions/Utils';

export const recruitmentService = {
   recruitmentList (payload){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(TOKEN)
    };
    const params = {};
    const url = api.getUrl(api.RECRUITMENT_LIST, params);
    return api.handleRequest(url, requestOptions);
   }
}