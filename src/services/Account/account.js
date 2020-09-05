import api from '../api';
import { TOKEN } from '../../../env';

export const accountService = {

    // login(token) {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: api.getHeader(TOKEN)
    //     };
    //     const params = { };
    //     const url = api.getUrl(api.LOGIN, params);
    //     return api.handleRequest(url, requestOptions);
    // },

    login(username, password) {
        const token = btoa(username + ":" + password);
        const body = { username, password }
    
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(token, api.CONTENT_TYPE, 'Basic'),
            body: body
        };
    
        const url = api.getUrl(api.LOGIN)
        return api.handleRequest(url, requestOptions)
            .then(data => {
                if (data) {
                    // store user details and basic auth credentials in local storage
                    localStorage.setItem('user', JSON.stringify(data['detail']));
                }
                return data;
            });
    },
    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    },

    registry(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { province_id };
        const url = api.getUrl(api.REGISTRY, params);
        return api.handleRequest(url, requestOptions);
    },

    forgotPassword(token, email) {
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN)
        };
        const params = { email };
        const url = api.getUrl(api.FORGOT_PASSWORD, params);
        return api.handleRequest(url, requestOptions);
    },

    changePassword(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { };
        const url = api.getUrl(api.CHANGE_PASSWORD, params);
        return api.handleRequest(url, requestOptions);
    },

    profile(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { };
        const url = api.getUrl(api.PROFILE, params);
        return api.handleRequest(url, requestOptions);
    },

    updateProfile(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { };
        const url = api.getUrl(api.UPDATE_PROFILE, params);
        return api.handleRequest(url, requestOptions);
    },

    updateCustomer(token, avatar, email, name, birthday, address, province, district, ward, phone, gender, workplace ) {
        const body = { avatar, email, name, birthday, address, province, district, ward, phone, gender, workplace }
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body: body
        };
        const url = api.getUrl(api.UPDATE_CUSTOMER);
        return api.handleRequest(url, requestOptions);
    }
};