import api from '../api';
import { TOKEN } from '../../../env';

export const contactService = {
    contactAdd(token, full_name, email, phone_number, content) {
        const body = { full_name, email, phone_number, content }
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.CONTACT_ADD);
        return api.handleRequest(url, requestOptions);
    },
    advisoryAdd(token, fullname, email, question) {
        const body = { fullname, email, question }
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.ADVISORY_ADD);
        return api.handleRequest(url, requestOptions);
    }
};