import api from '../api';
import { TOKEN } from '../../functions/Utils';

export const visitorService = {
    visitorAdd(payload) {
        const {full_name,mobile,project_id,content} = payload.params.values
        const body = {
            full_name,
            mobile,
            project_id ,
            content,
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