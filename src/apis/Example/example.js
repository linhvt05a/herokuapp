import api from './../../apis';
import { TOKEN } from '../../../env';

export const exampleService = {

    list(token, search_name = "", status_id = "", setting_type) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { search_name, status_id, setting_type };
        const url = api.getUrl(api.EXAMPLE_LIST, params);
        console.log(url);
        return api.handleRequest(url, requestOptions);
    }

};
//  GET


