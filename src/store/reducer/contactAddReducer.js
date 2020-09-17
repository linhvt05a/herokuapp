import { contactAddAction } from '../action';

const initialState = {
    contactAdd: [],
    advisoryAdd: [],
    isFetching: false,
    showChat: false,
    messageLitter: null,
    error: false,
    //loan
    loanPolicyData: null,
    errorLoan: false,
    isLoadingLoan: false,
    //policy
    policyData: null,
    errorPolicy: false,
    isLoadingPolicy: false,
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
        case contactAddAction.LOAN_POLICY_REQUEST:
            return { ...state, isLoadingLoan: true, errorLoan: false, loanPolicyData: null }
        case contactAddAction.LOAN_POLICY_SUCCESS:
            return { ...state, isLoadingLoan: false, errorLoan: false, loanPolicyData: action.response.detail }
        case contactAddAction.LOAN_POLICY_FAILURE:
            return { ...state, isLoadingLoan: false, errorLoan: true, loanPolicyData: { success: false, error: action.error } }
        case contactAddAction.POLICY_REQUEST:
            return { ...state, isLoadingPolicy: true, errorPolicy: false, policyData: null }
        case contactAddAction.POLICY_SUCCESS:
            return { ...state, isLoadingPolicy: false, errorPolicy: false, policyData: action.response.detail }
        case contactAddAction.POLICY_FAILURE:
            return { ...state, isLoadingPolicy: false, errorPolicy: true, policyData: { success: false, error: action.error } }
        case contactAddAction.CLEAR_DATA_LOAN:
            return { ...state, policyData: null, loanPolicyData: null }
        default:
            return state;
    }
}
