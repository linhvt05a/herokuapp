import { productSignupAction } from '../action';

const initialState = {
    productSignup: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case productSignupAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                productSignup: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}