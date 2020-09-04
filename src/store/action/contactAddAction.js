const actions = {

    CONTACT_ADD_REQUEST: 'CONTACT_ADD_REQUEST',
    CONTACT_ADD_FAILURE: 'CONTACT_ADD_FAILURE',
    CONTACT_ADD_SUCCESS: 'CONTACT_ADD_SUCCESS',

    ADVISORY_REQUEST: 'ADVISORY_ADD_REQUEST',
    ADVISORY_FAILURE: 'ADVISORY_ADD_FAILURE',
    ADVISORY_SUCCESS: 'ADVISORY_ADD_SUCCESS',

    contactAdd: (params) => ({
        type: actions.CONTACT_ADD_REQUEST,
        params: params
    }),

    loadAdvisory: (params) => ({
        type: actions.ADVISORY_REQUEST,
        params: params
    }),
};
export default actions;