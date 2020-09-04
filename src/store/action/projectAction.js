const projectList = 'PROJECT_LIST';
const actions = {

    PROJECT_LIST_REQUEST: projectList + '_REQUEST',
    PROJECT_LIST_FAILURE: projectList + '_FAILURE',
    PROJECT_LIST_SUCCESS: projectList + '_SUCCESS',

    loadProjectList: (params) => ({
        type: actions.PROJECT_LIST_REQUEST,
        params: params
    }),

};
export default actions;