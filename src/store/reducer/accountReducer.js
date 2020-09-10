import { accountAction } from '../action/index';

const initialState = {
    login: {},
    registry: [],
    forgotPassword: [],
    changePassword: [],
    profile: [],
    updateProfile: [],
    updateCustomer: [],
    uploadImage: {},
    emailCheck: {},

    isFetching: false
};

export default (state = initialState, action) => {
    switch (action.type) {

        case accountAction.LOGIN_SUCCESS:
            return { ...state, isFetching: false, login: action.response };
        case accountAction.LOGIN_REQUEST:
            return { ...state, isFetching: false, login: { success: false, error: action.error } };

        case accountAction.REGISTRY_SUCCESS:
            return { ...state, isFetching: false, registry: action.response };
        case accountAction.REGISTRY_REQUEST:
            return { ...state, isFetching: false, registry: { success: false, error: action.error } };

        case accountAction.FORGOT_PASSWORD_SUCCESS:
            return { ...state, isFetching: false, forgotPassword: action.response };
        case accountAction.FORGOT_PASSWORD_REQUEST:
            return { ...state, isFetching: false, forgotPassword: { success: false, error: action.error } };

        case accountAction.CHANGE_PASSWORD_SUCCESS:
            return { ...state, isFetching: false, changePassword: action.response };
        case accountAction.CHANGE_PASSWORD_REQUEST:
            return { ...state, isFetching: false, changePassword: { success: false, error: action.error } };

        case accountAction.PROFILE_SUCCESS:
            return { ...state, isFetching: false, profile: action.response };
        case accountAction.PROFILE_REQUEST:
            return { ...state, isFetching: false, profile: { success: false, error: action.error } };

        case accountAction.UPDATE_PROFILE_SUCCESS:
            return { ...state, isFetching: false, updateProfile: action.response };
        case accountAction.UPDATE_PROFILE_REQUEST:
            return { ...state, isFetching: false, updateProfile: { success: false, error: action.error } };

        case accountAction.UPDATE_CUSTOMER_SUCCESS:
            return { ...state, isFetching: false, updateCustomer: action.response };
        case accountAction.UPDATE_CUSTOMER_REQUEST:
            return { ...state, isFetching: false, updateCustomer: { success: false, error: action.error } };

        case accountAction.IMAGE_SUCCESS:
            return { ...state, isFetching: false, uploadImage: action.response };
        case accountAction.IMAGE_REQUEST:
            return { ...state, isFetching: false, uploadImage: { success: false, error: action.error } };

        case accountAction.EMAIL_CHECK_SUCCESS:
            return { ...state, isFetching: false, emailCheck: action.response };
        case accountAction.EMAIL_CHECK_REQUEST:
            return { ...state, isFetching: false, emailCheck: { success: false, error: action.error } };

        default:
            return state;
    }
}