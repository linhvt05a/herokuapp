import api from '../api';
import { TOKEN } from '../../../env';

export const contactService = {
    contactAdd(payload) {
        
        const body ={payload}
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body:body
        };
        
        const url = api.getUrl(api.CONTACT_ADD);
        return api.handleRequest(url, requestOptions);
    }

};