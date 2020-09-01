import { hotNewsAction } from '../action';

const initialState = {
    hotNewsList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case hotNewsAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                hotNewsList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}