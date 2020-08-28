import api from '../api';
import { TOKEN } from '../../../env';

export const visitorService = {

    visitorAdd(payload) {
        const body = {payload}
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };

        const url = api.getUrl(api.VISIT_REGISTER);
        return api.handleRequest(url, requestOptions);
    }

};