import {newsDetailAction } from '../action';

const initialState = {
    newsDetail: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case newsDetailAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                newsDetail: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}