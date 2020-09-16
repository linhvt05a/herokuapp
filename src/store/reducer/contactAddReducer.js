import { contactAddAction } from '../action';

const initialState = {
    contactAdd: [],
    advisoryAdd: [],
    isFetching: false,
    showChat: false,
    messageLitter: null,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case contactAddAction.CONTACT_ADD_REQUEST:
            return {
                ...state,
                contactAdd: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        case contactAddAction.CHAT_BOX_SHOW:
            return { ...state, showChat: action.params }
        case contactAddAction.ADVISORY_SUCCESS:
            return { ...state, isFetching: false, advisoryAdd: action.response };
        case contactAddAction.ADVISORY_REQUEST:
            return { ...state, isFetching: false, advisoryAdd: { success: false, error: action.error } };
        case contactAddAction.NEWSLETTER_REGISTRATION_REQUEST:
            return { ...state, isFetching: true, error: false, messageLitter: null }
        case contactAddAction.NEWSLETTER_REGISTRATION_SUCCESS:
            return { ...state, isFetching: false, error: false, messageLitter: "Đăng ký nhận bản tin thành công" }
        case contactAddAction.NEWSLETTER_REGISTRATION_FAILURE:
            return { ...state, isFetching: false, error: true, messageLitter: "Vui lòng thử lại sau" }
        default:
            return state;
    }
}
