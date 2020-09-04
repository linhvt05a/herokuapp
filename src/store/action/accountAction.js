const login = 'LOGIN';
const registry = 'REGISTRY';
const forgotPassword = 'FORGOT_PASSWORD';
const changePassword = 'CHANGE_PASSWORD';
const profile = 'PROFILE';
const updateProfile = 'UPDATE_PROFILE';
const updateCustomer = 'UPDATE_CUSTOMER';

const actions = {

    LOGIN_REQUEST: login + '_REQUEST',
    LOGIN_FAILURE: login + '_FAILURE',
    LOGIN_SUCCESS: login + '_SUCCESS',

    REGISTRY_REQUEST: registry + '_REQUEST',
    REGISTRY_FAILURE: registry + '_FAILURE',
    REGISTRY_SUCCESS: registry + '_SUCCESS',

    FORGOT_PASSWORD_REQUEST: forgotPassword + '_REQUEST',
    FORGOT_PASSWORD_FAILURE: forgotPassword + '_FAILURE',
    FORGOT_PASSWORD_SUCCESS: forgotPassword + '_SUCCESS',

    CHANGE_PASSWORD_REQUEST: changePassword + '_REQUEST',
    CHANGE_PASSWORD_FAILURE: changePassword + '_FAILURE',
    CHANGE_PASSWORD_SUCCESS: changePassword + '_SUCCESS',

    PROFILE_REQUEST: profile + '_REQUEST',
    PROFILE_FAILURE: profile + '_FAILURE',
    PROFILE_SUCCESS: profile + '_SUCCESS',

    UPDATE_PROFILE_REQUEST: updateProfile + '_REQUEST',
    UPDATE_PROFILE_FAILURE: updateProfile + '_FAILURE',
    UPDATE_PROFILE_SUCCESS: updateProfile + '_SUCCESS',

    UPDATE_CUSTOMER_REQUEST: updateCustomer + '_REQUEST',
    UPDATE_CUSTOMER_FAILURE: updateCustomer + '_FAILURE',
    UPDATE_CUSTOMER_SUCCESS: updateCustomer + '_SUCCESS',

    loadLogin: (params) => ({
        type: actions.LOGIN_REQUEST,
        params: params
    }),

    loadRegistry: (params) => ({
        type: actions.REGISTRY_REQUEST,
        params: params
    }),

    loadForgotPassword: (params) => ({
        type: actions.FORGOT_PASSWORD_REQUEST,
        params: params
    }),

    loadChangePassword: (params) => ({
        type: actions.CHANGE_PASSWORD_REQUEST,
        params: params
    }),

    loadProfile: (params) => ({
        type: actions.PROFILE_REQUEST,
        params: params
    }),

    loadUpdateProfile: (params) => ({
        type: actions.UPDATE_PROFILE_REQUEST,
        params: params
    }),

    loadUpdateCustomer: (params) => ({
        type: actions.UPDATE_CUSTOMER_REQUEST,
        params: params
    }),

};
export default actions;