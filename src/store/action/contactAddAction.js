const actions = {
    CLEAR_DATA_LOAN: "CLEAR_DATA_LOAN",

    CONTACT_ADD_REQUEST: 'CONTACT_ADD_REQUEST',
    CONTACT_ADD_FAILURE: 'CONTACT_ADD_FAILURE',
    CONTACT_ADD_SUCCESS: 'CONTACT_ADD_SUCCESS',

    ADVISORY_REQUEST: 'ADVISORY_ADD_REQUEST',
    ADVISORY_FAILURE: 'ADVISORY_ADD_FAILURE',
    ADVISORY_SUCCESS: 'ADVISORY_ADD_SUCCESS',

    CHAT_BOX_SHOW: "CHAT_BOX_SHOW",

    NEWSLETTER_REGISTRATION_REQUEST: "NEWSLETTER_REGISTRATION_REQUEST",
    NEWSLETTER_REGISTRATION_SUCCESS: "NEWSLETTER_REGISTRATION_SUCCESS",
    NEWSLETTER_REGISTRATION_FAILURE: "NEWSLETTER_REGISTRATION_FAILURE",

    LOAN_POLICY_REQUEST: "LOAN_POLICY_REQUEST",
    LOAN_POLICY_SUCCESS: "LOAN_POLICY_SUCCESS",
    LOAN_POLICY_FAILURE: "LOAN_POLICY_FAILURE",

    POLICY_REQUEST: "POLICY_REQUEST",
    POLICY_SUCCESS: "POLICY_SUCCESS",
    POLICY_FAILURE: "POLICY_FAILURE",


    contactAdd: (params) => ({
        type: actions.CONTACT_ADD_REQUEST,
        params: params
    }),

    loadAdvisory: (params) => ({
        type: actions.ADVISORY_REQUEST,
        params: params
    }),
    chatShow: (params) => ({
        type: actions.CHAT_BOX_SHOW,
        params
    }),
    registrationNewsletter: (params) => ({
        type: actions.NEWSLETTER_REGISTRATION_REQUEST,
        params
    }),
    getLoanPolicy: (params) => ({
        type: actions.LOAN_POLICY_REQUEST,
        params
    }),
    getPolicy: (params) => ({
        type: actions.POLICY_REQUEST,
        params
    }),
    clearDataLoan: () => ({
        type: actions.CLEAR_DATA_LOAN
    })
};
export default actions;