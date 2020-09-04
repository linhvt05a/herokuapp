import { projectAction } from '../action/index';

const initialState = {
    projectList: {},
    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case projectAction.PROJECT_LIST_SUCCESS:
            return {
                ...state,
                projectList: action.response,
                isFetching: true,
            };
        default:
            return state;
    }
}