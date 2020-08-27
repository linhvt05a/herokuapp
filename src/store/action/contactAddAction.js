const contactAdd = 'CONTACT_ADD_';
const actions = {

    LOAD_LIST: contactAdd + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: contactAdd + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: contactAdd + 'LIST_SUCCESS',

    contactAdd: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;