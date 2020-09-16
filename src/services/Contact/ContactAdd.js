import api from '../api';
import { TOKEN } from '../../functions/Utils';

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

    advisoryAdd(token, name, email, content) {
        const body = { name, email, content }
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.ADVISORY_ADD);
        return api.handleRequest(url, requestOptions);
    },
    registrationNewsletter(email) {
        const body = { "email": email }
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.NEWSLETTER_REGISTRATION);
        return api.handleRequest(url, requestOptions);
    }
};