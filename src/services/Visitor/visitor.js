import api from '../api';
import { TOKEN } from '../../../env';

export const visitorService = {
    visitorAdd(payload) {
        const {visitContent,visitMobile,visitName,visitSelect} = payload.params.signValues
        const body = {
            full_name:visitName, 
            mobile: visitMobile,
            project_id:visitSelect, 
            content:visitContent
        }
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.VISIT_REGISTER);
        return api.handleRequest(url, requestOptions);
    }

};