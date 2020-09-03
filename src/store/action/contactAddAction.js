
const actions = {

    CONTACT_ADD_REQUEST: 'CONTACT_ADD_REQUEST',
    CONTACT_ADD_FAILURE: 'CONTACT_ADD_FAILURE',
    CONTACT_ADD_SUCCESS: 'CONTACT_ADD_SUCCESS',

    contactAdd: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;