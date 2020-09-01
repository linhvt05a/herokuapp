import { commentNewsAction } from '../action';

const initialState = {
    commentAdd: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case commentNewsAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                commentAdd: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}