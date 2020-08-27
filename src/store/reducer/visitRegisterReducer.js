import { visitSignupAction } from '../action/index';

const initialState = {
    register :{},
    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case visitSignupAction.MODAL_VISIT_REGISTER_SUCCESS:
            return {
                ...state,
                register: action.response,
                isFetching: true,
            };
        default:
            return state;
    }
}