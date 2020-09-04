const projectSelect = 'PROJECT_SELECT_';
const actions = {

    LOAD_LIST: projectSelect + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: projectSelect + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: projectSelect + 'LIST_SUCCESS',

    projectSelect: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),

};
export default actions;