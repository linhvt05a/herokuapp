import api from '../api';
import { TOKEN } from '../../../env';

export const transactionService = {

    list(token, project_id = "", area_id = "", block_id="") {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { project_id, area_id, block_id };
        const url = api.getUrl(api.TRANSACTION_LIST, params);
        console.log(url);
        return api.handleRequest(url, requestOptions);
    }

};
//  GET