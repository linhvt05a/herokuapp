import api from '../api';
import { TOKEN } from '../../../env';

export const commonService = {

    login(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { };
        const url = api.getUrl(api.LOGIN, params);
        return api.handleRequest(url, requestOptions);
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

    forgotPassword(token) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = { };
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
};