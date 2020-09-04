import { visitorAction } from '../action';

const initialState = {
    visitorAdd: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case visitorAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                visitorAdd: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}