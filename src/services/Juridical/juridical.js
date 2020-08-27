import api from '../api';
import { TOKEN } from '../../../env';


export const juridicalService = {
    juridicalAdd(payload) {
        const body = {payload}
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.JURIDICAL_ADD, params);
        return api.handleRequest(url, requestOptions);
    },
};