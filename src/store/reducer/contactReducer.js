import { contactAddAction } from '../action';

const initialState = {
    contactAdd: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case contactAddAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                contactAdd: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}