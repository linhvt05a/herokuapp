import { newsFilterAction } from '../action';

const initialState = {
    filterNews: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case newsFilterAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                filterNews: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}