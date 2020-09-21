import api from '../api';
import { TOKEN } from '../../functions/Utils';

export const streamingService = {
    streamList(payload) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN),
        };
        const params = {payload}
        const url = api.getUrl(api.LIVE_STREAM_LIST, params);
        return api.handleRequest(url, requestOptions);
    }
}