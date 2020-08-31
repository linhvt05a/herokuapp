import { juridicalSupportAction } from '../action';

const initialState = {
    juridicalSupport: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case juridicalSupportAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                juridicalSupport: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}