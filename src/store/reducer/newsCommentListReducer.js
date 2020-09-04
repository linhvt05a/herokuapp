import { newsCommentListAction } from '../action';

const initialState = {
    commentList: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case newsCommentListAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                commentList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}