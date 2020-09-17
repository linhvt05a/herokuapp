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
    },
    getLoanPolicy(token, product_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(token)
        };
        const params = { product_id };
        const url = api.getUrl(api.GET_LOAN_POLICY, params);
        return api.handleRequest(url, requestOptions);
    },
    getPolicy(token, bank_id) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(token)
        };
        const params = { bank_id };
        const url = api.getUrl(api.GET_POLICY, params);
        return api.handleRequest(url, requestOptions);
    },
};