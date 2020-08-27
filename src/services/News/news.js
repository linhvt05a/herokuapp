import api from '../api';
import { TOKEN } from '../../../env';

export const newsService = {
    newsList() {
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
