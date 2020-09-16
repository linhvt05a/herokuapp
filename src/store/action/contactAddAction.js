const actions = {

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
    })
};
export default actions;