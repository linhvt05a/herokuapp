const contactAdd = 'CONTACT_ADD_';
const advisoryAdd = 'ADVISORY_ADD';
const actions = {

    LOAD_LIST: contactAdd + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: contactAdd + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: contactAdd + 'LIST_SUCCESS',

    ADVISORY_REQUEST: advisoryAdd + '_REQUEST',
    ADVISORY_FAILURE: advisoryAdd + '_FAILURE',
    ADVISORY_SUCCESS: advisoryAdd + '_SUCCESS',

    contactAdd: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

    loadAdvisory: (params) => ({
        type: actions.ADVISORY_REQUEST,
        params: params
    }),

};
export default actions;